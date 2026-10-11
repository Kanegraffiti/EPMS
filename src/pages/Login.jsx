// // // import React from 'react'
// // import { Link } from "react-router-dom";
// // import employee from "../assets/employeee.jpg";
// // import logo from "../assets/logo.png";

// // const Login = () => {
// //   return (
// //     <div>
// //       <div className="flex items-center justify-center h-screen bg-green-200">
// //         {/* Left hand side */}
// //         <div className="hidden md:block md:w-1/2 relative">
// //           <img
// //             src={employee}
// //             alt="employee"
// //             className="h-screen w-full object-cover"
// //           />
// //           <div className="absolute inset-0 bg-lime-400/35"></div>
// //         </div>
// //         {/* Right hand side */}
// //         <div className="w-full md:w-1/2 flex flex-col items-center ">
// //           <div className="w-3/4">
// //             <div className="flex justify-center mb-6">
// //               <img src={logo} alt="logo" className="w-20 h-20 rounded-full" />
// //             </div>
// //             <p className="text-center font-bold text-2xl md:text-3xl text-green-900">
// //               Welcome back to EPMS
// //             </p>
// //             <p className="text-gray-500 italic text-center pb-4 text-[12px] md:text-[14px]">
// //               Access Employees' profile swiftly and effortlessly.
// //             </p>
// //             <p className="text-center pb-8 text-gray-500 text-sm md:text-base">
// //               Kindly login to access employees' details.
// //             </p>
// //             <form action="" className="text-sm md:text-base">
// //               <div>
// //                 <p className="text-gray-500">Email Address</p>
// //                 <input
// //                   type="email"
// //                   placeholder="Enter your email"
// //                   className="px-3 py-2 my-2 w-full bg-green-100 rounded-lg"
// //                 />
// //               </div>
// //               <div>
// //                 <p className="text-gray-500">Password</p>
// //                 <input
// //                   type="password"
// //                   placeholder="Enter your password"
// //                   className="px-3 py-2 my-2 w-full bg-green-100 rounded-lg"
// //                 />
// //               </div>
// //               <div className="flex justify-between items-center pt-2">
// //                 {/* <div>
// //                 <input type="checkbox" className="inline" />
// //                 <p>Remember me</p>
// //               </div> */}
// //                 <div>
// //                   <label className="flex items-center gap-2 cursor-pointer">
// //                     <input type="checkbox" className="w-4" />
// //                     Remember me
// //                   </label>
// //                 </div>

// //                 <Link className="text-gray-500 text-center hover:text-green-500">
// //                   Forgot Password
// //                 </Link>
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="text-green-200 px-3 py-2 my-6 w-full bg-green-900 rounded-lg cursor-pointer hover:bg-green-700"
// //               >
// //                 <Link to="/home">Log in</Link>
// //               </button>
// //             </form>

// //             <p className="text-gray-500 text-center text-sm md:text-base">
// //               Don't have an account?{" "}
// //               <Link
// //                 to="/signup"
// //                 className="text-green-900 font-bold hover:text-green-500"
// //               >
// //                 Register now
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// // import { Link } from "react-router-dom";

// // import employee from "../assets/employeee.jpg";
// // import logo from "../assets/logo.png";

// // import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

// // import { useState } from "react";

// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //       <div className="w-full min-h-screen flex">
// //         {/* ================= LEFT SIDE ================= */}
// //         <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
// //           <img
// //             src={employee}
// //             alt="EPMS Employee Management"
// //             className="absolute inset-0 w-full h-full object-cover"
// //           />

// //           {/* Dark green overlay */}
// //           <div className="absolute inset-0 bg-green-950/75"></div>

// //           {/* Left side content */}
// //           <div className="relative z-10 h-full flex flex-col justify-between p-10 xl:p-14 text-white">
// //             {/* Logo */}
// //             <div className="flex items-center gap-3">
// //               <img
// //                 src={logo}
// //                 alt="EPMS Logo"
// //                 className="w-12 h-12 rounded-xl object-cover shadow-lg"
// //               />

// //               <div>
// //                 <h1 className="text-2xl font-bold tracking-wide">EPMS</h1>

