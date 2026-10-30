<?php
require_once '../includes/db.php';
require_once '../includes/auth.php';
requireAdmin();

$conn = getConnection();
$forms = $conn->query("SELECT * FROM form_configurations ORDER BY created_at DESC")->fetch_all(MYSQLI_ASSOC);
$activeForm = getActiveForm($conn);

// Stats for the active form
$totalEmployees = (int)$conn->query("SELECT COUNT(*) c FROM employees WHERE is_active=1")->fetch_assoc()['c'];
$filled = 0;
$unfilled = 0;
if ($activeForm) {
    $table = $activeForm['table_name'];
    $filled = (int)$conn->query("SELECT COUNT(DISTINCT employee_id) c FROM `$table`")->fetch_assoc()['c'];
    $unfilled = max(0, $totalEmployees - $filled);
}

// Handle exports
if (isset($_GET['export'])) {
    $type = $_GET['export'];
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="employees_' . $type . '_' . date('Ymd_His') . '.csv"');
    $out = fopen('php://output', 'w');

    // UTF-8 BOM so Excel reads Unicode names correctly
    fwrite($out, "\xEF\xBB\xBF");

    if ($type === 'filled' && $activeForm) {
        fputcsv($out, ['Employee ID', 'Full Name', 'Department', 'Position', 'FAN No', 'TIN No', "Mother's Name", 'Submitted At']);
        $q = $conn->query("SELECT e.employee_id, e.full_name, e.department, e.position,
                                  f.fan_no, f.tin_no, f.mothers_name, f.submitted_at
                           FROM `{$activeForm['table_name']}` f
                           JOIN employees e ON e.employee_id = f.employee_id
                           ORDER BY f.submitted_at DESC");
        while ($r = $q->fetch_assoc()) {
            // Prefix with TAB so Excel treats the long number as TEXT (no scientific notation)
            if (!empty($r['fan_no'])) $r['fan_no'] = "\t" . $r['fan_no'];
            if (!empty($r['tin_no'])) $r['tin_no'] = "\t" . $r['tin_no'];
            fputcsv($out, $r);
        }
    } elseif ($type === 'unfilled' && $activeForm) {
        fputcsv($out, ['Employee ID', 'Full Name', 'Department', 'Position', 'Email']);
        $q = $conn->query("SELECT employee_id, full_name, department, position, email
                           FROM employees
                           WHERE is_active=1
                             AND employee_id NOT IN (SELECT employee_id FROM `{$activeForm['table_name']}`)
                           ORDER BY full_name");
        while ($r = $q->fetch_assoc()) {
            fputcsv($out, $r);
        }
    }
    fclose($out);
    exit;
}

// Handle activate/archive/delete actions
if (isset($_POST['action'], $_POST['form_id'])) {
    $fid = (int)$_POST['form_id'];
    if ($_POST['action'] === 'activate') {
        $conn->query("UPDATE form_configurations SET is_active = 0 WHERE archived_at IS NULL");
        $stmt = $conn->prepare("UPDATE form_configurations SET is_active = 1, archived_at = NULL WHERE id = ?");
        $stmt->bind_param("i", $fid);
        $stmt->execute();
        $stmt->close();
    } elseif ($_POST['action'] === 'deactivate') {
        $stmt = $conn->prepare("UPDATE form_configurations SET is_active = 0 WHERE id = ?");
        $stmt->bind_param("i", $fid);
        $stmt->execute();
        $stmt->close();
    } elseif ($_POST['action'] === 'archive') {
        $stmt = $conn->prepare("UPDATE form_configurations SET is_active = 0, archived_at = NOW() WHERE id = ?");
        $stmt->bind_param("i", $fid);
        $stmt->execute();
        $stmt->close();
    }
    header('Location: adminpage.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">

    <link rel="icon" type="image/x-icon" href="/assets/images/ethiopian_logo.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            min-height: 100vh;
        }

        header {
            background: #111827;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #1f2937;
        }

        header h1 {
            font-size: 1.2rem;
        }

        .btn {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: #10b981;
            color: #fff;
            border: none;
            border-radius: 0.5rem;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            margin: 0.15rem;
        }

        .btn:hover {
            background: #059669;
        }

        .btn-danger {
            background: #dc2626;
        }

        .btn-danger:hover {
            background: #b91c1c;
        }

        .btn-secondary {
            background: #475569;
        }

        .btn-secondary:hover {
            background: #334155;
        }

        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1.5rem;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: #1e293b;
            border-radius: 0.75rem;
            padding: 1.25rem;
            border: 1px solid #334155;
        }

        .stat-card h3 {
            font-size: 0.8rem;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .stat-card .value {
            font-size: 2rem;
            font-weight: 700;
            color: #10b981;
            margin-top: 0.25rem;
        }

        .panel {
            background: #1e293b;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            border: 1px solid #334155;
        }

        .panel h2 {
            font-size: 1rem;
            margin-bottom: 1rem;
            color: #f1f5f9;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.85rem;
        }

        th,
        td {
            text-align: left;
            padding: 0.6rem 0.5rem;
            border-bottom: 1px solid #334155;
        }

        th {
            color: #94a3b8;
            font-weight: 600;
            font-size: 0.75rem;
            text-transform: uppercase;
        }

        .badge {
            display: inline-block;
            padding: 0.15rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.7rem;
            font-weight: 600;
        }

        .badge-active {
            background: #065f46;
            color: #6ee7b7;
        }

        .badge-archived {
            background: #7f1d1d;
            color: #fca5a5;
        }

        .badge-inactive {
            background: #475569;
            color: #cbd5e1;
        }

        .chart-wrap {
            max-width: 400px;
            margin: auto;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
        }

        form.inline {
            display: inline;
        }
    </style>
</head>

<body>
    <header>
        <h1>📋 Admin Dashboard — Employee Info Collection</h1>
        <div>
            <span style="margin-right:1rem;color:#94a3b8;"><?= htmlspecialchars($_SESSION['admin_username']) ?></span>
            <a class="btn btn-secondary" href="logout.php">Logout</a>
        </div>
    </header>

    <div class="container">

        <!-- Stats -->
        <div class="grid">
            <div class="stat-card">
                <h3>Total Employees</h3>
                <div class="value"><?= $totalEmployees ?></div>
            </div>
            <div class="stat-card">
                <h3>Filled</h3>
                <div class="value"><?= $filled ?></div>
            </div>
            <div class="stat-card">
                <h3>Not Filled</h3>
                <div class="value"><?= $unfilled ?></div>
            </div>
            <div class="stat-card">
                <h3>Completion</h3>
                <div class="value"><?= $totalEmployees ? round($filled / $totalEmployees * 100, 1) : 0 ?>%</div>
            </div>
        </div>

        <!-- Chart + Export -->
        <div class="panel">
            <h2>Completion Overview — <?= htmlspecialchars($activeForm['form_name'] ?? 'No Active Form') ?></h2>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;align-items:center;">
                <div class="chart-wrap"><canvas id="pieChart"></canvas></div>
                <div>
                    <p style="margin-bottom:0.75rem;color:#94a3b8;font-size:0.85rem;">
                        Export the data collected from the active form.
                    </p>
                    <?php if ($activeForm): ?>
                        <a class="btn" href="?export=filled">⬇ Export Filled (CSV)</a>
                        <a class="btn btn-secondary" href="?export=unfilled">⬇ Export Not-Filled (CSV)</a>
                    <?php else: ?>
                        <p style="color:#f87171;font-size:0.85rem;">No active form. Activate one below.</p>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <!-- Form management -->
        <div class="panel">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                <h2>Form Configurations</h2>
                <a class="btn" href="create_form.php">+ Create New Form</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Table</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($forms as $f): ?>
                        <tr>
                            <td><?= htmlspecialchars($f['form_name']) ?></td>
                            <td><code style="color:#94a3b8;"><?= htmlspecialchars($f['table_name']) ?></code></td>
                            <td>
                                <?php if ($f['archived_at']): ?>
                                    <span class="badge badge-archived">Archived</span>
                                <?php elseif ($f['is_active']): ?>
                                    <span class="badge badge-active">Active</span>
                                <?php else: ?>
                                    <span class="badge badge-inactive">Inactive</span>
                                <?php endif; ?>
                            </td>
                            <td><?= htmlspecialchars($f['created_at']) ?></td>
                            <td class="actions">
                                <?php if (!$f['is_active'] && !$f['archived_at']): ?>
                                    <form class="inline" method="POST">
                                        <input type="hidden" name="form_id" value="<?= $f['id'] ?>">
                                        <input type="hidden" name="action" value="activate">
                                        <button class="btn" type="submit">Activate</button>
                                    </form>
                                <?php endif; ?>
                                <?php if ($f['is_active']): ?>
                                    <form class="inline" method="POST">
                                        <input type="hidden" name="form_id" value="<?= $f['id'] ?>">
                                        <input type="hidden" name="action" value="deactivate">
                                        <button class="btn btn-secondary" type="submit">Deactivate</button>
                                    </form>
                                <?php endif; ?>
                                <?php if (!$f['archived_at']): ?>
                                    <form class="inline" method="POST" onsubmit="return confirm('Archive this form?');">
                                        <input type="hidden" name="form_id" value="<?= $f['id'] ?>">
                                        <input type="hidden" name="action" value="archive">
                                        <button class="btn btn-danger" type="submit">Archive</button>
                                    </form>
                                <?php endif; ?>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                    <?php if (empty($forms)): ?>
                        <tr>
                            <td colspan="5" style="text-align:center;color:#64748b;">No forms yet. Click “Create New Form”.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <script>
        const ctx = document.getElementById('pieChart');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Filled', 'Not Filled'],
                datasets: [{
                    data: [<?= $filled ?>, <?= $unfilled ?>],
                    backgroundColor: ['#10b981', '#334155'],
                    borderWidth: 0
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#e2e8f0'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: c => c.label + ': ' + c.parsed
                        }
                    }
                }
            }
        });
    </script>
</body>

</html>