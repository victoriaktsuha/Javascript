// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//////////////  SECTION 5  /////////////////

///////////////////////////////
// 53 Section Intro
///////////////////////////////
// 54 Section Roadmap
/*PDF on folder*/
//////////////////////////////
// 55 Setting Up Prettier and VS Code
/*
For formating effects on your code, don't forget to enable Prettier extension in Preferences > Settings Default Formatter > choose the Prettier extension; 
To configurate your own snippet, go to: Preferences > Configure User Snippets > (here you can choose a existing one or create a new one in New Global Snippets File... - or choose an specific project to crate their own snippets)
*/

//Write 'cl' defined in snippet file and console.log() will appear
console.log();

//////////////////////////////
// 56 Installing Node.js and Setting Up a Dev Environment
/*
To load a page automactically on browser after save, we have 2 ways:
1. By 'Live Server' VS Code extension => click in 'Go Live' on footer to reflect your changes in the browser;
2. By NPM Live Server installation=> Run 'npm install liver-server -g' on the terminal, then it will return the path and the port that your project is being displaying
*/

//////////////////////////////
// 57 Learning How to Code
/**
 * Have a clear, specfic, realistic and time-based goals, knowing why your are learning code, imagining a big project you wnat to be able to build and reserach technologies you need and then learn them
 * ALWAYS type the code, do not just copy-paste. Look to understand and don't move on if you didn't understand
 * After learn a new feature, use it immediately, taking notes, challenging yourself with exercises and challenges - 'codewars.com' has a bunch of challenges in different levels to keep training
 * Practicing its the most important, and ITS NOT AN OPTION! Try your own project ideias or copy popular sites or applications, or part of them in the beggining
 * Don't get stuck trying to write the perfect code, just write it! Clean and efficient code will come with time, you can always refactor the code later
 * Embrace the fact that you will never know everything
 * Try to explain what you learned to other people. If you can explain it, you truly understand it. Share you goals to make youyrself accountable and share your learning progress with web dev community
 * Courses are just the beginning! Don't start to applying to jobs just because you finished them
 */

//////////////////////////////
// 58 How to Think Like a Developer: Become a Problem Solver!

/**
 * Don't jump at a problem without a plan
 * Take a very logical and rational approach
 * Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem. Example: "We need a function that reverses whatever we pass into it" => Question 1: What 'whatever' means ? What should be reversed ? Answer 1: Only strings, numbers and arrays make sense to reserve.. objects doesn't have a clear structure, so we can't reserve them. Question 2: What to do if somehting else is passed in ? Question 3: What exactly shuld be returned ? Should it always be a string, or should the type be the same as passed in ? Question 4: ho to recognize whether the argument is a number, a string, or an array ? Question 5: How to reserve a string, a number or an array ?
 * Divide and conquer - Break a big problem into smaller sub-problems. Using the exemple before: Task 1: Check if the argument is a number, a string or an array; Task 2:Implement reversing a number; Task 3: Implement reversing a string; Task 4: Implement reversing an array; Task 5: Return reversed value
 * Don't be afraid to do as much research as you have to
 * For bigger problems, write pseudo-code before writting the actual code - a code wrote to first humans understand, not machines
 *
 */

//////////////////////////////
// 59 Using Google, StackOverflow and MDN

