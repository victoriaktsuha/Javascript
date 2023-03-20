'use strict';

/////////////////
// 89 An High-Level Overview of JavaScript

/**JS is a High-level, object-oriented, multi-paradigm programming language - summary
 * JS is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model
 * => High-level: the dev doesn't have to worry about resources as it is with low-level languages like C/C#, that the dev has to manage resources manually (resources -> RAM memory, etc)
 * Garbage-collected: its a kind of algorithm inside the JS engine that automactically removes old and unused objects, cleaning the memory
 * => Interpreted/just-in-time compiled: the computer just need understand the machine code (0s and 1s code), and JS is kind of an abstraction from the machine code, needing to be translated = compiling/interpreted; And this occurs inside the JS engine
 * => Multi-paradigm: In programming, paradigm in an approach and mindset of structuring code, which will direct your coding style and technique. The three popular paradigms is: (1) Procedural programming: organizing the code in a very linear way and with some functions in between, (2) Object-oriented programming (OOP), (3) Functional programming (FP); We can also classify paradigms in Imperative vs Declarative. Some languages can be only on of the paradigms, but JS do it all in once
 * => Prototype-base object-oriented (Oversimplification to OOP): Almost everything in JS is an object, except for primitive values as numbers, strings, etc. For example, we can use .push in array because of the prototypal inheritance. We create arrays from an array blueprint, which is like a template and its call prototype. This prototype contain all the array methods and the array that we create in our code inherits methods from blueprint so we can use them in arrays.
 * => First-class funtions: JS is a language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions as in -> overlay.addEventListener("click", closeModal);
 * => Dynamic: JS is a dynamically-typed language, meaning that, for example, we don't assign data types to variables. Types becomes known at runtime. Also variable type can easily be change as we reassign in variables. The same is not true for the most of programming languages, where we need to assign manually the variable types;
 * => Single-threaded: & Non-blocking event loop: Let's strat with concurrency model: its how the JS engine handles multipe tasks happening at the same time. And why do we need that ? Because the JS runs in one single thread, so it can only do one thing at a time. In computing, a thread is like a set of instructions that runs in CPU. so basically, thread is where our code is actually executed in a machines processor. So what about a long-running task, like fetching data from a remote serve ? Sounds like it would block the single thread. However, we want a non-blocking behavior. And how do we achieve that ? Ny using an event loop: takes long running tasks, executes them in the "backgorund", and puts them back in the main thread once they're finished

*/

/////////////////
// 90 The JavaScript Engine and Runtime

/**JS Engine is a program that exuecutes JS codes
 * Every browser has its ow JS engine, but the most popular is the V8 from Google (node.js do the same as V8 - serve-side service)
 * Any JS engine always contains a 'call stack' and a 'heap'
 * => Call Stack: is where our code is actually executed using something call 'execution context'
 * => Heap: is a unstructured memory pool that stores all the objects that our application needs
 * So how the code is compiled to machine code so it can be executed afterwards ?
 * First, a computer science sidenote: difference between compilation and interpretation
 * => Compilation: Entire source code is converted into machine code at once, and written to a binary file that can be executed by a computer
 * => Interpretation: Interpreter runs through the source code and executes it line by line; The code is read and executed at the same time
 * JS use to be a interpreted language, but with modern JS and web app fully devepeloped, low performance is not longer acceptable
 * Now JS use => JIT (Just-in-time) compilation: Entire code is converted into machine code at once, then executed immediately, a mix from compilation and interpretation, removing the binary/portable file before the execution
 * How JS Engine works: 1- parse (read) the code, tranforming it into a AST (Abstract syntax tree), diving and identifying the language, terms, keywords, etc. -> 2- compilation into machine code -> 3- Execution immediately (happening in call stack); But it doesn't ends here: the engine starts execution a non-optimized code just to start as fast as possible and in the background, this code is being optimized and recompiled during the program execution, turning engines as V8 so fast
 * All this process happens inside some special threads inside the engine that we cannot access from our code
 * JS runtime: we can say that its like a container including all the things that we need to use JS, in this case, in the browser
 * To make it happen, we need beside the engine, the web API's (functionalities that are 'lean' to our JS code, because they're not from JS) through the global window object; And the callback queue, a data structure that contains all the callback queue funtions that are ready to be executed, like event listener (click). What happens after the event happen is that the callback funtion is put on this callback queue and as soon the call stack is empty, this function is moved to the call stack to be executed, it happens because the 'event loop' (essential for non-blocking concurrency model)
 * The difference between the JS runtime in the browser and in the node.js, is that in node.js we don't have the web API's because its the browser that provide it; Instead, we have the multiples C++ bindings and thread pool
 */

