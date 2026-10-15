import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { downloadFile } from "../utils/csvEmployees";

const AuditLog = ({ audit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivity = audit.filter((entry) =>
    [entry.actor, entry.action, entry.subject, entry.details].some((value) =>
      String(value || "").toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  const handleExport = () => {
    downloadFile(JSON.stringify(audit, null, 2), "EPMS-activity.json", "application/json");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-9">
        <Link to="/dashboard" className="text-green-700 dark:text-green-400 hover:underline">
          ← Dashboard
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
          <div>
            <h1 className="text-3xl font-bold">Activity history</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              A record of employee, department and administrator changes.
            </p>
          </div>

          <button
            type="button"
            onClick={handleExport}
            className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3"
          >
            Export history
          </button>
        </div>

        <label htmlFor="audit-search" className="sr-only">
          Search activity
        </label>
        <input
          id="audit-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search actions, people or records"
          className="w-full my-6 px-4 py-3 border rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700"
        />

        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl divide-y divide-gray-100 dark:divide-gray-800">
          {filteredActivity.map((entry) => (
            <article key={entry.id} className="p-5 flex flex-col md:flex-row md:gap-6">
              <div className="md:w-52 flex-shrink-0 text-xs text-gray-500 dark:text-gray-400">
                <time dateTime={entry.at}>{new Date(entry.at).toLocaleString()}</time>
                <p className="mt-1 break-all">{entry.actor}</p>
              </div>

              <div>
                <h2 className="font-semibold">{entry.action}</h2>
                <p className="text-sm mt-1">{entry.subject}</p>
                {entry.details && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {entry.details}
                  </p>
                )}
              </div>
            </article>
          ))}

          {!filteredActivity.length && (
            <p className="p-7 text-gray-500 dark:text-gray-400">
              No matching activity recorded.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default AuditLog;
