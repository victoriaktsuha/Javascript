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

// Arrow Function
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3); */
/* 'birthYear' still as your parameter, then add the arrow '=>', and after that, you write what you want to return, removing the need of the curly braces and the 'return' keyword - you still need to store it in a variable to be able to use the result. Everything after the '=' sign is a value */


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
/* 
const vars = ['A', 'B', 'C'];

//Add elements

// Push method (+ end) - called with the var where the array is stored and used to add something in the END of this array - a string, a number, an expression, etc
//vars.push('D');
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
 */


///////////////////////////////
// 41 Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1.Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2.And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44
*/

/* Way 1
function calcTip(bill){
    if(bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else{
       return bill * 0.20;
    }
} 
*/
/* way 2
const calcTip = function calcTip = (bill){
    if(bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else{
       return bill * 0.20;
    }
} 
*/
/*Way 3
const calcTip = bill => bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
*/

/* Way 4
const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
} 
*/

/* function calcTip (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
console.log(calcTip(100)); 

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total); */

///////////////////////////////
// 42 Introduction to Objects
/* 
//array
const objArray = [
    'firstName',
    'lastName',
    2037 - 1991,
    'job',
    ['friend1', 'friend2', 'friend3']
];
console.log(objArray[1]); // lastName

//object - holds properties that receive values (any type - expression, array, string, number, boolean); the properties are separated by commas, like in array. There are many ways of creating objects
const obj = {
    //key: 'value', 
    firstName: 'John',
    lastName: 'Tyler',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
//the big difference between arrays an objects is that the order of the elements doesn't matter at all when we want to retreive them - we should use array for a order data and an object for more unstructured data; 
 */
///////////////////////////////
// 43 Dots vs. Bracket Notation
/* 
const person = { 
    firstName: 'John',
    lastName: 'Tyler',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(person); // {firstName: 'John', lastName: 'Tyler', age: 46, job: 'teacher', friends: Array(3)}
//Getting a property from an object
console.log(person.lastName) // by dot notation
console.log(person['lastName']) // by brackets notation

//by 'expression' - in this example, 'Name' is being used because its repeated in 2 properties, so we're trying to save some time; Expression can be used just with brackets
const nameKey = 'Name';
console.log(person['first' + nameKey]); //John
console.log(person['last' + nameKey]); //Tyler
//o que acontece é que o JS vai começar lendo a linha de concatenação ['first' + nameKey]/['last' + nameKey], resultando em 'firstName'/'lastName'; e então ele vai até o objeto indicado 'person' e buscará a propriedade de mesmo 'nome' do resultado da concatenação, imprimindo no console os valores atribuidos a essa(s) propriedade(s);

//in these example, we want to retrieve a data that we don't know/have access yet
const interestedIn = prompt('What do you want to know about John? Choose between firstName, lastName, age, job, and friends');//prompt create pop-up window w/ input field 
//console.log(interestedIn);// what is typed by user, will appear in the console
//console.log(jonas.interestedIn); // => undefined - is what we get when we try to access a property on an object that doesn't exist
//console.log(person[interestedIn]); //now, when user type 'job', the console will print the value 'teacher' assigned in the property 'job' inside the 'person' object

if(person[interestedIn]){
    console.log(person[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}
//now that the object exist, we can add properties like this:
person.location = 'Portugal';
person['phone'] = '123-456';
console.log(person); // (arrow down) age: 46 firstName: "John" friends: (3) ['Michael', 'Peter', 'Steven'] job: "teacher" lastName: "Tyler" location: "Portugal" phone: "123-456";

//Challenge
//"John has 3 friends, and his best friend is called Michael"
//Traditional way
console.log(person.firstName + ' has ' + person.friends.length + ' friends, and his best friend is called ' + person.friends[0]);
//Pratical way
console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`);
 */

///////////////////////////////
// 44 Objects Methods