// //                 <p className="text-green-200 text-xs">Employee Management</p>
// //               </div>
// //             </div>

// //             {/* Main message */}
// //             <div className="max-w-lg">
// //               <div
// //                 className="inline-flex items-center gap-2 bg-white/10
// //                               backdrop-blur-sm border border-white/20
// //                               px-4 py-2 rounded-full text-sm mb-6"
// //               >
// //                 <ShieldCheck size={17} />
// //                 Secure Employee Management
// //               </div>

// //               <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
// //                 Manage your workforce.
// //                 <span className="block text-green-300">
// //                   Simplify your workplace.
// //                 </span>
// //               </h2>

// //               <p className="mt-6 text-green-50/80 text-base xl:text-lg leading-relaxed">
// //                 EPMS provides a simple and efficient way to manage employee
// //                 information, profiles, departments and workplace records from
// //                 one centralized platform.
// //               </p>

// //               <div className="mt-8 flex items-center gap-8">
// //                 <div>
// //                   <p className="text-2xl font-bold">100%</p>
// //                   <p className="text-sm text-green-200">Organized</p>
// //                 </div>

// //                 <div className="w-px h-10 bg-white/20"></div>

// //                 <div>
// //                   <p className="text-2xl font-bold">Secure</p>
// //                   <p className="text-sm text-green-200">Employee Data</p>
// //                 </div>

// //                 <div className="w-px h-10 bg-white/20"></div>

// //                 <div>
// //                   <p className="text-2xl font-bold">Simple</p>
// //                   <p className="text-sm text-green-200">To Use</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Footer */}
// //             <p className="text-sm text-green-100/60">
// //               © {new Date().getFullYear()} EPMS. Employee Profile Management
// //               System.
// //             </p>
// //           </div>
// //         </div>

// //         {/* ================= RIGHT SIDE ================= */}
// //         <div
// //           className="w-full lg:w-1/2 flex items-center justify-center
// //                         px-5 sm:px-8 py-10 bg-white"
// //         >
// //           <div className="w-full max-w-md">
// //             {/* Mobile logo */}
// //             <div className="flex lg:hidden justify-center mb-8">
// //               <div className="text-center">
// //                 <img
// //                   src={logo}
// //                   alt="EPMS Logo"
// //                   className="w-16 h-16 mx-auto rounded-2xl object-cover
// //                              shadow-md"
// //                 />

// //                 <h1 className="text-xl font-bold text-green-900 mt-3">EPMS</h1>

// //                 <p className="text-xs text-green-600">Employee Management</p>
// //               </div>
// //             </div>

// //             {/* Heading */}
// //             <div className="mb-8">
// //               <p className="text-green-700 text-sm font-semibold mb-2 text-center">
// //                 Welcome back
// //               </p>

// //               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
// //                 Log in to your account
// //               </h2>

// //               <p className="text-gray-500 mt-3 text-sm sm:text-base">
// //                 Kindly login to access employees' details and manage your
// //                 workplace information.
// //               </p>
// //             </div>

// //             {/* Login Form */}
// //             <form className="space-y-5">
// //               {/* Email */}
// //               <div>
// //                 <label
// //                   htmlFor="email"
// //                   className="block text-sm font-semibold
// //                              text-gray-700 mb-2"
// //                 >
// //                   Email Address
// //                 </label>

// //                 <div className="relative">
// //                   <Mail
// //                     size={19}
// //                     className="absolute left-4 top-1/2
// //                                -translate-y-1/2 text-gray-400"
// //                   />

// //                   <input
// //                     id="email"
// //                     type="email"
// //                     placeholder="Enter your email"
// //                     className="w-full pl-11 pr-4 py-3.5
// //                                bg-gray-50 border border-gray-200
// //                                rounded-xl text-gray-800
// //                                placeholder-gray-400
// //                                outline-none
// //                                focus:bg-white
// //                                focus:border-green-600
// //                                focus:ring-4 focus:ring-green-100
// //                                transition"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Password */}
// //               <div>
// //                 <label
// //                   htmlFor="password"
// //                   className="block text-sm font-semibold
// //                              text-gray-700 mb-2"
// //                 >
// //                   Password
// //                 </label>

