'use strict';
/* 
/////////////////////
// 128 Default Parameters
const bookings = [];
const createBooking = function (
  numFlight,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;
  //To avoid 'undefined', we set that default values to the parameters
  const booking = {
    numFlight,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
// >{numFlight: 'LH123', numPassengers: 1, price: 199}
createBooking('LH123', 2, 800);
// >{numFlight: 'LH123', numPassengers: 2, price: 800}
createBooking('LH123', 2);
// >{numFlight: 'LH123', numPassengers: 2, price: 398}
createBooking('LH123', 5);
// >{numFlight: 'LH123', numPassengers: 5, price: 995}
//We didn't need to pass the price value, because its already calcuted based on the 'numPassengers' as set as default value
//The values must be passed in the same order as the parameters defined before
createBooking('LH123', undefined, 1000);
// >{numFlight: 'LH123', numPassengers: 1, price: 1000}
// If you want to skip a default parameter, as 'numPassengers' here, set it as 'undefined'; In this case, 'undefined' works as a 'non-configuration'
 */

/* 
/////////////////////
// 129 How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const person = {
  name: 'Name Lastname',
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  person.name = 'Mr.' + person.name;

  if (person.passport === 1234567890) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};
// checkIn(flight, person);
// console.log(flight); // LH234
// console.log(person); // >{name: 'Mr.Name Lastname', passport: 1234567890}

//Is the same as doing...
// const flightNum = flight;
// const passenger = person;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(person);
checkIn(flight, person);
// The alert is 'wrong passport', because we have 2 function manipulation the same object

//Passing by value: JS just works with this one. We pass A reference to the function (like the memory address of the object), however the reference itself is still a value, a value that contains a memory address. But we do not pass it BY a reference
//Passing by reference: JS doesn't work with this one
 */

/////////////////////
// 130 First-Class and Higher-Order Functions

/*****First-Class Functions
 * JS is a language that has first class functions:
 * > JS treats functions as first-citizens
 * > That means that functions are simply values
 * > Functions are just another "type" of object
 * > And since objects are values, functions are values too
 ** Since functions are values/objects, we can do a lot of things with them, like:
 * > Store them in variables (const add = (a, b) => a + b);
 * > Store them in object properties;
 * > Pass it like arguments to other functions, when adding eventListeners or eventHandlers to DOM objects (btn.addEventListener('click', add))
 * > Return a function from another function
 * > Call methods on functions (add.bind(someOtherObject))
 */

/*****Higher-Order Function
 * > A function that receives another function as an argument, that returns a new function, or both
 * > This is possibly because of first-class functions
 */

// Example of Function that receives another function
/* const greet = () => console.log('Hey user');
btn.addEventListener('click', greet); */
// The addEventListener is the Higher-order Funcion, because it receives another functio as input (in this case, the 'greet' function) and the function that is passed in is the 'callback' function; That's because the 'callback' function wil be call later by the Higher-order function (the addEventListener will call the 'greet' callback later, as soon as the click event happen)

// Example of Function that returns new function

/* function count() {
  let counter = 0;
  return function () {
    counter++;
  };
} */

// The 'function count()' is the Higher-order function and the 'return function()' is the returned function

//Resuming: First-Class functions is feature wheter a language has or not; All that means is that functions are just values. Its just a concept.
//However, Higher-order functions exist in practice, which is possible because the language supports the first-class functions

/* 
/////////////////////
// 131 Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`); //Here is where the callback function happen

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord); // upperFirstWord is the callback function
//Original string: JavaScript is the best
//Transformed string: JAVASCRIPT is the best
//Transformed by: upperFirstWord

console.log(`-------------`);

transformer('JavaScript is the best', oneWord); // oneWord is the callback function
//Original string: JavaScript is the best
//Transformed string: javascriptisthebest
//Transformed by: oneWord

const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5); // 'addEventListener' is the High-order function and 'high5' is the callback function

['Jonas', 'Martha', ' Adam'].forEach(high5); //(3)🖐
 */

/* 
/////////////////////
// 132 Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
// 'greeter' is actually now a function

greeterHey('User'); //Hey User
greeterHey('Dummy'); //Hey Dummy

//It works because of closure, which are a very complex JS mechanism

greet('Hello')('Bob'); //Hello Bob

// # Mini Challenge (done!) - rewrite the 'greet' function in arrow function structure
const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);

greet2('Hi')('Alex'); //Hi Alex
 */

/////////////////////
// 133 The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {} (old syntax)
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    //Remembering that the 'this' keyword points to the object that hold it
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'User Name');
// User Name booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'User Name');
// User Name booked a seat on Lufthansa flight LH635
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // 'book' is not a method anymore, is just a copy. So it wont work. The 'this' keyword inside of it, will now point to 'undefined'.
//book(23, ' Sarah Willians')
// To this, we need to tell to JS that the 'this' keyword need to point to any object 'this' is refering: lufthansa, eurowings or anything else. We can do this if 'call()', 'apply()' and 'bind()'

// Call Method
book.call(eurowings, 23, 'Sarah Williams'); // Sarah booked a seat on Eurowings flight EW23
console.log(eurowings); // >{airline: 'Eurowings', iataCode: 'EW', bookings: Array(1)}

// The 'call' method, which call the 'book' function, with the 'this' keyword set to 'eurowings' - it allows to set the 'this' keyword to any function we want to call

book.call(lufthansa, 239, 'Mary Cooper'); //Mary Cooper booked a seat on Lufthansa flight LH239
console.log(lufthansa); // >{airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), book: ƒ}

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper'); //Mary Cooper booked a seat on Swiss Air Lines flight SW583
console.log(swiss); // >{airline: 'Swiss Air Lines', iataCode: 'SW', bookings: Array(1)}

// Apply Method
const flightData = [863, 'George Smith'];
book.apply(swiss, flightData); //George Smith booked a seat on Swiss Air Lines flight SW863
console.log(swiss); // >{airline: 'Swiss Air Lines', iataCode: 'SW', bookings: Array(2)}

// The 'apply' method needs an array of data, and is not used frequently in modern JS. Instead, we can used data array with 'call' method and the spread (...) as below:
book.call(swiss, ...flightData); //George Smith booked a seat on Swiss Air Lines flight SW863

// Bind Method (#134 lecture)
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
// It will return a new 'book' function with the 'this' keyword always pointing to 'eurowings'
bookEW(24, 'Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW24

// We can replicate it to all objects individually, so we don't need to assign the airline name every time, we just need to call the function related to the airline
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

// We can use 'bind' to create a function to an specific object and an specific argument
const bookEW23 = book.bind(eurowings, 23);
// In the 'bookEW23' function, I'm binding the 'this' keyword to 'eurowings' object and the presetting '23' to 'flightNum', that it's the first parameter in the original function 'book'. Now, the function only needs the name as argument. That practice calls 'partial application'
bookEW23('Bob Cortez'); // Bob Cortez booked a seat on Eurowings flight EW23

// Bind Method With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
  // It will add a new plane ti the property 'planes' in the 'lufthansa' object every time we click on button 'buy new plane'
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// >{airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), planes: 300, book: ƒ, …}
// 301

// in 'lufthansa.buyPlane.bind(lufthansa)'  the 'bind' method indicated to which object (lufthansa, in this case) the 'this' keyword should refer. Without it, it was returning 'NaN'

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.23);
// Same as: addVAT = value => value + value * 0.23

console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

// #Mini Challenge (almost done :/) - rewrite the addTax function returning the addVAT function

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100)); // 123
console.log(addVAT2(23)); // 28.29
