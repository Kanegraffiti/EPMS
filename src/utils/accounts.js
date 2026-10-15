// Frontend-only accounts are saved in the browser, not on a secure server.
const STORAGE_KEY = "epmsUsers";

export const normalizeEmail = (email) => String(email || "").trim().toLowerCase();

export const readAccounts = () => {
  try {
    const accounts = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    return Array.isArray(accounts)
      ? accounts.filter((account) => account && typeof account.email === "string")
      : [];
  } catch {
    return [];
  }
};

export const saveAccounts = (accounts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
  window.dispatchEvent(new Event("epmsAccountsChange"));
};

const toHex = (bytes) => [...bytes]
  .map((byte) => byte.toString(16).padStart(2, "0"))
  .join("");

// A salted hash avoids keeping new passwords as readable text in storage.
// Browser-side hashing does not make these accounts suitable for real HR data.
const hashPassword = async (password, salt) => {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );

  const saltBytes = Uint8Array.from(
    salt.match(/.{2}/g).map((part) => parseInt(part, 16)),
  );
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: saltBytes, iterations: 100000, hash: "SHA-256" },
    key,
    256,
  );

  return toHex(new Uint8Array(bits));
};

export const createAccount = async ({ firstName, lastName, email, password, role = "user" }) => {
  const accounts = readAccounts();
  const cleanEmail = normalizeEmail(email);

  if (cleanEmail === "admin@epms.com" || accounts.some(
    (account) => normalizeEmail(account.email) === cleanEmail,
  )) {
    throw new Error("That email already has an account.");
  }

  if (String(password).length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  const salt = toHex(crypto.getRandomValues(new Uint8Array(16)));
  const account = {
    firstName: String(firstName).trim(),
    lastName: String(lastName).trim(),
    email: cleanEmail,
    role: role === "admin" ? "admin" : "user",
    salt,
    passwordHash: await hashPassword(password, salt),
  };

  saveAccounts([...accounts, account]);
  return account;
};

export const verifyAccount = async (account, password) => {
  if (account.passwordHash && account.salt) {
    return (await hashPassword(password, account.salt)) === account.passwordHash;
  }

  // Older EPMS test accounts used plain text passwords.
  // Convert one of those accounts to a hash after a successful login.
  if (typeof account.password === "string" && account.password === password) {
    const accounts = readAccounts();
    const index = accounts.findIndex(
      (item) => normalizeEmail(item.email) === normalizeEmail(account.email),
    );

    if (index !== -1) {
      const salt = toHex(crypto.getRandomValues(new Uint8Array(16)));
      const updatedAccount = { ...accounts[index] };
      delete updatedAccount.password;
      accounts[index] = {
        ...updatedAccount,
        salt,
        passwordHash: await hashPassword(password, salt),
      };
      saveAccounts(accounts);
    }

    return true;
  }

  return false;
};

export const publicUser = (account) => ({
  firstName: account.firstName,
  lastName: account.lastName,
  email: account.email,
  role: account.role === "admin" ? "admin" : "user",
});
