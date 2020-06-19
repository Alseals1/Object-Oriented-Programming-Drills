
// Before ES6
let person1 = {
    name: "Alandis Seals",
    sayHello:function() {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person2 = {
    name: "Aria",
    sayHello:function() {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person3 = {
    name: "Romel",
    sayHello:function() {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person4 = {
    name: "Fred",
    sayHello:function() {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person5 = {
    name: "Keke",
    sayHello:function() {
        console.log(`Hello! My name is ${this.name}`)
    }
}

person1.sayHello()
person2.sayHello()
person3.sayHello()
person4.sayHello()
person5.sayHello()

// Pseudo Classes and Methods
function Person(name, city, age){
    this.name = name
    this.city = city
    this.age = age

}
// Using prototype to add a method to Person class
Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name}, I am ${this.age} years old, and live in ${this.city}.`)
}
let p1 = new Person("Alandis", "Birminham", 25)
p1.sayHello()
    