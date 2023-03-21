'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //new method
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]] //return 2 elements, which order will be pass as argument (starterIndex and mainIndex) from the starterMenu and mainMenu that is inside this object ('this')
  },

  //new method
  //sometimes in js we have functions with a lot of parameters and then can be hard to know the order of these parameters for someone that is using this function; so intead that defining the parameters manually, we can just pass an object into the function as an argument and the function will then immediatelly destructure that object - we called the function and pass into it an object
  // orderDelivery: function(obj){
  //   console.log(obj);
  // },

  //now, while we receive this object, we can do immediatelly the destructuring, passing the properties name used in the object passed inside the function, and the order doesn't need to match; We can also assign default value to the properties in case the element doesn't exist
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* 
////////////////////
// 103 Destructuring Arrays

//Destructuring is break down a complex data structure into a smaller date structure, like a variable.

const arr = [2,3,4];

// Store array values to separate variables (one by one)
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); //2 3 4

// Store array values to separate variables (all at once)
const [x, y, z] = arr; //looks like an array, but its just the destructuring assignment - always with the [] including the variables name from the left side of the = and the array variable name from the other; Dont forget to declare this variable with const and remeber you dont need to retrieve all values
console.log(x, y, z); //2 3 4
console.log(arr); //(3) [2, 3, 4] - the original array is not affected

const [first, second] = restaurant.categories;
console.log(first, second); //Italian Pizzeria

const [first1, , third] = restaurant.categories; //if you want to skip an element, just leave a 'hole' with commas ,
console.log(first1, third); //Italian Vegetarian

//Switching variables (dont forget 'let' for reassignment):
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Italian Vegetarian

//Solution w/o destructuring

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); //Vegetarian Italian

//Solution w/ destructuring
//we dont need let or const because we're just reassign the value of 2 variables
[main, secondary] = [secondary, main];
console.log(main, secondary); //Vegetarian Italian


//Retrieving multiple variables from function
console.log(restaurant.order(2, 0)); //We retrieving element position 2 from starterMenu (Garlic Bread) and element position 0 from mainMenu (Pizza), according to the parameters passed into the fucntion inside the order property -> in console: (2) ['Garlic Bread', 'Pizza']

//Receive 2 return values from a function - and store in variables at once 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, `,`, mainCourse); //in console: Garlic Bread , Pizza


//Nested array destructuring
const nested = [2, 4, [5,6]];
const [i, ,j] = nested; //'4' skipped
console.log(i, j); //in console: 2 > (2) [5, 6]
//var i = 2, var j = [5, 6];
//Destructuring inside destructuring
const [d, ,[f, g]] = nested;//'4' skipped again
console.log(d, f, g); //in console: 2 5 6


// Default values - when you dont know the length of the array, for example; Or when we get data from an API
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined


const [s=1, t=1, u=1] = [8, 9]; //setting default values to the variables ([p=1, q=1, r=1]), you avoid the 'undefined' value when the length is unknow; The assigned values first is replaced by the correspondent value from the array and the empty position will still hold the default value assigned before
console.log(s, t, u); // 8 9 1
 */

/* 
////////////////////
// 104 Destructuring Objects

//To destructure objects, we use curly braces, because thats how we create objects -> inside de curly braces, we specify the properties names that we want to receive and after the = sign, we add the object that we are receiving from
//Unlike array, the order objects doesn't matter in objects matter

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//in console: Classico Italiano <br> > {thu: {…}, fri: {…}, sat: {…}} <br> > (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//Naming properties variables different from the properties names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);
// in console: Classico Italiano <br> > {thu: {…}, fri: {…}, sat: {…}} <br> > (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']


//Default values

//When receiving third part data, tts very helpful to have default values in case to trying to read a property that doesn't exist on the object
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);
//in console: >[] <br> >(4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'] -> an empty array will be shown for 'menu' because that object doesn't exist, and a fulfill array will replace the [] to 'starters', because 'starterMenu' exist in the object 'restaurant'


// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14}; //reassigning the variables inside an object

//retrieving the variables new values
({a, b} = obj); //here we need to embrace the code with () to not get an error, because when we start a code line with {}, the JS expects a block of code, not a = sign, then we get the error
console.log(a, b); //in console: 23 7


//Nested objects
//restaurant > openingHours > fri
const {fri} = openingHours;
console.log(fri); //in console: {open: 11, close: 23}

//here we want separated variables for 'open' and 'close' properties
const {fri: {open: o, close: c}} = openingHours; //you can assign a new name for them or just retrieve the property, the print in the console will be the same
console.log(o, c); // in console: 11 23


//sometimes in js we have functions with a lot of parameters and then can be hard to know the order of these parameters for someone that is using this function; so instead defining the parameters manually, we can just pass an object into the function as an argument and the function will then immediatelly destructure that object - like create an object as an argument, or inside an argument place; We passed one single object to this function, we didn't passed 4 arguments, just 1 argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// in console (previues function): {time: '22:30', address: 'Via del Sole, 21', mainIndex: 2, starterIndex: 2}
// in console (current function): Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

//Testing the default values from the destructuring
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
//in console: Order received! Bruschetta and Pizza (default array order value) will be delivered to Via del Sole, 21 at 20:00 (default time)
 */

////////////////////
// 105 The Spread Operator (...)