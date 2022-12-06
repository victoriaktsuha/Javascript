'use strict';
///////////////////////////////
// 32 Activating Strict Mode 

/* Make it easier to write a secure JS code adding 'use strict' to the begining of the code - any code before this line will defeat the strict mode, except for comments. It's secure because it forbid us to do certain things and it'll show us our mistake clearer in the console, like wrong grammar, using reserved words, etc
*/

///////////////////////////////
// 33 Functions

/*Functions can be used over and over - variables holds values and functions hols more line of code. It receives data and return data back. Between (), the function receive 'parameters', representing the input data of this function, like emty spaces that we'll fill out when we invoke the function.
*/

function logger() {
    console.log('My name is Vic');//this function just print/log a message to the console, it doesn't return/produce a value
}
// calling / running / invoking function
logger();//in this case, we don't need to store the result of the function into any variable because it doesn't produce any result

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    //template literal defined with the parameters/arguments placeholders
    return juice; 
    // when used, 'return' replace the code with the result of the function. If you want to use it, like printing in the console, for example, you need to store the invoked funtion into a variable.
}

//now we define the parameters once declared (apples, oranges), transforming them into 'arguments'
/* fruitProcessor(5, 0); */

//to use the value returned of the function, you need to store it in a variable, like below:
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//here we have the same print in the console, but more directly
/* console.log(fruitProcessor(5, 0)); */

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);