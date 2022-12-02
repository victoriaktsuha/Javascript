/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
*/

//===LECTURE - PART 1=====

/*
let country = "Brazil";
let continent = "South America";
let population = 212600000;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
const language = 'portuguese';

let halfPopulation = population / 2;
population++; 
console.log(population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

//old syntax
//let description = "Portugal" + " " + "is" + " " + "in" + " " + "Europe" + "," + " " + "and" + " " + "its" + " " + "11" + " " + "million" + " " + "people" + " " + "speak" + " " + "portuguese";

//new syntax
let description = `Portugal is in Europe, and its 11 million people speak portuguese`;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

if(population >= 33000000){
    console.log(`Portugal's population is above average`);
}else{
    console.log(`Portugal's population is 22 million below average`);
}
*/

//===Data Types===
/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true); 
console.log(typeof javaScriptIsFun); 
console.log(typeof 23); 
console.log(typeof 'true'); 

javaScriptIsFun = "YES!"; 
console.log(typeof javaScriptIsFun); 

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//====let, const, var====
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

const job;
 
var job = "programmer";
job = "teacher";
*/

//===Basic Operators===
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means to the power of 3 => 2^3

// Assignment operators
const firstName = 'Jonas';
const lastName = 'Right';
console.log(firstName + " " + lastName);


let x = 10 + 5 ; //15
x += 10; // x = x + 10
x *= 4; // x = x * 4 
x++; // x = x + 1
x--;
console.log(x);
*/

// comparison operators (boolean)
/*
console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); 

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/



//===Challenge #1===
/*
Mark and John are trying to compare their BM (Body Mass Index), which is calculated using
the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.


let markWeight1 = 78.0;
let markHeight1 = 1.69;
let johnWeight1 = 92.0;
let johnHeight1 = 1.95;

let markWeight2 = 95.0;
let markHeight2 = 1.88;
let johnWeight2 = 85.0;
let johnHeight2 = 1.76;

const bmiMark1 = markWeight1 / (markHeight1 * markHeight1);
console.log("Mark's BMI" + " " + "is " + bmiMark1);

const bmiJohn1 = johnWeight1 / (johnHeight1 * johnHeight1);
console.log("John's BMI" + " " + "is " + bmiJohn1);

let markHeigherBMI1 = bmiMark1 > bmiJohn1;
console.log("Mark's BMI " + "is " + "higher " +  "than " + "John's BMI ? -> " + markHeigherBMI1);

const bmiMark2 = markWeight2 / (markHeight2 * markHeight2);
console.log("Mark's BMI" + " " + "is " + bmiMark2);

const bmiJohn2 = johnWeight2 / (johnHeight2 * johnHeight2);
console.log("John's BMI" + " " + "is " + bmiJohn2);

let markHeigherBMI2 = bmiMark2 > bmiJohn2;
console.log("Mark's BMI " + "is " + "higher " +  "than " + "John's BMI ? -> " + markHeigherBMI2);
*/

//====Strings and templete literals====
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);

console.log(' String with \n\ multiple \n\ lines'); //old syntax

console.log(`String
with
multiple
lines`);
*/

//=====if/else====

/*const age = 15;

if(age >= 18){
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young 🚫. Wait another ${yearsLeft} years :)`);
}
const birthYear = 2012;
let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
*/


//===Challenge #2===

/*Use the BMI example from Challenge #1, and the code you already wrote, and impreve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9) !"

HINT: Use an if/else statement

let markWeight1 = 78.0;
let markHeight1 = 1.69;
let johnWeight1 = 92.0;
let johnHeight1 = 1.95;

let markWeight2 = 95.0;
let markHeight2 = 1.88;
let johnWeight2 = 85.0;
let johnHeight2 = 1.76;

const bmiMark1 = markWeight1 / (markHeight1 * markHeight1);

const bmiJohn1 = johnWeight1 / (johnHeight1 * johnHeight1);


if(bmiMark1 > bmiJohn1){
    console.log(`First case: 
    Mark's BMI is higher (${bmiMark1}) than John's (${bmiJohn1}) !`);
}else{
    console.log(`First case:
    John's BMI is higher (${bmiJohn1}) than Mark's (${bmiMark1}) !`);
}

const bmiMark2 = markWeight2 / (markHeight2 * markHeight2);

const bmiJohn2 = johnWeight2 / (johnHeight2 * johnHeight2);

if(bmiMark2 > bmiJohn2){
    console.log(`Second case:
    Mark's BMI is higher (${bmiMark2}) than John's (${bmiJohn2}) !`);
}else{
    console.log(`Second case:
    John's BMI is higher (${bmiJohn2}) than Mark's (${bmiMark2}) !`);
}
*/


