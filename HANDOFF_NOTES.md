# EPMS — collaborative frontend handover

## First: the original EPMS is still your project

The existing React / Vite / Tailwind stack, green visual theme, page navigation, dashboard, and employee-management design remain the foundation of this codebase. These enhancements are optional suggestions to review, keep, change, or discard.

This is **not** a rewrite claiming the original work was wrong. The practical goal is to make the frontend easier to explore, maintain, and demonstrate in a junior frontend portfolio.

## What was added in the earlier enhanced version

- More employee fields, with the same form shared between adding and editing.
- Photo replacement/removal and browser-friendly image compression.
- Employee profile deletion with confirmation.
- CSV import/export (and JSON export).
- Browser-local activity history for employee, department, and account changes.
- Inactive dashboard statistic, plus department and administrator management pages.
- Account settings, shared dark mode, navigation fixes, error messages, and safer defaults.
- Dependency-free tests covering CSV, account, employee, and session utilities.

See `ENHANCEMENTS.md` and `QA_CHECKLIST.md` for more details.

## What this style-alignment pass changed

- Restored the original project's **two-space indentation, double quotes, semicolons, arrow-function components**, and `export default Component` pattern in newly introduced files.
- Changed terse handlers like `submit`, `del`, and `change` to `handleSubmit`, `handleDelete`, and `handleChange` where appropriate.
- Expanded crowded one-line JSX into separate elements and multiline props.
- Added small, purpose-focused comments around less obvious logic: CSV parsing, account upgrades, department rules, audit entries, and image compression.
- Reformatted new integration logic in `App.jsx`, and aligned the changes within Navbar, Employee Profile, and Manage Employees with surrounding JSX.
- Preserved the original colour palette and layout structure rather than replacing his design system.

### Where to start reading

1. `src/App.jsx` — application routes, employee state, department state, and activity entries.
2. `src/components/EmployeeForm.jsx` — reusable add/edit form.
3. `src/pages/AddEmployee.jsx` and `src/pages/EditEmployee.jsx` — how the form is reused.
4. `src/pages/Departments.jsx` — a clear example of CRUD interactions.
5. `src/utils/csvEmployees.js` — CSV import/export and escaping.
6. `tests/` — the automated checks for logic that can run without a browser.

## Testing and limitations

Run `npm test` to check the logic tests. Run `npm run dev` for the website after installing dependencies. There is a separate Termux launcher for Android preview.

This is still a browser-storage frontend prototype. Local admin accounts and audit history are **not secure or authoritative**. Use fictional employee and account data. The interface does not display the previous demo warning banner, but this technical limitation has not changed.

## Respectful review workflow

**Recommended:** keep your original copy, review the new version beside it, and integrate only the enhancements you like. The final architecture, styling, and further development decisions should remain yours.

A `STYLE_ONLY_CHANGES.patch` is provided separately with the download so it is possible to inspect this formatting pass independently of the earlier feature additions.
