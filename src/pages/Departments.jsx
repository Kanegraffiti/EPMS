import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { notify } from "../utils/notify";

const inputClass =
  "w-full rounded-lg border border-gray-300 dark:border-gray-700 " +
  "bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100";

const Departments = ({
  departments,
  employees,
  addDepartment,
  renameDepartment,
  removeDepartment,
}) => {
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(null);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();

    if (!addDepartment(name)) {
      setError("Enter a unique department name.");
      return;
    }

    setName("");
    setError("");
    notify("Department added.");
  };

  const handleRename = (event) => {
    event.preventDefault();

    if (!renameDepartment(editing, newName)) {
      setError("Choose a unique department name.");
      return;
    }

    setEditing(null);
    setError("");
    notify("Department renamed and employee assignments updated.");
  };

  const handleDelete = (department) => {
    // An employee must be reassigned before their department is removed.
    if (employees.some((employee) => employee.department === department)) {
      setError("Reassign employees before deleting this department.");
      return;
    }

    if (!window.confirm(`Delete the ${department} department?`)) {
      return;
    }

    if (removeDepartment(department)) {
      setError("");
      notify("Department removed.");
    }
  };

  const startEditing = (department) => {
    setEditing(department);
    setNewName(department);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-9">
        <Link to="/dashboard" className="text-green-700 dark:text-green-400 hover:underline">
          ← Dashboard
        </Link>

        <h1 className="text-3xl font-bold mt-5">Departments</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage departments used throughout employee records and filters.
        </p>

        {error && (
          <p
            role="alert"
            className="mt-5 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300"
          >
            {error}
          </p>
        )}

        {/* Create a department */}
        <form
          onSubmit={handleAdd}
          className="flex flex-wrap gap-3 my-6 bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800"
        >
          <label htmlFor="new-department" className="w-full text-sm font-bold">
            Add department
          </label>

          <input
            id="new-department"
            maxLength={80}
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Department name"
            className={`${inputClass} flex-1 min-w-40`}
          />

          <button className="rounded-lg bg-green-700 hover:bg-green-800 text-white px-5 py-3 font-semibold">
            Add
          </button>
        </form>

        {/* Existing departments */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
          {departments.map((department) => {
            const employeeCount = employees.filter(
              (employee) => employee.department === department,
            ).length;

            return (
              <div
                key={department}
                className="p-5 flex flex-wrap gap-4 justify-between items-center"
              >
                {editing === department ? (
                  <form onSubmit={handleRename} className="flex gap-2 flex-1 flex-wrap">
                    <label htmlFor="rename-department" className="sr-only">
                      Rename department
                    </label>

                    <input
                      id="rename-department"
                      required
                      maxLength={80}
                      value={newName}
                      onChange={(event) => setNewName(event.target.value)}
                      className={`${inputClass} flex-1 min-w-40`}
                    />

                    <button className="bg-green-700 text-white rounded-lg px-4">Save</button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditing(null);
                        setError("");
                      }}
                      className="border rounded-lg px-4 dark:border-gray-600"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <div>
                      <p className="font-bold">{department}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {employeeCount} employees
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => startEditing(department)}
                        className="px-4 py-2 rounded-lg border dark:border-gray-700"
                      >
                        Rename
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(department)}
                        disabled={employeeCount > 0}
                        title="Reassign employees before deletion"
                        className="px-4 py-2 rounded-lg border border-red-300 text-red-600 disabled:opacity-40"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}

          {!departments.length && <p className="p-6">No departments yet.</p>}
        </div>
      </main>
    </div>
  );
};

export default Departments;
