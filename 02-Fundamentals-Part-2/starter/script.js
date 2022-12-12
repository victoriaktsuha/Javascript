'use strict';

///////////////////////////////
// 32 Activating Strict Mode 

/* Make it easier to write a secure JS code adding 'use strict' to the begining of the code - any code before this line will defeat the strict mode, except for comments. It's secure because it forbid us to do certain things and it'll show us our mistake clearer in the console, like wrong grammar, using reserved words, etc
*/

///////////////////////////////
// 33 Functions

/*Functions can be used over and over - variables holds values and functions hols more line of code. It receives data and return data back. Between (), the function receive 'parameters', representing the input data of this function, like emty spaces that we'll fill out when we invoke the function.
*/

/* function logger() {
    console.log('My name is Vic');//this function just print/log a message to the console, it doesn't return/produce a value
}
// calling / running / invoking function
logger();//in this case, we don't need to store the result of the function into any variable because it doesn't produce any result */

/* function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    //template literal defined with the parameters/arguments placeholders
    return juice; 
    // when used, 'return' replace the code with the result of the function. If you want to use it, like printing in the console, for example, you need to store the invoked funtion into a variable.
} */

//now we define the parameters once declared (apples, oranges), transforming them into 'arguments'
/* fruitProcessor(5, 0); */

//to use the value returned of the function, you need to store it in a variable, like below:
/* const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); */

//here we have the same print in the console, but more directly
/* console.log(fruitProcessor(5, 0)); */

/* const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */


///////////////////////////////
// 34 Functions Declarations vs Expressions

// Function Declaration
/* We can call functions declarations before they are defined in the code (like inverting the order 'variable first and function next') */

/* function calcAge1(birthYear){
    return 2037 - birthYear;
    //we can return the expression directly on the result without store it in a variable
}
const age1 = calcAge1(1994); */


// Function Expression
/*We can't call functions expressions before they are defined because a process called hoisting*/

/* const calcAge2 = function (birthYear){
    return 2037 - birthYear; 
}*/

/*We store the function into a variable and that variable will be the function; We also don't give it a name (anonymous function); Remebering that an expression produces a value and we use that value and store it into 'calcAge2' and 'calcAge2' will be the function itself*/

/* const age2 = calcAge2(1994);
console.log(age1, age2); */

/*function is not a type, its a value; So if it's a value, we can store it in a variable*/
/* the purposes to use one instead another can be just a personal taste*/


///////////////////////////////
// 35 Arrow Functions

// Function Expression for comparison
/* const calcAge2 = function (birthYear){
    return 2037 - birthYear; 
}
const age2 = calcAge2(1994); */

// Arrow Funtion
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3); */
/* 'brithYear' still as your parameter, then add the arrow '=>', and after that, you write what you want to return, removing the need of the curly braces and the 'return' keyword - you still need to store it in a variable to be able to use the result. Everything after the '=' sign is a value */


/* const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1994)); */
/*In the need to add more than just one line of code, you'll need to add the curly braces and 'return' keyword again, kepting the arrow '=>'. 'birthYear' still as parameter*/

/* const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years 👩‍🦳`;
}
console.log(yearsUntilRetirement(1994, 'Victoria'));
console.log(yearsUntilRetirement(1970, 'Bob')); */
/*Wrap the parameter with () if you need to write more parameters */
/*It's preferred that arrow functions be used to one-line codes, but its not a rule */


///////////////////////////////
// 36 Functions calling other functions
/* brief: Considering the function 'fruitProcessor' as a machine that make us juice, now we need a machine that cuts the fruits into pieces before putting them in the juice machine*/

/* function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice; 
}
console.log(fruitProcessor(2, 3)); */


///////////////////////////////
// 37 Reviewing Functions

//Let's rewrite this function to a function expression - remove the arrow and write the 'function' keyword; And call another function inside it
/* 
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
// same grammar for parameters in different functions doesn't have ANY connection or problem; they're totally different parameters (even a var outside functions w/ the same grammar)
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years 👩‍🦳`);
        return retirement;//any code written after the 'return' keyword will be ignored because it immediately exit/return the function
        console.log(`${firstName} retires in ${retirement} years 👩‍🦳`);
    }else{
        console.log(`${firstName} is already retired 👩‍🦳`);
        return -1;
    }
    
    //return `${firstName} retires in ${retirement} years 👩‍🦳`;
}
console.log(yearsUntilRetirement(1994, 'Bob'));
console.log(yearsUntilRetirement(1970, 'Mike'));
 */
//The console.log does not have anything with the function itself. It's just print a message in the console. Actually, it's a fucntion itself


///////////////////////////////
// 38 Coding Challenge #1 (Section 2)

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 score is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.
2. Use the function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 
*/

// My solution (doesn't work)
/* const calcAverage = totalScore => totalScore / 3;

const checkWinner = function(avgDolphins, avgKoalas){
    const scoreDolphins = calcAverage(avgDolphins);
    const scoreKoalas = calcAverage(avgKoalas);

    if (scoreDolphins >= scoreKoalas*2){
        return console.log(`Dolphins wins (${scoreDolphins} vs. ${scoreKoalas})`);

    }else if(scoreKoalas >= scoreDolphins*2){
        return console.log(`Koalas wins (${scoreKoalas} vs. ${scoreDolphins})`);
    }else{
        return console.log(`No one wins`);
    }
}
console.log(checkWinner(138, 168)); */
/*What's Wrong ? 
- the variables that calculate the average score should be out of the function expression;
- the arrow function could receive all the 3 scores or not;
- the 'return' wasn't actually necessary
- call the function expression without console.log (it will consider it 'undefined'), inputing the scores out of the function as arguments
*/

