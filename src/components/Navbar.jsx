// import { useState, useEffect } from "react";

// import {
//   Home,
//   Users,
//   Settings,
//   Bell,
//   ChevronDown,
//   Menu,
//   X,
//   Moon,
//   Sun,
// } from "lucide-react";

// import { NavLink, Link, useLocation } from "react-router-dom";

// import logo from "../assets/logo.png";
// import { useNavigate } from "react-router-dom";
// const Navbar = () => {
//   const location = useLocation();

//   const [loggedInUser, setLoggedInUser] = useState(() => {
//     return JSON.parse(localStorage.getItem("epmsLoggedInUser") || "null");
//   });

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("epmsDarkMode") === "true";
//   });

//   const isLoggedIn = !!loggedInUser;
//   const isAdmin = loggedInUser?.role === "admin";

//   const firstName = loggedInUser?.firstName || "User";
//   const lastName = loggedInUser?.lastName || "";

//   const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

//   const userRole = isAdmin ? "Administrator" : "Employee";

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("epmsDarkMode", "true");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("epmsDarkMode", "false");
//     }
//   }, [darkMode]);

//   const dashboardSection =
//     location.pathname === "/dashboard" ||
//     location.pathname === "/manage-employees" ||
//     location.pathname === "/addemployee" ||
//     location.pathname.endsWith("/edit");

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };
//   const navigate = useNavigate();

//   // const handleLogout = () => {
//   //   localStorage.removeItem("epmsLoggedInUser");

//   //   setLoggedInUser(null);
//   //   setUserMenuOpen(false);
//   //   setMenuOpen(false);

//   //   window.location.href = "/login";
//   // };

//   const handleLogout = () => {
//     localStorage.removeItem("epmsLoggedInUser");

//     setLoggedInUser(null);
//     setUserMenuOpen(false);
//     setMenuOpen(false);

//     navigate("/login");
//   };

//   return (
//     <nav
//       className="bg-white dark:bg-gray-900
//                  border-b border-green-100 dark:border-gray-800
//                  shadow-sm sticky top-0 z-50"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//         <div className="h-20 flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/home" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="EPMS Logo"
//               className="w-11 h-11 sm:w-12 sm:h-12
//                          rounded-xl object-cover shadow-sm"
//             />

//             <div>
//               <h1
//                 className="text-lg sm:text-xl font-bold
//                            text-green-900 dark:text-green-400
//                            tracking-tight"
//               >
//                 EPMS
//               </h1>

//               <p
//                 className="text-[10px] sm:text-xs
//                            text-green-600 dark:text-green-500"
//               >
//                 Employee Management
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex items-center gap-2">
//             {/* Home */}
//             <li>
//               <NavLink
//                 to="/home"
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 px-4 py-2.5 rounded-lg
//                    transition-all duration-200 ${
//                      isActive
//                        ? "bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
//                        : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
//                    }`
//                 }
//               >
//                 <Home size={18} />
//                 Home
//               </NavLink>
//             </li>

//             {/* Dashboard - Admin Only */}
//             {isLoggedIn && isAdmin && (
//               <li>
//                 <NavLink
//                   to="/dashboard"
//                   className={
//                     dashboardSection
//                       ? "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
//                       : "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
//                   }
//                 >
//                   Dashboard
//                 </NavLink>
//               </li>
//             )}

//             {/* Employees - Logged In Only */}
//             {isLoggedIn && (
//               <li>
//                 <NavLink
//                   to="/employees"
//                   className={({ isActive }) =>
//                     `flex items-center gap-2 px-4 py-2.5 rounded-lg
//                      transition-all duration-200 ${
//                        isActive
//                          ? "bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
//                          : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
//                      }`
//                   }
//                 >
//                   <Users size={18} />
//                   Employees
//                 </NavLink>
//               </li>
//             )}

