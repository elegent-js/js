'use strict';

// show json example

let user = {
    name: "LiuPeijun",
    age: 50,
    address: "Beijing"
};

let jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"LiuPeijun","age":50,"address":"Beijing"}

let parsedUser = JSON.parse(jsonString);
console.log(parsedUser); // { name: 'LiuPeijun', age: 50, address: 'Beijing' }