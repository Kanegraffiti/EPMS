import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import { notify } from "../utils/notify";

const AddEmployee = ({ addEmployee, departments }) => {
  const navigate = useNavigate();

  const handleSave = (formData) => {
    const employee = addEmployee(formData);

    if (!employee) {
      return false;
    }

    notify(`${employee.name} added successfully.`);
    navigate("/manage-employees");
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <Link
          to="/manage-employees"
          className="text-green-700 dark:text-green-400 hover:underline"
        >
          ← Back to Manage Employees
        </Link>

        <h1 className="text-3xl font-bold mt-6">Add employee</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Enter the details of the new employee.
        </p>

        <section className="mt-7 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-5 sm:p-8">
          <EmployeeForm
            departments={departments}
            onSave={handleSave}
            actionLabel="Add employee"
            onCancel={() => navigate("/manage-employees")}
          />
        </section>
      </main>
    </div>
  );
};

export default AddEmployee;
