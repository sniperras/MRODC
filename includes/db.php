<?php
// includes/db.php
define('DB_HOST', 'localhost');
define('DB_USER', 'ettvinfi_mrodc');
define('DB_PASS', 'N3PhCr^=Zd3-xB4D');
define('DB_NAME', 'ettvinfi_mrodc');

function getConnection()
{
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die('Database connection failed: ' . $conn->connect_error);
    }
    $conn->set_charset('utf8mb4');
    return $conn;
}

/**
 * Returns the currently active form configuration, or null if none.
 */
function getActiveForm($conn)
{
    $result = $conn->query("SELECT * FROM form_configurations WHERE is_active = 1 AND archived_at IS NULL LIMIT 1");
    return $result ? $result->fetch_assoc() : null;
}

/**
 * Returns all employees for lookup.
 */
function getEmployeeById($conn, $employeeId)
{
    $stmt = $conn->prepare("SELECT employee_id, full_name, cost_center, department, position, email FROM employees WHERE employee_id = ? AND is_active = 1");
    $stmt->bind_param("s", $employeeId);
    $stmt->execute();
    $row = $stmt->get_result()->fetch_assoc();
    $stmt->close();
    return $row;
}
