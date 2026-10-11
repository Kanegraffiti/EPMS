// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";

// const Dashboard = ({ employees }) => {
//   const totalEmployees = employees.length;

//   const activeEmployees = employees.filter(
//     (employee) => employee.status === "Active",
//   ).length;

//   const employeesOnLeave = employees.filter(
//     (employee) => employee.status === "On Leave",
//   ).length;

//   const departments = new Set(employees.map((employee) => employee.department))
//     .size;

//   const departmentCounts = employees.reduce((counts, employee) => {
//     counts[employee.department] = (counts[employee.department] || 0) + 1;

//     return counts;
//   }, {});

//   const recentEmployees = [...employees].slice(-5).reverse();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="max-w-7xl mx-auto px-6 py-10">
//         {/* Dashboard Header */}

//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

//             <p className="text-gray-500 mt-1">
//               Welcome to your Employee Profile Management System.
//             </p>
//           </div>

//           <Link
//             to="/manage-employees"
//             className="bg-green-700 text-white px-5 py-3 rounded-lg
//              font-semibold hover:bg-green-800 transition"
//           >
//             Manage Employees
//           </Link>
//         </div>

//         {/* Statistics */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
//           {/* Total Employees */}

//           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//             <p className="text-gray-500 text-sm">Total Employees</p>

//             <h2 className="text-3xl font-bold text-gray-900 mt-2">
//               {totalEmployees}
//             </h2>
//           </div>

//           {/* Active Employees */}

//           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//             <p className="text-gray-500 text-sm">Active Employees</p>

//             <h2 className="text-3xl font-bold text-green-700 mt-2">
//               {activeEmployees}
//             </h2>
//           </div>

//           {/* Employees On Leave */}

//           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//             <p className="text-gray-500 text-sm">On Leave</p>

//             <h2 className="text-3xl font-bold text-yellow-600 mt-2">
//               {employeesOnLeave}
//             </h2>
//           </div>

//           {/* Departments */}

//           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//             <p className="text-gray-500 text-sm">Departments</p>

//             <h2 className="text-3xl font-bold text-blue-600 mt-2">
//               {departments}
//             </h2>
//           </div>
//         </div>

//         {/* Dashboard Sections */}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
//           {/* Department Breakdown */}

//           <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900">
//                 Department Breakdown
//               </h2>

//               <p className="text-sm text-gray-500 mt-1">
//                 Employees across each department
//               </p>
//             </div>

//             <div className="space-y-5">
//               {Object.entries(departmentCounts).map(([department, count]) => {
//                 const percentage =
//                   totalEmployees === 0 ? 0 : (count / totalEmployees) * 100;

//                 return (
//                   <div key={department}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-sm font-medium text-gray-700">
//                         {department}
//                       </span>

//                       <span className="text-sm font-semibold text-gray-900">
//                         {count}
//                       </span>
//                     </div>

//                     <div className="w-full bg-gray-100 rounded-full h-2.5">
//                       <div
//                         className="bg-green-600 h-2.5 rounded-full"
//                         style={{
//                           width: `${percentage}%`,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Recent Employees */}

//           <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Recent Employees
//                 </h2>

//                 <p className="text-sm text-gray-500 mt-1">
//                   Recently added employees
//                 </p>
//               </div>

//               <Link
//                 to="/employees"
//                 className="text-sm font-semibold text-green-700
//                            hover:text-green-800"
//               >
//                 View All
//               </Link>
//             </div>

//             <div className="space-y-4">
//               {recentEmployees.length > 0 ? (
//                 recentEmployees.map((employee) => (
//                   <div
//                     key={employee.id}
//                     className="flex items-center justify-between
//                                border-b border-gray-100 pb-4
//                                last:border-0"
//                   >
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={employee.image}
//                         alt={employee.name}
//                         className="w-12 h-12 rounded-full object-cover"
//                       />

//                       <div>
//                         <h3 className="font-semibold text-gray-900">
//                           {employee.name}
//                         </h3>

//                         <p className="text-sm text-gray-500">
//                           {employee.position}
//                         </p>
//                       </div>
//                     </div>

//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold
//                         ${
//                           employee.status === "Active"
//                             ? "bg-green-100 text-green-700"
//                             : employee.status === "On Leave"
//                               ? "bg-yellow-100 text-yellow-700"
//                               : "bg-red-100 text-red-700"
//                         }`}
//                     >
//                       {employee.status}
//                     </span>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500 text-sm">No employees available.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Dashboard = ({ employees = [] }) => {
  // ================= EMPLOYEE STATISTICS =================

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active",
  ).length;

  const employeesOnLeave = employees.filter(
    (employee) => employee.status === "On Leave",
  ).length;

  const departments = new Set(
    employees.map((employee) => employee.department).filter(Boolean),
  ).size;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
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

          {/* Departments */}

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Departments
            </p>

            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
              {departments}
            </h2>
          </div>
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
                      <img
                        src={employee.image || "/images/avatar.jpg"}
                        alt={employee.name || "Employee"}
                        className="w-12 h-12 rounded-full object-cover bg-gray-100 dark:bg-gray-800 flex-shrink-0"
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
