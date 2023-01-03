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