// //                 <div className="relative">
// //                   <Lock
// //                     size={19}
// //                     className="absolute left-4 top-1/2
// //                                -translate-y-1/2 text-gray-400"
// //                   />

// //                   <input
// //                     id="password"
// //                     type={showPassword ? "text" : "password"}
// //                     placeholder="Enter your password"
// //                     className="w-full pl-11 pr-12 py-3.5
// //                                bg-gray-50 border border-gray-200
// //                                rounded-xl text-gray-800
// //                                placeholder-gray-400
// //                                outline-none
// //                                focus:bg-white
// //                                focus:border-green-600
// //                                focus:ring-4 focus:ring-green-100
// //                                transition"
// //                   />

// //                   <button
// //                     type="button"
// //                     onClick={() => setShowPassword(!showPassword)}
// //                     className="absolute right-4 top-1/2
// //                                -translate-y-1/2
// //                                text-gray-400
// //                                hover:text-green-700
// //                                transition"
// //                     aria-label={
// //                       showPassword ? "Hide password" : "Show password"
// //                     }
// //                   >
// //                     {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Remember / Forgot */}
// //               <div className="flex items-center justify-between">
// //                 <label
// //                   className="flex items-center gap-2
// //                                   text-sm text-gray-600
// //                                   cursor-pointer"
// //                 >
// //                   <input
// //                     type="checkbox"
// //                     className="w-4 h-4 accent-green-700
// //                                rounded cursor-pointer"
// //                   />
// //                   Remember me
// //                 </label>

// //                 <Link
// //                   to="/forgot-password"
// //                   className="text-sm font-semibold
// //                              text-green-700
// //                              hover:text-green-900
// //                              transition"
// //                 >
// //                   Forgot password?
// //                 </Link>
// //               </div>

// //               {/* Login Button */}
// //               <Link
// //                 to="/home"
// //                 className="flex items-center justify-center
// //                            w-full py-3.5
// //                            bg-green-800 text-white
// //                            rounded-xl
// //                            font-semibold
// //                            shadow-sm
// //                            hover:bg-green-700
// //                            hover:shadow-md
// //                            active:scale-[0.99]
// //                            transition-all duration-200"
// //               >
// //                 Log in
// //               </Link>
// //             </form>

// //             {/* Divider */}
// //             <div className="flex items-center gap-4 my-7">
// //               <div className="flex-1 h-px bg-gray-200"></div>

// //               <span className="text-xs text-gray-400">OR</span>

// //               <div className="flex-1 h-px bg-gray-200"></div>
// //             </div>

// //             {/* Signup */}
// //             <p className="text-center text-sm text-gray-500">
// //               Don't have an account?{" "}
// //               <Link
// //                 to="/signup"
// //                 className="text-green-800 font-bold
// //                            hover:text-green-600
// //                            transition"
// //               >
// //                 Create an account
// //               </Link>
// //             </p>

// //             {/* Security message */}
// //             <div
// //               className="mt-8 flex items-center justify-center
// //                             gap-2 text-xs text-gray-400"
// //             >
// //               <ShieldCheck size={15} />

// //               <span>Your employee information is securely managed.</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// import employee from "../assets/employeee.jpg";
// import logo from "../assets/logo.png";

// import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setError("");

//     // Get the registered user
//     const savedUser = localStorage.getItem("epmsUser");

//     // No account exists
//     if (!savedUser) {
//       setError("No account found. Please create an account first.");
//       return;
//     }

//     const user = JSON.parse(savedUser);

//     // Check login details
//     if (
//       email.trim().toLowerCase() !== user.email ||
//       password !== user.password
//     ) {
//       setError("Invalid email or password.");
//       return;
//     }

//     // Save currently logged-in user
//     localStorage.setItem("epmsLoggedInUser", JSON.stringify(user));

//     // Go to Home
//     navigate("/home");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
//         {/* ================= LEFT SIDE ================= */}
//         <div className="hidden lg:block relative min-h-screen">
//           <img
//             src={employee}
//             alt="EPMS Employees"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Green Overlay */}
//           <div className="absolute inset-0 bg-green-950/80"></div>

