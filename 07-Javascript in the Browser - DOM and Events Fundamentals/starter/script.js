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

/* document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //Remembering: when we retrieve a value from a input on UI, it'll be initially a string. Depending on the objective of the code, we'll need to transform it with Number().
  console.log(guess, typeof guess);
  //we want know when if the value is valid, in other words, if its not an empty submit. Using '!guess', we meaning 'if there is no value..' and it will return a boolean value (or there is a value or there's any value) -> Obs.: '0' is a false value, meaning a 'no value'
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
}); */

//////////////////////////////
// 74 Implementing the Game Logic

/**
 * Implement what happens when the guess is correct;
 * Implement what happens when the guess is too low or too high;
 */

/* 
//To the secret number, we store in a const: Math.random() will give a random number btw 0 and 1 every you call it (through a click, console, etc); If we want a number between 1 and 20, we have to multiply Math.random by 20; And Math.trunc will remove all the decimals that Math.random() generate; And the '+1' is to reach the number 20, because since we removed the decimals, the maximum that Math.tand() will generate is 19.99999...
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//here we set the initial score in var because it'll repeat in the 'too high' and 'too low' conditions; Initially it was just in the DOM (HMTL), but its a very good practice to store data in the code
let score = 20;
//To see if this logic is running, we'll display it in the main box as its own text and every time we reload the page, we'll should see a different number:
document.querySelector('.number').textContent = secretNumber;
// The click event doesn't reload the page
document.querySelector('.check').addEventListener('click', function () {
  //Remembering: when we retrieve a value from a input on UI, it'll be initially a string. Depending on the objective of the code, we'll need to transform it with Number().
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //we want know when if the value is valid, in other words, if its not an empty submit. Using '!guess', we meaning 'if there is no value..' and it will return a boolean value (or there is a value or there's any value) -> Obs.: '0' is a false value, meaning a 'no value'
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    //We added another condition to prevent the score going down after reaching 0; When it happens, the user actually lost the game and nothing else must happen
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--; //(score-- => score = score - 1)
      document.querySelector('.score').textContent = score; //here we update the text with the current score; It NEED to be in that order: first the 'calculation' (score--) and then the text. Otherwise, the text will be out of date
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'darkred';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'darkred';
    }
  }
});
 */

//////////////////////////////
// 75 Manipulating CSS Styles

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      //document.querySelector('body').style.backgroundColor = 'darkred';
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      //document.querySelector('body').style.backgroundColor = 'darkred';
    }
  }
});
