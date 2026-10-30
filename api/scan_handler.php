<?php
// api/scan_handler.php
require_once '../includes/db.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'POST only']);
    exit;
}

$raw = trim($_POST['raw'] ?? '');
if ($raw === '') {
    echo json_encode(['success' => false, 'message' => 'No scan data received']);
    exit;
}

// Try to extract a 16-digit FAN from any scanned string (QR/barcode may include prefixes)
$fan = null;
if (preg_match('/\d{16}/', $raw, $m)) {
    $fan = $m[0];
} elseif (preg_match('/^\d{16}$/', $raw)) {
    $fan = $raw;
}

if (!$fan) {
    echo json_encode(['success' => false, 'message' => 'No valid 16-digit FAN found in scan']);
    exit;
}

$conn = getConnection();
$activeForm = getActiveForm($conn);

// Optional: check whether this FAN has already been submitted in the active form
$alreadySubmitted = false;
if ($activeForm) {
    $table = $activeForm['table_name'];
    $stmt = $conn->prepare("SELECT 1 FROM `$table` WHERE fan_no = ? LIMIT 1");
    $stmt->bind_param("s", $fan);
    $stmt->execute();
    $alreadySubmitted = (bool)$stmt->get_result()->fetch_assoc();
    $stmt->close();
}
$conn->close();

echo json_encode([
    'success'         => true,
    'fan_no'          => $fan,
    'already_used'    => $alreadySubmitted,
    'message'         => $alreadySubmitted
        ? 'This FAN number has already been submitted.'
        : 'FAN number extracted successfully.'
]);
