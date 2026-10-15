import { Moon, Sun } from "lucide-react";
import { setDarkMode, useTheme } from "../utils/theme";

const ThemeToggle = ({ className = "" }) => {
  const darkMode = useTheme();

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`p-2.5 rounded-full text-gray-600 dark:text-gray-300
        hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-700
        dark:hover:text-green-400 focus-visible:outline-2
        focus-visible:outline-green-600 transition ${className}`}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
