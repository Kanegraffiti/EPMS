import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { getLoggedInUser, signInDemo } from "../utils/demoAuth";
import { readAccounts, saveAccounts, normalizeEmail } from "../utils/accounts";
import { notify } from "../utils/notify";

const Settings = ({ logChange }) => {
  const user = getLoggedInUser();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
  });
  const [error, setError] = useState("");

  const handleSave = (event) => {
    event.preventDefault();

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();

    if (!firstName || !lastName) {
      setError("Enter both names.");
      return;
    }

    const updatedUser = { ...user, firstName, lastName };

    try {
      if (user.email === "admin@epms.com") {
        localStorage.setItem(
          "epmsPrimaryAdminProfile",
          JSON.stringify({ firstName, lastName }),
        );
      } else {
        const updatedAccounts = readAccounts().map((account) =>
          normalizeEmail(account.email) === normalizeEmail(user.email)
            ? { ...account, firstName, lastName }
            : account,
        );
        saveAccounts(updatedAccounts);
      }

      const rememberMe = Boolean(localStorage.getItem("epmsLoggedInUser"));
      signInDemo(updatedUser, rememberMe);
      logChange("Profile updated", user.email, `${firstName} ${lastName}`);
      notify("Settings saved.");
      setError("");
    } catch {
      setError("Could not save profile settings.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-9">
        <Link
          to={user?.role === "admin" ? "/dashboard" : "/employees"}
          className="text-green-700 dark:text-green-400 hover:underline"
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-bold mt-5">My profile & settings</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Update how your account appears in EPMS.
        </p>

        {/* Personal details */}
        <section className="mt-7 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold mb-4">Personal details</h2>

          <form onSubmit={handleSave} className="space-y-4">
            {error && <p role="alert" className="text-red-600">{error}</p>}

            {["firstName", "lastName"].map((name) => (
              <div key={name}>
                <label htmlFor={`profile-${name}`} className="text-sm font-semibold block mb-2">
                  {name === "firstName" ? "First name" : "Last name"}
                </label>

                <input
                  id={`profile-${name}`}
                  value={formData[name]}
                  onChange={(event) => setFormData((current) => ({
                    ...current,
                    [name]: event.target.value,
                  }))}
                  className="w-full p-3 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                  required
                />
              </div>
            ))}

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Email: {user?.email}
            </p>

            <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-lg font-semibold">
              Save profile
            </button>
          </form>
        </section>

        {/* Appearance */}
        <section className="mt-6 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Appearance</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Switch between light and dark themes.
            </p>
          </div>
          <ThemeToggle />
        </section>
      </main>
    </div>
  );
};

export default Settings;
