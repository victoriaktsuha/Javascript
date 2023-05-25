'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

///////////////////////////
// 142 Simple Array Methods

/**Why arrays have methods ?
 * Remember that methods are siplt functions that we can call on objects; Basically they're functions attached to objects
 * If we have array methods, that means that arrays themselves are also objects;
 * All array have access to these bultiin JS methods => prototypal inheritance
 */
/* 
let arr = ['a', 'b', 'c', 'd', 'e'];

// *SLICE method - we can extract any part of an array WHITHOUT CHANGING the original array

console.log(arr.slice(2)); // It starts in the position 2 ('c') and get the rest of the array, returning a new array; > (3) ['c', 'd', 'e']

console.log(arr.slice(2, 4)); // >(2) ['c', 'd']
console.log(arr.slice(2, 3)); // >['c']
// As seen above, the last parameter (4 => 'e') and (3 => 'd'), respectively, will not be included in the output

console.log(arr.slice(-2)); // >(2) ['d', 'e']
console.log(arr.slice(-1)); // >['e']
// We can also assign a negative parameter, that will begin at the end, from the last to the first; And -1 will always be the last element, a useful trick

console.log(arr.slice(1, -2)); // >(2) ['b', 'c']

console.log(arr.slice()); // >(5) ['a', 'b', 'c', 'd', 'e']
// An empty slice method creates a shallow copy of an array

console.log([...arr]); // Same result with the spread operator >(5) ['a', 'b', 'c', 'd', 'e']

// *SPLICE method - Its very similar to the slice method but the fundamental difference is that is actually CHANGE the original array

console.log(arr.splice(3)); // >(2) ['d', 'e']
// The result will looks exactly the same as slice method, but when we output the original array, it will be missing the last 2 elements:
console.log(arr); // >(3) ['a', 'b', 'c']

// Usually, the result of the SPLICE method its not very interestant. We usually use it to REMOVE parts of the original array and return this new array. Other common use is remove the last array element

console.log(arr.splice(1, 2)); // >(2) ['b', 'c']
//The first parameter work as in slice method (the start position), but the second one works as the number of elements that we want to delete
console.log(arr); //>['a'] => (2-1 = 1)

// *REVERSE method - It reverse the order of the elements also CHANGING the original one
arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // >(5) ['f', 'g', 'h', 'i', 'j']
//The reserve method also mutates the original array
console.log(arr2); // >(5) ['f', 'g', 'h', 'i', 'j']

// *CONCAT method - Use to concatinate arrays WHITHOUT CHANGING the original ones (the order is important!)
const letters = arr.concat(arr2);
console.log(letters); // >(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log([...arr, ...arr2]); // Same result whith spread operator >(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] (also doesn't mutate)

// *JOIN method - Add an arguments between the array elements returning a string WHITHOUT CHANGING the original
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
 */
///////////////////////////
// 143 The new 'At' Method (ES2022)
/* 
const arr3 = [23, 11, 64];

//If we want to fetch a specific array element, we'd do this:
console.log(arr3[0]); // 23 -> "Array at position 0"

//But now we can do the same with the 'At' method
console.log(arr3.at(0)); // 23 - > "Array (.) AT position 0"

// Getting the last element
// One particularity of the 'At' Method which makes it quite useful to use instead of the brackets notation: lets say we want to get the last element of the array supposing we don't know the array length, we can use it like this:
console.log(arr3.at(arr3.length - 1)); // 64

//We can also use the slice method, but it will return a copy of the array with the elements 'sliced' (remembering, whithout changing the original array):
console.log(arr3.slice(-1)); // >[64] (object)
// If you need to take the value itself, add the square brackets with the desired position:
console.log(arr3.slice(-1)[0]); // 64 (number)
//The 'At' method turns it easier, returning the element in its original type (string, number, array...)
console.log(arr3.at(-1)); // 64

// 'At' method also works on strings
console.log('name'.at(0)); // n
console.log('name'.at(-1)); // e

// Unlike the 'At' method, 'slice' method would take all the elements after the informed position
console.log('name'.slice(0)); // name
console.log('name'.slice(-1)); // e
console.log('name'.slice(-2)); // me
 */

///////////////////////////
// 144 Looping Arrays: forEach
/* 
// Different from the 'for of' loop method, 'forEach'

//Let's loop over the 'movement' array in order to print a message for each movement on the bank account (deposits and withdraws):

//Using 'for of' loop

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
    //Math.abs() will take just the value, removing the '-' sign
  }
}

console.log(`------- forEach --------`);

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
    //Math.abs() will take just the value, removing the '-' sign
  }
});
// 'forEach' requires a callback function; so 'forEach' is a higher order function; it will loop over the array and each iteration, will call the callback function. Also, as the 'forEach' method calls this callback function, in each iteration it will pass in the current element of the array as an argument (defined as the parameter, in this case, 'movement') => iteration wiht the position 0: function(200); iteration wiht the position 1: function(450); iteration wiht the position 2: function(400); [...] until the array ends

// Accessing the counter variable (current array index)
// With 'for of'
console.log(`------- for of (current element array index) --------`);

for (const [i, movement] of movements.entries()) {
  //entries() returns an array of arrays
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
    // Movement ${i + 1} need the '+1' because it starts with zero
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`------- forEach (current element array index) --------`);

movements.forEach(function (mov, i, arr) {
  // in 'forEach' loop, the first parameter always needs to be the current element of the array, the second one is always the current index and the third is always the entire array
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// The fundamental difference betwween 'for of' loop and the 'forEach' loop is that you cannot break out of a 'forEach' loop; 'continue' and 'break' statement doesn't work with 'forEach', meaning that 'forEach' will always loop for the entire array
 */

