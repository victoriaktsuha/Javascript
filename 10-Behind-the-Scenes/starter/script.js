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
