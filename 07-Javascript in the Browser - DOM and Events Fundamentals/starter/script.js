'use strict';

//////////////////////////////
// 68 Section Intro

//////////////////////////////
// 69 Section Roadmap

//////////////////////////////
// 70 PROJECT #1: Gues My Number!
/* Briefing:
 * Input a number between 1 and 20 and click button check to try match the correct number
 * You start with 20 points as score and at each error, you'll decrease 1 point;
 * You also has a 'Highscore' that starts with 0, obviously
 * A string says if you number is too high or too low
 * When you match the correct number, the screen turns to a green background, the correct number appears on the main box and your current score become your current highscore
 * The screen also has a button to reset the game, but it doesn't reset your highscore
 */

//document.querySelector('.message').textContent; //here we're selecting the same class '.message' as used in CSS; If it was an ID, instead '.', we would use '#'; Then with '.textContent' we are seleting the text inside this class 'Start guessing...' -> the selection is occuring from left to right, with the same 'nest' logic as used in CSS/HTML

//console.log(document.querySelector('.message')); // In the console, the HTML tag with this class is printed=> <p class="message">Start guessing...</p>
//console.log(document.querySelector('.message').textContent); // In the console, now the => <p class="message">Start guessing...</p>

//////////////////////////////
// 71 What's the DOM and DOM Manipulation
/**
 * DOM - Document Object Model - structured representation of HTML documents. Allows JS to access HTMl elements and styles to manipulate them; DOM is a connecting point between HTML and JS;
 * so DOM Manipulation is JS interacting with the web page;
 * Its created automatically by the browser as soon as the HTML page loads and its stored in a tree structure - where each HTML elements is an object following the same hierarchy (regarding the code) as parent, child, siblings elements and so on: html > head, body > title, section .. > p, img > a ..
 * DOM always start with the document object, and its serves as an entry point into the DOM => document.querySelector()
 * Whatever is in the HTML document also has to be in the DOM
 * DOM methods and properties as 'document.querySelector' is NOT part of Javascript - JS is just a dialect of the ECMAScript specification; Actually DOM Methods and properties are WEB APIs (API stands for Application Promgramming Interface) that are like libraries that browsers implement and that we can access form our JS code. These libraries are also written in JS and is available for us to use and interact.
 */

//////////////////////////////
// 72 Selecting and Manipulating Elements
/* 
//again, here we're selecting just the text inside the tag with the '.message' class
console.log(document.querySelector('.message').textContent);
//here we're defining a new text (string), in this case (could be a boolean value), for the same tag with the '.message' class - but in the console, we'll still seeing the previously string 'Start guessing...', because is what in fact in the HTML
document.querySelector('.message').textContent = '🎉 Correct Number!';
//now we're going to see printed the new string, since this line of code is after the line of code that define the new string:
//console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
//since '.guess' is in a input tag, we want to print its value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

//////////////////////////////
// 73 Handling Click Events
//We'll use an event listener to react to some action in the page
//Since addEventListener is a method, we need the braces (), then we pass to it 2 arguments: the type of the event ('click') and a event handler (a function value), that is what will happen when the event occurs -> since a function is also a value, we can pass it to another function as an argument, just like a string, a number, another value, etc
//when we input a number and click the button, it'll be print the number in the console; If the filed is empty, it'll print an empty value. The function inside the addeventListener will be executed just when the event happens
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //Remembering: when we retrieve a value from a input on UI, it'll be initially a string. Depending on the objective of the code, we'll need to transform it with Number().
  console.log(guess, typeof guess);
  //we want know when if the value is valid, in other words, if its not an empty submit. Using '!guess', we meaning 'if there is no value..' and it will return a boolean value (or there is a value or there's any value) -> Obs.: '0' is a false value, meaning a 'no value'
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
