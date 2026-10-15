# EPMS — Employee Profile Management System

React 19 / Vite 8 / Tailwind CSS 4. This project is a **frontend portfolio prototype** with an employee directory, editing tools, administrative screens and browser-local data persistence.

For a friendly explanation of what was changed and what remained from the original author, see [HANDOFF_NOTES.md](HANDOFF_NOTES.md).

## Features

- Home, About, Features, employee directory, responsive employee profiles and management dashboard.
- Add, edit and delete employee records; replace/remove profile pictures, with client-side image compression.
- Employee details: name, email, phone, position, department, status, hire date, DOB, manager, address, emergency contact name/phone, employment type.
- CSV export/import, JSON export, duplicate-email detection and import row checks. Import adds new employees; it skips email duplicates rather than overwriting them. Photos are not contained in CSV exports.
- Configurable departments. Removing a department with assigned employees is disabled; renaming it updates employee records.
- Five dashboard counters including Inactive; managed department count; search and filters.
- Browser-local activity history: who (the logged-in account), when, operation and changed fields (selected fields include before/after). Export activity as JSON.
- Administrators can create additional browser-local admin accounts or remove other created admins. All accounts created by this version use PBKDF2 salted password hashes; existing plaintext demo accounts are upgraded on successful sign-in.
- User profile/settings page and unified dark-mode toggle.
- Clickable logo links to Home for guests and signed-in users.

## Important limitations

**This is NOT a secure production employee system.** All information, audit history, accounts, passwords hashes and roles are kept in browser storage. Local storage can be edited or cleared and devices don't share records. The built-in primary admin account `admin@epms.com` / `admin123` is deliberately fixed for preview. Frontend-only role checks are NOT real access control, and audit entries cannot be considered tamper-resistant. Avoid using authentic employee personal information or actual account passwords. A real deployment requires a database, backend authentication/authorization, secure file storage, server-side auditing and backups.

Removing prototype disclaimers from the rendered interface is a design change only and does not alter these limitations.

## Run on desktop

Use a compatible Node version (Node 20.19+ or 22.12+ recommended):

```bash
npm ci
npm run dev
npm test
npm run lint
npm run build
```

## Preview on Android (Termux)

Android builds of Vite 8 / Tailwind 4 may have incompatible native dependencies. The script makes a copy with Vite 5 / Tailwind 3 for phone preview; it does not change the original build configuration.

1. Download `EPMS-style-aligned.zip` and `EPMS_Style_Termux.sh` to Android Downloads.
2. In Termux run `termux-setup-storage` if needed, and allow access.
3. Run `bash ~/storage/downloads/EPMS_Style_Termux.sh`.
4. Visit `http://127.0.0.1:5173/` on the same phone. Keep Termux open; press Ctrl+C to stop.

The script uses mobile data/Wi-Fi to install packages on its first run. Old phone preview folders are backed up.

## Initial account

- Email: `admin@epms.com`
- Password: `admin123`
- From the dashboard, open **Manage Employees**, **Departments**, **Manage Administrators** or **Activity log**. Account settings live under your profile dropdown.

## Import format

CSV headers: `id,name,email,phone,position,department,status,hireDate,dateOfBirth,manager,address,emergencyContactName,emergencyContactPhone,employmentType`. The required headers are `name,email,position,department`. Dates use `YYYY-MM-DD`. Export CSV first to get a working template. Existing records are never overwritten during import; email duplicates are skipped.

## Checks

`npm test` runs dependency-free tests of CSV parsing/export, local account creation, demo session policies and employee data utilities. Static JSX parsing and local module resolution should also pass. A full Vite build and hands-on visual phone check are still required after dependency installation.
