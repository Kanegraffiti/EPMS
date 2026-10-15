import EmployeeAvatar from "../components/EmployeeAvatar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Dashboard = ({ employees = [], departments = [], audit = [] }) => {
  // ================= EMPLOYEE STATISTICS =================

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active",
  ).length;

  const employeesOnLeave = employees.filter(
    (employee) => employee.status === "On Leave",
  ).length;

  const inactiveEmployees = employees.filter(e => e.status === "Inactive").length;
  const departmentCount = departments.length;

  // ================= DEPARTMENT BREAKDOWN =================

  const departmentCounts = employees.reduce((counts, employee) => {
    const department = employee.department || "Unassigned";

    counts[department] = (counts[department] || 0) + 1;

    return counts;
  }, {});

  // ================= RECENT EMPLOYEES =================

  const recentEmployees = [...employees].slice(-5).reverse();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* ================= DASHBOARD HEADER ================= */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Dashboard
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Welcome to your Employee Profile Management System.
            </p>
          </div>

          <Link
            to="/manage-employees"
            className="inline-flex items-center justify-center bg-green-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-200"
          >
            Manage Employees
          </Link>
        </div>

        {/* ================= STATISTICS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-8">
          {/* Total Employees */}

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Total Employees
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">
              {totalEmployees}
            </h2>
          </div>

          {/* Active Employees */}

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Active Employees
            </p>

            <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mt-2">
              {activeEmployees}
            </h2>
          </div>

          {/* Employees On Leave */}

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-sm">On Leave</p>

            <h2 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
              {employeesOnLeave}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Inactive</p>
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mt-2">{inactiveEmployees}</h2>
          </div>
          {/* Departments */}

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Departments
            </p>

            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
              {departmentCount}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <Link to="/departments" className="rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-semibold">Manage departments</Link>
          <Link to="/admin-users" className="rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-semibold">Manage administrators</Link>
          <Link to="/audit-log" className="rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-semibold">Activity log ({audit.length})</Link>
        </div>
        {/* ================= DASHBOARD SECTIONS ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* ================= DEPARTMENT BREAKDOWN ================= */}

          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 transition-colors duration-300">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Department Breakdown
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Employees across each department
              </p>
            </div>

            <div className="space-y-5">
              {Object.entries(departmentCounts).length > 0 ? (
                Object.entries(departmentCounts).map(([department, count]) => {
                  const percentage =
                    totalEmployees === 0 ? 0 : (count / totalEmployees) * 100;

                  return (
                    <div key={department}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {department}
                        </span>

                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                          {count}
                        </span>
                      </div>

                      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5">
                        <div
                          className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full transition-all duration-300"
                          style={{
                            width: `${percentage}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  No department data available yet.
                </p>
              )}
            </div>
          </section>

          {/* ================= RECENT EMPLOYEES ================= */}

          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 transition-colors duration-300">
            <div className="flex items-center justify-between mb-6 gap-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Recent Employees
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Recently added employees
                </p>
              </div>

              <Link
                to="/employees"
                className="text-sm font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 whitespace-nowrap transition"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentEmployees.length > 0 ? (
                recentEmployees.map((employee) => (
                  <div
                    key={employee.id}
                    className="flex items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <EmployeeAvatar employee={employee} className="w-12 h-12 rounded-full object-cover bg-gray-100 dark:bg-gray-800 flex-shrink-0"
                      />

                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {employee.name || "Unnamed Employee"}
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {employee.position || "No position assigned"}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                        employee.status === "Active"
                          ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                          : employee.status === "On Leave"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
                            : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                      }`}
                    >
                      {employee.status || "Unknown"}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm py-4">
                  No employees available yet.
                </p>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
