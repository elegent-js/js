
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    name = "Default Name"; // Default value for name
    age = 0; // Default value for age

    sayHi() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


let u = new User("John", 30);
u.sayHi(); // Hello, my name is John and I am 30 years old.



