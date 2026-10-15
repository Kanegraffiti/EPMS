import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import { notify } from "../utils/notify";

const EditEmployee = ({ employees, updateEmployee, departments }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = employees.find((item) => item.id === id);

  const handleSave = (formData) => {
    if (!updateEmployee(id, formData)) {
      return false;
    }

    notify(`${formData.name}'s changes have been saved.`);
    navigate(`/employees/${id}`, { state: { from: "/manage-employees" } });
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Link
          to="/manage-employees"
          className="text-green-700 dark:text-green-400 hover:underline"
        >
          ← Back to Manage Employees
        </Link>

        {employee ? (
          <>
            <h1 className="text-3xl font-bold mt-6">Edit employee</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Update {employee.name}'s profile.
            </p>

            <section className="mt-7 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-5 sm:p-8">
              <EmployeeForm
                key={employee.id}
                employee={employee}
                departments={departments}
                onSave={handleSave}
                onCancel={() => navigate(`/employees/${id}`)}
                actionLabel="Save changes"
              />
            </section>
          </>
        ) : (
          <div className="mt-12 text-center">
            <h1 className="text-2xl font-bold">Employee not found</h1>
            <p className="mt-2 text-gray-500">This employee may have been removed.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default EditEmployee;