///////////////////////////
// 91 Execution Contexts and The Call Stack

/**How JS is executed ?
 * We already know that it happens in the call stack
 * Lets suppose that our code is finished compiling, beign ready to be executed -> global executoin context is created for top-level code; Top-level code is the code that is NOT inside a function, so in the begining, only the code that is outside of functions will be executed. And its make sense because funtions should be only executed when they are called. In the example below:
 * const name = `Name`; const first = () => { let a = 1; const b = second(); a += b; return a;}; function second(){var c = 2; return c;};
 * The const name will be executed in the global execution context, because is not a and is not inside a function -> Then we have 2 functions: first, a expression and after, a declaration and function body will only be executed when the function are called
 * But what is an executing context ? Its an abstract concept, but it can defined as an environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed like local such as local variables or arguments pass to a function.So JS is always executed inside a execution context. Let`s imagine it like ordering a pizza at a take-away. So iy usually that pizza comes in a box, and it may also come with other stuff that may be necessary for you to eat that pizza, like cutlery or a receipt so you can pay the pizza before eating it. In this analogy, the pizza is the JS code to be executed and the box is the execution context, that`s because `eating` the pizza happens `inside` the box, which is then the environment to eat the pizza. The box also contain the cutlery and the receipt that is also necessary to `eating` the pizza happen, or, in other words, to execute the code.
 * Any JS project has ONLY one global execution context (EC): Default context, created for code that is not inside any function (top-level);
 * After all that, the code is finally executed
 * And the execution is just the computer CPU processing the received machine code;
 * After the top-level code is conclude, the function starts to be executed too. And for each function called, a new execution context is created (one EC per function) containg all the info needed to run that function. And the same is applied to methods, because they are simply function attached to objects
 * All this EC together make the call stack
 * After all the function call are finished, the engine keep waiting for the callback queue to executed the callback function
 * And what its inside a EC ?
 * => Variable environment: let, const and var declarations, functions, and arguments objects (not in an arrow function) are stored
 * => Scope chain: consist in references to variables located outside of the function; Its store in each execution context
 * => this keyword (not in an arrow function)
 * All of this is generated during a phase called `creation`, right before execution
 * Important: EC belonging to arrow functions DO NOT get their own arguments keyword, nor get the this keyword
 * To simulate the creation phase, lets take the sample below:
 * const name = `Name`; const first = () => { let a = 1; const b = second(); a += b; return a;}; function second(x, y){var c = 2; return c;}; const x = first();
 * We're going to have an execution global context for each function:
 * (Global context) Global: name = Name / first = <function> / second = <function>/ x = <unknown> -> x is unknown because the 'first()' function need to be executed first, and in the first context, we have just the declarations, not functions
 * ('first()' function context): a = 1 / b = <unknown> -> both declarations belonging to the 'first()' function and once again the <unknown> in reason to the function that needs to be executed first (in the next context)
 * ('second()' function context): c = 2 / arguments = [7 ,9] -> the arguments is refer to the 'const b = second(7 ,9)' declared in the previously function
 * Then, this execution contexts are stacked on top of each other in the call stack, to keep track of where we are in the execution - what is on top, is the one that is currently running; When its finished running, it will be removed from call stack and execution will go back to the previous execution context - the first context will be place in the bottom on the call stack, and so on - thats because JS haas only one execution thread, so it ca only execute one thing at time, pausing a context when other is create and going back to the paused when the currently is finished, working as a map
 * Global context in the call stack is just 'finished' when we close the browser tab/window (its was the last in the stack)
 */

