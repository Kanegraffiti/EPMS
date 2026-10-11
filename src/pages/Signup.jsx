// // import React from 'react'

// import { Link } from "react-router-dom";
// import employee from "../assets/employeee.jpg";
// import logo from "../assets/logo.png";

// const Signup = () => {
//   return (
//     <div>
//       <div className="flex items-center justify-center h-screen bg-green-200">
//         {/* Left hand side */}
//         <div className="hidden md:block md:w-1/2 relative">
//           <img
//             src={employee}
//             alt="employee"
//             className="h-screen w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-lime-400/35"></div>
//         </div>
//         {/* Right hand side */}
//         <div className="w-full md:w-1/2 flex flex-col items-center ">
//           <div className="w-3/4">
//             <div className="flex justify-center mb-6">
//               <img src={logo} alt="logo" className="w-20 h-20 rounded-full" />
//             </div>
//             <p className="text-center font-bold text-2xl md:text-3xl text-green-900">
//               Get registered on EPMS
//             </p>
//             <p className="text-gray-500 italic text-center pb-4 text-[12px] md:text-[14px]">
//               Access Employees' profile swiftly and effortlessly.
//             </p>
//             <p className="text-center pb-8 text-gray-500 text-sm md:text-base">
//               Kindly register to access employees' details.
//             </p>
//             <form className="text-sm md:text-base">
//               <div>
//                 <p className="text-gray-500">Email Address</p>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="px-3 py-2 my-2 w-full bg-green-100 rounded-lg"
//                 />
//               </div>

//               <p className="text-gray-500">Password</p>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="px-3 py-2 my-2 w-full bg-green-100 rounded-lg"
//               />
//               <p className="text-gray-500">Confirm password</p>
//               <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 className="px-3 py-2 my-2 w-full bg-green-100 rounded-lg"
//               />
//               <div>
//                 <label className="cursor-pointer">
//                   <input type="checkbox" className="w-4 mr-2" />I agree with the{" "}
//                   <Link
//                     to="/terms"
//                     className="text-green-600 hover:text-green-700 font-bold"
//                   >
//                     terms and conditions
//                   </Link>
//                 </label>
//               </div>
//               {/* <button className="text-green-200 px-3 py-2 my-6 w-full bg-green-900 rounded-lg cursor-pointer hover:bg-green-700">
//               <Link to="/login">Register</Link>
//             </button> */}
//               <button
//                 type="submit"
//                 className="text-green-200 px-3 py-2 my-6 w-full bg-green-900 rounded-lg cursor-pointer hover:bg-green-700"
//               >
//                 Register
//               </button>
//             </form>

//             <p className="text-gray-500 text-center text-sm md:text-base">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 className="text-green-900 font-bold hover:text-green-500"
//               >
//                 Log in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// SECOND ONE
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import employee from "../assets/employeee.jpg";
// import logo from "../assets/logo.png";
// import { Mail, Lock, Eye, EyeOff, ShieldCheck, Moon, Sun } from "lucide-react";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState("");

//   // ================= DARK MODE =================

//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("epmsDarkMode") === "true";
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("epmsDarkMode", "true");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("epmsDarkMode", "false");
//     }
//   }, [darkMode]);

//   // ================= HANDLE INPUT =================

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     setError("");
//   };

//   // ================= SIGNUP =================

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const firstName = formData.firstName.trim();
//     const lastName = formData.lastName.trim();
//     const email = formData.email.trim().toLowerCase();

//     // Check if passwords match
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     // Check password length
//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }

//     // Check if an account already exists
//     const existingUser = localStorage.getItem("epmsUser");

//     if (existingUser) {
//       const savedUser = JSON.parse(existingUser);

//       if (savedUser.email === email) {
//         setError("An account with this email already exists. Please log in.");
//         return;
//       }
//     }

//     // ================= CREATE REGULAR USER =================

//     const user = {
//       firstName,
//       lastName,
//       email,
//       password: formData.password,

//       // Every account created through public signup
//       // is automatically a regular user.
//       role: "user",
//     };

//     // Save user account
//     localStorage.setItem("epmsUser", JSON.stringify(user));

//     // Go to Login page
//     navigate("/login");
//   };

//   return (
//     <div className="relative h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
//       {/* ================= THEME TOGGLE ================= */}

//       <button
//         type="button"
//         onClick={() => setDarkMode(!darkMode)}
//         className="absolute top-5 right-5 z-50
//                    p-2.5 rounded-full
//                    bg-white dark:bg-gray-800
//                    border border-gray-200 dark:border-gray-700
//                    text-gray-600 dark:text-gray-300
//                    hover:bg-green-50 dark:hover:bg-gray-700
//                    hover:text-green-700 dark:hover:text-green-400
//                    shadow-sm transition-all duration-200"
//         aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//         title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//       >
//         {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
//         {/* ================= LEFT SIDE ================= */}