//           <div className="relative z-10 min-h-screen flex flex-col justify-center px-12 xl:px-20 text-white">
//             <img
//               src={logo}
//               alt="EPMS Logo"
//               className="w-16 h-16 rounded-2xl object-cover mb-8 shadow-lg"
//             />

//             <p className="text-green-300 font-semibold tracking-wider uppercase text-sm mb-3">
//               Employee Profile Management System
//             </p>

//             <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
//               Manage your workforce.
//               <br />
//               Simplify your workplace.
//             </h1>

//             <p className="text-green-100 text-lg mt-5 max-w-lg leading-relaxed">
//               Access employee information, manage your workforce and keep your
//               organization structured with EPMS.
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
//         <div className="min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12">
//           <div className="w-full max-w-md py-10">
//             {/* Mobile Logo */}
//             <div className="lg:hidden flex justify-center mb-6">
//               <img
//                 src={logo}
//                 alt="EPMS Logo"
//                 className="w-14 h-14 rounded-xl object-cover shadow-sm"
//               />
//             </div>

//             {/* Heading */}
//             <div className="text-center mb-7">
//               <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>

//               <p className="text-gray-500 mt-2">
//                 Kindly login to access employees' details
//               </p>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div className="mb-5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
//                 {error}
//               </div>
//             )}

//             {/* Login Form */}
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-semibold text-gray-700 mb-2"
//                 >
//                   Email Address
//                 </label>

//                 <div className="relative">
//                   <Mail
//                     size={19}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   />

//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       setError("");
//                     }}
//                     placeholder="you@example.com"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg
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
//                   className="block text-sm font-semibold text-gray-700 mb-2"
//                 >
//                   Password
//                 </label>

//                 <div className="relative">
//                   <Lock
//                     size={19}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   />

//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                       setError("");
//                     }}
//                     placeholder="Enter your password"
//                     className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg
//                                focus:outline-none focus:ring-2 focus:ring-green-500
//                                focus:border-green-500 transition"
//                     required
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2
//                                text-gray-400 hover:text-green-700 transition"
//                   >
//                     {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember + Forgot */}
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center gap-2 text-sm text-gray-600">
//                   <input type="checkbox" className="accent-green-700" />
//                   Remember me
//                 </label>

//                 <button
//                   type="button"
//                   className="text-sm font-semibold text-green-700 hover:text-green-800"
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-green-700 text-white py-3 rounded-lg
//                            font-semibold hover:bg-green-800
//                            transition duration-200 shadow-sm"
//               >
//                 Log In
//               </button>
//             </form>

//             {/* Signup Divider */}
//             <div className="flex items-center gap-3 my-7">
//               <div className="flex-1 h-px bg-gray-200"></div>

//               <span className="text-xs text-gray-400">New to EPMS?</span>

//               <div className="flex-1 h-px bg-gray-200"></div>
//             </div>

//             {/* Signup */}
//             <p className="text-center text-sm text-gray-600">
//               Don't have an account?{" "}
//               <Link
//                 to="/signup"
//                 className="text-green-700 font-semibold hover:text-green-800"
//               >
//                 Create an account
//               </Link>
//             </p>

//             {/* Security */}
//             <div className="flex items-center justify-center gap-2 mt-7 text-xs text-gray-400">
//               <ShieldCheck size={15} />
//               <span>Your information is protected</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// SECOND ONE
// import { Link, useNavigate, useLocation } from "react-router-dom";

// import { useState, useEffect } from "react";

// import employee from "../assets/employeee.jpg";

// import logo from "../assets/logo.png";

// import { Mail, Lock, Eye, EyeOff, ShieldCheck, Moon, Sun } from "lucide-react";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [error, setError] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

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

//   // ================= LOGIN =================

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     const enteredEmail = email.trim().toLowerCase();

//     // =================================================
//     // ADMIN ACCOUNT
//     // =================================================

//     // Change these credentials to whatever you want
//     const adminEmail = "admin@epms.com";
//     const adminPassword = "admin123";

