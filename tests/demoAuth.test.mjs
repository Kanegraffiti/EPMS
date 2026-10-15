import { test } from "node:test";
import assert from "node:assert/strict";
import { getLoggedInUser, signInDemo, signOutDemo } from "../src/utils/demoAuth.js";
class Store {
  values = new Map();
  getItem(key) { return this.values.get(key) ?? null; }
  setItem(key, value) { this.values.set(key, String(value)); }
  removeItem(key) { this.values.delete(key); }
}
globalThis.localStorage = new Store();
globalThis.sessionStorage = new Store();
globalThis.window = { dispatchEvent: () => true };
const demo = {email: "dummy@example.com",firstName: "Demo", role: "user"};
test("unchecked Remember Me only persists within the browser session", () => {
  signInDemo(demo,false);
  assert.equal(sessionStorage.getItem("epmsLoggedInUser") !== null,true);
  assert.equal(localStorage.getItem("epmsLoggedInUser"),null);
  assert.equal(getLoggedInUser().email,demo.email);
});
test("Remember Me stores the demo session persistently", () => {
  signInDemo(demo,true);
  assert.equal(sessionStorage.getItem("epmsLoggedInUser"),null);
  assert.equal(getLoggedInUser().email,demo.email);
  assert.equal(localStorage.getItem("epmsLoggedInUser") !== null,true);
});
test("logging out clears both locations", () => {
  signOutDemo();
  assert.equal(getLoggedInUser(),null);
});
