import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";


const About = () => {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />


      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-green-300 font-semibold tracking-wide uppercase mb-4">
                About EPMS
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                A smarter way to manage your employees.
              </h1>

              <p className="text-green-100 text-lg md:text-xl mt-6 leading-relaxed">
                EPMS is an Employee Profile Management System designed to help
                organizations store, manage, search, and access employee
                information in one simple and organized place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/employees"
                  className="inline-flex items-center justify-center
                             bg-white text-green-800 px-6 py-3 rounded-lg
                             font-semibold hover:bg-green-50
                             hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Employees →
                </Link>

                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center
                             border border-green-300 text-white
                             px-6 py-3 rounded-lg font-semibold
                             hover:bg-green-700 hover:-translate-y-1
                             transition-all duration-300"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT IS EPMS */}
      <ScrollReveal>
        <section className="bg-white dark:bg-gray-900 py-16 md:py-20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                  What is EPMS?
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                  Everything you need to manage employee records.
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
                  EPMS provides a application where employee
                  information can be organized and accessed efficiently. Instead
                  of keeping employee records scattered across different
                  documents or systems, EPMS brings them together into one
                  easy-to-use platform.
                </p>

                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  From employee profiles and contact information to departments,
                  positions, and employment status, EPMS makes it easier to keep
                  important records organized.
                </p>
              </div>

              <div
                className="bg-green-50 dark:bg-green-950/40 rounded-3xl p-8 md:p-10
                           border border-green-100 dark:border-green-900
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <div
                  className="w-16 h-16 rounded-2xl bg-green-700
                             text-white flex items-center justify-center
                             text-2xl font-bold
                             hover:rotate-6 hover:bg-green-800
                             transition-all duration-500"
                >
                  EP
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Employee Profile Management
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  A simple interface for viewing and managing employee
                  information with simplicity, speed, and organization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PURPOSE SECTION */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                Our Purpose
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                Built to make employee management easier.
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                EPMS focuses on simplifying everyday employee management tasks
                while keeping information organized and accessible.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <ScrollReveal delay={0}>
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           shadow-sm p-7 h-full
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <div
                  className="w-12 h-12 bg-green-100 dark:bg-green-950/60
                             text-green-700 dark:text-green-400
                             rounded-xl flex items-center justify-center
                             font-bold text-lg"
                >
                  01
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Centralize
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Keep employee records in one browser instead of
                  managing information across multiple documents.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           shadow-sm p-7 h-full
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <div
                  className="w-12 h-12 bg-green-100 dark:bg-green-950/60
                             text-green-700 dark:text-green-400
                             rounded-xl flex items-center justify-center
                             font-bold text-lg"
                >
                  02
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Simplify
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Make it easier for authorized users to find and manage
                  employee information quickly.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           shadow-sm p-7 h-full
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <div
                  className="w-12 h-12 bg-green-100 dark:bg-green-950/60
                             text-green-700 dark:text-green-400
                             rounded-xl flex items-center justify-center
                             font-bold text-lg"
                >
                  03
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Improve
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Create a cleaner and more efficient employee management
                  experience for organizations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                Key Benefits
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                Why use EPMS?
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-4">
                EPMS provides practical tools that make employee information
                easier to manage and access.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ScrollReveal delay={0}>
              <div
                className="p-6 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           bg-gray-50 dark:bg-gray-950 h-full
                           hover:bg-green-50 dark:hover:bg-green-950/40
                           hover:-translate-y-2 hover:shadow-lg
                           transition-all duration-500"
              >
                <div className="text-3xl">📁</div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-5">
                  Centralized Records
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                  Keep employee information organized in one place.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                className="p-6 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           bg-gray-50 dark:bg-gray-950 h-full
                           hover:bg-green-50 dark:hover:bg-green-950/40
                           hover:-translate-y-2 hover:shadow-lg
                           transition-all duration-500"
              >
                <div className="text-3xl">🔍</div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-5">
                  Easy Search
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                  Quickly find employees using names, IDs, departments,
                  positions, or email addresses.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                className="p-6 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           bg-gray-50 dark:bg-gray-950 h-full
                           hover:bg-green-50 dark:hover:bg-green-950/40
                           hover:-translate-y-2 hover:shadow-lg
                           transition-all duration-500"
              >
                <div className="text-3xl">⚙️</div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-5">
                  Simple Management
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                  Add, edit, and remove employee records through a
                  straightforward management interface.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div
                className="p-6 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           bg-gray-50 dark:bg-gray-950 h-full
                           hover:bg-green-50 dark:hover:bg-green-950/40
                           hover:-translate-y-2 hover:shadow-lg
                           transition-all duration-500"
              >
                <div className="text-3xl">👤</div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-5">
                  Clear Profiles
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                  View important employee information through clean and
                  structured profiles.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HOW EPMS WORKS */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                How It Works
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                Everything is organized into simple steps.
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                EPMS gives users a straightforward workflow for accessing and
                managing employee information.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ScrollReveal delay={0}>
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           shadow-sm p-7 h-full
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <span className="text-green-700 dark:text-green-400 font-bold text-sm">
                  STEP 01
                </span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-4">
                  Dashboard
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Get an overview of employee records, statistics, and
                  departments from one central dashboard.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           shadow-sm p-7 h-full
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <span className="text-green-700 dark:text-green-400 font-bold text-sm">
                  STEP 02
                </span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-4">
                  Employee Directory
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Search and filter employees to quickly locate the information
                  you need.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           shadow-sm p-7 h-full
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <span className="text-green-700 dark:text-green-400 font-bold text-sm">
                  STEP 03
                </span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-4">
                  Manage Employees
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Authorized users can add, edit, and delete employee records
                  from the management area.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl
                           border border-gray-100 dark:border-gray-800
                           shadow-sm p-7 h-full
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <span className="text-green-700 dark:text-green-400 font-bold text-sm">
                  STEP 04
                </span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-4">
                  Employee Profile
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Open a complete employee profile to view contact, department,
                  position, and status information.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="bg-green-900 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to explore EPMS?
            </h2>

            <p className="text-green-100 mt-4 max-w-2xl mx-auto leading-relaxed">
              Explore the employee directory or head to the dashboard to see how
              EPMS brings employee management together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                to="/employees"
                className="bg-white text-green-900 px-6 py-3
                           rounded-lg font-semibold
                           hover:bg-green-50 hover:-translate-y-1
                           transition-all duration-300"
              >
                View Employees
              </Link>

              <Link
                to="/dashboard"
                className="border border-green-300 text-white
                           px-6 py-3 rounded-lg font-semibold
                           hover:bg-green-800 hover:-translate-y-1
                           transition-all duration-300"
              >
                Open Dashboard
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex flex-col md:flex-row
                       items-center justify-between gap-4"
          >
            <div>
              <p className="text-white font-bold text-lg">EPMS</p>

              <p className="text-sm mt-1">Employee Profile Management System</p>
            </div>

            <p className="text-sm">
              © {new Date().getFullYear()} EPMS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
