// Shared choices keep the employee form, filters, and dashboard in sync.
export const DEFAULT_DEPARTMENTS = [
  "Engineering",
  "Human Resources",
  "Design",
  "Finance",
  "Marketing",
];

export const EMPLOYEE_STATUSES = ["Active", "On Leave", "Inactive"];

export const EMPLOYMENT_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Temporary",
];

export const normalizeDepartments = (departments) => {
  const items = Array.isArray(departments) ? departments : [];

  return [...new Set(items
    .filter((department) => typeof department === "string")
    .map((department) => department.trim())
    .filter(Boolean))];
};
