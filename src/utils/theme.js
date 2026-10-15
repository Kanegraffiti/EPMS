import { useSyncExternalStore } from "react";

const THEME_KEY = "epmsDarkMode";
const themeEvent = "epmsThemeChange";

export const isDarkMode = () => {
  try {
    return window.localStorage.getItem(THEME_KEY) === "true";
  } catch {
    return false;
  }
};

export const setDarkMode = (enabled) => {
  try {
    window.localStorage.setItem(THEME_KEY, String(enabled));
  } catch {
    // Theme changes still work when browser storage is disabled.
  }

  document.documentElement.classList.toggle("dark", enabled);
  window.dispatchEvent(new Event(themeEvent));
};

const subscribe = (listener) => {
  window.addEventListener(themeEvent, listener);

  const handleStorageChange = (event) => {
    if (!event.key || event.key === THEME_KEY) {
      document.documentElement.classList.toggle("dark", isDarkMode());
    }
    listener();
  };

  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener(themeEvent, listener);
    window.removeEventListener("storage", handleStorageChange);
  };
};

export const useTheme = () => useSyncExternalStore(subscribe, isDarkMode, () => false);
