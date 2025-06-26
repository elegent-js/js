'use strict';

function f1(a) {}

console.log(f1.length); // 1, the number of parameters
console.log(f1.name); // "f1", the name of the function

function sayHi() {
    sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();    

console.log(sayHi.counter); // 2, the number of times the function was called


let user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    writable: false, // make the property read-only
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name' of object '#<Object>'



