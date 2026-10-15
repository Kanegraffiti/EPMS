import EmployeeAvatar from "../components/EmployeeAvatar";
import Navbar from "../components/Navbar";
import { getLoggedInUser } from "../utils/demoAuth";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { Mail, Phone, Building2, Briefcase, ArrowLeft } from "lucide-react";
import { notify } from "../utils/notify";

const EmployeeProfile = ({ employees, deleteEmployee }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Find the employee whose ID matches the URL
  const employee = employees.find((employee) => employee.id === id);

  // Where should the Back button go?
  // If we came from Manage Employees, go there.
  // Otherwise, go to the Employee Directory.
  const backPath = location.state?.from || "/employees";
  const isAdmin = getLoggedInUser()?.role === "admin";

  const handleDelete = () => {
    if (!window.confirm(`Permanently delete ${employee.name} (${employee.id})?`)) {
      return;
    }

    if (deleteEmployee(employee.id)) {
      notify("Employee deleted.");
      navigate("/manage-employees", { replace: true });
    }
  };

  // If employee doesn't exist
  if (!employee) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Employee Not Found
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            The employee you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate(backPath)}
            className="inline-flex items-center gap-2 mt-5
                       text-green-700 dark:text-green-400 font-semibold
                       hover:text-green-800 transition"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(backPath)}
          className="inline-flex items-center gap-2
                     text-green-700 dark:text-green-400 font-medium
                     hover:text-green-900 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Profile Header */}
        <div
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800
                     overflow-hidden mt-6"
        >
          <div className="h-36 bg-green-700"></div>

          <div className="px-6 pb-8">
            <div className="flex flex-col md:flex-row md:items-end gap-5 -mt-16">
              <EmployeeAvatar employee={employee} className="w-32 h-32 rounded-full object-cover
                           border-4 border-white dark:border-gray-900 shadow-lg"
              />

              <div className="flex-1 pb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {employee.name}
                </h1>

                <p className="text-green-700 dark:text-green-400 font-medium mt-1">
                  {employee.position}
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Employee ID: {employee.id}
                </p>
              </div>

              <div className="pb-3 flex items-center gap-3 flex-wrap">
                {isAdmin && (
                  <>
                    <button
                      type="button"
                      onClick={() => navigate(`/employees/${id}/edit`)}
                      className="rounded-lg px-3 py-2 bg-green-700 text-white hover:bg-green-800 text-sm font-semibold"
                    >
                      Edit employee
                    </button>
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="rounded-lg px-3 py-2 border border-red-400 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-sm font-semibold"
                    >
                      Delete employee
                    </button>
                  </>
                )}
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    employee.status === "Active"
                      ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400"
                      : employee.status === "On Leave"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  ● {employee.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Contact Information */}
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800
                       shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Contact Information
            </h2>

            <div className="mt-5 space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 p-3 rounded-lg">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>

                  <p className="font-medium break-all text-gray-800 dark:text-gray-100">{employee.email}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 p-3 rounded-lg">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>

                  <p className="font-medium text-gray-800 dark:text-gray-100">{employee.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Employment Information */}
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800
                       shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Employment Information
            </h2>

            <div className="mt-5 space-y-5">
              {/* Department */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 p-3 rounded-lg">
                  <Building2 size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Department</p>

                  <p className="font-medium text-gray-800 dark:text-gray-100">
                    {employee.department}
                  </p>
                </div>
              </div>

              {/* Position */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 p-3 rounded-lg">
                  <Briefcase size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Position</p>

                  <p className="font-medium text-gray-800 dark:text-gray-100">
                    {employee.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-5">Additional information</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              ["Hire date", "hireDate"],
              ["Date of birth", "dateOfBirth"],
              ["Reporting manager", "manager"],
              ["Employment type", "employmentType"],
              ["Address", "address"],
              ["Emergency contact", "emergencyContactName"],
              ["Emergency contact phone", "emergencyContactPhone"],
            ].map(([label, key]) => (
              <div key={key} className="min-w-0">
                <dt className="text-xs text-gray-500 dark:text-gray-400">
                  {label}
                </dt>
                <dd className="mt-1 break-words font-semibold text-gray-800 dark:text-gray-100">
                  {employee[key] || "Not provided"}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
};

export default EmployeeProfile;
