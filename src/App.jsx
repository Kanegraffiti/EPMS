import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLoggedInUser } from "./utils/demoAuth";
import { notify } from "./utils/notify";
import { parseDemoEmployees, employeeEmailExists, nextEmployeeId } from "./utils/employeeRecords";
import { DEFAULT_DEPARTMENTS, normalizeDepartments } from "./data/employeeOptions";
import { csvToEmployees } from "./utils/csvEmployees";
import DepartmentsPage from "./pages/Departments";
import AuditLogPage from "./pages/AuditLog";
import AdminUsersPage from "./pages/AdminUsers";
import SettingsPage from "./pages/Settings";

import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Employee from "./pages/Employee";
import AddEmployee from "./pages/AddEmployee";
import EmployeeProfile from "./pages/EmployeeProfile";
import employeeData from "./data/employeeData";
import EditEmployee from "./pages/EditEmployee";
import Dashboard from "./pages/Dashboard";
import ManageEmployee from "./pages/ManageEmployee";
import Features from "./pages/Features";

// ================= GET LOGGED-IN USER =================


// ================= ROLE-BASED REDIRECT =================

const getUserHomePage = (user) => {
  return user?.role === "admin" ? "/dashboard" : "/employees";
};

// ================= PUBLIC ROUTE =================

// Logged-in users cannot return to the home, login,
// or signup pages.

const PublicRoute = ({ children }) => {
  const user = getLoggedInUser();

  if (user) {
    return <Navigate to={getUserHomePage(user)} replace />;
  }

  return children;
};

// ================= USER ROUTE =================

// Both regular users and administrators can access
// employee pages.

const UserRoute = ({ children }) => {
  const location = useLocation();
  const user = getLoggedInUser();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

// ================= ADMIN ROUTE =================

// Only administrators can access admin pages.

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const user = getLoggedInUser();

  // Not logged in: go to login.
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Regular user: redirect to employee directory.
  if (user.role !== "admin") {
    return <Navigate to="/employees" replace />;
  }

  return children;
};

// ================= APP =================

