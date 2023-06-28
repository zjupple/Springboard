Car OO Challenge.js

// What I think this means???

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }  
    honk() {
        return "Beep";
    }
    toString() {
        return `The cool vehicle is a ${this.make},
         ${this.model}, built in ${this.year}`;
    }


};


class Car extends Vehicle {
    constructor(make, model, year) {
    // ??? do i need to reference the constructor keyword in this
    // subclass or is super enough
        super(make, model, year)

        this.numWheels = 4;
    }
};

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)

        this.numWheels = 2;

    }
    revEngine() {
        return "VROOM!!!";
    }
};

class Garage extends Vehicle {
    constructor(vehicles, capacity) {
        super(make, model, year)

        this.vehicles = [];
        this.capacity = 7;
    }
    // i know there is some logic for here?
    add() {
        if() {
            return "Only vehicles are allowed here!"
        }
        if (this.Garage >= this.capacity) {
            return "Sorry, we are full"
        } 
        this.vehicles.push(???) {
           return "vehicle in the garage" 
        }

    }
    
}