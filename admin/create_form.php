<?php
require_once '../includes/db.php';
require_once '../includes/auth.php';
requireAdmin();

$error = '';
$success = '';

$fieldCatalogue = [
    'employee_id'  => ['label' => 'Employee ID',        'type' => 'text',   'sql_type' => 'VARCHAR(20)',  'required' => true,  'scan' => false, 'auto_from' => null],
    'full_name'    => ['label' => 'Full Name',           'type' => 'text',   'sql_type' => 'VARCHAR(150)', 'required' => true,  'scan' => false, 'auto_from' => 'full_name'],
    'fan_no'       => ['label' => 'FAYDA No (FAN No)',   'type' => 'text',   'sql_type' => 'VARCHAR(16)',  'required' => true,  'scan' => true,  'auto_from' => null],
    'tin_no'       => ['label' => 'TIN No',              'type' => 'text',   'sql_type' => 'VARCHAR(30)',  'required' => true, 'scan' => false, 'auto_from' => null],
    'mothers_name' => ['label' => "Mother's Name",       'type' => 'text',   'sql_type' => 'VARCHAR(150)', 'required' => true,  'scan' => false, 'auto_from' => null],
    'phone'        => ['label' => 'Phone',               'type' => 'tel',    'sql_type' => 'VARCHAR(20)',  'required' => true, 'scan' => false, 'auto_from' => null],
    'email'        => ['label' => 'Email',               'type' => 'email',  'sql_type' => 'VARCHAR(150)', 'required' => true, 'scan' => false, 'auto_from' => null],
    'address'      => ['label' => 'Address',             'type' => 'text',   'sql_type' => 'VARCHAR(255)', 'required' => true, 'scan' => false, 'auto_from' => null],
    'dob'          => ['label' => 'Date of Birth',       'type' => 'date',   'sql_type' => 'DATE',         'required' => true, 'scan' => false, 'auto_from' => null],
];