///////////////////////////
// 92 Scope and The Scope Chain

/*
* - We've learned that each execution context has a variable environment, a scope chain and a 'this' keyword
* What's a scope and a scope chain, whye they're important and how they work
* Scope concept:
* - Scoping: How our program's variables are organized and accessed. "Where do variables live ?" or "Where can we access a certain variable, and where not ?";
* - Lexical scoping: Scoping is controlled by placement of functions and blocks in the code; Variable scoping is influenced by where we write our functions and block of codes -> a 'function-child' can access a varible in the 'function-parent' for example;
* - Scope: Space or envinronment in which a certain variable is declared (variable environment in case of functions). There is global scope, fucntion scope and block scope;
* - Whats the difference btw the scope and the variable environment ? In the case of a function, it's the same.
* - Scope of a variable: Region of our code where a certain variable can be accessed
* The 3 types of a scope:
* => Global scope: its for variables outside of any function or block; Variables declared in global scope are accessible everywhere
* => Function Scope: Each and every fucntion creates a scope; Variables are acessible only inside function, NOT outside; Also called local scope;
* => Block Scope (ES6): Exemple of blocks is if block, loop block, etc - everything that in between braces {}; They also create a scope and variables are only acessible inside the block; However, this only applies to let and const variables! - that's why we say that let and const are block scoped, and to be able to access variables outside the block, declare it with 'var' (var has a function scope). Before the ES6, variables declared as var only cared about functions, ignoring blocks; So in the ES6, all fucntions are also block scoped (only in strict mode); So functions declared inside a block, is only accessible inside that block;
*  Scope chain:
* - The scope access to other variables and funtions inside other scopes works as the same as heritage: the second scope can access variables inside the first scope, as the first scope can access variable in the global scope - second scope can also access variables in the global scope because it's the 'parent' of it all
* - Variable Lookup is the process of searching a variable for all the scope chain until find it; These variables are not copied, they're just used; And thi lookup DO NOT work in reverse - it just search from the inside scope to external scopes: only parent scope can be used, but no child scope
*  - 'siblings' scopes CANNOT access each others variables, because they're not written inside in one another
* Scope chain vs Call Stack:
* - Call Stack is the order the functions are called
* - Scope chain is the order in which functions are written in the code
* The Scope chain has NOTHING to do with the order of the execution context in the call stack; The order that the functions are called is not relevant for the scope chain
*/


///////////////////////////
// 93 Scoping in Practice

//This calcAge is defined in the global scope
/* 
function calcAge(birthYear){
    const age = 2030 - birthYear;
    //console.log(firstName); //this var is not actually in the scope of this function, but since it is a global variable, it can be access in this scope too

    function printAge(){
        let output = `${firstName}, you're ${age} yo, born in ${birthYear}`;
        console.log(output);
        //This function scope can access age and birthYear values because they belong to this function parent, this variables cannot be access outside its own function or its parent function; It can also access firstName because its in global scope

        //block scope
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;

            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Bob'; //=> in the variable 'str', the JS will change 'Vic'(assigned in the global scope) to 'Bob'(assigned inside this own scope) because the variables inside the function scope has priority then the global variables; Outside this block scope, the firstName variable still holds the value 'Vic' assigned before 

            // Reassigning outer scope's variables
            output = 'new output'; //here we're assign a new value to a variable that is defined inside the parent scope, and it works because the value is just reassign, its not creating a new variable; If it was a new 'const' or 'let' variable called 'output', then the console would show the first value assigned before "Vic, you're 36 yo, born in 1994" - obs.: if you try create a new variable 'output' with var, the error message will say that this variable is already defined, since 'var' can reach a global scope and scale to parents scopes, resulting in ths conflict
            const str = `Oh, and you're also a millenial, ${firstName}`;

            console.log(str);
            //=> the scope of the add function is just inside the block scope where its created, thats because the `use strict` mode in top of the file
            function add (a, b){
                return a + b;
            }

            
        }
        // console.log(str); 
        //=> if we try to log this console.log(str); outside the block scope, it wont be found and we `ll get an error - thats because const and let can be access just inside the block scope, unless it is a global variable or a var inside the block scope

        console.log(millenial); 
        //=> millenal can be access because even declared inside the block scope, it was declared as 'var', in the printAge function scope, unlike the const and let cases that is limited 

        // add(2, 3); 
        //=> we'll get an error because the scope of this fucntion is just inside the block scope where its created, because the strict mode on top of this file
        // console.log(add(2,3)); //=>after disable strict mode, we log the function to console and we`ll be able to see its result

        console.log(output); //here we're printing the new value of a variable that was reassigned inside a child scope
    }
    printAge();
    return age;
}
//Also this function creates its own scope and that scope will be equivalent to the variable environment of its execution context

//Global variable (global environment)
const firstName = 'Vic';
calcAge(1994);
 */
