import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { signInDemo } from "../utils/demoAuth";
import { readAccounts, verifyAccount, publicUser, normalizeEmail } from "../utils/accounts";

import employee from "../assets/employeee.jpg";
import logo from "../assets/logo.png";

import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  // ================= LOGIN =================

  const handleSubmit = async (e) => {
    e.preventDefault();setError("");
    const enteredEmail=normalizeEmail(email);
    if(enteredEmail==="admin@epms.com" && password==="admin123"){
      let profile={firstName:"EPMS",lastName:"Administrator"};
      try{profile={...profile,...JSON.parse(localStorage.getItem("epmsPrimaryAdminProfile")||"null")};}catch{/* first login */}
      signInDemo({...profile,email:enteredEmail,role:"admin"},remember);
      navigate("/dashboard",{replace:true});return;
    }
    try{
      const account=readAccounts().find(user=>normalizeEmail(user.email)===enteredEmail);
      if(!account || !(await verifyAccount(account,password))){setError("Invalid email or password.");return;}
      signInDemo(publicUser(account),remember);
      navigate(account.role==="admin"?"/dashboard":"/employees",{replace:true});
    }catch{setError("Unable to sign in. Please try again.");}
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <ThemeToggle className="absolute top-5 right-5 z-50 bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* ================= LEFT SIDE ================= */}

        <div className="hidden lg:block lg:w-full relative overflow-hidden">
          <img
            src={employee}
            alt="EPMS Employee Management"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark green overlay */}
          <div className="absolute inset-0 bg-green-950/75"></div>

          {/* Left side content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-10 xl:p-14 text-white">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/home" aria-label="Return to homepage">
<img
                src={logo}
                alt="EPMS Logo"
                className="w-12 h-12 rounded-xl object-cover shadow-lg"
              />
</Link>

              <div>
                <h1 className="text-2xl font-bold tracking-wide">EPMS</h1>
                <p className="text-green-200 text-xs">Employee Management</p>
              </div>
            </div>

            {/* Main message */}
            <div className="max-w-lg">
              <div
                className="inline-flex items-center gap-2 bg-white/10
                           backdrop-blur-sm border border-white/20
                           px-4 py-2 rounded-full text-sm mb-6"
              >
                <ShieldCheck size={17} />
                Employee Management System
              </div>

              <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
                Manage your workforce.
                <span className="block text-green-300">
                  Simplify your workplace.
                </span>
              </h2>

              <p className="mt-6 text-green-50/80 text-base xl:text-lg leading-relaxed">
                EPMS provides a simple and efficient way to manage employee
                information, profiles, departments and workplace records from
                one centralized platform.
              </p>

              <div className="mt-8 flex items-center gap-8">
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-green-200">Organized</p>
                </div>

                <div className="w-px h-10 bg-white/20"></div>

                <div>
                  <p className="text-2xl font-bold">Organized</p>
                  <p className="text-sm text-green-200">Employee Records</p>
                </div>

                <div className="w-px h-10 bg-white/20"></div>

                <div>
                  <p className="text-2xl font-bold">Simple</p>
                  <p className="text-sm text-green-200">To Use</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-sm text-green-100/60">
              © {new Date().getFullYear()} EPMS. Employee Profile Management
              System.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12">
          <div className="w-full max-w-md py-10">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-6">
              <Link to="/home" aria-label="Return to homepage">
<img
                src={logo}
                alt="EPMS Logo"
                className="w-14 h-14 rounded-xl object-cover shadow-sm"
              />
</Link>
            </div>

            {/* Heading */}
            <div className="text-center mb-7">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Welcome back
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Kindly login to access employees' details
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="mb-5 bg-red-50 dark:bg-red-950/40
                           border border-red-200 dark:border-red-800
                           text-red-700 dark:text-red-300
                           text-sm rounded-lg px-4 py-3"
              >
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="you@example.com"
                    autoComplete="username"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg
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
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-700 rounded-lg
                               bg-white dark:bg-gray-900
                               text-gray-900 dark:text-gray-100
                               placeholder-gray-400 dark:placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-green-500
                               focus:border-green-500 transition"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                               text-gray-400 dark:text-gray-500
                               hover:text-green-700 dark:hover:text-green-400
                               transition"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="accent-green-700" />
                  Keep me signed in on this browser
                </label>


              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg
                           font-semibold hover:bg-green-800
                           transition duration-200 shadow-sm"
              >
                Log In
              </button>
            </form>

            {/* Signup Divider */}
            <div className="flex items-center gap-3 my-7">
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>

              <span className="text-xs text-gray-400 dark:text-gray-500">
                New to EPMS?
              </span>

              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-green-700 dark:text-green-400 font-semibold hover:text-green-800 dark:hover:text-green-300"
              >
                Create an account
              </Link>
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