/* 

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - Whats temp amplitude ? Answer: Difference between the highest and the lowest temp
// - How to compute the max and the min temp  ?
// Whats a sensor error ?  And what to do when it occurs ?

// 2) Breaking up into sub-problems
// - How to ignore the errors ?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// 3) Steps
// 1 - Writing a function to calc the amplitude, with temperatures argument
// 2 - Research on Google how we can find the max/min value in a array
// Create the function that calculates the amplitude and that receives arguments, so we can pass the temperature array later
// Assume in a var that the max and the min temp is the first array position since we couldn't know the values
// Then create a loop with the 3 parts conditions
// Create a const for temprature current position 'temps[i]' because its repeated a lot
// Then create a condition to 'jump' or ignore the 'errors' elements, since its not a number, it will be ignore
// Create a condition for the max value, defining that while the 3 parts conditions still running, if the current position (curTemp = temps[i]) in the temperatures array is higher than the max estipulated before (let max = temps[0]), then 'max' should be hold this new value
// the same logic can be applied for 'min' value while its lower than the current 'min' value (let min = temps[0])
// Add console.log so we can print the max and min
// In the end add the ogic to return the amplitude value
// To finish, store the function into a var so we can call it in the console to be able to see the ampplitude value. For some reason, just calling the function doesn't print it the 'returned' value into the console


const calcTempAmplitude = function (temps) {
  let max = temps[0]; //here we defined as 'max' value the first element of the array, because we assume we wouldn't know the values in a ordinary scenario
  let min = temps[0]; // we can do the same with the min value
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // we created this var because we used 'temps[i]' a lot of times
    if (typeof curTemp !== 'number') continue; //here we defined that as soon the loop condition reach a value that is not a number, it will 'jump' to the next position, ignoring it
    if (curTemp > max) max = curTemp; // here we are defining that while the 3 parts conditions still running, if the current position (temps[i]) in the temperatures array is higher than the max estipulated before (let max = temps[0]), then 'max' should be hold this new value
    if (curTemp < min) min = curTemp; // the same logic can be applied for 'min' value while its lower than the current 'min' value ()
  }

  console.log(`The max value is ${max} and the min value is ${min}`); // it prints the highest and lowest value that was passed as an argument below

  return max - min; // it returns the amplitude value as requested; Remebering that anything placed after 'return' is ignored
};

const amplitude = calcTempAmplitude(temperatures); // We need to store the function calculation into a variable so we can log it as below to see printed the amplitude value. If I just call the function, We won't be able to see the amplitude value, just the max and min
console.log(`And the amplitude is ${amplitude}`);


// PROBLEM 2:
// Function should now receive 2 temperatures arrays

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice ? Answer: No, just merge the 2 arrays
// How to merge 2 arrays ? Answer: .concat() (Google research)

// 2) Breaking up into sub-problems
// Merge the arrays => const temps = t1.concat(t2);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`The max value is ${max} and the min value is ${min}`);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 4]);
console.log(`And the amplitude is ${amplitudeNew}`);

 */

//////////////////////////////
// 60 Debbuging (Fixing Errors)

//  * Bugs are completely normal in software development
//  * The term born from a real bug causing an error in Harvard's computer in 40's
//  * 'Debugging' is finding, fixing and preveting bugs
//  * Identify it during development, testing, user reports in producting
//  * Find it, isolating where exactly the bug is happening in code. W can find it in developer console if its a simple code, or in a complex code case, we may need a debugger software
//  * Fix it, replacing the wrong with the correct solution
//  * Prevent it from happening again, writing tests using testing software

//////////////////////////////
// 61 Debugging with the Console and Breakpoints
/* 
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX THE BUG => embrace the prompt into Number() to convertt the value to number
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // B) FIND THE BUG => the prompt is (always) returning a string and it can't be added to a number
  console.table(measurement); //same as console.log, but gives us the information in table form
  //console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY THE BUG => the calculate doesn't match, gives us the wrong number
console.log(measureKelvin());

// Debbuging in Chrome: Dev Tools > Sources > script.js (in this case) > add a breakpoint on the left side of the code to see the function execution step by step

//Using a debugger - its specially useful with loops. We can also call a debugger right from the code using 'debugger;' as a breakpoint ans it will automatically open the dev tools debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    //debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`The max value is ${max} and the min value is ${min}`);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY THE BUG
console.log(`And the amplitude is ${amplitudeBug}`);
 */

//////////////////////////////
// 62 Coding Challenge #1

/* 
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Do we need to merge the 2 arrays ? Answer: No, do one at a time
// - How to use the array elements w/o write them manually ?
// - How to increment the days in the string according to the array length ?
// *Array transformed to string, separated by dots
// *What is the X days ? Answer: index + 1

// 2) Breaking into sub-problems
// - create the given function
// - create var for data
// *Transform array into string
// *Transform each element to string with ºC
// *strings needs to contain day (index + 1)
// *Add ... between elements and start and end of string
// *Log string to console

/* My Solution */
/* 
const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  const maxTemp = [0];
  const dayTemp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxTemp !== 'number') continue;
    if (maxTemp < arr.length) maxTemp = arr[i];
    if (dayTemp === arr[i]) dayTemp = arr[i]++;

    console.log(`...${maxTemp}ºC in ${dayTemp}`);
  }
};
 
const forecast = printForecast(temps1);
console.log(forecast);
*/

/* Course Solution */

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};

printForecast(data2);
