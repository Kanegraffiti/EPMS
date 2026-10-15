import test from 'node:test';
import assert from 'node:assert/strict';
import { createAccount, readAccounts, verifyAccount, publicUser } from '../src/utils/accounts.js';
const store=new Map();
globalThis.localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
globalThis.window={dispatchEvent:()=>{}};
test('admin account creation stores hash, not password',async()=>{
 const a=await createAccount({firstName:'Test',lastName:'Admin',email:'newadmin@example.com',password:'longpassword12',role:'admin'});
 assert.equal(a.role,'admin');assert.equal(readAccounts().length,1);assert.ok(a.passwordHash);assert.ok(!Object.hasOwn(a,'password'));
 assert.ok(await verifyAccount(a,'longpassword12'));assert.ok(!(await verifyAccount(a,'wrongpass')));
 assert.equal(publicUser(a).role,'admin');
});
test('duplicate email cannot create second account',async()=>{
 await assert.rejects(()=>createAccount({firstName:'Test',lastName:'Again',email:'NEWADMIN@example.com',password:'longpassword12',role:'user'}),/already/);
});
