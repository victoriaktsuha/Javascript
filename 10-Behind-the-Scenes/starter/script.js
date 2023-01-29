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
