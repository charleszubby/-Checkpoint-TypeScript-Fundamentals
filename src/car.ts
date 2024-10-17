// defining the interface Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start: () => void;
}

// Implementing the interface Vehicle in the class Car
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

const myCar: Car = new Car("Mercedes", "GLC-Class", 2024);
myCar.start();