// Fields that are ALWAYS on every form and cannot be unchecked by the admin.
$lockedFields = ['employee_id', 'full_name'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formName = trim($_POST['form_name'] ?? '');
    $selected = $_POST['fields']      ?? [];
    $scanOn   = $_POST['scan']        ?? [];
    $custom   = $_POST['custom']      ?? [];
    $labels   = $_POST['label']       ?? [];

    if (!preg_match('/^[a-zA-Z0-9_]{3,50}$/', $formName)) {
        $error = 'Form name must be 3–50 chars, letters/numbers/underscores only.';
    } elseif (empty($selected)) {
        $error = 'Pick at least one field.';
    } else {
        // Force the locked fields into the selection
        foreach ($lockedFields as $lf) {
            if (!in_array($lf, $selected, true)) $selected[] = $lf;
        }

        $conn = getConnection();
        $tableName = 'form_' . strtolower($formName);

        $check = $conn->prepare("SELECT id FROM form_configurations WHERE form_name = ? OR table_name = ?");
        $check->bind_param("ss", $formName, $tableName);
        $check->execute();
        if ($check->get_result()->fetch_assoc()) {
            $error = 'A form with that name already exists.';
        } else {
            $cols = [
                "`id` INT AUTO_INCREMENT PRIMARY KEY",
                "`employee_id` VARCHAR(20) NOT NULL",
            ];
            $fieldMeta = [
                'employee_id' => [
                    'label' => $labels['employee_id'] ?? 'Employee ID',
                    'type'  => 'text',
                    'required' => true,
                    'scan_enabled' => !empty($scanOn['employee_id']),
                    'auto_from' => null,
                ],
            ];

            foreach ($selected as $key) {
                if ($key === 'employee_id') continue;

                // Custom field
                if (strpos($key, 'custom_') === 0 && isset($custom[$key])) {
                    $c    = $custom[$key];
                    $col  = preg_replace('/[^a-z0-9_]/', '', strtolower($key));
                    $lbl  = trim($c['label'] ?? $key);
                    $typ  = in_array($c['type'] ?? 'text', ['text', 'number', 'date', 'email', 'tel']) ? $c['type'] : 'text';
                    $req  = !empty($c['required']);

                    $sqlType = $typ === 'number' ? 'DECIMAL(12,2)'
                        : ($typ === 'date'  ? 'DATE'
                            : ($typ === 'email' ? 'VARCHAR(150)'
                                : 'VARCHAR(255)'));
                    $cols[] = "`$col` $sqlType " . ($req ? 'NOT NULL' : 'NULL');
                    $fieldMeta[$col] = [
                        'label' => $lbl,
                        'type' => $typ,
                        'required' => $req,
                        'scan_enabled' => false,
                        'auto_from' => null,
                    ];
                    continue;
                }

                // Built-in field — SELECTED ⇒ REQUIRED
                if (!isset($fieldCatalogue[$key])) continue;
                $meta = $fieldCatalogue[$key];
                $cols[] = "`$key` {$meta['sql_type']} NOT NULL";
                $fieldMeta[$key] = [
                    'label' => $labels[$key] ?? $meta['label'],
                    'type'  => $meta['type'],
                    'required' => true,
                    'scan_enabled' => !empty($scanOn[$key]) && $meta['scan'],
                    'auto_from' => $meta['auto_from'],
                ];
            }

            $cols[] = "`submitted_at` DATETIME DEFAULT CURRENT_TIMESTAMP";
            $cols[] = "`updated_at` DATETIME NULL";
            $cols[] = "`ip_address` VARCHAR(45)";
            $cols[] = "UNIQUE KEY `unique_employee` (`employee_id`)";

            $sql = "CREATE TABLE `$tableName` (\n    " . implode(",\n    ", $cols) . "\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

            if ($conn->query($sql)) {
                // --- Auto-activate if there is no active form yet ---
                $hasActive = $conn->query("SELECT id FROM form_configurations WHERE is_active = 1 AND archived_at IS NULL LIMIT 1")->fetch_assoc();
                $newIsActive = $hasActive ? 0 : 1;

                $fieldsConfig = json_encode($fieldMeta);
                $stmt = $conn->prepare("INSERT INTO form_configurations
                    (form_name, table_name, is_active, fields_config, created_by)
                    VALUES (?, ?, ?, ?, ?)");
                $createdBy = $_SESSION['admin_id'] ?? null;
                $stmt->bind_param("ssisi", $formName, $tableName, $newIsActive, $fieldsConfig, $createdBy);
                if ($stmt->execute()) {
                    if ($newIsActive) {
                        $success = "Form '$formName' created (table: $tableName) and activated (no other active form existed).";
                    } else {
                        $success = "Form '$formName' created (table: $tableName). Activate it from the dashboard.";
                    }
                } else {
                    $error = 'Failed to register form configuration.';
                }
                $stmt->close();
            } else {
                $error = 'Failed to create table: ' . $conn->error;
            }
        }
        $check->close();
        $conn->close();
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">

    <link rel="icon" type="image/x-icon" href="/assets/images/ethiopian_logo.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Create New Form</title>
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
            max-width: 720px;
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
        input[type="email"],
        input[type="number"],
        input[type="date"],
        select {
            width: 100%;
            padding: 0.65rem 0.85rem;
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

        .hint {
            font-size: 0.7rem;
            color: #64748b;
            margin-top: 0.3rem;
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
            margin: 0.5rem 0 1.5rem;
            border: 1px solid #334155;
            border-radius: 0.75rem;
            overflow: hidden;
        }

        .field-row {
            display: grid;
            grid-template-columns: 1.6rem 1fr auto;
            gap: 0.75rem;
            align-items: center;
            padding: 0.7rem 0.9rem;
            border-bottom: 1px solid #334155;
            background: #0f172a;
        }

        .field-row:last-child {
            border-bottom: none;
        }

        .field-row.locked {
            background: #0b1220;
        }

        .field-row input[type="checkbox"] {
            width: 1rem;
            height: 1rem;
            accent-color: #10b981;
        }

        .field-row .name {
            font-size: 0.88rem;
            color: #e2e8f0;
        }

        .field-row .tag {
            font-size: 0.65rem;
            color: #94a3b8;
            margin-left: 0.4rem;
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
            grid-template-columns: 2fr 1fr 1fr 1fr auto;
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

        .req-note {
            font-size: 0.72rem;
            color: #94a3b8;
            margin-bottom: 0.5rem;
        }

        .req-note strong {
            color: #fca5a5;
        }
    </style>
</head>

<body>
    <div class="card">
        <h1>➕ Create New Form</h1>
        <p class="sub">Choose which fields the employee form will collect. You can add your own custom fields too.</p>

        <?php if ($error): ?><div class="msg msg-error">⚠️ <?= htmlspecialchars($error) ?></div><?php endif; ?>
        <?php if ($success): ?><div class="msg msg-success">✅ <?= htmlspecialchars($success) ?></div><?php endif; ?>

        <form method="POST">
            <label for="form_name">Form Name</label>
            <input type="text" id="form_name" name="form_name" required maxlength="50" pattern="[a-zA-Z0-9_]{3,50}"
                placeholder="e.g. 2026_Q1_Identity"
                value="<?= htmlspecialchars($_POST['form_name'] ?? '') ?>">
            <div class="hint">3–50 characters: letters, numbers, underscores.</div>

            <label style="margin-top:1.25rem;">Built-in Fields</label>
            <div class="req-note">Employee ID and Full Name are always included. <strong>Every ticked field is required.</strong></div>
            <div class="field-list">
                <?php foreach ($fieldCatalogue as $key => $meta):
                    $isLocked  = in_array($key, $lockedFields, true);
                    $isChecked = $isLocked || in_array($key, $_POST['fields'] ?? [], true);
                ?>
                    <div class="field-row <?= $isLocked ? 'locked' : '' ?>">
                        <input type="checkbox" id="f_<?= $key ?>" name="fields[]" value="<?= $key ?>"
                            <?= $isChecked ? 'checked' : '' ?> <?= $isLocked ? 'disabled' : '' ?>>
                        <?php if ($isLocked): ?>
                            <input type="hidden" name="fields[]" value="<?= $key ?>">
                        <?php endif; ?>
                        <span class="name">
                            <?= htmlspecialchars($meta['label']) ?>
                            <?php if ($isLocked): ?>
                                <span class="tag">always included</span>
                            <?php elseif ($meta['auto_from']): ?>
                                <span class="tag">auto-filled from employees</span>
                            <?php endif; ?>
                        </span>
                        <span>
                            <?php if ($meta['scan']): ?>
                                <label class="scan">
                                    <input type="checkbox" name="scan[<?= $key ?>]" value="1"
                                        <?= !empty($_POST['scan'][$key]) ? 'checked' : '' ?>>
                                    scan
                                </label>
                            <?php endif; ?>
                        </span>
                    </div>
                <?php endforeach; ?>
            </div>

            <label>Custom Fields (optional)</label>
            <div id="customContainer">
                <?php
                $submittedCustom = $_POST['custom'] ?? [];
                foreach ($submittedCustom as $ukey => $c): ?>
                    <div class="custom-block">
                        <div class="custom-grid">
                            <div>
                                <label>Label</label>
                                <input type="text" name="custom[<?= htmlspecialchars($ukey) ?>][label]"
                                    value="<?= htmlspecialchars($c['label'] ?? '') ?>" required>
                            </div>
                            <div>
                                <label>Type</label>
                                <select name="custom[<?= htmlspecialchars($ukey) ?>][type]">
                                    <?php foreach (['text', 'number', 'date', 'email', 'tel'] as $t): ?>
                                        <option value="<?= $t ?>" <?= ($c['type'] ?? '') === $t ? 'selected' : '' ?>><?= $t ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div>
                                <label>Required</label><br>
                                <label class="checkbox-inline">
                                    <input type="checkbox" name="custom[<?= htmlspecialchars($ukey) ?>][required]" value="1"
                                        <?= !empty($c['required']) ? 'checked' : '' ?>> yes
                                </label>
                            </div>
                            <div></div>
                            <div>
                                <button type="button" class="btn-mini btn-remove" onclick="this.closest('.custom-block').remove()">✕</button>
                            </div>
                        </div>
                        <input type="hidden" name="fields[]" value="<?= htmlspecialchars($ukey) ?>">
                    </div>
                <?php endforeach; ?>
            </div>
            <button type="button" class="btn-mini" onclick="addCustom()" style="margin-bottom:1rem;">+ Add Custom Field</button>

            <button type="submit" class="btn btn-primary">Create Form</button>
            <a href="adminpage.php" class="btn btn-secondary">← Back to Dashboard</a>
        </form>
    </div>

    <script>
        let customCounter = <?= count($_POST['custom'] ?? []) ?>;

        function addCustom() {
            customCounter++;
            const key = 'custom_' + Date.now() + '_' + customCounter;
            const div = document.createElement('div');
            div.className = 'custom-block';
            div.innerHTML = `
        <div class="custom-grid">
            <div>
                <label>Label</label>
                <input type="text" name="custom[${key}][label]" placeholder="e.g. Emergency Contact" required>
            </div>
            <div>
                <label>Type</label>
                <select name="custom[${key}][type]">
                    <option value="text">text</option>
                    <option value="number">number</option>
                    <option value="date">date</option>
                    <option value="email">email</option>
                    <option value="tel">tel</option>
                </select>
            </div>
            <div>
                <label>Required</label><br>
                <label class="checkbox-inline">
                    <input type="checkbox" name="custom[${key}][required]" value="1"> yes
                </label>
            </div>
            <div></div>
            <div>
                <button type="button" class="btn-mini btn-remove" onclick="this.closest('.custom-block').remove()">✕</button>
            </div>
        </div>
        <input type="hidden" name="fields[]" value="${key}">
    `;
            document.getElementById('customContainer').appendChild(div);
        }
    </script>
</body>

</html>