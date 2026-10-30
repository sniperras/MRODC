<?php
require_once '../includes/db.php';
require_once '../includes/auth.php';
requireAdmin();

$conn = getConnection();
$id = (int)($_POST['id'] ?? $_GET['id'] ?? 0);
if ($id <= 0) {
    die('Invalid form id.');
}

$stmt = $conn->prepare("SELECT form_name, table_name, is_active FROM form_configurations WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$form = $stmt->get_result()->fetch_assoc();
$stmt->close();
if (!$form) {
    die('Form not found.');
}

if ((int)$form['is_active'] === 1) {
    header('Location: manage_forms.php?err=' . urlencode('Deactivate the form before deleting it.'));
    exit;
}

// Confirm via POST only (never GET) to avoid accidental deletion by link-preview bots.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $tableName = htmlspecialchars($form['table_name']);
    $formName  = htmlspecialchars($form['form_name']);
?>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <title>Delete Form</title>
        <style>
            body {
                font-family: system-ui;
                background: #0f172a;
                color: #e2e8f0;
                padding: 2rem;
            }

            .card {
                max-width: 520px;
                margin: 4rem auto;
                background: #1e293b;
                border: 1px solid #334155;
                border-radius: 1rem;
                padding: 2rem;
            }

            h1 {
                font-size: 1.1rem;
                color: #fca5a5;
                margin-bottom: 1rem;
            }

            p {
                font-size: 0.85rem;
                color: #cbd5e1;
                line-height: 1.5;
                margin-bottom: 1rem;
            }

            code {
                background: #0f172a;
                padding: 0.1rem 0.35rem;
                border-radius: 0.25rem;
                color: #6ee7b7;
            }

            .btn {
                display: block;
                width: 100%;
                padding: 0.75rem;
                font-size: 0.9rem;
                font-weight: 600;
                border: none;
                border-radius: 0.5rem;
                cursor: pointer;
                margin-top: 0.5rem;
            }

            .danger {
                background: #dc2626;
                color: #fff;
            }

            .danger:hover {
                background: #b91c1c;
            }

            .cancel {
                background: #334155;
                color: #e2e8f0;
                text-decoration: none;
                text-align: center;
            }
        </style>
    </head>

    <body>
        <div class="card">
            <h1>⚠️ Delete form permanently?</h1>
            <p>You are about to drop the table <code><?= $tableName ?></code> and remove
                the configuration for <strong><?= $formName ?></strong>.</p>
            <p><strong>All submitted employee data in this form will be lost.</strong> This cannot be undone.</p>
            <form method="POST">
                <input type="hidden" name="id" value="<?= $id ?>">
                <button type="submit" class="btn danger">Yes, delete permanently</button>
            </form>
            <a href="manage_forms.php" class="btn cancel">Cancel</a>
        </div>
    </body>

    </html>
<?php
    exit;
}

$tableName = $form['table_name'];
$conn->query("DROP TABLE IF EXISTS `$tableName`");
$del = $conn->prepare("DELETE FROM form_configurations WHERE id = ?");
$del->bind_param("i", $id);
$del->execute();
$del->close();
$conn->close();

header('Location: manage_forms.php?msg=' . urlencode('Form deleted.'));
exit;