// Course Solution 

/* const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test 1

//We call them 'let', so we can reassign them later w/ test 2 data*
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log(`No one wins`);
    }
}
checkWinner(scoreDolphins, scoreKoalas); */

//Test 2

/* //Since this variables are 'let', we can just reassign their values (w/o creating new variables)
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
//Just call the function again :)
checkWinner(scoreDolphins, scoreKoalas); */


///////////////////////////////
// 39 Arrays

// Arrays is like a big container where we can throw variables and later reference them; The two most important data structure in JS is Arrays and Objects
/* 
//Instead this:
const var1 = 'A';
const var2 = 'B';
const var3 = 'C';

//Do this:
const vars = ['A', 'B', 'C'];
console.log(vars); //This is how an array will look like in console, showing the actual length and the elements => " (3) ['A', 'B', 'C'] "

//We can also write an array calling it as a function (need the 'new' keyword):
const y = new Array(1991, 1984, 2008, 2020);

//To log an specific variable from the array bundle to the console, we write it by its order:
console.log(vars[0]); //Array bundle start from 0 and continue with 1, 2, 3, ..
console.log(vars[2]); 

//We can also retrieve the actual number of elements in the array:
console.log(vars.length); //length is a property

//We can use this to automatically retrieve the last element of any Array - so we don't need to count hou many elements are in the array:
console.log(vars[vars.length - 1]); // we need to subtract -1 because the array has 0 base order, so even we have 3 elements, the last one will be in order 2; inside the brackest [] JS expects an expresison, not an statement

//The brackets [] can be used not just to retrieve but to change elements into the array
vars[2] = 'T';
console.log(vars);
//Since we declare 'vars' with 'const' and we could change the array value, only primitive values are immutable w/ 'const'; And an array it's not a primitive value. BUT we cannot replace the entire array

//An array can hold elements from different types - strings, numbers, expressions, variables (including the variables that holds another array)
const lastName = 'Tyler';
const person = ['Bob', lastName, 2022 - 1991, vars];

console.log(person); // In the console: " (4) ['Bob', 'Tyler', 31, Array(3)] "
 */
//Exercise
/* 
const calcAge = function (birthYear){
    return 2022 - birthYear; 
}

const years = [1990, 1967, 2002, 2010, 2018];
//to use the function, we cannot call it and pass to it 'years' because it will expect just 1 value and the array have more than this - we can't do a number minus an entire array, but we can use a function with a specific array element

console.log(calcAge(years)); //NaN - use the console.log to detail the result

//One of the ways we can include an array element into a function:
const age1 = calcAge(years[0]); //1990
const age2 = calcAge(years[1]); //1967
const age3 = calcAge(years[years.length - 1]); //2018
console.log(age1, age2, age3); 

//We can also store the function result directly into an array element because an array element expects an expression in this place
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); //In the console: " (3) [32, 55, 4] ""
 */

///////////////////////////////
// 40 Basic Array Operations (Methods)
// Methods = array functions

const vars = ['A', 'B', 'C'];

//Add elements

// Push method (+ end) - called with the var where the array is stored and used to add something in the END of this array - a string, a number, an expression, etc
/*vars.push('D');*/
const newLenght = vars.push('D'); // here we stored the function into a var to capture the new lenght result
console.log(vars); // (4) ['A', 'B', 'C', 'D']
console.log(newLenght); // 4

// Unshift method (+ start) - called with the var name where the array is stored and used to add something in the BEGINNING of this array - a string, a number, an expression, etc
vars.unshift(9);
console.log(vars); // (5) [9, 'A', 'B', 'C', 'D']
// If you save the function into a variable as before, it will also return the actual lenght
 
//Remove elements

//Pop method (- last) - called with the var name where the array is stored and used to remove the LAST element of this array
vars.pop(); // we don't need to pass any arguments to it and if you repeat it, it will remove the next and the next element until no one has left
console.log(vars); // (4) [9, 'A', 'B', 'C'] => removed 'D' that was added recently

const popped = vars.pop(); // here we stored the function into a var to capture the removed element
console.log(popped);// C - because its removing D first and then C in the 'popped' var

//Shift method (- first) - called with the var name where the array is stored and used to remove the FIRST element of this array
vars.shift();
console.log(vars); //(2) ['A', 'B'] - because its counting the D and C remove before and removed 9 at least

//indexOf method (position) - it tells us wich position an element is; if try an element that doesn't exist in the array, it will return -1
console.log(vars.indexOf('A')); // 0
console.log(vars.indexOf('5')); // -1

//Includes method (true || false) - similir to 'indexOf', it will return 'true' if an element exit in the array and FALSE if its not
console.log(vars.includes('A')); // true
console.log(vars.includes('5')); // false
//Its test with === strict method, so a number 23 is not equal to a string '23', and will return false; So its very useful to write conditionals

if(vars.includes('A')){
    console.log(`You have the letter A`);
}else{
    console.log(`You dont have the letter A`);
};
