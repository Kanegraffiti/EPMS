# EPMS enhancement summary

Requested changes completed in source:

- Removed visual prototype/demo warning banners and warning copy.
- Logo navigates to `/home` on Navbar, Login and Signup, including while logged in.
- Employee forms now support hire date, birth date, manager, address, emergency contact name/number, employment type, and photo replacement/removal.
- Profile shows new employee information and an admin-only deletion button with confirmation.
- Manage Employees CSV export/import (quoted CSV, validations, duplicates skipped), with existing JSON export preserved.
- Activity history captures employee CRUD, CSV imports, department CRUD, admin creation/removal, and profile edits, with actor email and timestamp.
- Dashboard shows Inactive and provides navigation to Departments, Administrators, Activity log.
- Departments are managed in one stateful browser-local list; names can be added, renamed (reassigning existing employees), and removed only if unused.
- Administrators can create more administrators who can log in; new passwords are salted and hashed in browser storage; legacy accounts upgrade when they log in.
- Settings screen for user profile name and dark mode.
- Added automated CSV/account tests.

Still browser-local and NOT suitable for confidential real employee information or real authentication. Primary administrator login remains fixed as a preview credential. Nothing here constitutes secure server-side authorization or an immutable audit trail.
