'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
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
};

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
  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //this is a new method that will return just 'pasta' always with 3 ingredients
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  //this is a new method that need to have at least 1 ingredient, the others are optional
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours,
  /* openingHours: {
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
  }, */
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

//When receiving third part data, its very helpful to have default values in case to trying to read a property that doesn't exist on the object
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

/* 
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
 */

/* 
////////////////////
// 107 Short Circuiting (and && and or ||)
//Logical operators: 1) Can use any data type, 2) Return any data type, 3) Short-circuiting
console.log('---- OR ----');
// The result of the || OR operator doesn't have to be always boolean
console.log(3 || 'Vic'); // 3 -> In case of the OR || operator, it short-cirscuits when the first value is TRUE and return this value; not even evaluating the second element
console.log('' || 'Vic'); // Vic -> because empty string is a false value
console.log(true || 0); // true -> result is already true
console.log(undefined || null); // null -> undefined is a false value; null is also a false value
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // hello -> is the first true value in these OR chain operations

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10 -> Returned 10 because 'numGuests' doesn't exist inside 'restaurant' object; If certain value was assigned to this property, then that value should return

const guests2 = restaurant.numGuests || 10; //this solution and the previous wont work if the guest numbers is zero
console.log(guests2);
console.log(restaurant);

console.log('---- AND ----');
console.log(0 && 'vic'); // 0 -> In the case of the AND && operator, it short-circuits when the first value is FALSE and return this value, not even evaluating the second element
console.log(7 && 'vic'); // vic ->
//AND && works the opposite from the OR || operator
console.log('hello' && 23 && null && 'vic'); // null -> is the first false element in the line

//AND && operator can use to avoid the 'if' statement, where you want to check if a property or value exist or not
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//in console: mushrooms <br> >['spinach']

//How to read this line: "If 'restaurant.orderPizza' exist, then (&&) call 'restaurant.orderPizza('mushrooms', 'spinach') with these arguments"
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//in console: mushrooms <br> >['spinach']
//Don't need to replace all if statement, otherwise, the code will be very difficult to read in the future

//Recaping: OR || operator will return the FIRST TRUE value or simply the LAST VALUE if all values are FALSE; AND && operator will return the FIRST FALSE value or simply the LAST VALUE if all values are TRUE;
//We also can use OR || operator to set default values; And we can use the AND && operator to execute code in the second operand IF the first one is TRUE
 */
/* 
////////////////////
// 108 The Nullish Coalescing Operator (??) - Operador Coalescente Nulo, introduced in ES2020

restaurant.numGuests = 0;

//OR || operator - it works with falsy values instead of nullish values
const guests = restaurant.numGuests || 10;
console.log(guests); // 10
//"If restaurant.numGuests is false, then 10 will be executed. Otherwise, it will return its value"

//Nullish Coalescing ?? operator - it works with nullish values (null and undefined - NOT include 0 or '') instead of falsy values
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0
//"If restaurant.numGuests is null or undefined, then 10 will be executed. Otherwise, it will return its value"

////////////////////
// 109 Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0, // zero is a falsy value, so, when we run the code with numGuests: 0, the rest1.numGuests will return 10
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//OR assignment operator - assign a value (10) to a variable (object.numGuests) if its current falsy
// rest1.numGuests = rest1.numGuests || 10; // rest1.numGuests exists, then return its value 20
// rest2.numGuests = rest2.numGuests || 10; // rest2.numGuests is undefined because doesn't exist, then 10 is returned

//console.log(rest1, rest2);
//in console: >{name: 'Capri', numGuests: 20} >{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}
//in console, with numGuests as 0 value: >{name: 'Capri', numGuests: 20} >{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

//Adding numGuests to rest2 through Logical Assignment - assign a value (10) to a variable (object.numGuests) if its current falsy -> but if the value is 0, falsy value, then it will assign 10
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//console.log(rest1, rest2);
//in console: >{name: 'Capri', numGuests: 20} >{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}
//in console, with numGuests as 0 value: >{name: 'Capri', numGuests: 10} >{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

//To solve the 0 assignment problem, we use the nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1, rest2);
//in console, with numGuests as 0 value: >{name: 'Capri', numGuests: 0} >{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

// AND && assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>'; //Set as undefined because rest1.owner doesn't exist and the operator short-circuits whne the first value is falsy
rest2.owner = rest2.owner && '<ANONYMOUS>';
console.log(rest1, rest2);
//in console: >{name: 'Capri', numGuests: 0,  owner: undefined} >{name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10}

//Same as 'rest2.owner = rest2.owner && '<ANONYMOUS>';'
rest1.owner &&= '<ANONYMOUS>'; //Avoid and hide the undefined value
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);

//Basically, what the logical assignmet end operator does is assign a value to a variable if its currently truthy - Otherwise, it avoid undefined, null, and so on
 */
