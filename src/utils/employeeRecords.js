// Employee identifiers keep the original EMP001, EMP002 format.
export const nextEmployeeId = (employees) => {
  const highestId = Math.max(0, ...employees.map((employee) => {
    const match = /^EMP(\d+)$/.exec(employee?.id || "");
    return match ? Number(match[1]) : 0;
  }));

  return `EMP${String(highestId + 1).padStart(3, "0")}`;
};

export const employeeEmailExists = (employees, email, exceptId = null) => {
  const normalizedEmail = String(email).trim().toLowerCase();

  return employees.some((employee) =>
    employee.id !== exceptId &&
    String(employee.email || "").trim().toLowerCase() === normalizedEmail,
  );
};

export const parseDemoEmployees = (json, defaults) => {
  if (!json) {
    return defaults;
  }

  try {
    const employees = JSON.parse(json);
    const valid = Array.isArray(employees) && employees.every((employee) =>
      employee && typeof employee.id === "string" && typeof employee.name === "string",
    );

    return valid ? employees : defaults;
  } catch {
    return defaults;
  }
};