//     if (enteredEmail === adminEmail && password === adminPassword) {
//       const adminUser = {
//         firstName: "EPMS",
//         lastName: "Administrator",
//         email: adminEmail,
//         password: adminPassword,
//         role: "admin",
//       };

//       // Save logged-in administrator
//       localStorage.setItem("epmsLoggedInUser", JSON.stringify(adminUser));

//       // Go to requested page or dashboard
//       const destination = location.state?.from || "/dashboard";

//       navigate(destination, { replace: true });

//       return;
//     }

//     // =================================================
//     // REGULAR USER
//     // =================================================

//     const savedUser = localStorage.getItem("epmsUser");

//     // No regular account exists
//     if (!savedUser) {
//       setError("No account found. Please create an account first.");
//       return;
//     }

//     const user = JSON.parse(savedUser);

//     // Make sure normal signup users are regular users
//     const regularUser = {
//       ...user,
//       role: "user",
//     };

//     // Check login details
//     if (
//       enteredEmail !== regularUser.email ||
//       password !== regularUser.password
//     ) {
//       setError("Invalid email or password.");
//       return;
//     }

//     // Save currently logged-in regular user
//     localStorage.setItem("epmsLoggedInUser", JSON.stringify(regularUser));

//     // Regular users should normally go to Employees
//     // If they originally requested an employee page,
//     // they will be returned there.
//     const destination = location.state?.from || "/employees";

//     navigate(destination, { replace: true });
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
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

//       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
//         {/* ================= LEFT SIDE ================= */}

//         <div className="hidden lg:block lg:w-full relative overflow-hidden">
//           <img
//             src={employee}
//             alt="EPMS Employee Management"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Dark green overlay */}
//           <div className="absolute inset-0 bg-green-950/75"></div>

//           {/* Left side content */}

//           <div className="relative z-10 h-full flex flex-col justify-between p-10 xl:p-14 text-white">
//             {/* Logo */}

//             <div className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="EPMS Logo"
//                 className="w-12 h-12 rounded-xl object-cover shadow-lg"
//               />

//               <div>
//                 <h1 className="text-2xl font-bold tracking-wide">EPMS</h1>

//                 <p className="text-green-200 text-xs">Employee Management</p>
//               </div>
//             </div>

//             {/* Main message */}

//             <div className="max-w-lg">
//               <div
//                 className="inline-flex items-center gap-2 bg-white/10
//                            backdrop-blur-sm border border-white/20
//                            px-4 py-2 rounded-full text-sm mb-6"
//               >
//                 <ShieldCheck size={17} />
//                 Secure Employee Management
//               </div>

//               <h2 className="text-4xl xl:text-5xl font-bold leading-tight w-[700px]">
//                 Manage your workforce.
//                 <span className="block text-green-300">
//                   Simplify your workplace.
//                 </span>
//               </h2>

//               <p className="mt-6 text-green-50/80 text-base xl:text-lg leading-relaxed">
//                 EPMS provides a simple and efficient way to manage employee
//                 information, profiles, departments and workplace records from
//                 one centralized platform.
//               </p>

//               <div className="mt-8 flex items-center gap-8">
//                 <div>
//                   <p className="text-2xl font-bold">100%</p>
//                   <p className="text-sm text-green-200">Organized</p>
//                 </div>

//                 <div className="w-px h-10 bg-white/20"></div>

//                 <div>
//                   <p className="text-2xl font-bold">Secure</p>
//                   <p className="text-sm text-green-200">Employee Data</p>
//                 </div>

//                 <div className="w-px h-10 bg-white/20"></div>

//                 <div>
//                   <p className="text-2xl font-bold">Simple</p>
//                   <p className="text-sm text-green-200">To Use</p>
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}

//             <p className="text-sm text-green-100/60">
//               © {new Date().getFullYear()} EPMS. Employee Profile Management
//               System.
//             </p>
//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}

//         <div className="min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12">
//           <div className="w-full max-w-md py-10">
//             {/* Mobile Logo */}

