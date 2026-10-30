<?php
require_once '../includes/db.php';
require_once '../includes/auth.php';
requireAdmin();

$conn = getConnection();

// Handle actions (same logic as dashboard, kept here for a dedicated page)
if (isset($_POST['action'], $_POST['form_id'])) {
    $fid = (int)$_POST['form_id'];
    $action = $_POST['action'];
    if ($action === 'activate') {
        $conn->query("UPDATE form_configurations SET is_active = 0 WHERE archived_at IS NULL");
        $stmt = $conn->prepare("UPDATE form_configurations SET is_active = 1, archived_at = NULL WHERE id = ?");
    } elseif ($action === 'deactivate') {
        $stmt = $conn->prepare("UPDATE form_configurations SET is_active = 0 WHERE id = ?");
    } elseif ($action === 'archive') {
        $stmt = $conn->prepare("UPDATE form_configurations SET is_active = 0, archived_at = NOW() WHERE id = ?");
    }
    if (isset($stmt)) {
        $stmt->bind_param("i", $fid);
        $stmt->execute();
        $stmt->close();
    }
    header('Location: manage_forms.php');
    exit;
}

$forms = $conn->query("SELECT * FROM form_configurations ORDER BY created_at DESC")->fetch_all(MYSQLI_ASSOC);
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Manage Forms</title>
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

        .container {
            max-width: 1100px;
            margin: 2rem auto;
            padding: 0 1.5rem;
        }

        .panel {
            background: #1e293b;
            border-radius: 0.75rem;
            padding: 1.5rem;
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

        .btn {
            display: inline-block;
            padding: 0.4rem 0.8rem;
            background: #10b981;
            color: #fff;
            border: none;
            border-radius: 0.4rem;
            font-size: 0.8rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            margin: 0.1rem;
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

        form.inline {
            display: inline;
        }
    </style>
</head>

<body>
    <header>
        <h1>🗂️ Manage Forms</h1>
        <a class="btn btn-secondary" href="adminpage.php">← Dashboard</a>
    </header>
    <div class="container">
        <div class="panel">
            <h2>All Form Configurations</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
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
                            <td><?= (int)$f['id'] ?></td>
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
                            <td>
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
                            <td colspan="6" style="text-align:center;color:#64748b;">No forms found.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>