///////////////////////////
// 94 Variable Environment: Hoisting and The TDZ

/**
 * Hoisting in JS:
 * => We've learned that in an execution context always contains 3 parts: Variable Environment, Scope chain and this keyword
 * Hoisting (içamento): Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope". But what actually occurs behind the scenes is that, before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object
 * 
 * Lets look how hoisting works for : 
 * - Function declarations -> HOISTED: yes (it means we can use function declarations before they are declared in the code, because they`re stored in the variable environment object even before the code starts executing); INITIAL VALUE: actual function; SCOPE: block (in strict mode, otherwise, function scope);
 * - var variables: HOISTED: yes; INITIAL VALUE: undefined (it will be the result when we try to reach some var variable before it was declared - its a JS common bug and thats why we avoid using var); SCOPE: function;
 * - let and const variables: HOISTED: no (Technically, they are, but since it doesn't have a value, we cannot work with, we'll get an error); INITIAL VALUE: <uninitialized>, TDZ (Temporal Dead Zone - where we cannot access variables, between the beginning of the scope and the local where variables are declared); SCOPE: block (means it exist just in the block scope where they're created);
 * - function expressions and arrows: It depends if using var or let/const
 * 
 * Temporal Dead Zone (TDZ), Let and Const:
 *  const myName = 'Vic';
 *  if (myName == 'Vic){
 *      console.log(`Vic is a ${job}`);
 *      const age = 2037 - 1994;
 *      console.log(age);
 *      const job = 'teacher';
 *      console.log(x);
 *  }
 * In the code above, the TDZ for 'job' variable will be the 3 code lines before it, so 'job' will be accessible just after it; So when code execution starts, we'll get an error "Cannot access 'job' before initialization in the line 'console.log(`Vic is a ${job}`);', because it's trying to access 'job' before it is declared; Now in the last line 'console.log(x);', we're trying to access a variable that was not even created, so we get the error "x in not defined"; Those different errors shows us that 'job' variable is really in the TDZ until reach the line its defined, since it is created in some place in the code, but its not declared yet; Unlike the 'x' var, that code is trying to access but it was never created in any place of the code
 * Why JS have a TDZ ? Intriduced in ES6, makes it easier toa void and catch errors: accessing variables before declaration is bad practice and should be avoided; And makes const variables actually work, assigning its value just when the execution reaches the declaration, making impossible to use it before, how it was supposed to work.
 * Why hoisting ? Using functions before actual declarations; Hoisting var variables is just a byproduct of hoisting functions, so we use let and const to work around this, avoiding undefined variables.
 */

///////////////////////////
// 95 Hoisting and TDZ in practice

//Lets try to access these variables before they're declared 