//We can add functions to objects - any functions that is attached to an object is called method
/* 
const person = { 
    firstName: 'John',
    lastName: 'Tyler',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

        calcAge: function(birthYear){
        return 2037 - birthYear;
    } 

        calcAge: function (){
        console.log(this);//here the 'this' keyword will point to the object its included - person - and return in the console: {firstName: 'John', lastName: 'Tyler', birthYear: 1991, job: 'teacher', friends: Array(3), …}
        return 2037 - this.birthYear; //here the 'this' keyword will point to the object its include and 'search' for the property indicated 'birthYear'; We could use the name of the object, but it violates the 'don't reapeat yourself' rule; and if in some case, the object has another name, we won't need to deal with finding bugs and rewriting the code
    } 
    
   //if in some case the age need to be access a several time throughout the program, won't be a good practice call the method again and again - so we can call the method, atore the value into a variable and use it as a object property later
    calcAge: function (){
        this.age = 2037 - this.birthYear; //here 'this.age' create a new property 'age' into the 'person'(this) object and also already store the calculation result, so we can retrieve it later
        return this.age; 
    },
    //Challenge
    //"John is a 46-yo teacher and he has a driver license"
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}yo ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`;
    }
};

console.log(person.calcAge());
console.log(person.age);
console.log(person.getSummary());

//console.log(person.calcAge(1991)); // 46
//console.log(person['calcAge'](1991)); // we can also use brackets cause 'calcAge' is like a property
//console.log(person.calcAge());// here we don't need to pass an argument because we're already indicating it in the method with 'this.birthYear'

//Arrays are also objects
 */

///////////////////////////////
// 45 Coding Challenge 3

/*
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for theis full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI vlaue to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMU. Example: "John Smith's BMI (28.3) is higher than Mark MIller's (23.9) !"

TEST DATA: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
*/
/* 
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};
john.calcBMI(); 
mark.calcBMI();
console.log(`${john.bmi > mark.bmi ? john.fullName : mark.fullName}'s BMI (${john.bmi > mark.bmi ? john.bmi : mark.bmi}) is higher than ${john.bmi > mark.bmi ? mark.fullName : john.fullName}'s (${john.bmi > mark.bmi ? mark.bmi : john.bmi})`);
 */


///////////////////////////////
// 46 Iteration: The 'for Loop'
// Control structures - if/else is one of them as is 'for' loop - that allow us to repeat tasks until we tell it to stop

//Repetitive way
/* console.log('Lifting weights repetition 1 🏋️‍♀️');
console.log('Lifting weights repetition 2 🏋️‍♀️');
console.log('Lifting weights repetition 3 🏋️‍♀️');
console.log('Lifting weights repetition 4 🏋️‍♀️');
console.log('Lifting weights repetition 5 🏋️‍♀️');
console.log('Lifting weights repetition 6 🏋️‍♀️');
console.log('Lifting weights repetition 7 🏋️‍♀️');
console.log('Lifting weights repetition 8 🏋️‍♀️');
console.log('Lifting weights repetition 9 🏋️‍♀️');
console.log('Lifting weights repetition 10 🏋️‍♀️');
 */

//Looking similar to if/else statement, the 'for' loop has three parts: the first part is the initial value of a counter hold into a variable; the second part is a logical condition that is evaluated before each iteration of the loop (each code execution): if the condition is true then the next loop iteration will run, and as soon its false, then the loop stop; the third part is to update the counter each iteration; That's necessary because otherwise the counter will just stay at one forever => ('rep = rep + 1' = 'rep ++')
/* for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`); // the ${rep} will print updating the number of repetitions, printing ALL the 10 repetitions in to the console
}
 */

