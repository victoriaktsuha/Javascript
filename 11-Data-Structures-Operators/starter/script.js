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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //return 2 elements, which order will be pass as argument (starterIndex and mainIndex) from the starterMenu and mainMenu that is inside this object ('this')
  },

  //new method
  //sometimes in js we have functions with a lot of parameters and then can be hard to know the order of these parameters for someone that is using this function; so intead that defining the parameters manually, we can just pass an object into the function as an argument and the function will then immediatelly destructure that object - we called the function and pass into it an object
  // orderDelivery: function(obj){
  //   console.log(obj);
  // },

  //now, while we receive this object, we can do immediatelly the destructuring, passing the properties name used in the object passed inside the function, and the order doesn't need to match; We can also assign default value to the properties in case the element doesn't exist
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //this is a new method that will return just 'pasta' always with 3 ingredients
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  //this is a new method that need to have at least 1 ingredient, the others are optional
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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

/* 
////////////////////
// 105 The Spread Operator (...)
//We can use it to expand an array and all your elements - unpacking all array elements at one

// What NOT to do
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray); //in console: >(5) [1, 2, 7, 8, 9]

// Spread - Good Practice - the '...arr' will add individually all elements at once
const goodNewArray = [1, 2, ...arr]; // this is different from this: [1, 2, arr] -> It'll add an array inside the other array
console.log(goodNewArray); //in console: >(5) [1, 2, 7, 8, 9]
console.log(...goodNewArray); // in console: 1 2 7 8 9

//Adding items to array
//Its not manipulationg the original mainMenu from restaurant object, it creating a new array, copying the elements individually from the mainMenu and adding a new one
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // in console: >(4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

//Difference between destructuring and spread: The SPREAD takes all the elements from the array and also doesn't create new variables; And as a consequence, we can use it only in places where we, otherwise, should write separated values by commas

//Spread is very usefull to: Create shallow copies of arrays and to merge two arrays

// Spread - Copy array
const mainMenuCopy = [...restaurant.mainMenu]; //A shallow copy of the mainMenu array
console.log(mainMenuCopy); // >(3) ['Pizza', 'Pasta', 'Risotto']

// Spread - Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // >(7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

//Spread can work too with iterables - and what are those ? There a different types of iterables in JS, but for now we can learn that arrays, strings, maps or set, most of the date structures are iterables, EXCEPT for objects

// Iterables: arrays, strings, maps and sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']; //expand a string
console.log(letters); // in console: (7) ['J', 'o', 'n', 'a', 's', ' ', 'S.']

//We can still only use spread operator building an array or passing values to a function
console.log(...str);

//What NOT gonna work
//console.log(`${...str} Williams`); // Uncaught SyntaxError: Unexpected token '...' -> thats because ${} is not a place that expects multiple values separated by a comma

//Multiples values separated by a comma are usually expected when we pass arguments into a function or when we built a new array

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
];
console.log(ingredients); //in console: >(3) ['olive oil', 'tomato', 'garlic'] -> anything user input

//Here we're calling the function that orders just pasta and will retrieve the ingredients from the user input in the prompt above
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //in console: Here is your delicious pasta with olive oil, tomato and garlic

//Here we're also calling the function, but letting much easier with the spread operator, not needing write manually the ingredients position in the array or guess the array length
restaurant.orderPasta(...ingredients); //in console: Here is your delicious pasta with olive oil, tomato and garlic

//Since ES18, spread can work with objects, even objects is not iterable
const newRestaurant = {foundedIN: 1998, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant); // in console: {foundedIN: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

const restaurantCopy = {...restaurant}; // shallow copy from 'restaurant'
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
 */

////////////////////
// 106 Rest Pattern and Parameters
// The Rest Pattern looks the same as the spread operator - they have the same syntax (...) but do the opposite of the spread - it collect the multiples elements and join them into an array (pack lements into the array), while spread collect multiples elements and store them into individuals variables (unpack the array)

// we know that this is the spread syntx because we're using it in the RIGHT side of the assignment operator, the = sign;
const arr = [1, 2, ...[3, 4]];

// Destructuring (objects and arrays) with Rest - Rest syntax is '...' n the LEFT side of the assignment operator '=', while Spread Syntax is '...' on the RIGHT side of the assignment operator '='

// Destructuring arrays with rest
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // in console: 1 2 >(3) [3, 4, 5]
//Rest took the remaining elements not used in the destructuring assignment and put them into array 'others'

// We can use (...) on the both sides of the assignment operator; And rest operator must be always the last element in the destructuring structure, to know what are the remaing elements that was not 'collect' by the destructuring variables
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //in conosle: Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Destructuring objects with Rest - the difference is that the remaining elements will be collected to a new object, not a new array
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays); // in console: >{open: 0, close: 24} >{thu: {…}, fri: {…}}

// Functions with Rest
//Here we're collecting all numbers passed as arguments, resulting (not creating) an array
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7];
add(...x); //35 -> here we're spreading first (like showed below), and when these array numbers reach the function, they will be packed (because the '...' is after the '=' sign) and sum for the loop
console.log(...x); //23 5 7

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
//in console: mushrooms <br> >(3) ['onions', 'olives', 'spinach']
restaurant.orderPizza('mushrooms');
//in console: mushrooms <br> >[]

//Recaping: the SPREAD operator is used when otherwise, we'd write VALUES separated by commas; And REST operator is used where, otherwise, we'd write VARIABLE NAMES separated by commas
