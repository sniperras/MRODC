<?php
require_once '../includes/db.php';
require_once '../includes/auth.php';
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $u = $_POST['username'] ?? '';
    $p = $_POST['password'] ?? '';
    $conn = getConnection();
    $stmt = $conn->prepare("SELECT id, username, password, role FROM users WHERE username = ?");
    $stmt->bind_param("s", $u);
    $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();
    if (
        $user && password_verify($p, $user['password']) &&
        in_array($user['role'], ['it_admin', 'hr'])
    ) {
        session_regenerate_id(true);
        $_SESSION['admin_id'] = $user['id'];
        $_SESSION['admin_username'] = $user['username'];
        header('Location: adminpage.php');
        exit;
    }
    $error = 'Invalid credentials.';
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>Admin Login</title>
    <style>
        body {
            font-family: system-ui;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #000;
            background-image: radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px);
            background-size: 20px 20px;
            margin: 0;
        }

        .card {
            background: #fff;
            padding: 2rem;
            border-radius: 1rem;
            width: 340px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        h2 {
            text-align: center;
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }

        input {
            width: 100%;
            padding: 0.6rem;
            margin-bottom: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 0.5rem;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            padding: 0.7rem;
            background: #10b981;
            color: #fff;
            border: none;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
        }

        .err {
            background: #fee2e2;
            color: #991b1b;
            padding: 0.6rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            font-size: 0.85rem;
        }
    </style>
</head>

<body>
    <div class="card">
        <h2>Admin Login</h2>
        <?php if ($error): ?><div class="err"><?= htmlspecialchars($error) ?></div><?php endif; ?>
        <form method="POST">
            <input name="username" placeholder="Username" required>
            <input name="password" type="password" placeholder="Password" required>
            <button>Sign in</button>
        </form>
    </div>
</body>

</html>