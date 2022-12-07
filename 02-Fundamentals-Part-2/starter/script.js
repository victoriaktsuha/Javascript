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
// 38 Coding Challenge #1


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



const calcAverage = totalScore => totalScore / 3;

const checkWinner = function(avgDolphins, avgKoalas){
    const scoreDolphins = calcAverage(avgDolphins);
    const scoreKoalas = calcAverage(avgKoalas);

    if (scoreDolphins >= scoreKoalas*2){
        console.log(`Dophins wins (${scoreDolphins} xvs. ${scoreKoalas})`);

    }else if(scoreKoalas >= scoreDolphins*2){
        console.log(`Koalas wins (${scoreKoalas} xvs. ${scoreDolphins})`);
        return;
    }else{
        console.log(`No one wins`);
        return;
    }
}
console.log(checkWinner(138, 168));

/////////////////////////////////////////////////////
/* const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years 👩‍🦳`);
        return retirement;
    }else{
        console.log(`${firstName} is already retired 👩‍🦳`);
        return -1;
    }

}
console.log(yearsUntilRetirement(1994, 'Bob'));
console.log(yearsUntilRetirement(1970, 'Mike')); */