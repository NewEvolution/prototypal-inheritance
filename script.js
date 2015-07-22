/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

function Make() {
  this.makeName = "Accura";
}

/*
Create a function, Model, to hold the 
corresponding property and value
*/

function Model() {
  this.model = "2.5 TL";
}

// What is the prototype of a Model?

Model.prototype = new Make();

// Define a Car

function Car(color) {
  this.color = color;
};

// What is the prototype of a Car?

Car.prototype = new Model();

// Create the first car

var firstCar = new Car("red");

// Create the second car

var secondCar = new Car("blue");

// Create the third car

var thirdCar = new Car("gold");

console.log("first car ", firstCar);
console.log("second car ", secondCar);
console.log("third car ", firstCar);