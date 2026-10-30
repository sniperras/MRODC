<?php
require_once 'includes/db.php';
$conn = getConnection();
$activeForm = getActiveForm($conn);

$success = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $activeForm) {
    $employeeId = trim($_POST['employee_id'] ?? '');
    $emp = getEmployeeById($conn, $employeeId);

    if (!$emp) {
        $error = 'Employee ID not found. Please verify your ID.';
    } else {
        $table  = $activeForm['table_name'];
        $config = json_decode($activeForm['fields_config'] ?? '{}', true);

        // Build value map from POST. Uppercase any text/email field that contains letters.
        $values = [];
        foreach ($config as $key => $meta) {
            $raw = trim($_POST[$key] ?? '');
            $type = $meta['type'] ?? 'text';
            if (($type === 'text' || $type === 'email') && preg_match('/[A-Za-z]/', $raw)) {
                $raw = mb_strtoupper($raw, 'UTF-8');
            }
            $values[$key] = $raw;
        }

        // --- Validation ---
        if ($employeeId === '') {
            $error = 'Employee ID is required.';
        } elseif (isset($config['fan_no']) && !preg_match('/^\d{16}$/', $values['fan_no'])) {
            $error = 'FAYDA No (FAN No) must be exactly 16 digits.';
        } else {
            // --- Upsert: UPDATE if employee already submitted, else INSERT ---
            $check = $conn->prepare("SELECT id FROM `$table` WHERE employee_id = ? LIMIT 1");
            $check->bind_param("s", $employeeId);
            $check->execute();
            $existingId = $check->get_result()->fetch_assoc()['id'] ?? null;
            $check->close();

            $ip = $_SERVER['REMOTE_ADDR'] ?? '';

            if ($existingId) {
                // Build UPDATE
                $setParts  = [];
                $bindTypes = '';
                $bindVals  = [];
                foreach ($values as $k => $v) {
                    if ($k === 'employee_id') continue;
                    $setParts[]  = "`$k` = ?";
                    $bindTypes  .= 's';
                    $bindVals[]  = $v;
                }
                $setParts[]  = "`updated_at` = NOW()";
                $setParts[]  = "`ip_address` = ?";
                $bindTypes  .= 's';
                $bindVals[]  = $ip;
                $bindTypes  .= 'i';
                $bindVals[]  = $existingId;

                $sql = "UPDATE `$table` SET " . implode(', ', $setParts) . " WHERE id = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param($bindTypes, ...$bindVals);
                if ($stmt->execute()) {
                    $success = 'Your information has been updated successfully.';
                } else {
                    $error = 'Update failed. Please try again.';
                }
                $stmt->close();
            } else {
                // Build INSERT
                $cols = array_keys($values);
                $cols[] = 'ip_address';
                $placeholders = implode(',', array_fill(0, count($cols), '?'));
                $colList      = implode(',', array_map(fn($c) => "`$c`", $cols));
                $sql          = "INSERT INTO `$table` ($colList) VALUES ($placeholders)";
                $bindTypes    = str_repeat('s', count($cols));
                $bindVals     = array_values($values);
                $bindVals[]   = $ip;

                $stmt = $conn->prepare($sql);
                $stmt->bind_param($bindTypes, ...$bindVals);
                if ($stmt->execute()) {
                    $success = 'Your information has been submitted successfully!';
                } else {
                    $error = 'Submission failed. Please try again.';
                }
                $stmt->close();
            }
        }
    }
}

$fieldsConfig = $activeForm ? json_decode($activeForm['fields_config'] ?? '{}', true) : [];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="assets/images/ethiopian_logo.ico">
    <title>Employee Info Collection</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: #000;
            background-image: radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        body::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%);
            pointer-events: none;
        }

        .form-container {
            position: relative;
            z-index: 10;
            width: 100%;
            max-width: 560px;
            margin: 1.5rem;
        }

        .form-card {
            background: #fff;
            border-radius: 1.4rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2), 0px 4px 12px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            animation: fadeInUp 0.5s ease-out;
        }

        .card-content {
            padding: 2rem;
        }

        .logo-container {
            text-align: center;
            margin-bottom: 1.25rem;
        }

        .title {
            font-size: 1.25rem;
            font-weight: 600;
            text-align: center;
            color: #111827;
            margin-bottom: 0.5rem;
        }

        .subtitle {
            font-size: 0.8rem;
            text-align: center;
            color: #6b7280;
            margin-bottom: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.25rem;
        }

        .form-group label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: #374151;
        }

        .form-group input {
            width: 100%;
            padding: 0.625rem 0.875rem;
            font-size: 0.875rem;
            color: #111827;
            background-color: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            transition: all 0.2s ease;
            font-family: inherit;
        }

        .form-group input:focus {
            outline: none;
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
            background-color: #fff;
        }

        .form-group input[readonly] {
            background-color: #f3f4f6;
            color: #6b7280;
        }

        .form-group input::placeholder {
            color: #9ca3af;
        }

        .input-row {
            display: flex;
            gap: 0.5rem;
        }

        .input-row input {
            flex: 1;
        }

        .btn-scan {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #fff;
            border: none;
            border-radius: 0.5rem;
            padding: 0 0.875rem;
            cursor: pointer;
            font-size: 0.8rem;
            font-weight: 600;
            white-space: nowrap;
        }

        .btn-scan:hover {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .btn-signin {
            width: 100%;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #fff;
            font-weight: 600;
            padding: 0.75rem 1rem;
            font-size: 0.875rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: inherit;
            margin-top: 0.5rem;
        }

        .btn-signin:hover {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            transform: translateY(-1px);
        }

        .error-message {
            background: #fee2e2;
            border-left: 4px solid #dc2626;
            color: #991b1b;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1.25rem;
            font-size: 0.875rem;
        }

        .success-message {
            background: #d1fae5;
            border-left: 4px solid #059669;
            color: #065f46;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1.25rem;
            font-size: 0.875rem;
        }

        .hint {
            font-size: 0.7rem;
            color: #9ca3af;
            margin-top: 0.25rem;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Wide-and-short scan modal for 1D barcodes */
        #scanModal .modal-card {
            background: #fff;
            border-radius: 1rem;
            padding: 1rem;
            max-width: 640px;
            width: 92%;
        }

        #qrReader {
            width: 100% !important;
            min-height: 220px;
            border-radius: 0.75rem;
            overflow: hidden;
        }

        #qrReader video {
            width: 100% !important;
            height: auto !important;
            border-radius: 0.75rem;
        }
    </style>
    <!-- Barcode/QR scanner library -->
    <script src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js"></script>