//             {/* About */}
//             <li>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 px-4 py-2.5 rounded-lg
//                    transition-all duration-200 ${
//                      isActive
//                        ? "bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
//                        : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
//                    }`
//                 }
//               >
//                 <Home size={18} />
//                 About
//               </NavLink>
//             </li>

//             {/* Features */}
//             <li>
//               <NavLink
//                 to="/features"
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 px-4 py-2.5 rounded-lg
//                    transition-all duration-200 ${
//                      isActive
//                        ? "bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
//                        : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
//                    }`
//                 }
//               >
//                 <Settings size={18} />
//                 Features
//               </NavLink>
//             </li>
//           </ul>

//           {/* Right Side */}
//           <div className="flex items-center gap-2 sm:gap-4">
//             {/* Notifications - Logged In Only */}
//             {isLoggedIn && (
//               <button
//                 type="button"
//                 className="relative p-2 rounded-full
//                            text-gray-600 dark:text-gray-300
//                            hover:bg-green-50 dark:hover:bg-gray-800
//                            hover:text-green-700 dark:hover:text-green-400
//                            transition"
//               >
//                 <Bell size={20} />

//                 <span
//                   className="absolute top-1 right-1 w-2.5 h-2.5
//                              bg-red-500 rounded-full
//                              border-2 border-white dark:border-gray-900"
//                 ></span>
//               </button>
//             )}

//             {/* Dark Mode */}
//             <button
//               type="button"
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded-full
//                          text-gray-600 dark:text-gray-300
//                          hover:bg-green-50 dark:hover:bg-gray-800
//                          hover:text-green-700 dark:hover:text-green-400
//                          transition"
//               aria-label={
//                 darkMode ? "Switch to light mode" : "Switch to dark mode"
//               }
//               title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>

//             {/* User Profile - Logged In Only */}
//             {isLoggedIn && (
//               <div
//                 className="relative hidden sm:flex items-center gap-3
//                            pl-3 sm:pl-4
//                            border-l border-gray-200 dark:border-gray-700"
//               >
//                 <button
//                   type="button"
//                   onClick={() => setUserMenuOpen(!userMenuOpen)}
//                   className="flex items-center gap-3 cursor-pointer"
//                 >
//                   <div
//                     className="w-9 h-9 sm:w-10 sm:h-10
//                                rounded-full bg-green-700
//                                text-white flex items-center
//                                justify-center font-semibold"
//                   >
//                     {initials}
//                   </div>

//                   <div className="hidden lg:block text-left">
//                     <p
//                       className="text-sm font-semibold
//                                  text-gray-800 dark:text-gray-100"
//                     >
//                       {firstName} {lastName}
//                     </p>

//                     <p
//                       className="text-xs
//                                  text-gray-500 dark:text-gray-400"
//                     >
//                       {userRole}
//                     </p>
//                   </div>

//                   <ChevronDown
//                     size={17}
//                     className={`text-gray-500 dark:text-gray-400
//                                 hidden lg:block
//                                 transition-transform duration-200 ${
//                                   userMenuOpen ? "rotate-180" : ""
//                                 }`}
//                   />
//                 </button>

//                 {/* User Dropdown */}
//                 {userMenuOpen && (
//                   <div
//                     className="absolute right-0 top-full mt-3 w-48
//                                bg-white dark:bg-gray-800
//                                border border-gray-100 dark:border-gray-700
//                                rounded-xl shadow-lg py-2 z-50"
//                   >
//                     <button
//                       type="button"
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2.5
//                                  text-sm font-medium
//                                  text-red-600 dark:text-red-400
//                                  hover:bg-red-50 dark:hover:bg-red-950/40
//                                  transition"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Login - Logged Out Only */}
//             {!isLoggedIn && (
//               <Link
//                 to="/login"
//                 className="hidden sm:block
//                            bg-green-700 text-white
//                            px-5 py-2.5 rounded-lg
//                            font-semibold text-sm
//                            hover:bg-green-800 transition"
//               >
//                 Login
//               </Link>
//             )}

