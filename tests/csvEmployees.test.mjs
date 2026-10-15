import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCSV, csvToEmployees, employeesToCSV } from '../src/utils/csvEmployees.js';

test('parses escaped quotes, commas and embedded newline', () => {
  assert.deepEqual(parseCSV('a,b\r\n"hello, world","line 1\nline ""two"""\r\n'), [['a','b'],['hello, world','line 1\nline "two"']]);
});
test('CSV export is readable and retains employment fields', () => {
  const employee={id:'EMP001',name:'Jane, Example',email:'jane@example.org',position:'Designer',department:'Design',hireDate:'2024-05-01',status:'Inactive',manager:'Alex "The Lead"'};
  const records=csvToEmployees(employeesToCSV([employee]));
  assert.equal(records.length,1);
  assert.equal(records[0].name,employee.name);
  assert.equal(records[0].hireDate,employee.hireDate);
  assert.equal(records[0].status,'Inactive');
  assert.equal(records[0].manager,employee.manager);
});
test('CSV requires essential columns',()=>assert.throws(()=>csvToEmployees('name,email\nAda,ada@example.com'),/Missing CSV column/));
test('CSV rejects inconsistent row lengths',()=>assert.throws(()=>csvToEmployees('name,email,position,department\nAda,ada@example.com,Developer'),/wrong number of columns/));
test('CSV neutralizes formula-looking exported cells',()=>{
 const csv=employeesToCSV([{name:'=1+1',email:'test@example.org',position:'Dev',department:'Engineering'}]);
 assert.ok(csv.includes('"\'=1+1"'));
});
