// Arrow function
const greet = (name) => `Hello, ${name}!`;

// Class 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `I am ${this.name}, ${this.age} years old.`;
    }
}

// Object destructuring
const person = new Person('Anurag', 22);
const { name, age } = person;

console.log(greet(name));
console.log(person.introduce());
console.log(`Destructured: Name = ${name}, Age = ${age}`);
