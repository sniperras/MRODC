<head>

    <style>
        .form-actions {
            display: flex;
            gap: 0.4rem;
            flex-wrap: wrap;
            align-items: center;
        }

        .inline-form {
            display: inline;
            margin: 0;
        }

        .btn-sm {
            padding: 0.35rem 0.65rem;
            font-size: 0.75rem;
            border-radius: 0.4rem;
            border: none;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            font-weight: 600;
        }

        .btn-edit {
            background: #475569;
            color: #fff;
        }

        .btn-edit:hover {
            background: #334155;
        }

        .btn-danger {
            background: #dc2626;
            color: #fff;
        }

        .btn-danger:hover {
            background: #b91c1c;
        }

        .btn-restore {
            background: #10b981;
            color: #fff;
        }

        .btn-restore:hover {
            background: #059669;
        }
    </style>
</head>
<div class="form-actions">
    <?php if ($f['archived_at']): ?>
        <!-- Archived: only Unarchive and Delete make sense -->
        <form method="POST" action="adminpage.php" class="inline-form"
            onsubmit="return confirm('Unarchive \'<?= htmlspecialchars($f['form_name'], ENT_QUOTES) ?>\'? It will be restored as inactive.');">
            <input type="hidden" name="form_id" value="<?= (int)$f['id'] ?>">
            <input type="hidden" name="action" value="unarchive">
            <button type="submit" class="btn btn-sm btn-restore">♻️ Unarchive</button>
        </form>
        <form method="POST" action="adminpage.php" class="inline-form"
            onsubmit="return confirm('Permanently DELETE \'<?= htmlspecialchars($f['form_name'], ENT_QUOTES) ?>\' and DROP its table? This cannot be undone.');">
            <input type="hidden" name="form_id" value="<?= (int)$f['id'] ?>">
            <input type="hidden" name="action" value="delete">
            <button type="submit" class="btn btn-sm btn-danger">🗑️ Delete</button>
        </form>
    <?php elseif ((int)$f['is_active'] === 1): ?>
        <!-- Active: edit + deactivate + archive. NO delete. -->
        <a href="edit_form.php?id=<?= (int)$f['id'] ?>" class="btn btn-sm btn-edit">✏️ Edit</a>
        <form method="POST" action="adminpage.php" class="inline-form">
            <input type="hidden" name="form_id" value="<?= (int)$f['id'] ?>">
            <input type="hidden" name="action" value="deactivate">
            <button type="submit" class="btn btn-sm btn-secondary">⏸ Deactivate</button>
        </form>
        <form method="POST" action="adminpage.php" class="inline-form"
            onsubmit="return confirm('Archive \'<?= htmlspecialchars($f['form_name'], ENT_QUOTES) ?>\'? Its data is kept.');">
            <input type="hidden" name="form_id" value="<?= (int)$f['id'] ?>">
            <input type="hidden" name="action" value="archive">
            <button type="submit" class="btn btn-sm btn-warn">📦 Archive</button>
        </form>
    <?php else: ?>
        <!-- Inactive (not archived): activate + edit + archive + delete -->
        <form method="POST" action="adminpage.php" class="inline-form">
            <input type="hidden" name="form_id" value="<?= (int)$f['id'] ?>">
            <input type="hidden" name="action" value="activate">
            <button type="submit" class="btn btn-sm btn-primary">▶ Activate</button>
        </form>
        <a href="edit_form.php?id=<?= (int)$f['id'] ?>" class="btn btn-sm btn-edit">✏️ Edit</a>
        <form method="POST" action="adminpage.php" class="inline-form"
            onsubmit="return confirm('Archive \'<?= htmlspecialchars($f['form_name'], ENT_QUOTES) ?>\'?');">
            <input type="hidden" name="form_id" value="<?= (int)$f['id'] ?>">
            <input type="hidden" name="action" value="archive">
            <button type="submit" class="btn btn-sm btn-warn">📦 Archive</button>
        </form>
        <form method="POST" action="adminpage.php" class="inline-form"
            onsubmit="return confirm('Permanently DELETE \'<?= htmlspecialchars($f['form_name'], ENT_QUOTES) ?>\' and DROP its table? This cannot be undone.');">
            <input type="hidden" name="form_id" value="<?= (int)$f['id'] ?>">
            <input type="hidden" name="action" value="delete">
            <button type="submit" class="btn btn-sm btn-danger">🗑️ Delete</button>
        </form>
    <?php endif; ?>
</div>