//             {/* Mobile Menu Button */}
//             <button
//               type="button"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="md:hidden flex items-center justify-center
//                          w-10 h-10 rounded-lg
//                          text-gray-700 dark:text-gray-200
//                          hover:bg-green-50 dark:hover:bg-gray-800
//                          hover:text-green-700 dark:hover:text-green-400
//                          transition"
//               aria-label="Toggle navigation menu"
//             >
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {menuOpen && (
//           <div
//             className="md:hidden border-t
//                        border-green-100 dark:border-gray-800 py-4"
//           >
//             <div className="flex flex-col gap-1">
//               {/* Dashboard - Admin Only */}
//               {isLoggedIn && isAdmin && (
//                 <NavLink
//                   to="/dashboard"
//                   onClick={closeMenu}
//                   className={
//                     dashboardSection
//                       ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
//                       : "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
//                   }
//                 >
//                   Dashboard
//                 </NavLink>
//               )}

//               {/* Employees - Logged In Only */}
//               {isLoggedIn && (
//                 <NavLink
//                   to="/employees"
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     `flex items-center gap-3 px-4 py-3 rounded-lg ${
//                       isActive
//                         ? "bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
//                         : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
//                     }`
//                   }
//                 >
//                   <Users size={19} />
//                   Employees
//                 </NavLink>
//               )}

//               {/* About */}
//               <NavLink
//                 to="/about"
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg ${
//                     isActive
//                       ? "bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
//                       : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
//                   }`
//                 }
//               >
//                 <Home size={19} />
//                 About
//               </NavLink>

//               {/* Features */}
//               <NavLink
//                 to="/features"
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg ${
//                     isActive
//                       ? "bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
//                       : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
//                   }`
//                 }
//               >
//                 <Settings size={19} />
//                 Features
//               </NavLink>

//               {/* Mobile Login - Logged Out Only */}
//               {!isLoggedIn && (
//                 <Link
//                   to="/login"
//                   onClick={closeMenu}
//                   className="mt-2 bg-green-700 text-white
//                              px-4 py-3 rounded-lg
//                              font-semibold text-center
//                              hover:bg-green-800 transition"
//                 >
//                   Login
//                 </Link>
//               )}

//               {/* Mobile User Info - Logged In Only */}
//               {isLoggedIn && (
//                 <div
//                   className="mt-3 pt-3
//                              border-t border-gray-200 dark:border-gray-700"
//                 >
//                   <div className="flex items-center gap-3 px-4 py-3">
//                     <div
//                       className="w-10 h-10 rounded-full bg-green-700
//                                  text-white flex items-center
//                                  justify-center font-semibold"
//                     >
//                       {initials}
//                     </div>

//                     <div>
//                       <p
//                         className="text-sm font-semibold
//                                    text-gray-800 dark:text-gray-100"
//                       >
//                         {firstName} {lastName}
//                       </p>

//                       <p
//                         className="text-xs
//                                    text-gray-500 dark:text-gray-400"
//                       >
//                         {userRole}
//                       </p>
//                     </div>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-3
//                                text-sm font-medium
//                                text-red-600 dark:text-red-400
//                                hover:bg-red-50 dark:hover:bg-red-950/40
//                                transition"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";

import {
  Home,
  Users,
  Settings,
  ChevronDown,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("epmsLoggedInUser") || "null");
    } catch {
      return null;
    }
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("epmsDarkMode") === "true";
  });

  const isLoggedIn = Boolean(loggedInUser);
  const isAdmin = loggedInUser?.role === "admin";

  const firstName = loggedInUser?.firstName || "User";
  const lastName = loggedInUser?.lastName || "";

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  const userRole = isAdmin ? "Administrator" : "Employee";

  // Determine the correct landing page for the logged-in user.
  const landingPage = isAdmin ? "/dashboard" : "/employees";

  // Keep authentication state synchronized.
  useEffect(() => {
    const syncLoggedInUser = () => {
      try {
        setLoggedInUser(
          JSON.parse(localStorage.getItem("epmsLoggedInUser") || "null"),
        );
      } catch {
        setLoggedInUser(null);
      }
    };

    window.addEventListener("storage", syncLoggedInUser);
    window.addEventListener("epmsAuthChange", syncLoggedInUser);

    return () => {
      window.removeEventListener("storage", syncLoggedInUser);
      window.removeEventListener("epmsAuthChange", syncLoggedInUser);
    };
  }, []);

  // Apply and save dark mode.
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("epmsDarkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("epmsDarkMode", "false");
    }
  }, [darkMode]);

  // Highlight the dashboard for its related admin pages.
  const dashboardSection =
    location.pathname === "/dashboard" ||
    location.pathname === "/manage-employees" ||
    location.pathname === "/manageemployee" ||
    location.pathname === "/addemployee" ||
    location.pathname.endsWith("/edit");

  const closeMenu = () => {
    setMenuOpen(false);
    setUserMenuOpen(false);
  };

  // Logout.
  const handleLogout = () => {
    localStorage.removeItem("epmsLoggedInUser");

    setLoggedInUser(null);
    setUserMenuOpen(false);
    setMenuOpen(false);

    window.dispatchEvent(new Event("epmsAuthChange"));

    navigate("/login", { replace: true });
  };

  // Shared navigation styling.
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2.5 rounded-lg
     transition-all duration-200 ${
       isActive
         ? "bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
         : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
     }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg ${
      isActive
        ? "bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-400 font-semibold"
        : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400"
    }`;

  return (
    <nav
      className="bg-white dark:bg-gray-900
                 border-b border-green-100 dark:border-gray-800
                 shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to={isLoggedIn ? landingPage : "/home"}
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="EPMS Logo"
              className="w-11 h-11 sm:w-12 sm:h-12
                         rounded-xl object-cover shadow-sm"
            />

            <div>
              <h1
                className="text-lg sm:text-xl font-bold
                           text-green-900 dark:text-green-400
                           tracking-tight"
              >
                EPMS
              </h1>

              <p
                className="text-[10px] sm:text-xs
                           text-green-600 dark:text-green-500"
              >
                Employee Management
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {/* Home: logged-out users only */}
            {!isLoggedIn && (
              <li>
                <NavLink to="/home" className={navLinkClass}>
                  <Home size={18} />
                  Home
                </NavLink>
              </li>
            )}

            {/* Dashboard: admins only */}
            {isLoggedIn && isAdmin && (
              <li>
                <NavLink
                  to="/dashboard"
                  className={() =>
                    `${navLinkClass({
                      isActive: dashboardSection,
                    })}`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            {/* Employees: all logged-in users */}
            {isLoggedIn && (
              <li>
                <NavLink to="/employees" className={navLinkClass}>
                  <Users size={18} />
                  Employees
                </NavLink>
              </li>
            )}

            {/* About: logged-out users only */}
            {!isLoggedIn && (
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  <Home size={18} />
                  About
                </NavLink>
              </li>
            )}

            {/* Features: logged-out users only */}
            {!isLoggedIn && (
              <li>
                <NavLink to="/features" className={navLinkClass}>
                  <Settings size={18} />
                  Features
                </NavLink>
              </li>
            )}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Notifications */}
            {isLoggedIn && (
              <button
                type="button"
                aria-label="Notifications"
                className="relative p-2 rounded-full
                           text-gray-600 dark:text-gray-300
                           hover:bg-green-50 dark:hover:bg-gray-800
                           hover:text-green-700 dark:hover:text-green-400
                           transition"
              ></button>
            )}

            {/* Dark Mode */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full
                         text-gray-600 dark:text-gray-300
                         hover:bg-green-50 dark:hover:bg-gray-800
                         hover:text-green-700 dark:hover:text-green-400
                         transition"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* User Profile */}
            {isLoggedIn && (
              <div
                className="relative hidden sm:flex items-center gap-3
                           pl-3 sm:pl-4
                           border-l border-gray-200 dark:border-gray-700"
              >
                <button
                  type="button"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 cursor-pointer"
                  aria-expanded={userMenuOpen}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10
                               rounded-full bg-green-700 text-white
                               flex items-center justify-center font-semibold"
                  >
                    {initials}
                  </div>

                  <div className="hidden lg:block text-left">
                    <p
                      className="text-sm font-semibold
                                 text-gray-800 dark:text-gray-100"
                    >
                      {firstName} {lastName}
                    </p>

                    <p
                      className="text-xs
                                 text-gray-500 dark:text-gray-400"
                    >
                      {userRole}
                    </p>
                  </div>

                  <ChevronDown
                    size={17}
                    className={`text-gray-500 dark:text-gray-400
                                hidden lg:block transition-transform duration-200 ${
                                  userMenuOpen ? "rotate-180" : ""
                                }`}
                  />
                </button>

                {/* User Dropdown */}
                {userMenuOpen && (
                  <div
                    className="absolute right-0 top-full mt-3 w-48
                               bg-white dark:bg-gray-800
                               border border-gray-100 dark:border-gray-700
                               rounded-xl shadow-lg py-2 z-50"
                  >
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                        {firstName} {lastName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {userRole}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2.5
                                 text-sm font-medium
                                 text-red-600 dark:text-red-400
                                 hover:bg-red-50 dark:hover:bg-red-950/40
                                 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Login */}
            {!isLoggedIn && (
              <Link
                to="/login"
                className="hidden sm:block
                           bg-green-700 text-white
                           px-5 py-2.5 rounded-lg
                           font-semibold text-sm
                           hover:bg-green-800 transition"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center
                         w-10 h-10 rounded-lg
                         text-gray-700 dark:text-gray-200
                         hover:bg-green-50 dark:hover:bg-gray-800
                         hover:text-green-700 dark:hover:text-green-400
                         transition"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            className="md:hidden border-t
                       border-green-100 dark:border-gray-800 py-4"
          >
            <div className="flex flex-col gap-1">
              {/* Home: logged-out users only */}
              {!isLoggedIn && (
                <NavLink
                  to="/home"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  <Home size={19} />
                  Home
                </NavLink>
              )}

              {/* Dashboard: admins only */}
              {isLoggedIn && isAdmin && (
                <NavLink
                  to="/dashboard"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  Dashboard
                </NavLink>
              )}

              {/* Employees: all logged-in users */}
              {isLoggedIn && (
                <NavLink
                  to="/employees"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  <Users size={19} />
                  Employees
                </NavLink>
              )}

              {/* Public links */}
              {!isLoggedIn && (
                <>
                  <NavLink
                    to="/about"
                    onClick={closeMenu}
                    className={mobileLinkClass}
                  >
                    <Home size={19} />
                    About
                  </NavLink>

                  <NavLink
                    to="/features"
                    onClick={closeMenu}
                    className={mobileLinkClass}
                  >
                    <Settings size={19} />
                    Features
                  </NavLink>

                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="mt-2 bg-green-700 text-white
                               px-4 py-3 rounded-lg font-semibold
                               text-center hover:bg-green-800 transition"
                  >
                    Login
                  </Link>
                </>
              )}

              {/* Mobile User Info */}
              {isLoggedIn && (
                <div
                  className="mt-3 pt-3
                             border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div
                      className="w-10 h-10 rounded-full bg-green-700
                                 text-white flex items-center
                                 justify-center font-semibold"
                    >
                      {initials}
                    </div>

                    <div>
                      <p
                        className="text-sm font-semibold
                                   text-gray-800 dark:text-gray-100"
                      >
                        {firstName} {lastName}
                      </p>

                      <p
                        className="text-xs
                                   text-gray-500 dark:text-gray-400"
                      >
                        {userRole}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3
                               text-sm font-medium
                               text-red-600 dark:text-red-400
                               hover:bg-red-50 dark:hover:bg-red-950/40
                               transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