///////////////////////////////
// 47 Looping Arrays, Breaking and Continuing
/* 
//In this case, we want to log to the console each elements of the array
const person = [
    'firstName',
    'lastName',
    2037 - 1991,
    'job',
    ['friend1', 'friend2', 'friend3'],
    true
];
//Here we start with 0 because its an array; In the logical condition, instead using 'i < 5', we use 'person.length', since we want to reuse the code even when a new element is added and we could not know the elements number in the array also:
for (let i = 0; i < person.length; i++){
    console.log(person[i], typeof person[i]); // 'typeof person[i]' will print as well the type of the element (string, number, boolean...)
}


//now, we want to create a new array which will contain all the types for all the original object elements:

const types = [];

for (let i = 0; i < person.length; i++){
    console.log(person[i], typeof person[i]); // 'typeof person[i]' will print as well the type of the element (string, number, boolean...)

    //One of the ways to fill the 'types' array with the type of each element of the 'person' object
    //types[i] = typeof person[i]; // It means 'type[0]' is equals to 'typeof person[0]'
    
    //Another way to fill the 'types' array - push is a property to add elements to the end of an array
    types.push(typeof person[i]);
}

console.log(types);// => (6) ['string', 'string', 'number', 'string', 'object', 'boolean']

//We want to calculate the age according to the years
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages); // => (4) [46, 30, 68, 17]

// continue: is to exit the current iteration of the loop and continue to the next one & break: used to completely terminate the whole loop

//In this case, we want to log only strings to the console (continue)
console.log('=== ONLY STRINGS ===')
for (let i = 0; i < person.length; i++){
    if(typeof person[i] !== 'string') continue; // if the type of the current element is not a string, then continue to the next one
    console.log(person[i], typeof person[i]);  // => firstName string, lastName string, job string
}

//In this case, after a number element is found, nothing should be printe anymore (break)
console.log('=== BREAK W/ NUMBER ===')
for (let i = 0; i < person.length; i++){
    if(typeof person[i] === 'number') break; // if the type of the current element is a number, then the loop is terminate
    console.log(person[i], typeof person[i]);  // => firstName string, lastName string (finishs here because the next array element is '2037-1991')
}
 */

///////////////////////////////
// 48 Looping Backwards and Loops in Loops
/* 
const person = [
    'firstName',
    'lastName',
    2037 - 1991,
    'job',
    ['friend1', 'friend2', 'friend3']
];
// 0, 1, ..., 4
// 4, 3, ..., 0 - backwards

for (let i = person.length - 1; i >= 0; i--){
    //we need to use 'let i = person.length - 1' because otherwise the last element order will be 5, but since we start arrays in 0, the last element order is actually 4, and in this case element order 5 will be undefined - and that will be so on with new elements 
    console.log(i, person[i]);
}

// In his case we have 3 exercises that will be repeated 5 times each (15 repetitions)
for (let exercise = 1; exercise < 4; exercise++){ //=> 'exercise < 4' = 'exercise <= 3'
    console.log(`==========Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
//When the first iteration code exit, the second starts, then it backs to the first to run again and when it exits return to the second one, until all the structure is completed
 */

///////////////////////////////
// 49 The while Loop - its very similar to 'for' loop, still including 3 parts (start value, condition and iteration), but with a diferent structure:
/* 
// 'for' loop
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`); 
}

//'while' loop
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`); 
    rep++;
}
//'while' is more flexible because it doesn't need a counter or a iteration to run, it just need the condiytion. In the case below, we want to roll a dice until we get a 6, we don't need to or don't know how many times the dice will roll
let dice = Math.trunc(Math.random() * 6)  + 1; //explanations later 
//console.log(dice);

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
 */

///////////////////////////////
// 50 Coding Challenge 4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 29, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
    4.1 First, you will need to add up all values in the array. To the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
    4.2 To calculate the average, divide the sum you calculated before by the lenght of the array (because that's the number of elements)
    4.3 Call the function with the 'totals' array
*/
/* 
const calcTip = bills => bills >= 50 && bills <= 300 ? bills*0.15 : bills*0.2;

const bills = [22, 29, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
    //tips.push(calcTip(bills[i]));
    //totals.push(calcTip(bills[i]) + tips[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]; //sum = sum + arr[i]
    }
    //console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
 */

//////////////  SECTION 4  /////////////////

///////////////////////////////
// 51 Pathways and Section Roadmaps
///////////////////////////////
// 52 Pathways