//             <div className="lg:hidden flex justify-center mb-6">
//               <img
//                 src={logo}
//                 alt="EPMS Logo"
//                 className="w-14 h-14 rounded-xl object-cover shadow-sm"
//               />
//             </div>

//             {/* Heading */}

//             <div className="text-center mb-7">
//               <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
//                 Welcome back
//               </h2>

//               <p className="text-gray-500 dark:text-gray-400 mt-2">
//                 Kindly login to access employees' details
//               </p>
//             </div>

//             {/* Error Message */}

//             {error && (
//               <div className="mb-5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm rounded-lg px-4 py-3">
//                 {error}
//               </div>
//             )}

//             {/* Login Form */}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Email */}

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Email Address
//                 </label>

//                 <div className="relative">
//                   <Mail
//                     size={19}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
//                   />

//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       setError("");
//                     }}
//                     placeholder="you@example.com"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg
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
//                   className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Password
//                 </label>

//                 <div className="relative">
//                   <Lock
//                     size={19}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
//                   />

//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                       setError("");
//                     }}
//                     placeholder="Enter your password"
//                     className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-700 rounded-lg
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
//                                hover:text-green-700 dark:hover:text-green-400
//                                transition"
//                   >
//                     {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember + Forgot */}

//               <div className="flex items-center justify-between">
//                 <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <input type="checkbox" className="accent-green-700" />
//                   Remember me
//                 </label>

//                 <button
//                   type="button"
//                   className="text-sm font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               {/* Login Button */}

//               <button
//                 type="submit"
//                 className="w-full bg-green-700 text-white py-3 rounded-lg
//                            font-semibold hover:bg-green-800
//                            transition duration-200 shadow-sm"
//               >
//                 Log In
//               </button>
//             </form>

//             {/* Signup Divider */}

//             <div className="flex items-center gap-3 my-7">
//               <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>

//               <span className="text-xs text-gray-400 dark:text-gray-500">
//                 New to EPMS?
//               </span>

//               <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
//             </div>

//             {/* Signup */}

//             <p className="text-center text-sm text-gray-600 dark:text-gray-400">
//               Don't have an account?{" "}
//               <Link
//                 to="/signup"
//                 className="text-green-700 dark:text-green-400 font-semibold hover:text-green-800 dark:hover:text-green-300"
//               >
//                 Create an account
//               </Link>
//             </p>

//             {/* Security */}

//             <div className="flex items-center justify-center gap-2 mt-7 text-xs text-gray-400 dark:text-gray-500">
//               <ShieldCheck size={15} />

//               <span>Your information is protected</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// import employee from "../assets/employeee.jpg";
// import logo from "../assets/logo.png";

// import { Mail, Lock, Eye, EyeOff, ShieldCheck, Moon, Sun } from "lucide-react";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [error, setError] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

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

//   // ================= LOGIN =================

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     const enteredEmail = email.trim().toLowerCase();

//     // =================================================
//     // ADMIN ACCOUNT
//     // =================================================

//     const adminEmail = "admin@epms.com";
//     const adminPassword = "admin123";

//     if (enteredEmail === adminEmail && password === adminPassword) {
//       const adminUser = {
//         firstName: "EPMS",
//         lastName: "Administrator",
//         email: adminEmail,
//         password: adminPassword,
//         role: "admin",
//       };

//       localStorage.setItem("epmsLoggedInUser", JSON.stringify(adminUser));

//       const destination = location.state?.from || "/dashboard";

//       navigate(destination, { replace: true });

//       return;
//     }

//     // =================================================
//     // REGULAR USERS
//     // =================================================

//     const savedUsers = localStorage.getItem("epmsUsers");

//     if (!savedUsers) {
//       setError("No account found. Please create an account first.");
//       return;
//     }

//     const users = JSON.parse(savedUsers);

//     // Find the user matching both email and password
//     const user = users.find(
//       (savedUser) =>
//         savedUser.email === enteredEmail && savedUser.password === password,
//     );

//     if (!user) {
//       setError("Invalid email or password.");
//       return;
//     }

//     // Make sure the user has the correct role
//     const regularUser = {
//       ...user,
//       role: "user",
//     };