//console.log(me); 
//in console: undefined - its known that it exist, but can access its value
//console.log(job); 
//in console: (error: Cannot access 'job' before initialization) - its still at the TDZ till the execution reaches its declaration
//console.log(birthYear); 
//in console: (error: Cannot access 'year' before initialization) - its still at the TDZ till the execution reaches its declaration
/* 
var me = 'Vic';
let job = 'teacher';
const birthYear = 1994;


//Lets try to access these functions (expression and declarations) before they're declared

console.log(addDecl(2,3)); 
//in console: result 5 - function scope -> global scope
//console.log(addExpr(2,3)); 
//in console: Uncaught ReferenceError: Cannot access 'addExpr' before initialization - in TDZ till its reach - block scope (strict mode) -> variable environment object scope
//console.log(addArrow(2,3)); 
//in console: Uncaught ReferenceError: Cannot access 'addArrow' before initialization - in TDZ till its reach - block scope (strict mode) -> variable environment object scope



function addDecl(a, b){
    return a + b;
};


const addExpr = function(a, b){
    return a + b;
};


//const addArrow = (a,b) => a + b;
var addArrow = (a,b) => a + b;
//in console: Uncaught TypeError: addExpr is not a function - as we know, var variable are hoisted with undefined value and in the consoloe, we trying to call something like this => undefined(2,3); So if we try to call console.log(addExpr) without the () and arguments, it will return 'undefined' value; Remembering it all is just possible using 'var'

//Example (of what NOT to do)
//console.log(numProducts); //in console: undefined
if(!numProducts) deleteShoppingCart();
//"if numProducts = 0"

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
} */
//in console: 'All products deleted!' - thats because of how hoisting work with var variables, before reach the specific line with the var value, its undefined and it fulfill the if condition above

/**Best Practices
 * - Declare your variables in the top of each scope
 * - Always declare all your functions first and use them after the declaration
 * - "window"(keyword) is the JS global object in the browser
 */
/* 
var x =1; //in console: -> 'window' -> x:1; The other do not appear
let y = 2;
const z = 3;

//Test to compare if the 'x' is actually a property of window object (JS global object result)
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

 */
//////////////////
// 96 The This Keyword

/** This keyword/variable:
 * Special variable that is created for every execution context (every function).
 * Takes the value of (points to) the "owner" of the function in which thee this keyword is used
 * 'this' keyword is not static. It depends on how the function is called, and its value is only assigned when the function is actually called. Some ways to call a function:
 *  - Method; 'this' = <Object that is calling the method>
 *      - Method Example:
 *          const name = {
 *              name: 'Name';
 *              year: 1994;
 *              calcAge: function(){
 *                  return 2037 - this.year;
 *              }
 *          };
 *          jonas.calcAge();
 *      - Above, the method is the calcAge, because is a function attached to 'name' object;
 *      - And the 'this' keyword value is 'name'; because thats the object that is calling the method there. Then 'this.year' = 'jonas.year'
 *  - Simple function call: 'this' = undefined (just in strict mode. Otherwise, it will point to the global object, and in the case of the browser, the window object); Simply calling tts not attached to any object
 *  - Arrow functions: 'this' = <this of surrounding function (lexical this)>; It doesn't have its own 'this' keyword; Intead, 'this' will point to the surrounding function, so, the parent function - that's call lexical 'this' keyword, because its get from the external lexical scope of the arrow function
 *  - Event listener: 'this' = <DOM element that the handler is attached to>
 *  - new, call, apply, bind - other ways to call a function
 *  !! 'this' does NOT point to the function itself, and also NOT the its variable environment!
 */

//////////////////
// 97 The This Keyword in Practice

