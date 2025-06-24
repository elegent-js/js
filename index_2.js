'use strict';

// This is a simple example of destructuring in JavaScript.

let arr = ['John', 'Doe', 'Jane', 'Smith'];
let [firstName, lastName, ...rest] = arr;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(rest); // ['Jane', 'Smith']

// 解构是一种特殊的语法，它使的我们可以将数组或对象的值赋给变量。

let user = {};
[user.name, user.age] = "LiuPeijun 50".split(" ");
console.log(user.name); // LiuPeijun
console.log(user.age); // 50

user = {
    name: "LiuPeijun",
    age: 50,
    address: "Beijing"
};

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}


user = new Map();
user.set('name', 'LiuPeijun');
user.set('age', 50);
user.set('address', 'Beijing');

for (let [key, value] of user) {
    console.log(`${key}: ${value}`);
}

let guest = 'LiuPeijun';
let admin = 'Peter';

[guest, admin] = [admin, guest];
console.log(guest); // Peter
console.log(admin); // LiuPeijun

// 给定默认值
let [x = 1, y = 2] = [3];
console.log(x); // 3
console.log(y); // 2    

let {a, b} = {a: 1, b: 2};
console.log(a); // 1
console.log(b); // 2

let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let {title, width, height} = options;
console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200

let {title: t, width: w, height: h} = options;
console.log(t); // Menu
console.log(w); // 100      
console.log(h); // 200

let {title: t1, width: w1, height: h1 = 300} = options;
console.log(t1); // Menu
console.log(w1); // 100
console.log(h1); // 200


