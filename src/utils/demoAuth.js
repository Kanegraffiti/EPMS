// Browser accounts support frontend practice only; this is not server authorization.
export const getLoggedInUser = () => {
  for (const storage of [sessionStorage, localStorage]) {
    try {
      const user = JSON.parse(storage.getItem("epmsLoggedInUser") || "null");

      if (user && typeof user === "object" && typeof user.email === "string") {
        return user;
      }
    } catch {
      // Ignore invalid values from an older browser session.
    }
  }

  return null;
};

export const signInDemo = (user, remember = false) => {
  sessionStorage.removeItem("epmsLoggedInUser");
  localStorage.removeItem("epmsLoggedInUser");
  const storage = remember ? localStorage : sessionStorage;

  storage.setItem("epmsLoggedInUser", JSON.stringify(user));
  window.dispatchEvent(new Event("epmsAuthChange"));
};

export const signOutDemo = () => {
  localStorage.removeItem("epmsLoggedInUser");
  sessionStorage.removeItem("epmsLoggedInUser");
  window.dispatchEvent(new Event("epmsAuthChange"));
};
