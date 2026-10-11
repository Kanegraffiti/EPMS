// import { Route, Routes, Navigate, useLocation } from "react-router-dom";

// import { useEffect, useState } from "react";

// import "./App.css";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Employee from "./pages/Employee";
// import AddEmployee from "./pages/AddEmployee";
// import EmployeeProfile from "./pages/EmployeeProfile";
// import employeeData from "./data/employeeData";
// import EditEmployee from "./pages/EditEmployee";
// import Dashboard from "./pages/Dashboard";
// import ManageEmployee from "./pages/ManageEmployee";
// import Features from "./pages/Features";

// // ================= USER ROUTE =================
// // Regular users and admins can access these pages

// const UserRoute = ({ children }) => {
//   const location = useLocation();

//   const loggedInUser = localStorage.getItem("epmsLoggedInUser");

//   if (!loggedInUser) {
//     return <Navigate to="/login" state={{ from: location.pathname }} replace />;
//   }

//   return children;
// };

// // ================= ADMIN ROUTE =================
// // Only administrators can access these pages

// const AdminRoute = ({ children }) => {
//   const location = useLocation();

//   const loggedInUser = localStorage.getItem("epmsLoggedInUser");

//   // Not logged in
//   if (!loggedInUser) {
//     return <Navigate to="/login" state={{ from: location.pathname }} replace />;
//   }

//   const user = JSON.parse(loggedInUser);

//   // Logged in but not an administrator
//   if (user.role !== "admin") {
//     return <Navigate to="/employees" replace />;
//   }

//   return children;
// };

// // ================= APP =================

// const App = () => {
//   const [employees, setEmployees] = useState(() => {
//     const savedEmployees = localStorage.getItem("employees");

//     return savedEmployees ? JSON.parse(savedEmployees) : employeeData;
//   });

//   useEffect(() => {
//     localStorage.setItem("employees", JSON.stringify(employees));
//   }, [employees]);

//   return (
//     <div>
//       <Routes>
//         {/* ================= PUBLIC PAGES ================= */}

//         <Route path="/" element={<Home />} />

//         <Route path="/home" element={<Home />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/signup" element={<Signup />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/features" element={<Features />} />

//         {/* ================= USER PAGES ================= */}
//         {/* Both regular users and admins can access these */}

//         <Route
//           path="/employees"
//           element={
//             <UserRoute>
//               <Employee employees={employees} />
//             </UserRoute>
//           }
//         />

//         <Route
//           path="/employees/:id"
//           element={
//             <UserRoute>
//               <EmployeeProfile employees={employees} />
//             </UserRoute>
//           }
//         />

//         {/* ================= ADMIN PAGES ================= */}
//         {/* Only administrators can access these */}

//         <Route
//           path="/dashboard"
//           element={
//             <AdminRoute>
//               <Dashboard employees={employees} />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/manage-employees"
//           element={
//             <AdminRoute>
//               <ManageEmployee
//                 employees={employees}
//                 setEmployees={setEmployees}
//               />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/addemployee"
//           element={
//             <AdminRoute>
//               <AddEmployee setEmployees={setEmployees} />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/employees/:id/edit"
//           element={
//             <AdminRoute>
//               <EditEmployee employees={employees} setEmployees={setEmployees} />
//             </AdminRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Employee from "./pages/Employee";
import AddEmployee from "./pages/AddEmployee";
import EmployeeProfile from "./pages/EmployeeProfile";
import employeeData from "./data/employeeData";
import EditEmployee from "./pages/EditEmployee";
import Dashboard from "./pages/Dashboard";
import ManageEmployee from "./pages/ManageEmployee";
import Features from "./pages/Features";

// ================= GET LOGGED-IN USER =================

const getLoggedInUser = () => {
  const loggedInUser = localStorage.getItem("epmsLoggedInUser");

  if (!loggedInUser) {
    return null;
  }

  try {
    return JSON.parse(loggedInUser);
  } catch {
    return null;
  }
};

// ================= ROLE-BASED REDIRECT =================

const getUserHomePage = (user) => {
  return user?.role === "admin" ? "/dashboard" : "/employees";
};

// ================= PUBLIC ROUTE =================

// Logged-in users cannot return to the home, login,
// or signup pages.

const PublicRoute = ({ children }) => {
  const user = getLoggedInUser();

  if (user) {
    return <Navigate to={getUserHomePage(user)} replace />;
  }

  return children;
};

// ================= USER ROUTE =================

// Both regular users and administrators can access
// employee pages.

const UserRoute = ({ children }) => {
  const location = useLocation();
  const user = getLoggedInUser();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

// ================= ADMIN ROUTE =================

// Only administrators can access admin pages.

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const user = getLoggedInUser();

  // Not logged in: go to login.
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Regular user: redirect to employee directory.
  if (user.role !== "admin") {
    return <Navigate to="/employees" replace />;
  }

  return children;
};

// ================= APP =================

const App = () => {
  const [employees, setEmployees] = useState(() => {
    try {
      const savedEmployees = localStorage.getItem("employees");

      return savedEmployees ? JSON.parse(savedEmployees) : employeeData;
    } catch {
      return employeeData;
    }
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <div>
      <Routes>
        {/* ================= PUBLIC PAGES ================= */}

        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        {/* About and Features remain publicly accessible. */}

        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />

        {/* ================= USER PAGES ================= */}

        <Route
          path="/employees"
          element={
            <UserRoute>
              <Employee employees={employees} />
            </UserRoute>
          }
        />

        <Route
          path="/employees/:id"
          element={
            <UserRoute>
              <EmployeeProfile employees={employees} />
            </UserRoute>
          }
        />

        {/* ================= ADMIN PAGES ================= */}

        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard employees={employees} />
            </AdminRoute>
          }
        />

        <Route
          path="/manage-employees"
          element={
            <AdminRoute>
              <ManageEmployee
                employees={employees}
                setEmployees={setEmployees}
              />
            </AdminRoute>
          }
        />

        <Route
          path="/addemployee"
          element={
            <AdminRoute>
              <AddEmployee setEmployees={setEmployees} />
            </AdminRoute>
          }
        />

        <Route
          path="/employees/:id/edit"
          element={
            <AdminRoute>
              <EditEmployee employees={employees} setEmployees={setEmployees} />
            </AdminRoute>
          }
        />

        {/* ================= UNKNOWN ROUTES ================= */}

        <Route
          path="*"
          element={
            <Navigate
              to={
                getLoggedInUser()
                  ? getUserHomePage(getLoggedInUser())
                  : "/login"
              }
              replace
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
