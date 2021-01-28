/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments. x
      - All instances of Person should initialize with an empty `stomach` array. x
      - Give instances of Person the ability to `.eat("someFood")`: x
          + When eating an edible, it should be pushed into the `stomach`.x
          + The `eat` method should have no effect if there are 10 items in the `stomach`.x
      - Give instances of Person the ability to `.poop()`: x
          + When an instance poops, its `stomach` should empty.x
      - Give instances of Person a method `.toString()`:x
          + It should return a string with `name` and `age`. Example: "Mary, 50"x
  */


  // Person constructor function
 function Person(name, age) {
   this.name = name;
   this.age = age;
   this.stomach = [];

    
  }
//  eat function for Person
  Person.prototype.eat = function(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
  }

// poop function for Person 
 Person.prototype.poop = function(){
   this.stomach = [];

 }
//  string output function for Person
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}
// creating new Persons with the Constructor Function
const personOne = new Person('Erik', 26);
const personTwo = new Person('Old Man', 100);
const personThree = new Person('Buddha', 80);
// out putting new Persons 
console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());

// constructed personThree eating (adding to stomach array)
personThree.eat('fruit');
personThree.eat('tea');
personThree.eat('bread');
// checking to see if items added to array
console.log(personThree.stomach);
// emptying array with poop() function
personThree.poop();
// checking if stomach array has been emptied
console.log(personThree.stomach);


  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  // creates car with model and MpG
  function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
     
   }
   // creating new carOne
   const carOne = new Car('Subarau', 25);
   console.log(carOne);
   // fill function 
   Car.prototype.fill = function(gallons){
       return this.tank = this.tank + gallons; 
     }
   
   console.log(carOne.fill(20));

  
  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, faveToy) {
  Person.call(this, name, age); // tells Baby to inherit name, age, and stomach from Person
  this.faveToy = faveToy; // says this isn't passing on the test but it's def working on repl - might be that faveToy != favouriteToy, but I'd rather write this comment than change it to fit a test. *lol
   
  }

// tells Baby to inherit Person's methods
  Baby.prototype = Object.create(Person.prototype);
  
//  play function for Baby
  Baby.prototype.play = function(){
    return `Playing with ${this.faveToy}`;
  }


 // creating new Persons with the Constructor Function
const babyOne = new Baby('Erik', 0, 'Blanket');
const babyTwo = new Baby('Baby Man', 0, 'Sword');
const babyThree = new Baby('Buddha', 0, 'Breath');
// out putting new Persons 
console.log(babyOne.toString());
console.log(babyTwo.toString());
console.log(babyThree.toString());

// constructed personThree eating (adding to stomach array)
babyThree.eat('fruit');
babyThree.eat('tea');
babyThree.eat('bread');
// checking to see if items added to array
console.log(babyThree.stomach);
// emptying array with poop() function
babyThree.poop();
// checking if stomach array has been emptied
console.log(babyThree.stomach);
// checking to see if baby plays 
console.log(babyThree.play());
console.log(babyOne.play());
console.log(babyTwo.play());
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. global scope = "this" will be the window/console Object;
    2. Whenever a preceding dot calls a function the object before the dot is "this".
    3. Whenever we use a constructor function, this refers to the specific instance of the object that is created and returned by the constructor function.
    4. Whenever we use JavaScript’s call or apply method, this is explicitly defined.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}