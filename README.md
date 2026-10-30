# Admin

This folder contains the MRODC administrative interface for managing employee
submission forms.

## Access

Open `admin/login.php` through the web server (for example,
`http://localhost/mrodc/admin/login.php` in a local XAMPP setup). Sign-in
requires an existing account in the `users` table with a `password_hash`-compatible
password and either the `it_admin` or `hr` role. Successful sign-in starts an
admin session and opens the dashboard.

The PHP application also requires a working MySQL connection configured by
`includes/db.php` and the database tables expected by the application.

## Pages

| File | Purpose |
| --- | --- |
| `login.php` | Authenticates eligible admin and HR accounts. |
| `adminpage.php` | Dashboard for form status, submission progress, exports, and activate/deactivate/archive actions. |
| `manage_forms.php` | Lists forms and provides form-management actions. |
| `create_form.php` | Creates a configurable form and its submission table. |
| `edit_form.php` | Updates a form's fields and corresponding table schema. |
| `delete_form.php` | Confirms permanent deletion of an inactive form and its submission table. |
| `unarchive_form.php` | Restores an archived form as inactive. |
| `logout.php` | Ends the admin session and returns to the login page. |

## Notes

- Pages that change or expose admin data require an authenticated session.
- Only one non-archived form should be active at a time; the dashboard handles
  activation and deactivation.
- Deleting a form permanently drops its submission table and removes its
  configuration. Export any needed submission data before confirming deletion.
