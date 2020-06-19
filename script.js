
// Before ES6
let person1 = {
    name: "Alandis Seals",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person2 = {
    name: "Aria",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person3 = {
    name: "Romel",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person4 = {
    name: "Fred",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person5 = {
    name: "Keke",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

person1.sayHello()
person2.sayHello()
person3.sayHello()
person4.sayHello()
person5.sayHello()

// Pseudo Classes and Methods
function Person(name, city, age) {
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


// Using Classes Inheritance
class Vehicle {
    constructor(wheel, manuf) {
        this.wheel = wheel
        this.manuf = manuf


    }
    aboutVehicle() {
        console.log(`My vehicle is a ${this.manuf} and had ${this.wheel} wheels!`)
    }
}

class Truck extends Vehicle {
    constructor(wheel, manuf, numberOfDoors, hasBed) {
        super(wheel, manuf);

        this.numberOfDoors = numberOfDoors;
        this.hasBed = hasBed;

    }
    aboutVehicle() {
        console.log(`My vehicle is a ${this.numberOfDoors} door ${this.manuf} truck and ha ${this.wheel} wheels! Did my truck bed come in the mail? ${this.hasBed}`)
    }}

class Sudan extends Vehicle {
    constructor(wheel, manuf, size, GasMile) {
        super(wheel, manuf)
        this.GasMile = GasMile
        this.size = size
    }
}

class Motorcycle extends Vehicle{
    constructor(wheel, manuf, hasHandleBars, hasDoor){
        super(wheel, manuf)
        this.hasHandleBars = hasHandleBars
        this.hasDoor = hasDoor
    }
    aboutVehicle() {
       console.log (`My vehicle is a Motorcycle and has ${this.wheel}, but does it has doors? ${this.hasDoor}`)
    }
}
let chrisTruck = new Truck(4, "Chevy", 2, true )
chrisTruck.aboutVehicle()

let joshSudan = new Sudan(4, "Toyota", "large", 30.4)
joshSudan.aboutVehicle()

let alandisMotor = new Motorcycle(2, "BMW", true, false)
alandisMotor.aboutVehicle()