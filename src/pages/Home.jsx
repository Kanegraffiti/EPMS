import Navbar from "../components/Navbar";
import { getLoggedInUser } from "../utils/demoAuth";
import ScrollReveal from "../components/ScrollReveal";
import { Link, useNavigate } from "react-router-dom";

import {
  Users,
  Search,
  LayoutDashboard,
  UserRound,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleProtectedNavigation = (path) => {
    const loggedInUser = getLoggedInUser();

    if (loggedInUser) {
      navigate(path);
    } else {
      navigate("/login", {
        state: {
          from: path,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden
             bg-white dark:bg-gray-950
             text-gray-900 dark:text-white"
      >
        {/* LARGE SOFT GREEN AURORA */}
        <div
          className="absolute
               -top-40 -right-32
               w-[600px] h-[600px]
               rounded-full
               bg-emerald-200/40
               dark:bg-emerald-500/10
               blur-[120px]"
        ></div>

        {/* SECOND AURORA */}
        <div
          className="absolute
               top-[35%] -left-40
               w-[500px] h-[500px]
               rounded-full
               bg-green-100/70
               dark:bg-green-900/20
               blur-[110px]"
        ></div>

        {/* CENTER LIGHT */}
        <div
          className="absolute
               top-1/2 left-1/2
               -translate-x-1/2
               -translate-y-1/2
               w-[700px] h-[350px]
               rounded-full
               bg-emerald-100/40
               dark:bg-emerald-500/5
               blur-[120px]"
        ></div>

        {/* VERY SUBTLE DOT GRID */}
        <div
          className="absolute inset-0
               opacity-[0.35]
               dark:opacity-[0.08]
               [background-image:radial-gradient(#10b981_1px,transparent_1px)]
               [background-size:28px_28px]"
        ></div>

        {/* LARGE DECORATIVE CIRCLE */}
        <div
          className="absolute
               -right-48 top-20
               w-[520px] h-[520px]
               rounded-full
               border border-emerald-100
               dark:border-emerald-900/40"
        ></div>

        {/* SECOND DECORATIVE CIRCLE */}
        <div
          className="absolute
               -right-28 top-40
               w-[360px] h-[360px]
               rounded-full
               border border-emerald-100/70
               dark:border-emerald-900/30"
        ></div>

        {/* DIAGONAL LIGHT SHAPE */}
        <div
          className="absolute
               top-[-20%] right-[28%]
               w-[280px] h-[900px]
               rotate-[28deg]
               bg-gradient-to-b
               from-transparent
               via-emerald-100/30
               to-transparent
               dark:via-emerald-500/5
               blur-2xl"
        ></div>

        {/* CONTENT */}
        <div
          className="relative z-10
               max-w-7xl mx-auto
               px-6 py-20 md:py-28"
        >
          <div
            className="grid grid-cols-1
                 lg:grid-cols-2
                 gap-14
                 lg:gap-20
                 items-center"
          >
            {/* ===================================================== */}
            {/* LEFT SIDE — HERO TEXT */}
            {/* ===================================================== */}

            <ScrollReveal>
              <div>
                {/* EYEBROW */}
                <div
                  className="inline-flex items-center gap-2
                       px-4 py-2
                       rounded-full
                       bg-green-50
                       dark:bg-green-950/40
                       border border-green-100
                       dark:border-green-900/50
                       shadow-sm"
                >
                  <span
                    className="w-2 h-2
                         rounded-full
                         bg-green-500
                         shadow-[0_0_12px_rgba(34,197,94,0.6)]"
                  ></span>

                  <p
                    className="text-green-700
                         dark:text-green-400
                         font-semibold
                         text-sm
                         uppercase
                         tracking-widest"
                  >
                    Welcome to EPMS
                  </p>
                </div>

                {/* MAIN HEADING */}
                <h1
                  className="text-4xl
                       md:text-6xl
                       font-bold
                       leading-[1.08]
                       tracking-tight
                       mt-6
                       text-gray-950
                       dark:text-white"
                >
                  Manage your workforce.
                  <span
                    className="block
                         mt-2
                         bg-gradient-to-r
                         from-green-700
                         via-emerald-500
                         to-green-600
                         dark:from-green-400
                         dark:via-emerald-300
                         dark:to-green-400
                         bg-clip-text
                         text-transparent"
                  >
                    Simplify your workplace.
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p
                  className="text-gray-600
                       dark:text-gray-400
                       text-lg
                       md:text-xl
                       mt-7
                       leading-relaxed
                       max-w-xl"
                >
                  EPMS is a modern Employee Profile Management System designed
                  to help organizations organize, search, view, and manage
                  employee information from one central platform.
                </p>

                {/* BUTTONS */}
                <div
                  className="flex
                       flex-col
                       sm:flex-row
                       gap-4
                       mt-9"
                >
                  {/* GET STARTED */}
                  <Link
                    to="/login"
                    className="group
                         inline-flex
                         items-center
                         justify-center
                         gap-2
                         bg-green-700
                         text-white
                         px-7
                         py-3.5
                         rounded-xl
                         font-semibold
                         shadow-lg
                         shadow-green-700/20
                         hover:bg-green-800
                         hover:-translate-y-1
                         hover:shadow-xl
                         hover:shadow-green-700/25
                         transition-all
                         duration-300"
                  >
                    Get Started
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1
                           transition-transform
                           duration-300"
                    />
                  </Link>

                  {/* EXPLORE */}
                  <button
                    type="button"
                    onClick={() => handleProtectedNavigation("/employees")}
                    className="inline-flex
                         items-center
                         justify-center
                         gap-2
                         bg-white
                         dark:bg-gray-900
                         text-gray-800
                         dark:text-gray-100
                         px-7
                         py-3.5
                         rounded-xl
                         font-semibold
                         border
                         border-gray-200
                         dark:border-gray-700
                         shadow-sm
                         hover:border-green-300
                         dark:hover:border-green-700
                         hover:text-green-700
                         dark:hover:text-green-400
                         hover:-translate-y-1
                         hover:shadow-lg
                         transition-all
                         duration-300"
                  >
                    Explore Employees
                  </button>
                </div>

                {/* TRUST / QUICK BENEFITS */}
                <div
                  className="flex
                       flex-wrap
                       items-center
                       gap-x-6
                       gap-y-3
                       mt-9
                       pt-7
                       border-t
                       border-gray-200/80
                       dark:border-gray-800"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center
                           w-6 h-6
                           rounded-full
                           bg-green-100
                           dark:bg-green-900/40
                           text-green-600
                           dark:text-green-400"
                    >
                      ✓
                    </span>

                    <span
                      className="text-sm
                           font-medium
                           text-gray-600
                           dark:text-gray-400"
                    >
                      Easy to use
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center
                           w-6 h-6
                           rounded-full
                           bg-green-100
                           dark:bg-green-900/40
                           text-green-600
                           dark:text-green-400"
                    >
                      ✓
                    </span>

                    <span
                      className="text-sm
                           font-medium
                           text-gray-600
                           dark:text-gray-400"
                    >
                      One-browser records
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center
                           w-6 h-6
                           rounded-full
                           bg-green-100
                           dark:bg-green-900/40
                           text-green-600
                           dark:text-green-400"
                    >
                      ✓
                    </span>

                    <span
                      className="text-sm
                           font-medium
                           text-gray-600
                           dark:text-gray-400"
                    >
                      Simple access
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ===================================================== */}
            {/* RIGHT SIDE — EPMS DASHBOARD PREVIEW */}
            {/* ===================================================== */}

            <ScrollReveal>
              <div className="relative">
                {/* OUTER GLOW */}
                <div
                  className="absolute
                       -inset-8
                       bg-emerald-300/20
                       dark:bg-emerald-500/10
                       blur-3xl
                       rounded-full"
                ></div>

                {/* DASHBOARD CARD */}
                <div
                  className="relative
                       bg-white/90
                       dark:bg-gray-900/90
                       backdrop-blur-xl
                       rounded-3xl
                       border
                       border-gray-200
                       dark:border-gray-800
                       shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                       dark:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                       overflow-hidden"
                >
                  {/* TOP BAR */}
                  <div
                    className="flex
                         items-center
                         justify-between
                         px-5
                         py-4
                         border-b
                         border-gray-100
                         dark:border-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      {/* LOGO */}
                      <div
                        className="w-10 h-10
                             rounded-xl
                             bg-green-600
                             flex items-center
                             justify-center
                             text-white
                             font-bold
                             shadow-lg
                             shadow-green-600/20"
                      >
                        E
                      </div>

                      <div>
                        <p
                          className="font-bold
                               text-gray-900
                               dark:text-white
                               text-sm"
                        >
                          EPMS
                        </p>

                        <p
                          className="text-xs
                               text-gray-400"
                        >
                          Employee Management
                        </p>
                      </div>
                    </div>

                    {/* PROFILE */}
                    <div
                      className="w-9 h-9
                           rounded-full
                           bg-gradient-to-br
                           from-green-400
                           to-emerald-700
                           flex
                           items-center
                           justify-center
                           text-white
                           text-xs
                           font-bold"
                    >
                      AD
                    </div>
                  </div>

                  {/* DASHBOARD CONTENT */}
                  <div className="p-5 md:p-6">
                    {/* HEADER */}
                    <div
                      className="flex
                           flex-col
                           sm:flex-row
                           sm:items-center
                           sm:justify-between
                           gap-4
                           mb-6"
                    >
                      <div>
                        <p
                          className="text-xs
                               uppercase
                               tracking-wider
                               font-semibold
                               text-green-600
                               dark:text-green-400"
                        >
                          Overview
                        </p>

                        <h3
                          className="text-xl
                               md:text-2xl
                               font-bold
                               text-gray-900
                               dark:text-white
                               mt-1"
                        >
                          Employee Dashboard
                        </h3>
                      </div>

                      <div
                        className="inline-flex
                             items-center
                             gap-2
                             px-3
                             py-2
                             rounded-lg
                             bg-green-50
                             dark:bg-green-950/40
                             text-green-700
                             dark:text-green-400
                             text-xs
                             font-semibold"
                      >
                        <span
                          className="w-2 h-2
                               rounded-full
                               bg-green-500"
                        ></span>
                        System Active
                      </div>
                    </div>

                    {/* STAT CARDS */}
                    <div
                      className="grid
                           grid-cols-2
                           gap-3"
                    >
                      {/* TOTAL */}
                      <div
                        className="rounded-2xl
                             bg-gray-50
                             dark:bg-gray-800/70
                             p-4
                             border
                             border-gray-100
                             dark:border-gray-700"
                      >
                        <p
                          className="text-xs
                               text-gray-500
                               dark:text-gray-400"
                        >
                          Total Employees
                        </p>

                        <div
                          className="flex
                               items-end
                               justify-between
                               mt-2"
                        >
                          <span
                            className="text-2xl
                                 font-bold
                                 text-gray-900
                                 dark:text-white"
                          >
                            124
                          </span>

                          <span
                            className="text-xs
                                 font-semibold
                                 text-green-600
                                 dark:text-green-400"
                          >
                            +12%
                          </span>
                        </div>
                      </div>

                      {/* ACTIVE */}
                      <div
                        className="rounded-2xl
                             bg-green-50
                             dark:bg-green-950/30
                             p-4
                             border
                             border-green-100
                             dark:border-green-900/50"
                      >
                        <p
                          className="text-xs
                               text-gray-500
                               dark:text-gray-400"
                        >
                          Active Employees
                        </p>

                        <div
                          className="flex
                               items-end
                               justify-between
                               mt-2"
                        >
                          <span
                            className="text-2xl
                                 font-bold
                                 text-green-700
                                 dark:text-green-400"
                          >
                            118
                          </span>

                          <span
                            className="text-xs
                                 font-semibold
                                 text-green-600
                                 dark:text-green-400"
                          >
                            95%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* RECENT EMPLOYEES */}
                    <div className="mt-6">
                      <div
                        className="flex
                             items-center
                             justify-between
                             mb-3"
                      >
                        <h4
                          className="text-sm
                               font-bold
                               text-gray-900
                               dark:text-white"
                        >
                          Recent Employees
                        </h4>

                        <span
                          className="text-xs
                               text-green-600
                               dark:text-green-400
                               font-semibold"
                        >
                          View all
                        </span>
                      </div>

                      {/* EMPLOYEE 1 */}
                      <div
                        className="flex
                             items-center
                             justify-between
                             gap-3
                             p-3
                             rounded-xl
                             hover:bg-gray-50
                             dark:hover:bg-gray-800
                             transition"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10
                                 rounded-full
                                 bg-gradient-to-br
                                 from-emerald-400
                                 to-green-700
                                 flex
                                 items-center
                                 justify-center
                                 text-white
                                 text-xs
                                 font-bold"
                          >
                            JD
                          </div>

                          <div>
                            <p
                              className="text-sm
                                   font-semibold
                                   text-gray-900
                                   dark:text-white"
                            >
                              John Doe
                            </p>

                            <p
                              className="text-xs
                                   text-gray-500
                                   dark:text-gray-400"
                            >
                              Frontend Developer
                            </p>
                          </div>
                        </div>

                        <span
                          className="px-2.5
                               py-1
                               rounded-full
                               bg-green-100
                               dark:bg-green-900/40
                               text-green-700
                               dark:text-green-400
                               text-[10px]
                               font-bold"
                        >
                          Active
                        </span>
                      </div>

                      {/* EMPLOYEE 2 */}
                      <div
                        className="flex
                             items-center
                             justify-between
                             gap-3
                             p-3
                             rounded-xl
                             hover:bg-gray-50
                             dark:hover:bg-gray-800
                             transition"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10
                                 rounded-full
                                 bg-gradient-to-br
                                 from-blue-400
                                 to-indigo-600
                                 flex
                                 items-center
                                 justify-center
                                 text-white
                                 text-xs
                                 font-bold"
                          >
                            JW
                          </div>

                          <div>
                            <p
                              className="text-sm
                                   font-semibold
                                   text-gray-900
                                   dark:text-white"
                            >
                              Jane Williams
                            </p>

                            <p
                              className="text-xs
                                   text-gray-500
                                   dark:text-gray-400"
                            >
                              HR Manager
                            </p>
                          </div>
                        </div>

                        <span
                          className="px-2.5
                               py-1
                               rounded-full
                               bg-green-100
                               dark:bg-green-900/40
                               text-green-700
                               dark:text-green-400
                               text-[10px]
                               font-bold"
                        >
                          Active
                        </span>
                      </div>

                      {/* EMPLOYEE 3 */}
                      <div
                        className="flex
                             items-center
                             justify-between
                             gap-3
                             p-3
                             rounded-xl
                             hover:bg-gray-50
                             dark:hover:bg-gray-800
                             transition"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10
                                 rounded-full
                                 bg-gradient-to-br
                                 from-purple-400
                                 to-purple-700
                                 flex
                                 items-center
                                 justify-center
                                 text-white
                                 text-xs
                                 font-bold"
                          >
                            DJ
                          </div>

                          <div>
                            <p
                              className="text-sm
                                   font-semibold
                                   text-gray-900
                                   dark:text-white"
                            >
                              David Johnson
                            </p>

                            <p
                              className="text-xs
                                   text-gray-500
                                   dark:text-gray-400"
                            >
                              UI/UX Designer
                            </p>
                          </div>
                        </div>

                        <span
                          className="px-2.5
                               py-1
                               rounded-full
                               bg-yellow-100
                               dark:bg-yellow-900/40
                               text-yellow-700
                               dark:text-yellow-400
                               text-[10px]
                               font-bold"
                        >
                          On Leave
                        </span>
                      </div>
                    </div>

                    {/* BOTTOM SEARCH BAR */}
                    <div
                      className="mt-5
                           flex
                           items-center
                           gap-3
                           px-4
                           py-3
                           rounded-xl
                           bg-gray-50
                           dark:bg-gray-800
                           border
                           border-gray-100
                           dark:border-gray-700"
                    >
                      <span className="text-gray-400 text-sm">🔍</span>

                      <span
                        className="text-xs
                             text-gray-400"
                      >
                        Search employee profiles...
                      </span>
                    </div>
                  </div>
                </div>

                {/* FLOATING STATUS CARD */}
                <div
                  className="absolute
                       -bottom-7
                       -left-5
                       md:-left-10
                       bg-white
                       dark:bg-gray-900
                       rounded-2xl
                       border
                       border-gray-100
                       dark:border-gray-800
                       shadow-xl
                       px-4
                       py-3
                       flex
                       items-center
                       gap-3"
                >
                  <div
                    className="w-10 h-10
                         rounded-xl
                         bg-green-100
                         dark:bg-green-900/40
                         flex
                         items-center
                         justify-center
                         text-green-600
                         dark:text-green-400
                         text-lg"
                  >
                    ✓
                  </div>

                  <div>
                    <p
                      className="text-xs
                           text-gray-500
                           dark:text-gray-400"
                    >
                      Employee Records
                    </p>

                    <p
                      className="font-bold
                           text-gray-900
                           dark:text-white"
                    >
                      Organized & Accessible
                    </p>
                  </div>
                </div>

                {/* FLOATING EMPLOYEE COUNT */}
                <div
                  className="absolute
                       -top-5
                       -right-3
                       md:-right-8
                       bg-white
                       dark:bg-gray-900
                       rounded-2xl
                       border
                       border-gray-100
                       dark:border-gray-800
                       shadow-xl
                       px-4
                       py-3"
                >
                  <p
                    className="text-[10px]
                         uppercase
                         tracking-wider
                         text-gray-400
                         font-semibold"
                  >
                    Employees
                  </p>

                  <div
                    className="flex
                         items-center
                         gap-2
                         mt-1"
                  >
                    <span
                      className="text-xl
                           font-bold
                           text-gray-900
                           dark:text-white"
                    >
                      124
                    </span>

                    <span
                      className="text-xs
                           font-semibold
                           text-green-600
                           dark:text-green-400"
                    >
                      ↑ 12%
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-white dark:bg-gray-900 py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <ScrollReveal delay={0}>
              <div
                className="text-center p-5 rounded-2xl
                           hover:bg-green-50 dark:hover:bg-green-950/30
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <Users
                  size={25}
                  className="mx-auto text-green-700 dark:text-green-400"
                />

                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                  120
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Total Employees
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                className="text-center p-5 rounded-2xl
                           hover:bg-green-50 dark:hover:bg-green-950/30
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <CheckCircle
                  size={25}
                  className="mx-auto text-green-700 dark:text-green-400"
                />

                <p className="text-3xl font-bold text-green-700 dark:text-green-400 mt-3">
                  96
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Active Employees
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                className="text-center p-5 rounded-2xl
                           hover:bg-green-50 dark:hover:bg-green-950/30
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <BarChart3
                  size={25}
                  className="mx-auto text-blue-600 dark:text-blue-400"
                />

                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-3">
                  8
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Departments
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div
                className="text-center p-5 rounded-2xl
                           hover:bg-green-50 dark:hover:bg-green-950/30
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <UserRound
                  size={25}
                  className="mx-auto text-yellow-600 dark:text-yellow-400"
                />

                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-3">
                  12
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Employees on Leave
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* WHY EPMS */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                Why EPMS?
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                Everything your team needs in one place.
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                EPMS removes the complexity of managing employee information by
                bringing essential workforce tools together in one organized
                platform.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ScrollReveal delay={0}>
              <div
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
                           rounded-2xl p-7 h-full shadow-sm
                           hover:-translate-y-2 hover:shadow-xl
                           hover:border-green-100 dark:hover:border-green-900
                           transition-all duration-500"
              >
                <div
                  className="w-14 h-14 bg-green-100 dark:bg-green-950/50
                             text-green-700 dark:text-green-400 rounded-xl
                             flex items-center justify-center"
                >
                  <Users size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Organized Profiles
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Keep important employee information organized and accessible
                  from one central system.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
                           rounded-2xl p-7 h-full shadow-sm
                           hover:-translate-y-2 hover:shadow-xl
                           hover:border-green-100 dark:hover:border-green-900
                           transition-all duration-500"
              >
                <div
                  className="w-14 h-14 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400
                             rounded-xl flex items-center justify-center"
                >
                  <Search size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Fast Search
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Find employee information quickly using names, IDs, emails,
                  positions, and departments.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
                           rounded-2xl p-7 h-full shadow-sm
                           hover:-translate-y-2 hover:shadow-xl
                           hover:border-green-100 dark:hover:border-green-900
                           transition-all duration-500"
              >
                <div
                  className="w-14 h-14 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400
                             rounded-xl flex items-center justify-center"
                >
                  <UserRound size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Clear Profiles
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Access structured employee profiles containing essential
                  contact and employment information.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
                           rounded-2xl p-7 h-full shadow-sm
                           hover:-translate-y-2 hover:shadow-xl
                           hover:border-green-100 dark:hover:border-green-900
                           transition-all duration-500"
              >
                <div
                  className="w-14 h-14 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400
                             rounded-xl flex items-center justify-center"
                >
                  <ShieldCheck size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Controlled Management
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Keep employee viewing and administrative management functions
                  organized within the system.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <ScrollReveal>
        <section className="bg-white dark:bg-gray-900 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                How EPMS Works
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                Simple from start to finish.
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                EPMS keeps the employee management process straightforward,
                allowing users to move from finding an employee to viewing their
                information with just a few steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              {[
                {
                  number: "01",
                  title: "Access",
                  description:
                    "Enter the EPMS workspace through the application.",
                },
                {
                  number: "02",
                  title: "Search",
                  description:
                    "Find an employee using the directory and filters.",
                },
                {
                  number: "03",
                  title: "View",
                  description:
                    "Open the employee profile and view detailed information.",
                },
                {
                  number: "04",
                  title: "Manage",
                  description:
                    "Authorized users can add, edit, or delete employee records.",
                },
              ].map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 100}>
                  <div
                    className="relative bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700
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
                      {step.description}
                    </p>

                    {index < 3 && (
                      <div
                        className="hidden md:block absolute top-1/2
                                   -right-4 text-green-300 dark:text-green-500 text-2xl"
                      >
                        →
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* FEATURE HIGHLIGHT */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                  Built for productivity
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                  Spend less time managing records and more time managing
                  people.
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                  Whether you need to find an employee's contact information,
                  check their department, review their status, or update their
                  record, EPMS keeps the process simple and organized.
                </p>

                <div className="space-y-4 mt-7">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={21}
                      className="text-green-700 dark:text-green-400 mt-1 shrink-0"
                    />

                    <p className="text-gray-700 dark:text-gray-300">
                      Quick access to employee information
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={21}
                      className="text-green-700 dark:text-green-400 mt-1 shrink-0"
                    />

                    <p className="text-gray-700 dark:text-gray-300">
                      Simple employee record management
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={21}
                      className="text-green-700 dark:text-green-400 mt-1 shrink-0"
                    />

                    <p className="text-gray-700 dark:text-gray-300">
                      Responsive experience across devices
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={21}
                      className="text-green-700 dark:text-green-400 mt-1 shrink-0"
                    />

                    <p className="text-gray-700 dark:text-gray-300">
                      Clear workforce statistics and insights
                    </p>
                  </div>
                </div>

                <Link
                  to="/login"
                  className="inline-flex items-center gap-2
                             mt-8 text-green-700 dark:text-green-400 font-semibold
                             hover:text-green-900 dark:hover:text-green-300 group"
                >
                  Explore all features
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1
                               transition-transform duration-300"
                  />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div
                className="bg-gradient-to-br from-green-900
                           to-green-700 rounded-3xl p-8 md:p-10
                           text-white shadow-xl"
              >
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
                    <Users size={25} />

                    <p className="text-3xl font-bold mt-5">120</p>

                    <p className="text-green-100 text-sm mt-1">
                      Employee Records
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
                    <Search size={25} />

                    <p className="text-3xl font-bold mt-5">Fast</p>

                    <p className="text-green-100 text-sm mt-1">
                      Employee Search
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
                    <LayoutDashboard size={25} />

                    <p className="text-3xl font-bold mt-5">24/7</p>

                    <p className="text-green-100 text-sm mt-1">
                      Workforce Overview
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
                    <ShieldCheck size={25} />

                    <p className="text-3xl font-bold mt-5">Simple</p>

                    <p className="text-green-100 text-sm mt-1">Management</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* CTA */}
      <ScrollReveal>
        <section className="bg-green-900 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-green-300 font-semibold uppercase tracking-wide">
              Get Started
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Your employee information.
              <span className="block text-green-300">
                Organized in one place.
              </span>
            </h2>

            <p className="text-green-100 max-w-2xl mx-auto mt-5 leading-relaxed">
              Explore EPMS and discover a simpler way to access and manage
              employee information.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button
                className="inline-flex items-center justify-center
                               border border-green-300 text-white
                               px-6 py-3 rounded-lg font-semibold
                               hover:bg-green-800 hover:-translate-y-1
                               transition-all duration-300"
                type="button"
                onClick={() => handleProtectedNavigation("/employees")}
              >
                View Employees
              </button>
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

export default Home;
