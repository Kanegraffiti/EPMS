import { useRef, useState } from "react";
import EmployeeAvatar from "../components/EmployeeAvatar";
import { employeesToCSV, downloadFile } from "../utils/csvEmployees";
import { notify } from "../utils/notify";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ManageEmployee = ({ employees, deleteEmployee, importCSV }) => {
  const fileInput = useRef(null);
  const [importStatus, setImportStatus] = useState("");

  const handleImport = async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      if (file.size > 2 * 1024 * 1024) {
        throw new Error("CSV must be smaller than 2 MB.");
      }

      const result = importCSV(await file.text());
      const message = `Imported ${result.added} employee(s); skipped ${result.skipped} existing emails.`;
      setImportStatus(message);
      notify(message);
    } catch (error) {
      setImportStatus(error.message);
      notify(error.message, "error");
    } finally {
      event.target.value = "";
    }
  };

  const handleExportJSON = () => {
    downloadFile(JSON.stringify(employees, null, 2), "EPMS-employees.json", "application/json");
    notify("Employee records exported.");
  };

  const handleExportCSV = () => {
    downloadFile("\uFEFF" + employeesToCSV(employees), "EPMS-employees.csv", "text/csv;charset=utf-8");
    notify("CSV exported.");
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!confirmDelete) {
      return;
    }

    deleteEmployee(id);
    notify("Employee removed.");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Manage Employees
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Add, edit, and manage employee records.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Back Button */}
            <Link
              to="/dashboard"
              className="border border-green-200 dark:border-green-800
                         text-green-700 dark:text-green-400
                         px-5 py-3 rounded-lg font-semibold
                         hover:bg-green-50 dark:hover:bg-green-950/40
                         transition text-center"
            >
              ← Back
            </Link>

            <button
              type="button"
              onClick={handleExportJSON}
              className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Export JSON
            </button>
            <button
              type="button"
              onClick={handleExportCSV}
              className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Export CSV
            </button>
            <input
              ref={fileInput}
              type="file"
              accept=".csv,text/csv"
              onChange={handleImport}
              aria-label="Import employees CSV"
              className="sr-only"
            />
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Import CSV
            </button>
            {/* Add Employee Button */}
            <Link
              to="/addemployee"
              className="bg-green-700 text-white px-5 py-3 rounded-lg
                         font-semibold hover:bg-green-800 transition text-center"
            >
              + Add Employee
            </Link>
          </div>
        </div>

        {importStatus && (
          <p role="status" className="mb-5 text-sm text-green-700 dark:text-green-400">
            {importStatus}
          </p>
        )}
        {/* Employee Count */}
        <div
          className="bg-white dark:bg-gray-900
                     border border-gray-100 dark:border-gray-800
                     rounded-xl shadow-sm p-6 mb-6"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Employees
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-1">
            {employees.length}
          </h2>
        </div>

        {/* Employee Management Table */}
        <div
          className="bg-white dark:bg-gray-900
                     border border-gray-100 dark:border-gray-800
                     rounded-xl shadow-sm overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Employee Records
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage your employee information from here.
            </p>
          </div>

          {employees.length === 0 && (
            <div className="p-10 text-center text-gray-600 dark:text-gray-300">
              No employees yet. Select{" "}
              <Link to="/addemployee" className="font-semibold text-green-700 dark:text-green-400 underline">
                Add Employee
              </Link>{" "}
              to create one.
            </div>
          )}
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800/70">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Employee
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    ID
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Position
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Department
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Status
                  </th>

                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-t border-gray-100 dark:border-gray-800
                               hover:bg-gray-50 dark:hover:bg-gray-800/50
                               transition"
                  >
                    {/* Employee */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <EmployeeAvatar employee={employee} className="w-10 h-10 rounded-full object-cover
                                     border-2 border-green-200 dark:border-green-700"
                        />

                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            {employee.name}
                          </p>

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {employee.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {employee.id}
                    </td>

                    {/* Position */}
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {employee.position}
                    </td>

                    {/* Department */}
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {employee.department}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          employee.status === "Active"
                            ? "bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400"
                            : employee.status === "On Leave"
                              ? "bg-yellow-100 dark:bg-yellow-950/60 text-yellow-700 dark:text-yellow-400"
                              : "bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/employees/${employee.id}`}
                          state={{ from: "/manage-employees" }}
                          className="px-3 py-2
                                     border border-gray-200 dark:border-gray-700
                                     text-gray-700 dark:text-gray-300
                                     rounded-lg text-sm font-semibold
                                     hover:bg-gray-50 dark:hover:bg-gray-800
                                     transition"
                        >
                          View
                        </Link>

                        <Link
                          to={`/employees/${employee.id}/edit`}
                          className="px-3 py-2
                                     border border-green-200 dark:border-green-800
                                     text-green-700 dark:text-green-400
                                     rounded-lg text-sm font-semibold
                                     hover:bg-green-50 dark:hover:bg-green-950/40
                                     transition"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="px-3 py-2
                                     border border-red-200 dark:border-red-800
                                     text-red-600 dark:text-red-400
                                     rounded-lg text-sm font-semibold
                                     hover:bg-red-50 dark:hover:bg-red-950/40
                                     transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Employee Cards */}
          <div className="md:hidden divide-y divide-gray-100 dark:divide-gray-800">
            {employees.map((employee) => (
              <div key={employee.id} className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <EmployeeAvatar employee={employee} className="w-12 h-12 rounded-full object-cover
                               border-2 border-green-200 dark:border-green-700"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {employee.name}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {employee.id}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      Position:
                    </span>{" "}
                    {employee.position}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      Department:
                    </span>{" "}
                    {employee.department}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      Status:
                    </span>{" "}
                    {employee.status}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Link
                    to={`/employees/${employee.id}`}
                    state={{ from: "/manage-employees" }}
                    className="text-center px-2 py-2
                               border border-gray-200 dark:border-gray-700
                               text-gray-700 dark:text-gray-300
                               rounded-lg text-sm font-semibold
                               hover:bg-gray-50 dark:hover:bg-gray-800
                               transition"
                  >
                    View
                  </Link>

                  <Link
                    to={`/employees/${employee.id}/edit`}
                    className="text-center px-2 py-2
                               border border-green-200 dark:border-green-800
                               text-green-700 dark:text-green-400
                               rounded-lg text-sm font-semibold
                               hover:bg-green-50 dark:hover:bg-green-950/40
                               transition"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="px-2 py-2
                               border border-red-200 dark:border-red-800
                               text-red-600 dark:text-red-400
                               rounded-lg text-sm font-semibold
                               hover:bg-red-50 dark:hover:bg-red-950/40
                               transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {employees.length === 0 && (
            <div className="text-center py-16 px-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                No Employees
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                There are currently no employee records.
              </p>

              <Link
                to="/addemployee"
                className="inline-block mt-5 bg-green-700 text-white
                           px-5 py-2.5 rounded-lg font-semibold
                           hover:bg-green-800 transition"
              >
                + Add Employee
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageEmployee;