//=====Type conversion (change type manually) and coercion (JS change type automatically)

/*

//type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear); //convert string into number
console.log(inputYear + 18); //this function doesnt work as addition cause the original value still a string
console.log(Number(inputYear) + 18); // it works now as a addition operation
console.log(Number('Name')); //return NaN - 'Not a Number'; it actually is a number, but is a invalid number
console.log(typeof NaN); //'Not a Number'; it actually is a number, but is a invalid number
console.log(String(23), 23); //convert number into a string

//type coercion

console.log('I am ' + 27 + ' years old'); //if is a operation between number and string, the number will be converted into a string
console.log('23' - '10' - 3); //this will return a result number '10', because minus operation convert strings into numbers, thats the only way its can be executed
console.log('23' + '10' + 3); //... while this will return a string '23103' because add operation convert numbers into strings because it have more than 1 way to be executed, and the JS choose automatically the string option
console.log('23' * '2'); //this will return a result number '46', because multiplier operation convert strings into numbers, thats the only way its can be executed
console.log('23' / '2'); //this will return a result number '46', because division operation convert strings into numbers, thats the only way its can be executed

//operations has different behavior in type coercion 

let n = '1' + 1;
n = n - 1;
console.log(n);

//lecture
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

*/

//Truthy and Falsy  values

//5 falsy values in JS: 0, '', undefined, null, NaN - (they are not really false, but turn to false when forced to become a boolean)
//JS do type coercion to booleans in two scenarios: logical operators and if/else condition
/*
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Name')); //true - any string that is not a empty string is a truthy value
console.log(Boolean({})); //true


const money = 0;
if (money){
    console.log("Don'tspend it all");
}else{
    console.log("You should get a job");
}
//obviously, return 'else', but why ? Any condition inside () in 'if ()' is forced to become a boolean, and according to 5 falsy values, 0 is a falsy 

let height;
if (height){
    console.log("Height is defined");
}else{
    console.log("Heigh is UNDEFINED");
}*/

//**** Equality operators: == vs === *****

//== / === are booleans operators returning true or false. In '===' case, allows us to compare two or more operands by checking the equality between the values as well as their types, it will just return if both sides is equal (strict equality operator - it not perform type coercion). While '==' compare two or more operands by converting their value to a common type first and then checking for the equality between them (loose quality operator - it does a type coercion to make the execution happen)

/*
const age = 18;
if(age === 18) console.log("You just became an adult"); //strict equality operator - same type and value
if(age === '18') console.log("Error"); //strict equality operator - same value but different types
if(age == '18') console.log("That's true"); //loose quality operator - different types but same values > JS make de type coercion > return true
if(age == '19') console.log("Error"); //loose quality operator - different types and different values > it dont have nothing in common :( )

// to a clean code, avoid loose operator as much as you can - if you need to convert to compare, do it manually before and compare if '===' after

const favourite = Number(prompt("What's your favourite number ?")); //'prompt' display a box with a input field to collect user answer
//As the answer is collected a string originally, Number() will convert the answer to a number type (to match the boolean function below)
console.log(favourite); //this console.log will display the answer in the log window

if(favourite === 23) {
    console.log("Cool!");
}else if(favourite === 7){
    console.log("Amazing!");
}else if(favourite === 9) {
    console.log("Good!");
}else{
    console.log("Number doesn't match");
}
//to compare DIFFERENCE (not equality), use '!=' as loose difference and '!==' as strict difference
if (favourite !== 23) console.log("Why not 23 ?")
*/

//lecture
/*
const numNeighbours = Number(prompt("How many neighbour countries does you country have ?"));
if(numNeighbours === 1){
    console.log("Only 1 border!");
}else if(numNeighbours > 1){
    console.log("More than 1 border");
}else{
    console.log("No borders");
}
*/

