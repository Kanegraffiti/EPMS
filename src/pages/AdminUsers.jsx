import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getLoggedInUser } from "../utils/demoAuth";
import { createAccount, readAccounts, saveAccounts, normalizeEmail } from "../utils/accounts";
import { notify } from "../utils/notify";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 " +
  "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100";

const adminFields = [
  { name: "firstName", label: "First name" },
  { name: "lastName", label: "Last name" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Temporary password", type: "password" },
];

const emptyDetails = { firstName: "", lastName: "", email: "", password: "" };

const AdminUsers = ({ logChange }) => {
  const [accounts, setAccounts] = useState(readAccounts);
  const [formData, setFormData] = useState(emptyDetails);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const syncAccounts = () => setAccounts(readAccounts());
    window.addEventListener("epmsAccountsChange", syncAccounts);

    return () => window.removeEventListener("epmsAccountsChange", syncAccounts);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError("");
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      // New accounts are added to this browser's demo account list.
      const account = await createAccount({ ...formData, role: "admin" });
      setFormData(emptyDetails);
      logChange("Administrator created", account.email, `${account.firstName} ${account.lastName}`);
      notify("Administrator account created.");
    } catch (reason) {
      setError(reason.message || "Account could not be created.");
    } finally {
      setBusy(false);
    }
  };

  const handleRemove = (account) => {
    const currentEmail = normalizeEmail(getLoggedInUser()?.email);

    if (normalizeEmail(account.email) === currentEmail) {
      setError("You cannot remove your current account.");
      return;
    }

    if (!window.confirm(`Delete the account for ${account.email}?`)) {
      return;
    }

    try {
      const remaining = readAccounts().filter(
        (item) => normalizeEmail(item.email) !== normalizeEmail(account.email),
      );
      saveAccounts(remaining);
      logChange("Administrator removed", account.email);
      notify("Administrator account removed.");
    } catch {
      setError("Could not update local account records.");
    }
  };

  const currentEmail = normalizeEmail(getLoggedInUser()?.email);
  const administrators = accounts.filter((account) => account.role === "admin");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-9">
        <Link to="/dashboard" className="text-green-700 dark:text-green-400 hover:underline">
          ← Dashboard
        </Link>

        <h1 className="text-3xl font-bold mt-5">Administrators</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Create accounts with access to administration screens.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mt-7 items-start">
          {/* Create administrator */}
          <section className="bg-white dark:bg-gray-900 p-6 border border-gray-100 dark:border-gray-800 rounded-xl">
            <h2 className="font-bold text-xl">New administrator</h2>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {error && (
                <p
                  role="alert"
                  className="rounded-lg p-3 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300"
                >
                  {error}
                </p>
              )}

              {adminFields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={`admin-${field.name}`} className="block font-semibold text-sm mb-2">
                    {field.label}
                  </label>

                  <input
                    id={`admin-${field.name}`}
                    name={field.name}
                    type={field.type || "text"}
                    required
                    minLength={field.name === "password" ? 8 : undefined}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={inputClass}
                    autoComplete="off"
                  />
                </div>
              ))}

              <button
                disabled={busy}
                className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 text-white rounded-lg px-4 py-3 font-semibold"
              >
                {busy ? "Creating…" : "Create administrator"}
              </button>
            </form>
          </section>

          {/* Current administrators */}
          <section className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-5">Current administrators</h2>

            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              <div className="flex gap-4 justify-between py-4">
                <div>
                  <p className="font-semibold">EPMS Administrator</p>
                  <p className="text-sm text-gray-500">admin@epms.com · Primary</p>
                </div>
                <span className="text-xs text-gray-500">Owner</span>
              </div>

              {administrators.map((account) => (
                <div
                  key={account.email}
                  className="flex flex-wrap gap-4 justify-between items-center py-4"
                >
                  <div>
                    <p className="font-semibold">{account.firstName} {account.lastName}</p>
                    <p className="text-sm break-all text-gray-500 dark:text-gray-400">
                      {account.email}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={normalizeEmail(account.email) === currentEmail}
                    onClick={() => handleRemove(account)}
                    className="text-sm rounded-lg border border-red-300 text-red-600 dark:text-red-400 px-3 py-2 disabled:opacity-40"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminUsers;
