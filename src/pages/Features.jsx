import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";

import {
  Users,
  Search,
  UserRound,
  LayoutDashboard,
  UserPlus,
  Pencil,
  Trash2,
  Filter,
  BarChart3,
  ShieldCheck,
  Smartphone,
  Database,
} from "lucide-react";

const Features = () => {

  const features = [
    {
      icon: Users,
      title: "Employee Directory",
      description:
        "Explore a browser-based directory containing employee records, departments, positions, contact details, and employment status.",
    },
    {
      icon: Search,
      title: "Powerful Search",
      description:
        "Find employees quickly by searching their name, employee ID, email, position, or department.",
    },
    {
      icon: Filter,
      title: "Smart Filtering",
      description:
        "Filter employee records by department and employment status to find exactly what you need.",
    },
    {
      icon: UserRound,
      title: "Employee Profiles",
      description:
        "View detailed employee profiles containing important personal and employment information.",
    },
    {
      icon: LayoutDashboard,
      title: "Management Dashboard",
      description:
        "Get a clear overview of your workforce with employee statistics, department breakdowns, and recent records.",
    },
    {
      icon: UserPlus,
      title: "Add Employees",
      description:
        "Create new employee records quickly with a simple and structured employee registration form.",
    },
    {
      icon: Pencil,
      title: "Edit Employee Records",
      description:
        "Update employee information whenever changes occur while keeping existing records organized.",
    },
    {
      icon: Trash2,
      title: "Delete Records",
      description:
        "Remove outdated employee records through a controlled management interface with confirmation.",
    },
    {
      icon: BarChart3,
      title: "Employee Statistics",
      description:
        "Monitor total employees, active employees, employees on leave, and the number of departments.",
    },
    {
      icon: Database,
      title: "Organized Data",
      description:
        "Keep employee information structured and easy to access through this practice project.",
    },
    {
      icon: ShieldCheck,
      title: "Controlled Management",
      description:
        "Separate everyday employee viewing from administrative employee management functions.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Use EPMS comfortably across desktops, tablets, and mobile devices with a responsive interface.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />


      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-green-300 font-semibold uppercase tracking-widest">
                EPMS Features
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
                Everything you need to manage employees.
              </h1>

              <p className="text-green-100 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
                EPMS brings employee records, profiles, search tools, management
                controls, and workforce insights together in one simple
                platform.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link
                  to="/employees"
                  className="bg-white text-green-900 px-6 py-3
                             rounded-lg font-semibold
                             hover:bg-green-50 hover:-translate-y-1
                             transition-all duration-300"
                >
                  Explore Employees →
                </Link>

                <Link
                  to="/dashboard"
                  className="border border-green-300 text-white
                             px-6 py-3 rounded-lg font-semibold
                             hover:bg-green-800 hover:-translate-y-1
                             transition-all duration-300"
                >
                  View Dashboard
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE INTRO */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                Built for simplicity
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                Powerful features without unnecessary complexity.
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                EPMS is designed around the everyday tasks involved in employee
                management. Each feature has a clear purpose: helping users find
                information faster, manage records efficiently, and understand
                their workforce better.
              </p>
            </div>
          </ScrollReveal>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <ScrollReveal key={feature.title} delay={(index % 3) * 100}>
                  <div
                    className="group bg-gray-50 dark:bg-gray-950
                               border border-gray-100 dark:border-gray-800
                               rounded-2xl p-7 h-full
                               hover:bg-white dark:hover:bg-gray-900
                               hover:-translate-y-2
                               hover:shadow-xl
                               hover:border-green-100 dark:hover:border-green-900
                               transition-all duration-500"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="w-12 h-12 rounded-xl
                                   bg-green-100 dark:bg-green-950/60
                                   text-green-700 dark:text-green-400
                                   flex items-center justify-center
                                   group-hover:bg-green-700
                                   group-hover:text-white
                                   group-hover:scale-110
                                   transition-all duration-500"
                      >
                        <Icon size={23} />
                      </div>

                      <span
                        className="text-sm font-bold
                                   text-green-700 dark:text-green-400
                                   bg-green-50 dark:bg-green-950/60
                                   px-3 py-1 rounded-full"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMPLOYEE DIRECTORY */}
      <ScrollReveal>
        <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="w-14 h-14 rounded-2xl
                             bg-green-100 dark:bg-green-950/60
                             text-green-700 dark:text-green-400
                             flex items-center justify-center"
                >
                  <Users size={28} />
                </div>

                <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide mt-6">
                  Employee Directory
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                  Find employee information quickly.
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                  The Employee Directory gives users a clean view of employee
                  records. Search through employees and filter the results to
                  quickly locate the person or information you need.
                </p>

                <div className="space-y-4 mt-7">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-700 dark:text-green-400">
                      <Search size={19} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        Search employee records
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Search using names, IDs, emails, positions, or
                        departments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-700 dark:text-green-400">
                      <Filter size={19} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        Filter your results
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Narrow records down by department or employee status.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/employees"
                  className="inline-flex items-center mt-8
                             bg-green-700 text-white px-6 py-3
                             rounded-lg font-semibold
                             hover:bg-green-800 hover:-translate-y-1
                             transition-all duration-300"
                >
                  Open Employee Directory →
                </Link>
              </div>

              <div
                className="bg-gradient-to-br from-green-50 to-white
                           dark:from-green-950/50 dark:to-gray-900
                           border border-green-100 dark:border-green-900
                           rounded-3xl p-8 shadow-sm"
              >
                <div
                  className="bg-white dark:bg-gray-800
                             rounded-2xl shadow-lg
                             border border-gray-100 dark:border-gray-700
                             p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Employee Directory
                      </p>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                        120 Employees
                      </h3>
                    </div>

                    <div
                      className="w-12 h-12 rounded-xl
                                 bg-green-100 dark:bg-green-950/60
                                 text-green-700 dark:text-green-400
                                 flex items-center justify-center"
                    >
                      <Users size={24} />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div
                      className="h-11 bg-gray-50 dark:bg-gray-900
                                 rounded-lg border border-gray-200 dark:border-gray-700
                                 flex items-center px-4"
                    >
                      <Search size={18} className="text-gray-400" />

                      <span className="text-sm text-gray-400 ml-3">
                        Search employees...
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="h-10 bg-green-50 dark:bg-green-950/60 rounded-lg flex items-center px-4">
                      <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                        All Departments
                      </span>
                    </div>

                    <div className="h-10 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center px-4">
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mt-5">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                      <div className="w-9 h-9 rounded-full bg-green-700 text-white flex items-center justify-center text-xs font-bold">
                        JD
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                          John Michael Doe
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Frontend Developer
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                      <div className="w-9 h-9 rounded-full bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400 flex items-center justify-center text-xs font-bold">
                        JW
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                          Jane Williams
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          HR Manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MANAGEMENT */}
      <ScrollReveal>
        <section className="bg-white dark:bg-gray-900 py-16 md:py-20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="bg-gray-50 dark:bg-gray-950
                             border border-gray-100 dark:border-gray-800
                             rounded-3xl p-8 shadow-sm"
                >
                  <div
                    className="bg-white dark:bg-gray-800
                               rounded-2xl shadow-lg
                               border border-gray-100 dark:border-gray-700
                               p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Manage Employees
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                          Employee Records
                        </h3>
                      </div>

                      <button
                        className="bg-green-700 text-white px-4 py-2
                                   rounded-lg text-sm font-semibold"
                      >
                        + Add
                      </button>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400 flex items-center justify-center text-xs font-bold">
                            JD
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                              John Doe
                            </p>

                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Engineering
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <span className="text-xs font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/60 px-3 py-1 rounded-full">
                            Edit
                          </span>

                          <span className="text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-3 py-1 rounded-full">
                            Delete
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400 flex items-center justify-center text-xs font-bold">
                            JW
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                              Jane Williams
                            </p>

                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Human Resources
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <span className="text-xs font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/60 px-3 py-1 rounded-full">
                            Edit
                          </span>

                          <span className="text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-3 py-1 rounded-full">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div
                  className="w-14 h-14 rounded-2xl
                             bg-green-100 dark:bg-green-950/60
                             text-green-700 dark:text-green-400
                             flex items-center justify-center"
                >
                  <Pencil size={28} />
                </div>

                <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide mt-6">
                  Employee Management
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                  Keep employee records up to date.
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                  Authorized users can manage employee records from one
                  dedicated management area. Add new employees, update existing
                  information, or remove records that are no longer needed.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
                  <div className="border border-gray-100 dark:border-gray-800 rounded-xl p-5">
                    <UserPlus
                      size={22}
                      className="text-green-700 dark:text-green-400"
                    />

                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mt-3">
                      Add
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Create new employee records.
                    </p>
                  </div>

                  <div className="border border-gray-100 dark:border-gray-800 rounded-xl p-5">
                    <Pencil
                      size={22}
                      className="text-green-700 dark:text-green-400"
                    />

                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mt-3">
                      Edit
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Update employee information.
                    </p>
                  </div>

                  <div className="border border-gray-100 dark:border-gray-800 rounded-xl p-5">
                    <Trash2
                      size={22}
                      className="text-red-600 dark:text-red-400"
                    />

                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mt-3">
                      Delete
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Remove outdated records.
                    </p>
                  </div>

                  <div className="border border-gray-100 dark:border-gray-800 rounded-xl p-5">
                    <ShieldCheck
                      size={22}
                      className="text-green-700 dark:text-green-400"
                    />

                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mt-3">
                      Control
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Keep management functions organized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* DASHBOARD */}
      <ScrollReveal>
        <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className="w-14 h-14 mx-auto rounded-2xl
                           bg-green-100 dark:bg-green-950/60
                           text-green-700 dark:text-green-400
                           flex items-center justify-center"
              >
                <LayoutDashboard size={28} />
              </div>

              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide mt-6">
                Management Dashboard
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                Understand your workforce at a glance.
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                The dashboard provides a quick overview of employee activity and
                organizational information without requiring users to search
                through individual records.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
              <div
                className="bg-white dark:bg-gray-900
                           border border-gray-100 dark:border-gray-800
                           rounded-2xl shadow-sm p-6
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total Employees
                </p>

                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">
                  120
                </p>

                <div className="h-1.5 bg-green-100 dark:bg-green-950/60 rounded-full mt-5">
                  <div className="h-1.5 bg-green-700 rounded-full w-4/5"></div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-gray-900
                           border border-gray-100 dark:border-gray-800
                           rounded-2xl shadow-sm p-6
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Active Employees
                </p>

                <p className="text-3xl font-bold text-green-700 dark:text-green-400 mt-2">
                  96
                </p>

                <div className="h-1.5 bg-green-100 dark:bg-green-950/60 rounded-full mt-5">
                  <div className="h-1.5 bg-green-700 rounded-full w-4/5"></div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-gray-900
                           border border-gray-100 dark:border-gray-800
                           rounded-2xl shadow-sm p-6
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  On Leave
                </p>

                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
                  12
                </p>

                <div className="h-1.5 bg-yellow-100 dark:bg-yellow-950/60 rounded-full mt-5">
                  <div className="h-1.5 bg-yellow-500 rounded-full w-1/4"></div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-gray-900
                           border border-gray-100 dark:border-gray-800
                           rounded-2xl shadow-sm p-6
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all duration-500"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Departments
                </p>

                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                  8
                </p>

                <div className="h-1.5 bg-blue-100 dark:bg-blue-950/60 rounded-full mt-5">
                  <div className="h-1.5 bg-blue-600 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/dashboard"
                className="inline-flex items-center
                           bg-green-700 text-white px-6 py-3
                           rounded-lg font-semibold
                           hover:bg-green-800 hover:-translate-y-1
                           transition-all duration-300"
              >
                Explore Dashboard →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WORKFLOW */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                Simple Workflow
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                One system. One workflow. Less hassle.
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                EPMS connects employee viewing, searching, profiling, and
                management into one straightforward experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                number: "01",
                title: "Access",
                text: "Sign in and access the EPMS workspace.",
              },
              {
                number: "02",
                title: "Search",
                text: "Find employees using search and filters.",
              },
              {
                number: "03",
                title: "View",
                text: "Open detailed employee profiles.",
              },
              {
                number: "04",
                title: "Manage",
                text: "Authorized users can manage employee records.",
              },
            ].map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div
                  className="relative
                             bg-gray-50 dark:bg-gray-950
                             border border-gray-100 dark:border-gray-800
                             rounded-2xl p-7 h-full
                             hover:-translate-y-2 hover:shadow-lg
                             transition-all duration-500"
                >
                  <span className="text-green-700 dark:text-green-400 font-bold text-sm">
                    STEP {step.number}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                    {step.text}
                  </p>

                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-green-300 dark:text-green-700 text-2xl">
                      →
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="bg-green-900 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to experience EPMS?
            </h2>

            <p className="text-green-100 max-w-2xl mx-auto mt-4 leading-relaxed">
              Explore the employee directory, review your workforce dashboard,
              or start managing employee records.
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

export default Features;