//==== Boolean Logic =====

//basic boolean operators: AND (&&), OR (||) & NOT (!) - used to combine true and false values - its not specific to JS 
// (&&) AND operator: 'truth table' > the function will return true when all sentences is true (no matter the number of sentences), otherwise will always return false (strict)
//  OR operator: 'truth table' > the function will return false just when all sentences are false (no matter the number of sentences), otherwise will always return true (at least)
// (!) NOT operator: its actually a converter: whats is false, become true and what is true become false

//==== Logical Operators ====
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND operator - TRUE when ALL are true
console.log(hasDriversLicense || hasGoodVision); // OR operator - TRUE when AT LEAST ONE is true
console.log(!hasDriversLicense); // NOT operator - invert the original values

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive');
// }else{
//     console.log('Someone else should drive');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); 

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive');
}else{
    console.log('Someone else should drive');
}*/

//lecture
/*
const speakEnglish = true;
const popLessThan50M = true;
const isIsland = false;

if(speakEnglish && popLessThan50M && !isIsland){
    console.log("You should live in Portugal :)");
}else{
    console.log("Portugal does not meet your criteria :(");
}*/

//==== Challenge #3 ====

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: use a logical operator to test for minimum score, as well as miltuple else-if blocks.
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.
*/

/* 
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy 🏆");
}else if (scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy 🏆");
}else if (scoreDolphins === scoreKoalas){
    console.log("Both win the trophy!");
} 
*/

//BONUS 1

/* 
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy 🏆");
}else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log("Koalas win the trophy 🏆");
}else if (scoreDolphins === scoreKoalas){
    console.log("Both win the trophy!");
}
*/

// BONUS 2 

/* 
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy 🏆");
}else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log("Koalas win the trophy 🏆");
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy!");
}else{
    console.log("No one wins the trophy 😢");
}  
*/

////////////////////////////////
// The Switch statement - An alternative to if-else

// const day = 'saturday';

/* if (day === 'monday'){
    console.log("Executing tasks 1 for MON");
    console.log("Executing tasks 2 for MON");
}else if (day === 'tuesday'){
    console.log("Executing tasks for TUE");
}else if (day === 'wednesday' || day === 'thursday'){
    console.log("Executing tasks for WED and THU");
}
else if (day === 'friday'){
    console.log("Executing tasks for FRI");
}else if( day === 'saturday' || day === 'sunday'){
    console.log("Executing tasks for SAT and SUN")
}else{
    console.log("Not a valid day!");
} */

/* switch (day) {
    case 'monday': // day === 'monday'
        console.log("Executing tasks 1 for MON");
        console.log("Executing tasks 2 for MON");
        break;
    case 'tuesday':
        console.log("Executing tasks for TUE");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Executing tasks for WED and THU");
        break;
    case 'friday':
        console.log("Executing tasks for FRI");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Executing tasks for SAT and SUN")
        break;
    default:
        console.log("Not a valid day!");
} */


////////////////////////////////
// Statement/declarations and Expressions

// An expression is a piece of code that produces values

/* 3 + 4  */ //is an expresison because produces '7' as value in JS
/* 1991 (number)*/ //is a value too because itself produces the number 1991 as value in JS
/* true && false && !false */ // is an expression too because produces a boolean value

// Statement is a bigger piece of code that is executed and which does not produce a value itself
// We write our code as a sequence of actions and these ACTIONS are STATEMENTS - declarations is like completely sentences ansd expressions are like words

/* if (23 > 10) {
    const str = '23 is bigger';
} */
// if/else or switch, for example, is a statement - it performs some actions, declaring something, but it doesn't produce a value. BUT in the previous example, the string itself is an expression - basic, whenever something ends with a semicolon, that's then a statement, like a complete sentence. 

//JS expects statements and expressions in different places - do not put an expression where its expects a statement

console.log(`I'm ${2022 - 1994} years old`); //In ${} is expect expression like the one it has received, but we cannot put an if/else code, for exemple. But you can put a variable name, because the variable will essentially just be replaced with the string, like below.

const me = 'Vic';
console.log(`I'm ${2022 - 1994} years old ${me}`)
