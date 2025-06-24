'use strict';

let arr = [1, 2, 3, 4, 5];
console.log(Math.max(... arr));

// object copy
let obj = {a: 1, b: 2, c: 3};
let objCopy = {...obj};
console.log(objCopy); // { a: 1, b: 2, c: 3 }
