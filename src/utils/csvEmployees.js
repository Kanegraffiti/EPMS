// Keep all supported CSV fields in one place for both imports and exports.
export const CSV_FIELDS = [
  "id",
  "name",
  "email",
  "phone",
  "position",
  "department",
  "status",
  "hireDate",
  "dateOfBirth",
  "manager",
  "address",
  "emergencyContactName",
  "emergencyContactPhone",
  "employmentType",
];

// Reads quoted CSV values, including commas, double quotes, and newlines.
export const parseCSV = (text) => {
  const input = String(text).replace(/^\uFEFF/, "");
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < input.length; index++) {
    const character = input[index];

    if (quoted) {
      if (character === '"' && input[index + 1] === '"') {
        field += '"';
        index++;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
    } else if (character === '"') {
      if (field !== "") {
        throw new Error("Unexpected quote in CSV");
      }
      quoted = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n" || character === "\r") {
      if (character === "\r" && input[index + 1] === "\n") {
        index++;
      }
      row.push(field);
      if (row.some((value) => value.trim())) {
        rows.push(row);
      }
      row = [];
      field = "";
    } else {
      field += character;
    }
  }

  if (quoted) {
    throw new Error("Unclosed quoted field in CSV");
  }

  row.push(field);
  if (row.some((value) => value.trim())) {
    rows.push(row);
  }

  return rows;
};

export const csvToEmployees = (csv) => {
  const rows = parseCSV(csv);

  if (!rows.length) {
    throw new Error("CSV file is empty");
  }

  const headers = rows.shift().map((header) => header.trim());
  const requiredFields = ["name", "email", "position", "department"];

  for (const required of requiredFields) {
    if (!headers.includes(required)) {
      throw new Error(`Missing CSV column: ${required}`);
    }
  }

  const employees = [];

  for (let index = 0; index < rows.length; index++) {
    const cells = rows[index];
    const rowNumber = index + 2;

    if (cells.length !== headers.length) {
      throw new Error(`CSV row ${rowNumber} has the wrong number of columns`);
    }

    const employee = Object.fromEntries(CSV_FIELDS.map((field) => [field, ""]));

    headers.forEach((header, column) => {
      if (CSV_FIELDS.includes(header)) {
        employee[header] = cells[column].trim();
      }
    });

    if (!requiredFields.every((field) => employee[field])) {
      throw new Error(`CSV row ${rowNumber} needs name, email, position and department`);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)) {
      throw new Error(`Invalid email on CSV row ${rowNumber}`);
    }

    if (employee.status && !["Active", "On Leave", "Inactive"].includes(employee.status)) {
      throw new Error(`Invalid status on CSV row ${rowNumber}`);
    }

    for (const field of ["hireDate", "dateOfBirth"]) {
      if (employee[field] && !/^\d{4}-\d{2}-\d{2}$/.test(employee[field])) {
        throw new Error(`Use YYYY-MM-DD for ${field} on row ${rowNumber}`);
      }
    }

    employee.status ||= "Active";
    employees.push(employee);
  }

  return employees;
};

// Spreadsheet programs may interpret leading =, +, - or @ as a formula.
const quoteCSVValue = (value) => {
  let text = String(value ?? "");

  if (/^[\s]*[=+@\-]/.test(text)) {
    text = "'" + text;
  }

  return '"' + text.replace(/"/g, '""') + '"';
};

export const employeesToCSV = (employees) => {
  const rows = employees.map((employee) =>
    CSV_FIELDS.map((field) => quoteCSVValue(employee[field])).join(","),
  );

  return [CSV_FIELDS.join(","), ...rows].join("\r\n") + "\r\n";
};

export const downloadFile = (text, filename, mime) => {
  const url = URL.createObjectURL(new Blob([text], { type: mime }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
