# EPMS — Employee Profile Management System

React 19 / Vite 8 / Tailwind CSS 4. This project is an **employee management system** with an employee directory, editing tools, administrative screens and browser-local data persistence.

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

## Run on desktop

Use a compatible Node version (Node 20.19+ or 22.12+ recommended):

```bash
npm ci
npm run dev
npm test
npm run lint
npm run build
```

## Import format

CSV headers: `id,name,email,phone,position,department,status,hireDate,dateOfBirth,manager,address,emergencyContactName,emergencyContactPhone,employmentType`. The required headers are `name,email,position,department`. Dates use `YYYY-MM-DD`. Export CSV first to get a working template. Existing records are never overwritten during import; email duplicates are skipped.