//     // Save the currently logged-in user
//     localStorage.setItem("epmsLoggedInUser", JSON.stringify(regularUser));

//     // Go to requested page or employees
//     const destination = location.state?.from || "/employees";

//     navigate(destination, { replace: true });
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
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

//       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
//         {/* ================= LEFT SIDE ================= */}

//         <div className="hidden lg:block lg:w-full relative overflow-hidden">
//           <img
//             src={employee}
//             alt="EPMS Employee Management"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Dark green overlay */}

//           <div className="absolute inset-0 bg-green-950/75"></div>

//           {/* Left side content */}

//           <div className="relative z-10 h-full flex flex-col justify-between p-10 xl:p-14 text-white">
//             {/* Logo */}

//             <div className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="EPMS Logo"
//                 className="w-12 h-12 rounded-xl object-cover shadow-lg"
//               />

//               <div>
//                 <h1 className="text-2xl font-bold tracking-wide">EPMS</h1>

//                 <p className="text-green-200 text-xs">Employee Management</p>
//               </div>
//             </div>

//             {/* Main message */}

//             <div className="max-w-lg">
//               <div
//                 className="inline-flex items-center gap-2 bg-white/10
//                            backdrop-blur-sm border border-white/20
//                            px-4 py-2 rounded-full text-sm mb-6"
//               >
//                 <ShieldCheck size={17} />
//                 Secure Employee Management
//               </div>

//               <h2 className="text-4xl xl:text-5xl font-bold leading-tight w-[700px]">
//                 Manage your workforce.
//                 <span className="block text-green-300">
//                   Simplify your workplace.
//                 </span>
//               </h2>

//               <p className="mt-6 text-green-50/80 text-base xl:text-lg leading-relaxed">
//                 EPMS provides a simple and efficient way to manage employee
//                 information, profiles, departments and workplace records from
//                 one centralized platform.
//               </p>

//               <div className="mt-8 flex items-center gap-8">
//                 <div>
//                   <p className="text-2xl font-bold">100%</p>

//                   <p className="text-sm text-green-200">Organized</p>
//                 </div>

//                 <div className="w-px h-10 bg-white/20"></div>

//                 <div>
//                   <p className="text-2xl font-bold">Secure</p>

//                   <p className="text-sm text-green-200">Employee Data</p>
//                 </div>

//                 <div className="w-px h-10 bg-white/20"></div>

//                 <div>
//                   <p className="text-2xl font-bold">Simple</p>

//                   <p className="text-sm text-green-200">To Use</p>
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}

//             <p className="text-sm text-green-100/60">
//               © {new Date().getFullYear()} EPMS. Employee Profile Management
//               System.
//             </p>
//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}

//         <div className="min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12">
//           <div className="w-full max-w-md py-10">
//             {/* Mobile Logo */}

//             <div className="lg:hidden flex justify-center mb-6">
//               <img
//                 src={logo}
//                 alt="EPMS Logo"
//                 className="w-14 h-14 rounded-xl object-cover shadow-sm"
//               />
//             </div>

//             {/* Heading */}

//             <div className="text-center mb-7">
//               <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
//                 Welcome back
//               </h2>

//               <p className="text-gray-500 dark:text-gray-400 mt-2">
//                 Kindly login to access employees' details
//               </p>
//             </div>

//             {/* Error Message */}

//             {error && (
//               <div className="mb-5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm rounded-lg px-4 py-3">
//                 {error}
//               </div>
//             )}

//             {/* Login Form */}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Email */}

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Email Address
//                 </label>

//                 <div className="relative">
//                   <Mail
//                     size={19}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
//                   />

//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       setError("");
//                     }}
//                     placeholder="you@example.com"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg
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
//                   className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Password
//                 </label>

//                 <div className="relative">
//                   <Lock
//                     size={19}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
//                   />

//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                       setError("");
//                     }}
//                     placeholder="Enter your password"
//                     className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-700 rounded-lg
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
//                                hover:text-green-700 dark:hover:text-green-400
//                                transition"
//                   >
//                     {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember + Forgot */}

