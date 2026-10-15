import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { createAccount } from "../utils/accounts";

import employee from "../assets/employeee.jpg";
import logo from "../assets/logo.png";

import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  // ================= SIGNUP =================

  const handleSubmit = async (e) => {
    e.preventDefault();setError("");
    if(formData.password!==formData.confirmPassword){setError("Passwords do not match.");return;}
    try{
      await createAccount({...formData,role:"user"});
      navigate("/login");
    }catch(error){setError(error.message||"Unable to create the account.");}
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <ThemeToggle className="absolute top-5 right-5 z-50 bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700" />

      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* ================= LEFT SIDE ================= */}

        <div className="hidden lg:block relative h-full">
          <img
            src={employee}
            alt="EPMS Employees"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Green Overlay */}

          <div className="absolute inset-0 bg-green-950/80"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-12 xl:px-20 text-white">
            <Link to="/home" aria-label="Return to homepage">
<img
              src={logo}
              alt="EPMS Logo"
              className="w-16 h-16 rounded-2xl object-cover mb-8 shadow-lg"
            />
</Link>

            <p className="text-green-300 font-semibold tracking-wider uppercase text-sm mb-3">
              Employee Profile Management System
            </p>

            <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
              Build a better way to manage your workforce.
            </h1>

            <p className="text-green-100 text-lg mt-5 max-w-lg leading-relaxed">
              Create your EPMS account and gain access to a simple, organized
              and professional employee management experience.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-1 bg-green-400 rounded-full"></div>

              <span className="text-green-200 text-sm">
                Simple. Clear. Organized.
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="h-full flex items-center justify-center px-5 sm:px-8 lg:px-12 overflow-y-auto">
          <div className="w-full max-w-md py-6">
            {/* Mobile Logo */}

            <div className="lg:hidden flex justify-center mb-4">
              <Link to="/home" aria-label="Return to homepage">
<img
                src={logo}
                alt="EPMS Logo"
                className="w-14 h-14 rounded-xl object-cover shadow-sm"
              />
</Link>
            </div>

            {/* Heading */}

            <div className="text-center mb-5">
              <div className="inline-flex items-center justify-center bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400 rounded-xl mb-2 px-3 py-1">
                <p>Get Started</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Create your account
              </h2>

              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Get registered on EPMS
              </p>
            </div>

            {/* Error Message */}

            {error && (
              <div role="alert" className="mb-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            {/* Signup Form */}

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* First Name + Last Name */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-3.5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
                               bg-white dark:bg-gray-900
                               text-gray-900 dark:text-gray-100
                               placeholder-gray-400 dark:placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-green-500
                               focus:border-green-500 transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-3.5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
                               bg-white dark:bg-gray-900
                               text-gray-900 dark:text-gray-100
                               placeholder-gray-400 dark:placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-green-500
                               focus:border-green-500 transition"
                    required
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-3.5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
                               bg-white dark:bg-gray-900
                               text-gray-900 dark:text-gray-100
                               placeholder-gray-400 dark:placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-green-500
                               focus:border-green-500 transition"
                    required
                  />
                </div>
              </div>

              {/* Password */}

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full pl-10 pr-11 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
                               bg-white dark:bg-gray-900
                               text-gray-900 dark:text-gray-100
                               placeholder-gray-400 dark:placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-green-500
                               focus:border-green-500 transition"
                    required
                  />

                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                               text-gray-400 dark:text-gray-500
                               hover:text-green-700 dark:hover:text-green-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full pl-10 pr-11 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
                               bg-white dark:bg-gray-900
                               text-gray-900 dark:text-gray-100
                               placeholder-gray-400 dark:placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-green-500
                               focus:border-green-500 transition"
                    required
                  />

                  <button
                    type="button"
                    aria-label={showConfirmPassword ? "Hide confirmation password" : "Show confirmation password"}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                               text-gray-400 dark:text-gray-500
                               hover:text-green-700 dark:hover:text-green-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}

              <div className="flex items-start gap-2 pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 accent-green-700"
                  required
                />

                <label
                  htmlFor="terms"
                  className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
                >
                  I confirm the account details entered above.
                </label>
              </div>

              {/* Create Account */}

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2.5 rounded-lg
                           font-semibold hover:bg-green-800
                           transition duration-200 shadow-sm"
              >
                Create Account
              </button>
            </form>

            {/* Login Divider */}

            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>

              <span className="text-xs text-gray-400 dark:text-gray-500">
                Already registered?
              </span>

              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
            </div>

            {/* Login Link */}

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-700 dark:text-green-400 font-semibold hover:text-green-800 dark:hover:text-green-300"
              >
                Log in
              </Link>
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
