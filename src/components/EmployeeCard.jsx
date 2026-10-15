import EmployeeAvatar from "./EmployeeAvatar";
import { Link } from "react-router-dom";

import { Mail, Phone } from "lucide-react";

const EmployeeCard = ({ employee }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800
                 shadow-sm overflow-hidden
                 hover:shadow-lg hover:-translate-y-1
                 transition-all duration-300"
    >
      {/* Top section */}
      <div className="bg-green-50 dark:bg-green-950/40 h-24"></div>

      {/* Employee photo */}
      <div className="flex justify-center -mt-12">
        <EmployeeAvatar employee={employee} className="w-24 h-24 rounded-full object-cover
                     border-2 border-green-600 dark:border-green-400
                     shadow-md"
        />
      </div>

      {/* Employee information */}
      <div className="px-5 pb-5 text-center">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-3">
          {employee.name}
        </h2>

        <p className="text-green-700 dark:text-green-400 font-medium text-sm mt-1">
          {employee.position}
        </p>

        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          {employee.department}
        </p>

        {/* Status */}
        <div className="mt-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold
              ${
                employee.status === "Active"
                  ? "bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400"
                  : employee.status === "On Leave" ? "bg-yellow-100 dark:bg-yellow-950/60 text-yellow-700 dark:text-yellow-400" : "bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400"
              }`}
          >
            ● {employee.status}
          </span>
        </div>

        {/* Contact */}
        <div className="mt-5 space-y-2 text-left">
          <div className="flex items-center gap-2 text-sm break-all text-gray-500 dark:text-gray-400">
            <Mail size={16} />
            {employee.email}
          </div>

          <div className="flex items-center gap-2 text-sm break-all text-gray-500 dark:text-gray-400">
            <Phone size={16} />
            {employee.phone}
          </div>
        </div>

        {/* View profile */}
        <Link
          to={`/employees/${employee.id}`}
          className="block mt-5 bg-green-700 text-white
                     py-2.5 rounded-lg font-semibold
                     hover:bg-green-800 transition"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
