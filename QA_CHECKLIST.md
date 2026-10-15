# EPMS enhanced — phone QA checklist

Use only invented test people. Initial login: `admin@epms.com` / `admin123`.

## Navigation
- [ ] Open Home `/home`, Login, Signup, About and Features.
- [ ] Sign in; click the EPMS logo and confirm it opens Home (not Dashboard).
- [ ] Use Home links to return to the employee dashboard/directory.
- [ ] Test phone menu and profile menu; open Settings, Departments, Admins and Activity log.
- [ ] Switch dark mode then visit several pages and refresh.

## Employee lifecycle
- [ ] Add an employee with all new fields: hire date, birth date, manager, address, emergency contact name/phone, employment type.
- [ ] Upload a small JPEG or PNG photograph; confirm preview, then save.
- [ ] Open profile and confirm extra fields and photo render.
- [ ] Edit the employee and replace/remove photo. Confirm changes remain after refresh.
- [ ] Change employee status to Inactive. Confirm dashboard Inactive counter changes.
- [ ] Search and filter employee list by department/status.
- [ ] Delete employee using profile Delete action and verify it disappears from directory.

## CSV
- [ ] Export CSV from Manage Employees and open it in a spreadsheet app.
- [ ] Import the same CSV; existing emails should be skipped and employee count unchanged.
- [ ] Edit a CSV to include a unique fake employee; import and confirm one new record is added.
- [ ] Import a malformed CSV; error should be visible, without changing records.
- [ ] Export JSON; verify a file appears in Android Downloads.

## Departments
- [ ] Add a new department and see it appear in the employee form and directory filter.
- [ ] Assign an employee to it, then rename the department; employee should show the new name.
- [ ] Verify deletion is blocked while employees belong to the department.
- [ ] Reassign employee and delete the now unused department.

## Accounts & settings
- [ ] From primary admin, create another admin account with an original fake email and 8+ character password.
- [ ] Log out and sign in as the new admin; confirm dashboard/admin access.
- [ ] Try ordinary signup; confirm that new user has employee directory access, not admin settings.
- [ ] As an admin, update your profile names and see the navbar update.
- [ ] Do not attempt to delete the primary administrator account.

## Activity history
- [ ] Activity log should show actor email, timestamp, operation and details for employee CRUD, department changes, admin creation/deletion and imports.
- [ ] Search activity list and export history as JSON.

## Limits
- Everything is stored in the current browser only. Different phones do not sync.
- An activity log in browser storage is editable by the device owner; not an immutable security log.
- Only a browser-backend implementation can support confidential production HR information safely.

## Code handover review
- [ ] Open `HANDOFF_NOTES.md` and review the original author's preserved design decisions.
- [ ] Compare `src/components/EmployeeForm.jsx` to the earlier enhanced version: one prop per line and consistent `handle...` handlers.
- [ ] Check `src/pages/Departments.jsx`, `src/pages/AdminUsers.jsx`, and `src/utils/csvEmployees.js` for readability.
- [ ] Run `npm test` on a desktop or in the Termux preview; all 13 logic tests should pass.
- [ ] Keep a copy of the original repo and merge the changes you want; don't replace its Git history.