////////////////////
// 110 Coding Challenge #1

/*
We're building a football betting app

Suppose we get data from web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk) with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('playersFinal') containing all the original team1 players plus 'Thiago', 'Coutinho', and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('principalGoals') that receives an arbritary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scored (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/
/* 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odd: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
 */
/* 
//1. OK
const [players1, players2] = game.players;
console.log(players1, players2);

//2. OK
const [gk, ...fieldPlayers] = players1;

//3. OK
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. OK
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

//5. Correct
const {
  odds: {team1, x: draw, team2},
} = game;
console.log(team1, draw, team2);

//6. Correct - '...players' will take the total of arguments passed, and when passing 'game.scored', adding '...' to take one by one of the elements
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7. Correct
team1 < team2 && console.log('team1 is more likely to win');
team1 > team2 && console.log('team2 is more likely to win');
 */
/*

//5. Wrong
const {team1, draw, team2} = {...game.odd};
console.log(team1, draw, team2);

//6. Wrong
const principalGoals = function (playerName) {
  console.log(playerName);
};
 */

/* 
////////////////////
// 111 Looping Arrays: The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//its 'for' item 'of' menu - this loop will automactically loop for all the array, and at each iteration will give us access to the current array element wich is specified in 'item' (it can be named as you want);
//'Item' is always the current element in each iteration
for (const item of menu) console.log(item); // Doesn't need a block when you have only a instruction to execute
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

//Get items index - the current position of each element
for (const item of menu.entries()) console.log(item);
// (2) [0, 'Focaccia'] -> '(2)' for index and array element
// (2) [1, 'Bruschetta']
// (2) [2, 'Garlic Bread']
// (2) [3, 'Caprese Salad']
// (2) [4, 'Pizza']
// (2) [5, 'Pasta']
// (2) [6, 'Risotto']

console.log(menu.entries());
// >Array Iterator {}

console.log([...menu.entries()]);
// v(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
//    >0: (2) [0, 'Focaccia']
//    >1: (2) [1, 'Bruschetta']
//    >2: (2) [2, 'Garlic Bread']
//    >3: (2) [3, 'Caprese Salad']
//    >4: (2) [4, 'Pizza']
//    >5: (2) [5, 'Pasta']
//    >6: (2) [6, 'Risotto']
//    length: 7
//    >[[Prototype]]: Array(0)

//Taking advantage of the 'menu.entries'
for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto

// Destructuring the 'menu.entries' - stored the index into 'i' and array element into 'el'
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto
 */
/* 
////////////////////
// 112 Enhanced Object Literals

// *Attaching outer object inside objects with ES6
const openingHours = {
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
};

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //openingHours: openingHours, //Before ES6 - old way to add object to object - a problem would be the property name being the same as the added object name
  openingHours, //With ES6, just add the same property/object name - if you change the obect name, you'll to change the property name too

  // *Adding methods with ES6

  //Before ES6, old way to declare methods
  order_olderway: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //With ES6
  order_neway(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// *Computing values
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours2 = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};
console.log(openingHours2); // >{thu: {…}, fri: {…}, day-6: {…}}
 */
