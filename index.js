"use strict";

let message = "Hello, World!";

const greet = () => {
    return "Greetings from the greet function!";
};

console.log(message);
console.log(greet());


let first_name = "Liu";
let last_name = "Peijun";
let myName = `I'm ${first_name} ${last_name}`;
console.log(myName)

let z;
console.log(z); // undefined

console.log(typeof z); 
console.log(typeof 'a'); 
console.log(typeof (() => {})); 
console.log(typeof {}); 

// ?? -> 空值合并运算符
let user;
let n = user ?? '匿名'
console.log(n); 

function showMessage(from, text = "no text provided") {
    console.log(`${from}: ${text}`);
}

showMessage('Alice');
showMessage('Bob', 'Hello!');

// 箭头函数
let func = (a, b) => a + b;
console.log(func(2, 3)); // 5

let u = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
}

console.log(u.name); // Alice
console.log(u.age); // 30
u.greet(); // Hello, my name is Alice


let fruit = "apple";

let bag = {
    [fruit + "Computers"]: 5
};

console.log(bag); // {appleComputers: 5} if "apple" was entered

function makeUser(name, age) {
    return {
        name,
        age,
        sayHi() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };

}

let us = makeUser("John", 30);
us.sayHi(); // Hello, my name is John


// 演示in的作用
console.log('name' in us); // true

for (let key in us) {
    console.log(key); // name, age, sayHi
}

let codes = {
    "+49": "United States",
    "+41": "China",
    "+1": "Japan"
}

for (let code in codes) {
    console.log(`${+ code}: ${codes[code]}`);
}


let dest = Object.assign({}, codes);

console.log(dest); // {"+49": "United States", "+41": "China", "+1": "Japan"}



// about this keyword

// ?.
// 如果可选链 ?. 前面的值为 undefined 或者 null，它会停止运算并返回 undefined

let a  = {}

console.log(a?.b?.c); // undefined

// symbol 类型
// 根据规范，只有两种原始类型可以作为对象的键：字符串和 Symbol。
// symbol 是带有可选描述的“原始唯一值”
let id = Symbol("id");
let userObj = {
    name: "Alice",
    [id]: 12345
};

console.log(userObj[id]); // 12345
console.log(userObj["id"]); // undefined
console.log(id.description);
console.log(typeof id); // symbol
console.log(id.toString()); // Symbol(id)
console.log(userObj);

// 注意：symbo在for ...in 循环中不会被枚举

// 从全局注册表中获取 Symbol
let globalSym = Symbol.for("globalSymbol");
let anotherSym = Symbol.for("globalSymbol");
console.log(globalSym === anotherSym); // true


let arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach((item, index) => {
    console.log(`Index: ${index}, Item: ${item}`);
}
);

arr.forEach(console.log);

arr = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"},
    {id: 4, name: "David"},
    {id: 5, name: "Eve"}
];

let r = arr.find(function(item, index, arr) {
    console.log(`Index: ${index}, Item: ${item.name}`);
    return item.id === 3;
});

console.log(r); // {id: 3, name: "Charlie"}

r = arr.filter(function(item, index, arr) {
    console.log(`Index: ${index}, Item: ${item.name}`);
    return item.id > 2;
});


// [{id: 3, name: "Charlie"}, {id: 4, name: "David"}, {id: 5, name: "Eve"}]
console.log(r); 

// find vs filter
// find 返回第一个满足条件的元素，filter 返回所有满足条件的元素
// find 返回 undefined 如果没有找到满足条件的元素，filter 返回空数组
// find 的时间复杂度是 O(n)，filter 的时间复杂度是 O(n) 

// map 方法
let mapped = arr.map(function(item, index, arr) {
    console.log(`Index: ${index}, Item: ${item.name}`);
    return item.name.toUpperCase();
});
console.log(mapped); // ["ALICE", "BOB", "CHARLIE", "DAVID", "EVE"]

arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((sum, item) => sum + item, 0);
console.log(sum); // 15


let range = {from: 1, to: 10};
range[Symbol.iterator] = function() {
    let current = this.from;
    let last = this.to;

    return {
        next() {
            if (current <= last) {
                return {done: false, value: current++};
            } else {
                return {done: true};
            }
        }
    };
};

for (let num of range) {
    console.log(num); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}


// Map and Set
// Map不同于Object，它可以使用任何类型的值作为键

// weakMap and WeakSet
// WeakMap和WeakSet的键必须是对象类型，且不会阻止垃圾回
