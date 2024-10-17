"use strict";
// Implementing the interface Vehicle in the class Car
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
const myCar = new Car("Mercedes", "GLC-Class", 2024);
myCar.start();
