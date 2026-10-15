import { useState } from "react";
import Navbar from "../components/Navbar";
import EmployeeCard from "../components/EmployeeCard";


const Employee = ({ employees, departments = [] }) => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Status");




  // Statistics
  const totalEmployees = employees.length;

  // Search and filter
  const filteredEmployees = employees.filter((employee) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      String(employee.name || "").toLowerCase().includes(searchTerm) ||
      String(employee.id || "").toLowerCase().includes(searchTerm) ||
      String(employee.email || "").toLowerCase().includes(searchTerm) ||
      String(employee.position || "").toLowerCase().includes(searchTerm) ||
      String(employee.department || "").toLowerCase().includes(searchTerm);

    const matchesDepartment =
      department === "All Departments" || employee.department === department;

    const matchesStatus = status === "All Status" || employee.status === status;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const clearFilters = () => {
    setSearch("");
    setDepartment("All Departments");
    setStatus("All Status");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />


      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Employee Directory
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Search and view employee information.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <label htmlFor="employee-search" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Search Employees
              </label>

              <input
                id="employee-search"
                type="search"
                placeholder="Search by name, ID, email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-700
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
                           placeholder-gray-400 dark:placeholder-gray-500
                           rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Department */}
            <div>
              <label htmlFor="filter-department" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Department
              </label>

              <select
                id="filter-department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-700
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
                           rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>All Departments</option>
                {departments.map(dept => <option key={dept}>{dept}</option>)}
              </select>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="filter-status" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>

              <select
                id="filter-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-700
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
                           rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>On Leave</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* Filter Information */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-5 gap-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {filteredEmployees.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {totalEmployees}
              </span>{" "}
              employees
            </p>

            {(search ||
              department !== "All Departments" ||
              status !== "All Status") && (
              <button
                onClick={clearFilters}
                className="text-sm font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Employee Directory */}
        {filteredEmployees.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-12 text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              No Employees Found
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Try changing your search or filter options, or add an employee from Manage Employees.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 bg-green-700 text-white px-5 py-2.5
                         rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