/* 

console.log(this);
// 'this' keyword in the global scope is simply the window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //in console: undefined (in strict mode; Otherwise, point to global scope/window object)
};
calcAge(1994);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //in console: (should be) window object - thats because arrow function does not get its own 'this' keyword, using 'this' keyword of its parent scope
};
calcAge(1980);

const obj = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year); //46 - it avoids to pass orguments when calling the function
  },
};
obj.calcAge();
//it will show the 'obj' object: {year: 1991, calcAge: ƒ} - when we have a method, the 'this' keyword will be the object ('obj') that is calling the method; And 'obj' is basically the owner of the method - IMPORTANT: the 'this' keyword pointed to 'obj' object because its the object that was calling the method (obj.calcAge();) that holds the 'this' keyword, and not because 'obj' is the parent scope

const matilda = {
  year: 2017,
};

//method borrowing - the copy of a method from a object to another
matilda.calcAge = obj.calcAge; //to copy, we must remove (), otherwise, we'd be calling the method, not copying it
matilda.calcAge(); //20
//here is the prove that the 'this' keyword contained in calcAge function (console.log(2037 - this.year);) will point to the object that call it, in this case, matilda - because the result '20' is just possible if '2017', property of matilda's object would a value reassigned to 'this' in (console.log(2037 - this.year);), and was subtracted from '2037' contained in the calcAge function

const f = obj.calcAge; // its just possible to copy a function/method to a new variable because a function is just a value in the end
f(); //in console: undefined - "Uncaught TypeError: Cannot read properties of undefined (reading 'year')" - thats because this function is just a regular function call; Its not attached at any object and that is no owner of this function

 */

//////////////////
// 98 Regular Functions vs. Arrow Functions

//Some pitfalls related to regular and arrow functions
/* 
//var firstName = 'Matilda';
//this value will be assigned to 'this.firstName' because 'obj' object is on a global scope, as it is with greet function - thats a reason to not use var

const obj = {
  firstName: 'Blob',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Here start a problem: the rule says that 'this' keyword inside a regular function must be 'undefined' because a regular function gets its own 'this' keyword

    // *Solution 1 "self"
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this);
    //   //console.log(this.year >= 1981 && this.year <= 1996); // teste a true or false condition
    // };

    // *Solution 2 "arrow function" - arrow functions will use the keyword from its parent scope, i.e, from calcAge method, which 'this' keyword is 'year' property from 'obj' - the difference between isMillenial arrow function and greet, is that isMillenial is inside a method, inheriting its 'this.year' keyword value as parent scope, and greet function is inside an object, inheriting global scope
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996); // teste a true or false condition
    };

    isMillenial(); // return a true or false output
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
  //in console: 'Hey undefined' - thats because an arrow function doesnt not get its own 'this' keyword, using the 'this' keyword from the global scope (because is not a code block, its just an object with global scope as parent)-> window object, and in the global scope we do not have any variable/property 'firstName'
  //never use a arrow function as a method, even w/o a 'this' keyword
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
  //the solution for the previous problem is using a regular function - now the 'greet' method has its own 'this' keyword and will retrieve the 'firstName' property in the 'obj' object
};

obj.greet();
//'obj' doesn't have a block scope, its not like its a code block, its just an object surrounded by global scope, so as greet function; And when we try to access a property that doesn't exist in a certain object, we get 'undefined' value, not a error
//var variables actually create properties on the global object - that's not a good practice
obj.calcAge();
//in console: "Uncaught TypeError: Cannot read properties of undefined (reading 'year')" - isMillenial is a regular function even is inside a method, and the rule says that inside a regular function call, the 'this' keyword must be 'undefined', because a regular function get its own 'this' keyword - is like the isMillenial function was outside the method; A solution for this (solution 1) would be adding a variable usually named 'self' with 'this as value, just before the regular function isMillenial, because there, 'self' still has access to 'obj' object properties or - (solution 2) use an arrow function 🤡 - because it doesn't have its own 'this' keyword and it will use the keyword from its parent scope - the difference between isMillenial arrow function and greet, is that isMillenial is inside a method, inheriting its 'this.year' keyword value, that it inherit from 'obj', and greet function is inside an object, inheriting global scope

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5); //in console: Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
//we could also add more arguments even without a parameters for them: addExpr(2, 5, 8, 12); -> Arguments(4) [2, 5, 8, 12, callee: (...), Symbol(Symbol.iterator): ƒ]

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); // "Uncaught ReferenceError: arguments is not defined" - its hsows us that arguments keyword exist but only in regular functions, not in arrow function
 */

//////////////////
// 99 Primitives vs. Objects (Primitives vs. Reference Types)

