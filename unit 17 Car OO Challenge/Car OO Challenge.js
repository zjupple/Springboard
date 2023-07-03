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

// class Garage {
//     constructor(capacity) {
//       this.vehicles = [];
//       this.capacity = capacity;
//     }
  
//     add(newVehicle) {
//       if (!(newVehicle instanceof Vehicle)) {
//         return "Only vehicles are allowed in here!";
//       }
//       if (this.vehicles.length >= this.capacity) {
//         return "Sorry, we're full.";
//       }
//       this.vehicles.push(newVehicle);
//       return "Vehicle added!";
//     }
//   }

class eGarage {
    constructor(capacity) {

        this.vehicles = [];

         // not required to add the value now

        this.capacity = capacity;
    }
        // i know there is some logic for here?

        add(additionalvehicles) {   

        // needed

        let parkSpace = additionalvehicles;
        let Full = (this.vehicles.length >= this.capacity);
        let parkHere = this.vehicles.unshift(parkSpace);
        let notAVehicle = (additionalvehicles instanceof Vehicle)

        let result =  parkSpace =< Full ? 'No Space for you' : parkSpace != notAVehicle ? "can't park here" : parkHere;
        console.log(result);
        }
        

    }
    



