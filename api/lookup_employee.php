<?php
// api/lookup_employee.php
require_once '../includes/db.php';
header('Content-Type: application/json');

$id = $_GET['id'] ?? '';
if ($id === '') {
    echo json_encode(['success' => false]);
    exit;
}

$conn = getConnection();
$emp = getEmployeeById($conn, $id);
$conn->close();

if ($emp) {
    echo json_encode([
        'success' => true,
        'full_name' => $emp['full_name'],
        'department' => $emp['department'] ?? '',
        'position' => $emp['position'] ?? '',
        'cost_center' => $emp['cost_center'] ?? '',
    ]);
} else {
    echo json_encode(['success' => false]);
}