/* 
//Review
// - Primitives: Number, String, Boolean, Undefined, Null, Symbol, BigInt (anything else is object)
// - Objects: Object literal, Arrays, Functions, many more...
// => When we talk about memory and memory management, we call primitves -> primitives types and objects -> reference type, because of the different way they're stored in memory
// - JS engine: Contains 2 elements: call stack (where functions are store and declared - in its execution context - and where these execution context is executed) and heap (where objects - reference types - are stored in memory)

//Primitive values example:
let age = 30;
let oldAge = age; //at this point, oldAge still 30 - after that, oldAge doesn't change
age = 31;
console.log(age); // 31
console.log(oldAge); // 30
// JS Engine path for primitive values: 1. In the call stack (where primitives belongs), will be created an unique identifier call 'age' > 2. Then a piece of the memory will be alocated in a certain address: 001, for example > 3. Then the value will be stored in the specified address - The identifier points to the address 001, for exemple, and not to the value itself. In fact, age = address 001, that holds the value '30'; Next 'oldAge' name a new identifier, but since it copies 'age', this identifier will point to the same address 001 that holds the value '30'; Then 'age' receives a new value, and the '30' value before is not reassigned in the address 001, because the value in a certain memory is imutable; So since 'age' cannot points to the same address becaus it receives a new value, a new piece of memory is created, with a new address 002 and the new value '31', but the same identifier 'age' now points to this new address instead the old one;

//Reference values example:
const me = {
  name: 'vic',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend); //Friend: {name: 'vic', age: 27}
console.log('Me:', me); //Friend: {name: 'vic', age: 27}

// JS Engine path for reference values: 1. In the heap (where references/objects belongs), will be created an address 00A that holds a value. In this case, the identifier 'me' will stay in the call stack. > 2. There, a new piece of memory with a new address 003 will be created, and this new address will point to the to the object that is in the heap, using the address 00A as its value - that's why we call objects as reference types; It works this way because objects might be too large to be stored in the stack, and heap is more like almost a  unlimited memory pool > 3. Then a identifier 'friend' is created in the call stack, and since it copies the 'me' value, this identifier will point to the same address 00A as 'me' > 4. Next the 'age' property in the address 00A is updated to 27, since it was reassigned in 'friend' object - Here, even manipulating a const variable, its possible because we're not changing the value at the address 003 in the call stack, its value still as address 00A, that holds the objects properties; We're changin the value in the heap, which is not a problem; So const variables is imutable just with primitve values- > 5. So 'me' object also receives '27' value as 'age', even we didn't change it, because 'friend' and 'me' points to the same object at the heap memory, refleting any change in this heap object to any object that it point to its address; When we think we're copying an object, we're just creating a new variable that points to the same object
 */

/* Important for later:
 * - Prototypal inheritance: Object oriented programming (OOP) with JS;
 * - Event Loop: Asynchronous JS: Promises, Async/Await and AJAX
 * - How DOM really works: Advanced DOM and Events
 */

//////////////////
// 100 Primitives vs. Objects in Practice

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: '27'
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
//marriedJessica = {}; //in console: script.js:446 Uncaught TypeError: Assignment to constant variable - this line will not work because we can't assign a new object to a const variable, this new object will be stored in a new position in the heap, and, therefore, the reference to this position will have to change in the already created variable, and since its a const, we cannot change its value in the stack - assign a new object is completelly different to change a property

//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: '27',
    family: ['Alice', 'Bob'] //Lets use an array to illustrate the 'shallow copy' problem, because an array is basically an on object in the end
};
//'Object.assign' is used to merged to object into one: a new empty object {} and the previous one; And this new object is beign stored in 'jessicaCopy' - this works only on the first level: if we have a object inside the object, the inner object will still the same, pointing to the same place in the heap (old address), being just a 'shallow copy'

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
//Now a new object, copying the properties of an old one was really created in the heap, and pointing to this new object/address

//Here we're adding new 'family members' to the end of  the array 'family', manipulating an object that is within the object, refleting the change in both objects, the original and the copy merged - this can be bypassed with external libraries, for exemple, Lo-Dash, that allows us to do a 'deep cloning'
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
//It will not work as expected (for now), copying the new members in both object when they should be added just in th new object - solution will be explored more forward