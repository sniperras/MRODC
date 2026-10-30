<?php
require_once '../includes/db.php';
require_once '../includes/auth.php';
requireAdmin();

$error = '';
$success = '';

// Full catalogue of fields the admin can choose from.
// 'key'       => column name in the dynamic table
// 'label'     => what the employee sees
// 'type'      => html input type
// 'sql_type'  => MySQL column definition
// 'required'  => forces NOT NULL + required attribute
// 'scan'      => whether a scan button can be enabled for this field
$fieldCatalogue = [
    'employee_id'  => ['label' => 'Employee ID',   'type' => 'text',    'sql_type' => 'VARCHAR(20)',  'required' => true,  'scan' => true],
    'fan_no'       => ['label' => 'FAYDA No (FAN No)', 'type' => 'text', 'sql_type' => 'VARCHAR(16)', 'required' => true,  'scan' => true],
    'tin_no'       => ['label' => 'TIN No',        'type' => 'text',    'sql_type' => 'VARCHAR(30)',  'required' => false, 'scan' => false],
    'mothers_name' => ['label' => "Mother's Name", 'type' => 'text',    'sql_type' => 'VARCHAR(150)', 'required' => true,  'scan' => false],
    'fathers_name' => ['label' => "Father's Name", 'type' => 'text',    'sql_type' => 'VARCHAR(150)', 'required' => false, 'scan' => false],
    'phone'        => ['label' => 'Phone',         'type' => 'tel',     'sql_type' => 'VARCHAR(20)',  'required' => false, 'scan' => false],
    'email'        => ['label' => 'Email',         'type' => 'email',   'sql_type' => 'VARCHAR(150)', 'required' => false, 'scan' => false],
    'address'      => ['label' => 'Address',       'type' => 'text',    'sql_type' => 'VARCHAR(255)', 'required' => false, 'scan' => false],
    'dob'          => ['label' => 'Date of Birth', 'type' => 'date',    'sql_type' => 'DATE',         'required' => false, 'scan' => false],
    'salary'       => ['label' => 'Salary',        'type' => 'number',  'sql_type' => 'DECIMAL(12,2)', 'required' => false, 'scan' => false],
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formName = trim($_POST['form_name'] ?? '');
    $selected = $_POST['fields'] ?? [];               // ['fan_no','tin_no',...]
    $scanOn   = $_POST['scan'] ?? [];                 // ['fan_no'=>1,...]

    if (!preg_match('/^[a-zA-Z0-9_]{3,50}$/', $formName)) {
        $error = 'Form name must be 3–50 chars, letters/numbers/underscores only.';
    } elseif (empty($selected)) {
        $error = 'Pick at least one field.';
    } else {
        // employee_id is mandatory in every form (needed for the filled/unfilled joins)
        if (!in_array('employee_id', $selected, true)) {
            $selected[] = 'employee_id';
        }

        $conn = getConnection();
        $tableName = 'form_' . strtolower($formName);

        // Duplicate check
        $check = $conn->prepare("SELECT id FROM form_configurations WHERE form_name = ? OR table_name = ?");
        $check->bind_param("ss", $formName, $tableName);
        $check->execute();
        if ($check->get_result()->fetch_assoc()) {
            $error = 'A form with that name already exists.';
        } else {
            // Build CREATE TABLE from chosen fields
            $cols = [
                "`id` INT AUTO_INCREMENT PRIMARY KEY",
                "`employee_id` VARCHAR(20) NOT NULL",
            ];
            $fieldMeta = [];
            foreach ($selected as $key) {
                if (!isset($fieldCatalogue[$key])) continue;
                $meta = $fieldCatalogue[$key];
                if ($key === 'employee_id') continue; // already added
                $null = $meta['required'] ? 'NOT NULL' : 'NULL';
                $cols[] = "`$key` {$meta['sql_type']} $null";
                $fieldMeta[$key] = [
                    'label'        => $meta['label'],
                    'type'         => $meta['type'],
                    'required'     => (bool)$meta['required'],
                    'scan_enabled' => !empty($scanOn[$key]) && $meta['scan'],
                ];
            }
            // Always store employee_id meta
            $fieldMeta = ['employee_id' => [
                'label' => 'Employee ID',
                'type' => 'text',
                'required' => true,
                'scan_enabled' => !empty($scanOn['employee_id'])
            ]] + $fieldMeta;

            $cols[] = "`submitted_at` DATETIME DEFAULT CURRENT_TIMESTAMP";
            $cols[] = "`updated_at` DATETIME NULL";
            $cols[] = "`ip_address` VARCHAR(45)";
            $cols[] = "UNIQUE KEY `unique_employee` (`employee_id`)";

            $sql = "CREATE TABLE `$tableName` (\n    " . implode(",\n    ", $cols) . "\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

            if ($conn->query($sql)) {
                $fieldsConfig = json_encode($fieldMeta);
                $stmt = $conn->prepare("INSERT INTO form_configurations 
                    (form_name, table_name, is_active, fields_config, created_by) 
                    VALUES (?, ?, 0, ?, ?)");
                $createdBy = $_SESSION['admin_id'] ?? null;
                $stmt->bind_param("sssi", $formName, $tableName, $fieldsConfig, $createdBy);

                if ($stmt->execute()) {
                    $success = "Form '$formName' created (table: $tableName). Activate it from the dashboard.";
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
            max-width: 640px;
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

        input[type="text"] {
            width: 100%;
            padding: 0.65rem 0.85rem;
            font-size: 0.9rem;
            background: #0f172a;
            color: #e2e8f0;
            border: 1px solid #334155;
            border-radius: 0.5rem;
        }

        input[type="text"]:focus {
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

        .field-list {
            margin: 1rem 0 1.5rem;
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

        .field-row:hover {
            background: #152033;
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

        .field-row .tag.mand {
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

        code {
            background: #0f172a;
            padding: 0.1rem 0.35rem;
            border-radius: 0.25rem;
            color: #6ee7b7;
        }
    </style>
</head>

<body>
    <div class="card">
        <h1>➕ Create New Form</h1>
        <p class="sub">Choose which fields the employee form will collect.</p>

        <?php if ($error): ?><div class="msg msg-error">⚠️ <?= htmlspecialchars($error) ?></div><?php endif; ?>
        <?php if ($success): ?><div class="msg msg-success">✅ <?= htmlspecialchars($success) ?></div><?php endif; ?>

        <form method="POST">
            <label for="form_name">Form Name</label>
            <input type="text" id="form_name" name="form_name" required maxlength="50" pattern="[a-zA-Z0-9_]{3,50}"
                placeholder="e.g. 2026_Q1_Identity"
                value="<?= htmlspecialchars($_POST['form_name'] ?? '') ?>">
            <div class="hint">3–50 characters: letters, numbers, underscores.</div>

            <label style="margin-top:1.25rem;">Fields to Collect</label>
            <div class="field-list">
                <?php foreach ($fieldCatalogue as $key => $meta):
                    $isMandatory = $key === 'employee_id' || $meta['required'];
                    $isChecked   = $isMandatory || in_array($key, $_POST['fields'] ?? [], true);
                ?>
                    <div class="field-row">
                        <input type="checkbox" id="f_<?= $key ?>" name="fields[]" value="<?= $key ?>"
                            <?= $isChecked ? 'checked' : '' ?>
                            <?= $key === 'employee_id' ? 'disabled' : '' ?>>
                        <?php if ($key === 'employee_id'): ?>
                            <input type="hidden" name="fields[]" value="employee_id">
                        <?php endif; ?>
                        <span class="name">
                            <?= htmlspecialchars($meta['label']) ?>
                            <?php if ($meta['required']): ?><span class="tag mand">required</span><?php endif; ?>
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

            <button type="submit" class="btn btn-primary">Create Form</button>
            <a href="adminpage.php" class="btn btn-secondary">← Back to Dashboard</a>
        </form>
    </div>
</body>

</html>