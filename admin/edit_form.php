<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once '../includes/db.php';
require_once '../includes/auth.php';
require_once '../includes/form_helpers.php';
requireAdmin();

$conn = getConnection();
$id = (int)($_GET['id'] ?? $_POST['id'] ?? 0);
if ($id <= 0) {
    die('Invalid form id.');
}

$stmt = $conn->prepare("SELECT * FROM form_configurations WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$form = $stmt->get_result()->fetch_assoc();
$stmt->close();
if (!$form) {
    die('Form not found.');
}

$error = '';
$success = '';
$cat = fieldCatalogue();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newName     = trim($_POST['form_name'] ?? $form['form_name']);
    $selected    = $_POST['fields'] ?? [];
    $custom      = $_POST['custom'] ?? [];
    $labels      = $_POST['label']  ?? [];
    $scanOn      = $_POST['scan']   ?? [];
    $tableName   = $form['table_name'];
    $oldMeta     = json_decode($form['fields_config'] ?? '{}', true) ?: [];

    if (!preg_match('/^[a-zA-Z0-9_]{3,50}$/', $newName)) {
        $error = 'Form name must be 3–50 chars, letters/numbers/underscores only.';
    } else {
        $dup = $conn->prepare("SELECT id FROM form_configurations WHERE form_name = ? AND id <> ?");
        $dup->bind_param("si", $newName, $id);
        $dup->execute();
        if ($dup->get_result()->fetch_assoc()) {
            $error = 'Another form already uses that name.';
        }
        $dup->close();
    }

    if (!$error) {
        // Merge old meta for custom fields that keep the same key but new label/type
        foreach ($custom as $k => &$c) {
            if (isset($oldMeta[$k])) {
                if (empty($c['label'])) $c['label'] = $oldMeta[$k]['label'] ?? $k;
                if (empty($c['type']))  $c['type']  = $oldMeta[$k]['type']  ?? 'text';
                if (!isset($c['required'])) $c['required'] = $oldMeta[$k]['required'] ?? false;
            }
        }
        unset($c);

        $newMeta = buildFieldMeta($selected, $custom, $labels, $scanOn);
        $diff    = diffSchema($oldMeta, $newMeta);

        $conn->begin_transaction();
        try {
            foreach ($diff['drop'] as $col) {
                $conn->query("ALTER TABLE `$tableName` DROP COLUMN `$col`");
            }
            foreach ($diff['add'] as $c) {
                $conn->query("ALTER TABLE `$tableName` ADD COLUMN `{$c['name']}` {$c['sql']}");
            }
            foreach ($diff['modify'] as $c) {
                $conn->query("ALTER TABLE `$tableName` MODIFY COLUMN `{$c['name']}` {$c['sql']}");
            }

            $json = json_encode($newMeta);
            $upd = $conn->prepare("UPDATE form_configurations
                SET form_name = ?, fields_config = ?, updated_at = NOW() WHERE id = ?");
            $upd->bind_param("ssi", $newName, $json, $id);
            $upd->execute();
            $upd->close();
            $conn->commit();
            $success = 'Form updated.';

            $stmt = $conn->prepare("SELECT * FROM form_configurations WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $form = $stmt->get_result()->fetch_assoc();
            $stmt->close();
        } catch (Throwable $e) {
            $conn->rollback();
            $error = 'Update failed: ' . $e->getMessage();
        }
    }
}

$config = json_decode($form['fields_config'] ?? '{}', true) ?: [];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">

    <link rel="icon" type="image/x-icon" href="/assets/images/ethiopian_logo.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Edit Form — <?= htmlspecialchars($form['form_name']) ?></title>
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

        .card {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 1rem;
            padding: 2rem;
            max-width: 820px;
            margin: 0 auto;
        }

        h1 {
            font-size: 1.25rem;
            margin-bottom: 0.25rem;
            color: #f1f5f9;
        }

        .sub {
            font-size: 0.8rem;
            color: #94a3b8;
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            font-size: 0.85rem;
            font-weight: 500;
            margin-bottom: 0.4rem;
            color: #cbd5e1;
        }

        input[type="text"],
        select {
            width: 100%;
            padding: 0.6rem 0.85rem;
            font-size: 0.9rem;
            background: #0f172a;
            color: #e2e8f0;
            border: 1px solid #334155;
            border-radius: 0.5rem;
        }

        input:focus,
        select:focus {
            outline: none;
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
        }

        .msg {
            padding: 0.7rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.85rem;
            margin-bottom: 1.25rem;
        }

        .msg-error {
            background: #7f1d1d;
            color: #fecaca;
            border-left: 4px solid #dc2626;
        }

        .msg-success {
            background: #065f46;
            color: #a7f3d0;
            border-left: 4px solid #10b981;
        }

        .btn {
            display: inline-block;
            padding: 0.7rem 1.2rem;
            font-size: 0.9rem;
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
            width: 100%;
        }

        .btn-secondary {
            background: #334155;
            color: #e2e8f0;
            margin-top: 0.75rem;
            display: block;
            width: 100%;
        }

        .btn-mini {
            background: #475569;
            color: #fff;
            padding: 0.35rem 0.7rem;
            font-size: 0.75rem;
            border-radius: 0.4rem;
            cursor: pointer;
            border: none;
        }

        .btn-mini:hover {
            background: #334155;
        }

        .btn-remove {
            background: #dc2626;
        }

        .btn-remove:hover {
            background: #b91c1c;
        }

        .field-list {
            margin: 1rem 0 1.5rem;
            border: 1px solid #334155;
            border-radius: 0.75rem;
            overflow: hidden;
        }

        .field-row {
            display: grid;
            grid-template-columns: 1.6rem 1.6fr 1.2fr auto;
            gap: 0.75rem;
            align-items: center;
            padding: 0.65rem 0.9rem;
            border-bottom: 1px solid #334155;
            background: #0f172a;
        }

        .field-row:last-child {
            border-bottom: none;
        }

        .field-row input[type="checkbox"] {
            width: 1rem;
            height: 1rem;
            accent-color: #10b981;
        }

        .field-row input[type="text"] {
            padding: 0.4rem 0.55rem;
            font-size: 0.82rem;
        }

        .tag {
            font-size: 0.65rem;
            color: #94a3b8;
            margin-left: 0.4rem;
        }

        .tag.mand {
            color: #fca5a5;
        }

        .field-row label.scan {
            font-size: 0.72rem;
            color: #94a3b8;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
        }

        .custom-block {
            border: 1px dashed #334155;
            border-radius: 0.75rem;
            padding: 0.9rem;
            margin-bottom: 0.75rem;
            background: #0f172a;
        }

        .custom-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr auto;
            gap: 0.5rem;
            align-items: end;
        }

        .custom-grid label {
            font-size: 0.72rem;
        }

        .custom-grid input,
        .custom-grid select {
            padding: 0.45rem 0.55rem;
            font-size: 0.82rem;
        }

        .checkbox-inline {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            font-size: 0.75rem;
            color: #cbd5e1;
        }

        .checkbox-inline input {
            accent-color: #10b981;
            width: 0.9rem;
            height: 0.9rem;
        }

        code {
            background: #0f172a;
            padding: 0.1rem 0.35rem;
            border-radius: 0.25rem;
            color: #6ee7b7;
            font-size: 0.8rem;
        }
    </style>
</head>

<body>
    <div class="card">
        <h1>✏️ Edit Form — <?= htmlspecialchars($form['form_name']) ?></h1>
        <p class="sub">Table: <code><?= htmlspecialchars($form['table_name']) ?></code> — table name is permanent.</p>

        <?php if ($error): ?><div class="msg msg-error">⚠️ <?= htmlspecialchars($error) ?></div><?php endif; ?>
        <?php if ($success): ?><div class="msg msg-success">✅ <?= htmlspecialchars($success) ?></div><?php endif; ?>

        <form method="POST">
            <input type="hidden" name="id" value="<?= $id ?>">

            <label>Form Name</label>
            <input type="text" name="form_name" required maxlength="50"
                pattern="[a-zA-Z0-9_]{3,50}" value="<?= htmlspecialchars($form['form_name']) ?>">

            <label style="margin-top:1.25rem;">Fields (uncheck to REMOVE — drops the column)</label>
            <div class="field-list">
                <?php foreach ($config as $key => $meta):
                    $isMandatory = $key === 'employee_id';
                    $isCustom    = str_starts_with($key, 'custom_');
                ?>
                    <div class="field-row">
                        <input type="checkbox" name="fields[]" value="<?= htmlspecialchars($key) ?>"
                            <?= $isMandatory ? 'checked disabled' : 'checked' ?>>
                        <?php if ($isMandatory): ?>
                            <input type="hidden" name="fields[]" value="employee_id">
                        <?php endif; ?>

                        <div>
                            <input type="text" name="label[<?= htmlspecialchars($key) ?>]"
                                value="<?= htmlspecialchars($meta['label'] ?? $key) ?>">
                            <div style="font-size:0.7rem;color:#64748b;margin-top:0.2rem;">
                                column: <code><?= htmlspecialchars($key) ?></code>
                                <?php if (!empty($meta['auto_from'])): ?>
                                    <span class="tag">auto from employees.<?= htmlspecialchars($meta['auto_from']) ?></span>
                                <?php endif; ?>
                                <?php if (!empty($meta['required'])): ?>
                                    <span class="tag mand">required</span>
                                <?php endif; ?>
                            </div>
                        </div>

                        <div>
                            <?php if ($isCustom): ?>
                                <select name="custom[<?= htmlspecialchars($key) ?>][type]">
                                    <?php foreach (['text', 'number', 'date', 'email', 'tel'] as $t): ?>
                                        <option value="<?= $t ?>" <?= ($meta['type'] ?? 'text') === $t ? 'selected' : '' ?>><?= $t ?></option>
                                    <?php endforeach; ?>
                                </select>
                                <input type="hidden" name="custom[<?= htmlspecialchars($key) ?>][label]"
                                    value="<?= htmlspecialchars($meta['label'] ?? $key) ?>">
                                <input type="hidden" name="custom[<?= htmlspecialchars($key) ?>][required]"
                                    value="<?= !empty($meta['required']) ? '1' : '' ?>">
                            <?php else: ?>
                                <span class="tag"><?= htmlspecialchars($meta['type'] ?? 'text') ?></span>
                            <?php endif; ?>
                        </div>

                        <div>
                            <?php if (!empty($cat[$key]['can_scan'])): ?>
                                <label class="scan">
                                    <input type="checkbox" name="scan[<?= htmlspecialchars($key) ?>]" value="1"
                                        <?= !empty($meta['scan_enabled']) ? 'checked' : '' ?>> scan
                                </label>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <label>Add New Custom Field</label>
            <div id="customContainer"></div>
            <button type="button" class="btn-mini" onclick="addCustom()" style="margin-bottom:1rem;">+ Add Custom Field</button>

            <button type="submit" class="btn btn-primary">Save Changes</button>
            <a href="adminpage.php" class="btn btn-secondary">← Back to Admin Page</a>
        </form>
    </div>

    <script>
        let customCounter = 0;

        function addCustom() {
            customCounter++;
            const key = 'custom_' + Date.now() + '_' + customCounter;
            const div = document.createElement('div');
            div.className = 'custom-block';
            div.innerHTML = `
        <div class="custom-grid">
            <div><label>Label</label>
                <input type="text" name="custom[${key}][label]" placeholder="e.g. Emergency Contact" required></div>
            <div><label>Type</label>
                <select name="custom[${key}][type]">
                    <option value="text">text</option><option value="number">number</option>
                    <option value="date">date</option><option value="email">email</option>
                    <option value="tel">tel</option>
                </select></div>
            <div><label class="checkbox-inline">
                <input type="checkbox" name="custom[${key}][required]" value="1"> Required</label></div>
            <div><button type="button" class="btn-mini btn-remove"
                onclick="this.closest('.custom-block').remove()">✕</button></div>
        </div>
        <input type="hidden" name="fields[]" value="${key}">
    `;
            document.getElementById('customContainer').appendChild(div);
        }
    </script>
</body>

</html>