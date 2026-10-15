import { useState } from "react";
import EmployeeAvatar from "./EmployeeAvatar";
import { EMPLOYEE_STATUSES, EMPLOYMENT_TYPES } from "../data/employeeOptions";
import { resizePhoto } from "../utils/imageUpload";

// The same form is used when adding and editing an employee.
// Keeping the fields together makes future updates easier.
const inputClass =
  "w-full rounded-lg border border-gray-300 dark:border-gray-700 " +
  "bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 " +
  "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500";

const labelClass = "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2";

const employeeFields = [
  { name: "name", label: "Full name", required: true, placeholder: "Full name" },
  {
    name: "email",
    label: "Email address",
    type: "email",
    required: true,
    placeholder: "name@example.com",
  },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "+234 ..." },
  {
    name: "position",
    label: "Job title",
    required: true,
    placeholder: "e.g. Frontend Developer",
  },
  { name: "hireDate", label: "Hire date", type: "date" },
  { name: "dateOfBirth", label: "Date of birth", type: "date" },
  { name: "manager", label: "Reporting manager", placeholder: "Manager's name" },
  { name: "address", label: "Home address", placeholder: "Address" },
  {
    name: "emergencyContactName",
    label: "Emergency contact name",
    placeholder: "Contact's full name",
  },
  {
    name: "emergencyContactPhone",
    label: "Emergency contact phone",
    type: "tel",
    placeholder: "+234 ...",
  },
];

const EmployeeForm = ({ employee, departments = [], onSave, onCancel, actionLabel }) => {
  const [formData, setFormData] = useState(() => ({
    ...Object.fromEntries(
      employeeFields.map((field) => [field.name, employee?.[field.name] || ""]),
    ),
    department: employee?.department || "",
    status: employee?.status || "Active",
    employmentType: employee?.employmentType || "Full-time",
    image: employee?.image || "",
  }));

  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError("");
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handlePhotoChange = async (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setError("");
    setUploading(true);

    try {
      const image = await resizePhoto(file);
      setFormData((current) => ({ ...current, image }));
    } catch (reason) {
      setError(reason.message || "Could not process the photo.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (uploading) {
      return;
    }

    const values = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [
        key,
        typeof value === "string" && key !== "image" ? value.trim() : value,
      ]),
    );

    if (employeeFields.some((field) => field.required && !values[field.name]) || !values.department) {
      setError("Please complete the required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Enter a valid email address.");
      return;
    }

    const today = new Date().toISOString().slice(0, 10);
    if (values.dateOfBirth && values.dateOfBirth > today) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    if (values.hireDate && values.dateOfBirth && values.hireDate < values.dateOfBirth) {
      setError("Hire date must be after date of birth.");
      return;
    }

    if (onSave(values) === false) {
      setError("An employee with that email already exists.");
    }
  };

  // Preserve the current department if an older record uses a discontinued name.
  const departmentOptions = [...new Set([
    ...departments,
    ...(formData.department && !departments.includes(formData.department)
      ? [formData.department]
      : []),
  ])];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p
          role="alert"
          className="rounded-lg p-3 bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-200"
        >
          {error}
        </p>
      )}

      {/* Profile photo */}
      <section className="space-y-3">
        <h2 className="font-bold text-lg">Profile photo</h2>

        <div className="flex gap-4 items-center flex-wrap">
          <EmployeeAvatar
            employee={{ name: formData.name || "Employee", image: formData.image }}
            className="w-20 h-20 rounded-full object-cover border-2 border-green-300"
          />

          <div className="flex-1 min-w-48">
            <label className={labelClass} htmlFor="employee-photo">
              Upload or replace photo
            </label>

            <input
              id="employee-photo"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handlePhotoChange}
              className="w-full text-sm"
              aria-describedby="photo-helper"
            />

            <p id="photo-helper" className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              JPG, PNG, WebP · maximum 5 MB. Photos are compressed automatically.
            </p>

            {uploading && <p role="status">Processing photo…</p>}

            {formData.image && (
              <button
                type="button"
                onClick={() => setFormData((current) => ({ ...current, image: "" }))}
                className="text-red-600 dark:text-red-400 text-sm underline mt-2"
              >
                Remove photo
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Employee details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {employeeFields.map((field) => (
          <div key={field.name} className={field.name === "address" ? "sm:col-span-2" : ""}>
            <label className={labelClass} htmlFor={`employee-${field.name}`}>
              {field.label}{field.required ? " *" : ""}
            </label>

            <input
              id={`employee-${field.name}`}
              name={field.name}
              type={field.type || "text"}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required || false}
              maxLength={field.type === "date" ? undefined : field.name === "address" ? 300 : 254}
              className={inputClass}
            />
          </div>
        ))}

        <div>
          <label className={labelClass} htmlFor="employee-department">
            Department *
          </label>
          <select
            id="employee-department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Select department</option>
            {departmentOptions.map((department) => (
              <option key={department} value={department}>{department}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="employee-status">
            Employment status
          </label>
          <select
            id="employee-status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={inputClass}
          >
            {EMPLOYEE_STATUSES.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="employee-employmentType">
            Employment type
          </label>
          <select
            id="employee-employmentType"
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className={inputClass}
          >
            {EMPLOYMENT_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end flex-wrap gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={uploading}
          className="px-5 py-3 rounded-lg bg-green-700 hover:bg-green-800 text-white font-semibold disabled:opacity-50"
        >
          {uploading ? "Processing…" : actionLabel}
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
