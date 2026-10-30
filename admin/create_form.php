<?php
require_once '../includes/db.php';
require_once '../includes/auth.php';
requireAdmin();

$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formName = trim($_POST['form_name'] ?? '');
    $scanFan = !empty($_POST['scan_fan']);

    // Validate form name
    if (!preg_match('/^[a-zA-Z0-9_]{3,50}$/', $formName)) {
        $error = 'Form name must be 3–50 chars, letters/numbers/underscores only.';
    } else {
        $conn = getConnection();
        $tableName = 'form_' . strtolower($formName);

        // Ensure not duplicate
        $check = $conn->prepare("SELECT id FROM form_configurations WHERE form_name = ? OR table_name = ?");
        $check->bind_param("ss", $formName, $tableName);
        $check->execute();
        if ($check->get_result()->fetch_assoc()) {
            $error = 'A form with that name already exists.';
        } else {
            // Create the data table
            $sql = "CREATE TABLE `$tableName` (
                id INT AUTO_INCREMENT PRIMARY KEY,
                employee_id VARCHAR(20) NOT NULL,
                fan_no VARCHAR(16) NOT NULL,
                tin_no VARCHAR(30) NULL,
                mothers_name VARCHAR(150) NOT NULL,
                submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                ip_address VARCHAR(45),
                UNIQUE KEY unique_employee (employee_id),
                INDEX idx_fan (fan_no)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

            if ($conn->query($sql)) {
                $fieldsConfig = json_encode([
                    'fan_no' => ['scan_enabled' => $scanFan]
                ]);
                $stmt = $conn->prepare("INSERT INTO form_configurations 
                    (form_name, table_name, is_active, fields_config, created_by) 
                    VALUES (?, ?, 0, ?, ?)");
                $createdBy = $_SESSION['admin_id'] ?? null;
                $stmt->bind_param("sssi", $formName, $tableName, $fieldsConfig, $createdBy);

                if ($stmt->execute()) {
                    $success = "Form '$formName' created successfully (table: $tableName). 
                                You can now activate it from the dashboard.";
                } else {
                    $error = 'Failed to register form configuration.';
                }
                $stmt->close();
            } else {
                $error = 'Failed to create data table: ' . $conn->error;
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
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }

        .card {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 1rem;
            padding: 2rem;
            width: 100%;
            max-width: 480px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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
            transition: border-color 0.2s, box-shadow 0.2s;
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

        .checkbox-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 1.25rem 0;
            font-size: 0.85rem;
            color: #cbd5e1;
        }

        .checkbox-row input {
            width: 1rem;
            height: 1rem;
            accent-color: #10b981;
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

        .btn-primary:hover {
            background: linear-gradient(135deg, #059669, #047857);
        }

        .btn-secondary {
            background: #334155;
            color: #e2e8f0;
            margin-top: 0.75rem;
            width: 100%;
        }

        .btn-secondary:hover {
            background: #475569;
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
        <p class="sub">Creates a new form configuration and its dedicated data table.</p>

        <?php if ($error): ?>
            <div class="msg msg-error">⚠️ <?= htmlspecialchars($error) ?></div>
        <?php endif; ?>
        <?php if ($success): ?>
            <div class="msg msg-success">✅ <?= htmlspecialchars($success) ?></div>
        <?php endif; ?>

        <form method="POST">
            <label for="form_name">Form Name</label>
            <input type="text" id="form_name" name="form_name" required
                maxlength="50" pattern="[a-zA-Z0-9_]{3,50}"
                placeholder="e.g. 2026_Q1_Identity"
                value="<?= htmlspecialchars($_POST['form_name'] ?? '') ?>">
            <div class="hint">3–50 characters: letters, numbers, underscores only.</div>

            <div class="checkbox-row">
                <input type="checkbox" id="scan_fan" name="scan_fan" value="1"
                    <?= !empty($_POST['scan_fan']) ? 'checked' : '' ?>>
                <label for="scan_fan" style="margin:0;">Enable barcode/QR scanning for FAN No</label>
            </div>

            <button type="submit" class="btn btn-primary">Create Form</button>
            <a href="adminpage.php" class="btn btn-secondary" style="display:block;">← Back to Dashboard</a>
        </form>

        <?php if ($success): ?>
            <p class="hint" style="margin-top:1rem;">
                Tip: The new form is created <strong>inactive</strong>.
                Go to the dashboard and click <code>Activate</code> to make it live for employees.
            </p>
        <?php endif; ?>
    </div>
</body>

</html>