</head>

<body>
    <div class="form-container">
        <div class="form-card">
            <div class="card-content">
                <div class="logo-container">
                    <img src="assets/images/logo.png" alt="Logo" height="75">
                </div>
                <h2 class="title">Employee Information Collection</h2>
                <div class="subtitle"><?= htmlspecialchars($activeForm['form_name'] ?? 'No active form') ?></div>

                <?php if (!$activeForm): ?>
                    <div class="error-message">No active form is currently available. Please contact the administrator.</div>
                <?php else: ?>

                    <?php if ($error): ?>
                        <div class="error-message">⚠️ <?= htmlspecialchars($error) ?></div>
                    <?php endif; ?>
                    <?php if ($success): ?>
                        <div class="success-message">✅ <?= htmlspecialchars($success) ?></div>
                    <?php endif; ?>

                    <form method="POST" id="infoForm" <?= $success ? 'style="display:none"' : '' ?>>
                        <?php foreach ($fieldsConfig as $key => $meta):
                            $label    = htmlspecialchars($meta['label'] ?? $key);
                            $type     = $meta['type'] ?? 'text';
                            $required = !empty($meta['required']);
                            $scan     = !empty($meta['scan_enabled']);
                            $autoUpper = ($type === 'text' && !in_array($key, ['fan_no', 'tin_no', 'employee_id'], true));
                        ?>
                            <div class="form-group">
                                <label for="<?= $key ?>"><?= $label ?> <?php if ($required): ?><span style="color:#dc2626">*</span><?php endif; ?></label>
                                <div class="input-row">
                                    <input type="<?= $type ?>"
                                        id="<?= $key ?>" name="<?= $key ?>"
                                        <?= $required ? 'required' : '' ?>
                                        <?= ($type === 'text' && $key === 'fan_no') ? 'maxlength="16" pattern="\d{16}" inputmode="numeric"' : '' ?>
                                        <?= $autoUpper ? 'data-upper' : '' ?>
                                        autocomplete="off">
                                    <?php if ($scan): ?>
                                        <button type="button" class="btn-scan" onclick="startScan('<?= $key ?>')">📷 Scan</button>
                                    <?php endif; ?>
                                </div>
                                <?php if ($key === 'fan_no'): ?>
                                    <div class="hint">Must be exactly 16 digits.</div>
                                <?php endif; ?>
                            </div>
                        <?php endforeach; ?>

                        <button type="submit" class="btn-signin">Submit Information</button>
                    </form>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <!-- Scan modal — wide & short for 1D barcodes -->
    <div id="scanModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:1000; align-items:center; justify-content:center;">
        <div class="modal-card">
            <div id="qrReader"></div>
            <button onclick="stopScan()" style="width:100%; margin-top:0.75rem; padding:0.6rem; border:none; border-radius:0.5rem; background:#dc2626; color:#fff; font-weight:600; cursor:pointer;">Close</button>
        </div>
    </div>

    <script src="assets/js/scanner.js"></script>
    <script>
        // Employee lookup (AJAX)
        function lookupEmployee(id) {
            const hint = document.getElementById('empHint');
            const nameField = document.getElementById('employee_name');
            if (!hint || !nameField) return;
            if (!id) {
                nameField.value = '';
                hint.textContent = '';
                return;
            }
            fetch('api/lookup_employee.php?id=' + encodeURIComponent(id))
                .then(r => r.json())
                .then(data => {
                    if (data.success) {
                        nameField.value = data.full_name;
                        hint.textContent = '✓ ' + data.department + ' — ' + data.position;
                        hint.style.color = '#059669';
                    } else {
                        nameField.value = '';
                        hint.textContent = '✗ Employee ID not found';
                        hint.style.color = '#dc2626';
                    }
                })
                .catch(() => {
                    hint.textContent = 'Lookup failed';
                });
        }
    </script>
</body>

</html>