//               <div className="flex items-center justify-between">
//                 <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <input type="checkbox" className="accent-green-700" />
//                   Remember me
//                 </label>

//                 <button
//                   type="button"
//                   className="text-sm font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               {/* Login Button */}

//               <button
//                 type="submit"
//                 className="w-full bg-green-700 text-white py-3 rounded-lg
//                            font-semibold hover:bg-green-800
//                            transition duration-200 shadow-sm"
//               >
//                 Log In
//               </button>
//             </form>

//             {/* Signup Divider */}

//             <div className="flex items-center gap-3 my-7">
//               <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>

//               <span className="text-xs text-gray-400 dark:text-gray-500">
//                 New to EPMS?
//               </span>

//               <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
//             </div>

//             {/* Signup */}

//             <p className="text-center text-sm text-gray-600 dark:text-gray-400">
//               Don't have an account?{" "}
//               <Link
//                 to="/signup"
//                 className="text-green-700 dark:text-green-400 font-semibold hover:text-green-800 dark:hover:text-green-300"
//               >
//                 Create an account
//               </Link>
//             </p>

//             {/* Security */}

//             <div className="flex items-center justify-center gap-2 mt-7 text-xs text-gray-400 dark:text-gray-500">
//               <ShieldCheck size={15} />

//               <span>Your information is protected</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import employee from "../assets/employeee.jpg";
import logo from "../assets/logo.png";

import { Mail, Lock, Eye, EyeOff, ShieldCheck, Moon, Sun } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  // ================= LOGIN =================

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const enteredEmail = email.trim().toLowerCase();

    // ================= ADMIN ACCOUNT =================

    const adminEmail = "admin@epms.com";
    const adminPassword = "admin123";

    if (enteredEmail === adminEmail && password === adminPassword) {
      const adminUser = {
        firstName: "EPMS",
        lastName: "Administrator",
        email: adminEmail,
        role: "admin",
      };

      localStorage.setItem("epmsLoggedInUser", JSON.stringify(adminUser));

      // Notify the navbar that login has occurred
      window.dispatchEvent(new Event("epmsAuthChange"));

      // Always direct the admin to the dashboard
      navigate("/dashboard", { replace: true });

      return;
    }

    // ================= REGULAR USERS =================

    const savedUsers = localStorage.getItem("epmsUsers");

    if (!savedUsers) {
      setError("No account found. Please create an account first.");
      return;
    }

    let users;

    try {
      users = JSON.parse(savedUsers);
    } catch {
      setError("Unable to read saved accounts. Please try again.");
      return;
    }

    if (!Array.isArray(users)) {
      setError("Unable to read saved accounts. Please try again.");
      return;
    }

    // Find a user matching both email and password
    const user = users.find(
      (savedUser) =>
        savedUser.email?.trim().toLowerCase() === enteredEmail &&
        savedUser.password === password,
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    // Create the logged-in regular user
    const regularUser = {
      ...user,
      role: "user",
    };

    // Save the logged-in user
    localStorage.setItem("epmsLoggedInUser", JSON.stringify(regularUser));

    // Notify the navbar that login has occurred
    window.dispatchEvent(new Event("epmsAuthChange"));

    // Always direct regular users to the employee page
    navigate("/employees", { replace: true });
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
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
              <img
                src={logo}
                alt="EPMS Logo"
                className="w-12 h-12 rounded-xl object-cover shadow-lg"
              />

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
                Secure Employee Management
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
                  <p className="text-2xl font-bold">Secure</p>
                  <p className="text-sm text-green-200">Employee Data</p>
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
              <img
                src={logo}
                alt="EPMS Logo"
                className="w-14 h-14 rounded-xl object-cover shadow-sm"
              />
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
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <input type="checkbox" className="accent-green-700" />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={() =>
                    setError(
                      "Please contact your administrator to reset your password.",
                    )
                  }
                  className="text-sm font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                >
                  Forgot password?
                </button>
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

            {/* Security */}
            <div className="flex items-center justify-center gap-2 mt-7 text-xs text-gray-400 dark:text-gray-500">
              <ShieldCheck size={15} />
              <span>Your information is protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
