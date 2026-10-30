<?php
require_once '../includes/db.php';
require_once '../includes/auth.php';
requireAdmin();

$id = (int)($_POST['id'] ?? $_GET['id'] ?? 0);
if ($id <= 0) {
    die('Invalid form id.');
}

$conn = getConnection();
$stmt = $conn->prepare("UPDATE form_configurations
    SET is_archived = 0, is_active = 0, updated_at = NOW()
    WHERE id = ? AND is_archived = 1");
$stmt->bind_param("i", $id);
$stmt->execute();
$stmt->close();
$conn->close();

header('Location: manage_forms.php?msg=' . urlencode('Form restored (inactive). Activate it when ready.'));
exit;