//         <div className="hidden lg:block relative h-full">
//           <img
//             src={employee}
//             alt="EPMS Employees"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Green Overlay */}
//           <div className="absolute inset-0 bg-green-950/80"></div>

//           <div className="relative z-10 h-full flex flex-col justify-center px-12 xl:px-20 text-white">
//             <img
//               src={logo}
//               alt="EPMS Logo"
//               className="w-16 h-16 rounded-2xl object-cover mb-8 shadow-lg"
//             />

//             <p className="text-green-300 font-semibold tracking-wider uppercase text-sm mb-3">
//               Employee Profile Management System
//             </p>

//             <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
//               Build a better way to manage your workforce.
//             </h1>

//             <p className="text-green-100 text-lg mt-5 max-w-lg leading-relaxed">
//               Create your EPMS account and gain access to a simple, organized
//               and professional employee management experience.
//             </p>

//             <div className="flex items-center gap-3 mt-8">
//               <div className="w-10 h-1 bg-green-400 rounded-full"></div>

//               <span className="text-green-200 text-sm">
//                 Simple. Secure. Organized.
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}

//         <div className="h-full flex items-center justify-center px-5 sm:px-8 lg:px-12 overflow-y-auto">
//           <div className="w-full max-w-md py-6">
//             {/* Mobile Logo */}

//             <div className="lg:hidden flex justify-center mb-4">
//               <img
//                 src={logo}
//                 alt="EPMS Logo"
//                 className="w-14 h-14 rounded-xl object-cover shadow-sm"
//               />
//             </div>

//             {/* Heading */}

//             <div className="text-center mb-5">
//               <div className="inline-flex items-center justify-center bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400 rounded-xl mb-2">
//                 <p>Get Started</p>
//               </div>

//               <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
//                 Create your account
//               </h2>

//               <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
//                 Get registered on EPMS
//               </p>
//             </div>

//             {/* Error Message */}

//             {error && (
//               <div className="mb-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm rounded-lg px-4 py-3">
//                 {error}
//               </div>
//             )}

//             {/* Signup Form */}

//             <form onSubmit={handleSubmit} className="space-y-3">
//               {/* First Name + Last Name */}

//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                   >
//                     First Name
//                   </label>

//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="First name"
//                     className="w-full px-3.5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
//                                bg-white dark:bg-gray-900
//                                text-gray-900 dark:text-gray-100
//                                placeholder-gray-400 dark:placeholder-gray-500
//                                focus:outline-none focus:ring-2 focus:ring-green-500
//                                focus:border-green-500 transition"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                   >
//                     Last Name
//                   </label>

//                   <input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Last name"
//                     className="w-full px-3.5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
//                                bg-white dark:bg-gray-900
//                                text-gray-900 dark:text-gray-100
//                                placeholder-gray-400 dark:placeholder-gray-500
//                                focus:outline-none focus:ring-2 focus:ring-green-500
//                                focus:border-green-500 transition"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Email */}

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Email Address
//                 </label>

//                 <div className="relative">
//                   <Mail
//                     size={18}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
//                   />

//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="you@example.com"
//                     className="w-full pl-10 pr-3.5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
//                                bg-white dark:bg-gray-900
//                                text-gray-900 dark:text-gray-100
//                                placeholder-gray-400 dark:placeholder-gray-500
//                                focus:outline-none focus:ring-2 focus:ring-green-500
//                                focus:border-green-500 transition"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Password */}

//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Password
//                 </label>

//                 <div className="relative">
//                   <Lock
//                     size={18}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
//                   />

//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Create a password"
//                     className="w-full pl-10 pr-11 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
//                                bg-white dark:bg-gray-900
//                                text-gray-900 dark:text-gray-100
//                                placeholder-gray-400 dark:placeholder-gray-500
//                                focus:outline-none focus:ring-2 focus:ring-green-500
//                                focus:border-green-500 transition"
//                     required
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2
//                                text-gray-400 dark:text-gray-500
//                                hover:text-green-700 dark:hover:text-green-400"
//                   >
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>

//               {/* Confirm Password */}

//               <div>
//                 <label
//                   htmlFor="confirmPassword"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Confirm Password
//                 </label>

//                 <div className="relative">
//                   <Lock
//                     size={18}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
//                   />

