import { test } from "node:test";
import assert from "node:assert/strict";
import { nextEmployeeId, employeeEmailExists, parseDemoEmployees } from "../src/utils/employeeRecords.js";

test("employee IDs skip malformed existing IDs", () => {
  assert.equal(nextEmployeeId([]), "EMP001");
  assert.equal(nextEmployeeId([{id:"EMP002"},{id:"misc"},{id:"EMP010"}]), "EMP011");
});
test("emails compare case-insensitively and exclude the current edited employee", () => {
  const people = [{id:"EMP001",email:"test@example.com"}, {id:"EMP002",email:"other@example.com"}];
  assert.equal(employeeEmailExists(people," TEST@example.com "), true);
  assert.equal(employeeEmailExists(people,"test@example.com", "EMP001"), false);
  assert.equal(employeeEmailExists(people,"new@example.com"), false);
});
test("invalid local demo data falls back instead of crashing", () => {
  const defaults = [{id:"EMP001",name:"Example"}];
  assert.equal(parseDemoEmployees("bad json",defaults),defaults);
  assert.equal(parseDemoEmployees('{"name":"oops"}',defaults),defaults);
  assert.deepEqual(parseDemoEmployees('[]',defaults),[]);
  assert.deepEqual(parseDemoEmployees('[{"id":"EMP002","name":"New"}]',defaults),[{id:"EMP002",name:"New"}]);
});