///////////////////////////
// 145 forEach With Maps and Sets
/* 
// 'forEach' + Map
// Map -> array of arrays; each inner array will be one entry of the map, where the first element is the key and the second is the value -> e.g. const arrays = new Map ([['key', 'value'], ['key', 'value'], [...]]);"

currencies.forEach(function (value, key, map) {
  // in 'forEach' loop with Maps, the first parameter always needs to be the current value, the second one is always the key and the third is always the entire map
  console.log(`${key}: ${value}`);
  // *In the console:
  // USD: United States dollar
  // EUR: Euro
  // GBP: Pound sterling
});

// 'forEach' + Set
// Set -> Needs to receive iterables

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // >Set(3) {'USD', 'GBP', 'EUR'}

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`);
  // *In the console:
  // USD: USD
  // GBP: GBP
  // EUR: EUR
});
//Why the key is also the value in the forEach loop in Set object ? -> Set doesn't have keys, and it doesn't have indexes either, so there is no value that would make sense for the key. The reason is that the second parameter in the callback function couldn't be removed form the method, otherwise, should exist another 'forEach' just for Sets, creating confusing. So it was decided to keep as it was, with the 3 parameters, and in case of Sets, repeat the 'value' to 'key' parameter

// '_' underscore (as parameter, in this case), in JS, means a throwaway variable, a completely unnecessary variable
 */

///////////////////////////
// 147 Creating DOM Elements

// Displaying the accounts movements in the DOM

//*We're going to start passing data inside the functions, instead using global variables, cause its not a good practice
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // Here we're reseting the 'movements' div content to receive the new movement content (textContent would return just the text, that's the difference to 'innerHTML', that returns everything, including the HTML itself)

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //Ternary operator to know if its a deposit or a withdraw

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    // Template literals (``) to create the layout that will display the movements; they're great to create HTML templates in the script

    containerMovements.insertAdjacentHTML('afterbegin', html);
    // insertAdjacentHTML() method to insert the literal template HTML that we've just created into the <div> correspondent to the account movements, defined in the variable 'const containerMovements' previously; This method accepts 2 strings: the first is the position in which we want to attach the HTML (there are more options than 'afterbegin' - consult MDN doc.) and the second one is the string containing the HTML we want to insert; 'afterbegin' was used so the 'latest' movement in the account could appear at the top of the list, adding the new content above the content that was already there, right after the tag <div class="movements"> appear; If we have used 'beforeend', for example, the movements would start by the 'oldest' to 'latest', right after the closing tag </div> of the <div class="movements">;
  });
};

displayMovements(account1.movements);

///////////////////////////
// 148 Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about ther dog's age, and sotred the data into an array (one array for each).
Dor now, ther are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's age ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
 */

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(); //To JUST create a copy
  dogsJuliaCorrected.splice(0, 1); // Remove the copy first element
  dogsJuliaCorrected.splice(-2); // Remove the copy last two element
  const dogs = dogsJuliaCorrected.concat(dogsKate); // Concat all data
  dogs.forEach(function (age, i) {
    if (age > 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////
// 149 Data Transformations: map, filter, reduce (array methods)

// MAP - Similar to the 'forEach' method, but it creates a brand new array based on the original array; It lopps over an array an in each iteration it applies a callback function, that we specify on our code, to the current array element and stores the result into a new array, this method 'maps' the original array to a new one
// FILTER - Filters elements in the original array which satisfy a certain condition, returning a new array containing the array elements that passed a specified test condition (true)
// REDUCE - It boil ("reduce") all array elements down to one single value (e.g. adding all elements together). For example of adding up all numbers in the array, we need to specify an operation like this one where we have an 'accumulator' variable. Then as the reduce method loops over the array, it keeps adding the current element onto the accumulator until ate the end oof the loop we have the total sum of all elements, like a snowball that gets bigger as it rolls down a hill.

///////////////////////////
// 150 The Map Method

/* Tranforming EU into USD */
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return Math.trunc(mov * eurToUsd);
// });

/* Rewriting the function above in arrow function syntax*/
const movementsUSD = movements.map(mov => Math.trunc(mov * eurToUsd));
console.log(movements);
console.log('Array w/ map', movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(Math.trunc(mov * eurToUsd));
console.log('Array w/ for loop', movementsUSDfor);

const movementsDescr = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescr); // Strings array
/* The difference between the 'forEach' method and the 'map' method is: 'forEach' method creates side effects when, in each iteration, it performs some action (the callabck fucntion); But with the 'map' method, we don't have side effects in each iteration, we've just returned each of the strings form the callback, getting added into a new array and printed this entire array to the console, AND NOT the elements one by one*/