//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     placeholder="Confirm your password"
//                     className="w-full pl-10 pr-11 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg
//                                bg-white dark:bg-gray-900
//                                text-gray-900 dark:text-gray-100
//                                placeholder-gray-400 dark:placeholder-gray-500
//                                focus:outline-none focus:ring-2 focus:ring-green-500
//                                focus:border-green-500 transition"
//                     required
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2
//                                text-gray-400 dark:text-gray-500
//                                hover:text-green-700 dark:hover:text-green-400"
//                   >
//                     {showConfirmPassword ? (
//                       <EyeOff size={18} />
//                     ) : (
//                       <Eye size={18} />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Terms */}

//               <div className="flex items-start gap-2 pt-1">
//                 <input
//                   id="terms"
//                   type="checkbox"
//                   className="mt-1 accent-green-700"
//                   required
//                 />

//                 <label
//                   htmlFor="terms"
//                   className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
//                 >
//                   I agree to the EPMS terms and conditions and understand that
//                   my account information will be stored for this application.
//                 </label>
//               </div>

//               {/* Create Account */}

//               <button
//                 type="submit"
//                 className="w-full bg-green-700 text-white py-2.5 rounded-lg
//                            font-semibold hover:bg-green-800
//                            transition duration-200 shadow-sm"
//               >
//                 Create Account
//               </button>
//             </form>

//             {/* Login Link */}

//             <div className="flex items-center gap-3 my-5">
//               <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>

//               <span className="text-xs text-gray-400 dark:text-gray-500">
//                 Already registered?
//               </span>

//               <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
//             </div>

//             <p className="text-center text-sm text-gray-600 dark:text-gray-400">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 className="text-green-700 dark:text-green-400 font-semibold hover:text-green-800 dark:hover:text-green-300"
//               >
//                 Log in
//               </Link>
//             </p>

//             {/* Security Message */}

//             <div className="flex items-center justify-center gap-2 mt-5 text-xs text-gray-400 dark:text-gray-500">
//               <ShieldCheck size={15} />
//               <span>Your information is protected</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import employee from "../assets/employeee.jpg";
import logo from "../assets/logo.png";

import { Mail, Lock, Eye, EyeOff, ShieldCheck, Moon, Sun } from "lucide-react";

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

  // ================= DARK MODE =================

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("epmsDarkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("epmsDarkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("epmsDarkMode", "false");
    }
  }, [darkMode]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const email = formData.email.trim().toLowerCase();

    // Check passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // =================================================
    // GET EXISTING USERS
    // =================================================

    const savedUsers = localStorage.getItem("epmsUsers");

    const users = savedUsers ? JSON.parse(savedUsers) : [];

    // =================================================
    // CHECK IF EMAIL ALREADY EXISTS
    // =================================================

    const existingUser = users.find((savedUser) => savedUser.email === email);

    if (existingUser) {
      setError("An account with this email already exists. Please log in.");
      return;
    }

    // =================================================
    // CREATE NEW USER
    // =================================================

    const user = {
      firstName,
      lastName,
      email,
      password: formData.password,
      role: "user",
    };

    // Add the new user to the existing users
    users.push(user);

    // Save all users
    localStorage.setItem("epmsUsers", JSON.stringify(users));

    // Go to Login
    navigate("/login");
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* ================= THEME TOGGLE ================= */}

      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 z-50
                   p-2.5 rounded-full
                   bg-white dark:bg-gray-800
                   border border-gray-200 dark:border-gray-700
                   text-gray-600 dark:text-gray-300
                   hover:bg-green-50 dark:hover:bg-gray-700
                   hover:text-green-700 dark:hover:text-green-400
                   shadow-sm transition-all duration-200"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

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
            <img
              src={logo}
              alt="EPMS Logo"
              className="w-16 h-16 rounded-2xl object-cover mb-8 shadow-lg"
            />

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
                Simple. Secure. Organized.
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="h-full flex items-center justify-center px-5 sm:px-8 lg:px-12 overflow-y-auto">
          <div className="w-full max-w-md py-6">
            {/* Mobile Logo */}

            <div className="lg:hidden flex justify-center mb-4">
              <img
                src={logo}
                alt="EPMS Logo"
                className="w-14 h-14 rounded-xl object-cover shadow-sm"
              />
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
              <div className="mb-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            {/* Signup Form */}

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* First Name + Last Name */}

              <div className="grid grid-cols-2 gap-3">
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
                  I agree to the EPMS terms and conditions and understand that
                  my account information will be stored for this application.
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

            {/* Security Message */}

            <div className="flex items-center justify-center gap-2 mt-5 text-xs text-gray-400 dark:text-gray-500">
              <ShieldCheck size={15} />

              <span>Your information is protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
