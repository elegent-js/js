'use strict';

function makeCounter() {
    let count = 0;

    return function() {
        return count ++;
    };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2


console.log('===========================');


console.log(globalThis); // globalThis is a standard way to access the global object in JavaScript