const App = () => {
  const [employees, setEmployees] = useState(() => {
    try {
      const savedEmployees = localStorage.getItem("employees");

      return parseDemoEmployees(savedEmployees, employeeData);
    } catch {
      return employeeData;
    }
  });

  // Keep employee records in browser storage for this frontend practice project.
  useEffect(() => {
    try {
      localStorage.setItem("employees", JSON.stringify(employees));
    } catch {
      notify(
        "Browser storage is full. Export or remove large photos; your latest change may not survive a refresh.",
        "error",
      );
    }
  }, [employees]);

  const [departments, setDepartments] = useState(() => {
    const employeeDepartments = employees.map((employee) => employee.department);

    try {
      const saved = JSON.parse(localStorage.getItem("epmsDepartments") || "null");
      const list = Array.isArray(saved) ? saved : DEFAULT_DEPARTMENTS;
      return normalizeDepartments([...list, ...employeeDepartments]);
    } catch {
      return normalizeDepartments([...DEFAULT_DEPARTMENTS, ...employeeDepartments]);
    }
  });

  const [audit, setAudit] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("epmsAudit") || "[]");
      return Array.isArray(saved) ? saved.slice(0, 500) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("epmsDepartments", JSON.stringify(departments));
    } catch {
      notify("Unable to save departments to browser storage.", "error");
    }
  }, [departments]);

  useEffect(() => {
    try {
      localStorage.setItem("epmsAudit", JSON.stringify(audit));
    } catch {
      notify("Unable to save activity history to browser storage.", "error");
    }
  }, [audit]);

  // Each action records the signed-in user's email, a timestamp, and a summary.
  const logChange = (action, subject, details = "") => {
    const user = getLoggedInUser();
    const entry = {
      id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`,
      at: new Date().toISOString(),
      actor: user?.email || "Unknown",
      action,
      subject,
      details,
    };

    setAudit((current) => [entry, ...current].slice(0, 500));
  };

  // ================= EMPLOYEE ACTIONS =================

  const addEmployee = (formData) => {
    if (employeeEmailExists(employees, formData.email)) {
      return false;
    }

    const employee = { ...formData, id: nextEmployeeId(employees) };
    setEmployees([...employees, employee]);
    logChange("Employee created", `${employee.name} (${employee.id})`, "New employee record");
    return employee;
  };

  const updateEmployee = (id, formData) => {
    if (employeeEmailExists(employees, formData.email, id)) {
      return false;
    }

    const previous = employees.find((employee) => employee.id === id);
    if (!previous) {
      return false;
    }

    const changedFields = Object.keys(formData).filter(
      (key) => formData[key] !== previous[key],
    );
    const visibleFields = new Set([
      "position", "department", "status", "employmentType", "manager", "hireDate",
    ]);

    const details = changedFields.map((key) => {
      if (visibleFields.has(key)) {
        return `${key}: ${previous[key] || "—"} → ${formData[key] || "—"}`;
      }
      return key === "image" ? "Photo updated" : `${key} updated`;
    }).join("; ");

    setEmployees(employees.map((employee) =>
      employee.id === id ? { ...employee, ...formData } : employee,
    ));

    if (changedFields.length) {
      logChange("Employee updated", `${formData.name} (${id})`, details);
    }

    return true;
  };

  const deleteEmployee = (id) => {
    const employee = employees.find((record) => record.id === id);
    if (!employee) {
      return false;
    }

    setEmployees(employees.filter((record) => record.id !== id));
    logChange("Employee deleted", `${employee.name} (${id})`, "Record deleted");
    return true;
  };

  // ================= CSV IMPORT =================

  const importCSV = (csv) => {
    const incomingEmployees = csvToEmployees(csv);
    const existingEmails = new Set(
      employees.map((employee) => String(employee.email || "").toLowerCase()),
    );
    const usedIds = new Set(employees.map((employee) => employee.id));
    let sequence = Math.max(0, ...employees.map((employee) =>
      Number(/^EMP(\d+)$/.exec(employee.id)?.[1] || 0),
    ));

    const records = [];
    let skipped = 0;

    for (const employee of incomingEmployees) {
      const email = employee.email.toLowerCase();

      if (existingEmails.has(email)) {
        skipped++;
        continue;
      }

      existingEmails.add(email);
      let id = employee.id;

      if (!id || usedIds.has(id)) {
        do {
          id = `EMP${String(++sequence).padStart(3, "0")}`;
        } while (usedIds.has(id));
      }

      usedIds.add(id);
      records.push({ ...employee, id, image: "" });
    }

    if (records.length) {
      setEmployees([...employees, ...records]);
      setDepartments((current) => normalizeDepartments([
        ...current,
        ...records.map((employee) => employee.department),
      ]));

      const importedIds = records.map((employee) => employee.id).slice(0, 30).join(", ");
      const summary = `Added ${records.length}; skipped ${skipped} duplicate emails. ` +
        `Employee IDs: ${importedIds}${records.length > 30 ? "…" : ""}`;
      logChange("CSV imported", `${records.length} employees`, summary);
    }

    return { added: records.length, skipped };
  };

  // ================= DEPARTMENT ACTIONS =================

  const addDepartment = (name) => {
    const cleanName = String(name).trim().replace(/\s+/g, " ");
    const alreadyExists = departments.some(
      (department) => department.toLowerCase() === cleanName.toLowerCase(),
    );

    if (!cleanName || alreadyExists) {
      return false;
    }

    setDepartments([...departments, cleanName].sort((a, b) => a.localeCompare(b)));
    logChange("Department created", cleanName);
    return true;
  };

  const renameDepartment = (oldName, newName) => {
    const cleanName = String(newName).trim().replace(/\s+/g, " ");
    const alreadyExists = departments.some((department) =>
      department.toLowerCase() === cleanName.toLowerCase() && department !== oldName,
    );

    if (!cleanName || alreadyExists) {
      return false;
    }

    if (oldName === cleanName) {
      return true;
    }

    setDepartments(departments.map((department) =>
      department === oldName ? cleanName : department,
    ));
    setEmployees(employees.map((employee) =>
      employee.department === oldName ? { ...employee, department: cleanName } : employee,
    ));
    logChange("Department renamed", `${oldName} → ${cleanName}`, "Updated employee department assignments");
    return true;
  };

  const removeDepartment = (name) => {
    if (employees.some((employee) => employee.department === name)) {
      return false;
    }

    setDepartments(departments.filter((department) => department !== name));
    logChange("Department deleted", name);
    return true;
  };

  const [notice, setNotice] = useState(null);
  useEffect(() => {
    const handler = (event) => setNotice(event.detail);
    window.addEventListener("epmsNotice", handler);
    return () => window.removeEventListener("epmsNotice", handler);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {notice && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed right-4 bottom-4 z-[100] max-w-sm rounded-xl border p-4 shadow-xl ${
            notice.type === "error"
              ? "bg-red-50 text-red-800 border-red-300 dark:bg-red-950 dark:text-red-200"
              : "bg-white text-green-900 border-green-200 dark:bg-gray-800 dark:text-green-200 dark:border-green-800"
          }`}
        >
          <div className="flex gap-3 items-start">
            <p className="text-sm flex-1">{notice.message}</p>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setNotice(null)}
              className="font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
      <Routes>
        {/* ================= PUBLIC PAGES ================= */}

        <Route
          path="/"
          element={
            <Home />
          }
        />

        <Route
          path="/home"
          element={
            <Home />
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        {/* About and Features remain publicly accessible. */}

        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />

        {/* ================= USER PAGES ================= */}

        <Route
          path="/employees"
          element={
            <UserRoute>
              <Employee employees={employees} departments={departments} />
            </UserRoute>
          }
        />

        <Route
          path="/employees/:id"
          element={
            <UserRoute>
              <EmployeeProfile employees={employees} deleteEmployee={deleteEmployee} />
            </UserRoute>
          }
        />

        {/* ================= ADMIN PAGES ================= */}

        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard employees={employees} departments={departments} audit={audit} />
            </AdminRoute>
          }
        />

        <Route
          path="/manage-employees"
          element={
            <AdminRoute>
              <ManageEmployee
                employees={employees}
                deleteEmployee={deleteEmployee}
                importCSV={importCSV}
              />
            </AdminRoute>
          }
        />

        <Route
          path="/addemployee"
          element={
            <AdminRoute>
              <AddEmployee addEmployee={addEmployee} departments={departments} />
            </AdminRoute>
          }
        />

        <Route
          path="/employees/:id/edit"
          element={
            <AdminRoute>
              <EditEmployee employees={employees} updateEmployee={updateEmployee} departments={departments} />
            </AdminRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <UserRoute>
              <SettingsPage logChange={logChange} />
            </UserRoute>
          }
        />

        <Route
          path="/departments"
          element={
            <AdminRoute>
              <DepartmentsPage
                departments={departments}
                employees={employees}
                addDepartment={addDepartment}
                renameDepartment={renameDepartment}
                removeDepartment={removeDepartment}
              />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-users"
          element={
            <AdminRoute>
              <AdminUsersPage logChange={logChange} />
            </AdminRoute>
          }
        />

        <Route
          path="/audit-log"
          element={
            <AdminRoute>
              <AuditLogPage audit={audit} />
            </AdminRoute>
          }
        />

        <Route
          path="*"
          element={
            <div className="mx-auto max-w-xl px-6 py-24 text-center text-gray-900 dark:text-gray-100">
              <h1 className="text-3xl font-bold">Page not found</h1>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                This page doesn't exist.
              </p>
              <a href="/" className="mt-6 inline-block text-green-700 dark:text-green-400 underline">
                Return home
              </a>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
