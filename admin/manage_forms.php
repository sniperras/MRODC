<?php
require_once '../includes/db.php';
require_once '../includes/auth.php';
requireAdmin();

$conn = getConnection();
$res  = $conn->query("SELECT id, form_name, table_name, is_active, is_archived,
                             fields_config, created_at, updated_at
                      FROM form_configurations
                      ORDER BY is_archived ASC, is_active DESC, created_at DESC");
$forms = [];
while ($row = $res->fetch_assoc()) {
    $forms[] = $row;
}
$conn->close();

$msg = $_GET['msg'] ?? '';
$err = $_GET['err'] ?? '';
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
            padding: 2rem;
        }

        .wrap {
            max-width: 1100px;
            margin: 0 auto;
        }

        .head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        h1 {
            font-size: 1.35rem;
            color: #f1f5f9;
        }

        .sub {
            font-size: 0.8rem;
            color: #94a3b8;
            margin-top: 0.25rem;
        }

        .btn {
            display: inline-block;
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
            font-weight: 600;
            border-radius: 0.5rem;
            border: none;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }

        .btn-primary {
            background: linear-gradient(135deg, #10b981, #059669);
            color: #fff;
        }

        .btn-secondary {
            background: #334155;
            color: #e2e8f0;
        }

        .btn-warn {
            background: #b45309;
            color: #fff;
        }

        .btn-danger {
            background: #dc2626;
            color: #fff;
        }

        .btn-sm {
            padding: 0.35rem 0.6rem;
            font-size: 0.72rem;
            border-radius: 0.4rem;
        }

        .msg {
            padding: 0.7rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.85rem;
            margin-bottom: 1rem;
        }

        .msg-success {
            background: #065f46;
            color: #a7f3d0;
            border-left: 4px solid #10b981;
        }

        .msg-error {
            background: #7f1d1d;
            color: #fecaca;
            border-left: 4px solid #dc2626;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: #1e293b;
            border-radius: 0.75rem;
            overflow: hidden;
        }

        th,
        td {
            padding: 0.7rem 0.9rem;
            text-align: left;
            font-size: 0.83rem;
            border-bottom: 1px solid #334155;
        }

        th {
            background: #0f172a;
            color: #94a3b8;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.7rem;
            letter-spacing: 0.05em;
        }

        tr:last-child td {
            border-bottom: none;
        }

        code {
            background: #0f172a;
            padding: 0.1rem 0.35rem;
            border-radius: 0.25rem;
            color: #6ee7b7;
            font-size: 0.78rem;
        }

        .pill {
            display: inline-block;
            padding: 0.15rem 0.5rem;
            border-radius: 9999px;
            font-size: 0.68rem;
            font-weight: 600;
        }

        .pill-active {
            background: #064e3b;
            color: #6ee7b7;
        }

        .pill-inactive {
            background: #334155;
            color: #cbd5e1;
        }

        .pill-archived {
            background: #78350f;
            color: #fcd34d;
        }

        .actions {
            display: flex;
            gap: 0.35rem;
            flex-wrap: wrap;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <div class="head">
            <div>
                <h1>🗂️ Manage Forms</h1>
                <p class="sub">Activate a form to make it live on the employee portal. Only one form should be active at a time.</p>
            </div>
            <a href="create_form.php" class="btn btn-primary">+ New Form</a>
        </div>

        <?php if ($msg): ?><div class="msg msg-success">✅ <?= htmlspecialchars($msg) ?></div><?php endif; ?>
        <?php if ($err): ?><div class="msg msg-error">⚠️ <?= htmlspecialchars($err) ?></div><?php endif; ?>

        <table>
            <thead>
                <tr>
                    <th>Form Name</th>
                    <th>Table</th>
                    <th>Fields</th>
                    <th>Status</th>
                    <th>Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php if (!$forms): ?>
                    <tr>
                        <td colspan="6" style="text-align:center;color:#64748b;padding:2rem;">
                            No forms yet. Click “+ New Form”.
                        </td>
                    </tr>
                <?php endif; ?>
                <?php foreach ($forms as $f):
                    $fieldCount = count(json_decode($f['fields_config'] ?? '[]', true) ?: []);
                    if ((int)$f['is_archived'] === 1) {
                        $pill = '<span class="pill pill-archived">Archived</span>';
                    } elseif ((int)$f['is_active'] === 1) {
                        $pill = '<span class="pill pill-active">Active</span>';
                    } else {
                        $pill = '<span class="pill pill-inactive">Inactive</span>';
                    }
                ?>
                    <tr>
                        <td><strong><?= htmlspecialchars($f['form_name']) ?></strong></td>
                        <td><code><?= htmlspecialchars($f['table_name']) ?></code></td>
                        <td><?= $fieldCount ?></td>
                        <td><?= $pill ?></td>
                        <td><?= htmlspecialchars($f['updated_at'] ?: $f['created_at']) ?></td>
                        <td>
                            <div class="actions">
                                <?php if ((int)$f['is_archived'] === 1): ?>
                                    <a href="unarchive_form.php?id=<?= (int)$f['id'] ?>" class="btn btn-sm btn-warn">Unarchive</a>
                                <?php else: ?>
                                    <?php if ((int)$f['is_active'] === 1): ?>
                                        <a href="toggle_form.php?id=<?= (int)$f['id'] ?>&amp;active=0" class="btn btn-sm btn-secondary">Deactivate</a>
                                    <?php else: ?>
                                        <a href="toggle_form.php?id=<?= (int)$f['id'] ?>&amp;active=1" class="btn btn-sm btn-primary">Activate</a>
                                    <?php endif; ?>
                                    <a href="edit_form.php?id=<?= (int)$f['id'] ?>" class="btn btn-sm btn-secondary">Edit</a>
                                    <a href="toggle_form.php?id=<?= (int)$f['id'] ?>&amp;archive=1" class="btn btn-sm btn-warn">Archive</a>
                                    <?php if ((int)$f['is_active'] === 0): ?>
                                        <a href="delete_form.php?id=<?= (int)$f['id'] ?>" class="btn btn-sm btn-danger">Delete</a>
                                    <?php endif; ?>
                                <?php endif; ?>
                            </div>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>

</html>