/* 
////////////////////
// 113 Optional Chaining (?.)

//New feature for objects and arrays

//Pretending we do not know if the restaurant open in mondays
//console.log(restaurant.openingHours.mon); //undefined

//console.log(restaurant.openingHours.mon.open); //Uncaught TypeError: Cannot read properties of undefined (reading 'open') -> undefined + '.open' = error

//if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//Uncaught TypeError: Cannot read properties of undefined (reading 'open')

//if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// 11

//if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // validating nest level by level

//This kind of validating can become a problem when we have deeply nested objects

//Optional chaining - New ES2020 feature as solutions for nested object validation

//If a certain property doesn't exist, it will return undefined right away
console.log(restaurant.openingHours.mon?.open); // undefined -  Only if the property before the ? mark exist ('mon'), then '.open' will be added and return its value - The Nullish concept is applied here, a property exist only if is not null or undefined
console.log(restaurant.openingHours?.mon?.open);



for (const day of days) {
  //console.log(day);
  // mon
  // tue
  // wed
  // thu
  // fri
  // sat
  // sun
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //If you want to use a variable name as property name, put it into []
  console.log(`on ${day}, we open at ${open}`);
  // on mon, we open at closed
  // on tue, we open at closed
  // on wed, we open at closed
  // on thu, we open at 12
  // on fri, we open at 11
  // on sat, we open at 0
  // on sun, we open at closed
}

//Optional chaining with Methods - checking if a method exists before call it

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//>(2) ['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//Method does not exist

//Optional chaining with Arrays
const users = [{name: 'Bob', email: 'bob@gmail.com'}];

console.log(users[0]?.name ?? 'User array empty');
// Bob
console.log(users[0]?.age ?? 'User array empty');
// User array empty

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
// Bob
 */
/* 
////////////////////
// 114 Looping Objects: Object Keys, Values, and Entries

//Looping over objects, that are not iterable, but in a indirect way (looping over an array); Or properties names, values or both together

//Loopping over property names (also called 'keys')
const properties = Object.keys(openingHours);
console.log(properties);
// >(3) ['thu', 'fri', 'sat']

let openStr = `We're open on ${properties.length} days: `;
// We're open on 3 days

for (const day of Object.keys(openingHours)) {
  console.log(day);
  // thu
  // fri
  // sat
}

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);
// We're open on 3 days: thu,fri,sat,

//Property Values
const values = Object.values(openingHours);
console.log(values);
// v(3) [{…}, {…}, {…}]
//    0: {open: 12, close: 22}
//    1: {open: 11, close: 23}
//    2: {open: 0, close: 24}
//    length: 3
//    >[[Prototype]]: Array(0)

//Entrie = Property/Keys + Values - looping for an 'object'
const entries = Object.entries(openingHours);
console.log(entries);
// v (3) [Array(2), Array(2), Array(2)]
//    v 0: Array(2)
//      0: "thu"
//      >1: {open: 12, close: 22}
//      length: 2
//      >[[Prototype]]: Array(0)
//    v 1: Array(2)
//      0: "fri"
//      >1: {open: 11, close: 23}
//      length: 2
//      >[[Prototype]]: Array(0)
//    v 2: Array(2)
//      0: "sat"
//      1: {open: 0, close: 24}
//      length: 2
//      [[Prototype]]: Array(0)
//    length: 3
//    >[[Prototype]]: Array(0)

for (const x of entries) {
  console.log(x);
  // >(2) ['thu', {…}]
  // >(2) ['fri', {…}]
  // >(2) ['sat', {…}]
}
// [key, value]
for (const [key, {open, close}] of entries) {
  console.log(`On the ${key} we open at ${open} and close at ${close}`);
  // On the thu we open at 12 and close at 22
  // On the fri we open at 11 and close at 23
  // On the sat we open at 0 and close at 24
}
// the {open, close} was necessary because the element itself is an object
 */

////////////////////
// 115 Coding Challenge #2

/*
Let's continue with out football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calcute the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of the goals as the value. In this game, it will look like this:
    {
      Gnarby: 1,
      Hummels: 1,
      Lewandowski: 2
    }
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odd: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

////// My Solution

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
console.log('----- Task 1 -----');

const scored = game.scored;
console.log(scored);
//(4) ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels']

for (const [goal, player] of scored.entries()) {
  //console.log(players);
  console.log(`Goal ${goal}: ${player}`);
  // Goal 0: Lewandowski
  // Goal 1: Gnarby
  // Goal 2: Lewandowski
  // Goal 3: Hummels
}

//2. Use a loop to calcute the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
console.log('----- Task 2 -----');

const odds = Object.values(game.odd);

for (const average of odds) {
  //console.log(average);
  console.log(average.length);
}
