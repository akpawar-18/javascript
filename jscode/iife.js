// Immediately Invoked Function Expression (IIFE) 

// IIFE is used in js because global scope ke polution ko hatane ke liye IIFE ko use karte hai.
// global scope polution(variables, functions) OR immediate execution ke liye bhi IIFE ka use karte hai 
// Syntax = (function def)()

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

((name) => {
    // simple IIFE
console.log(`DB Connected Two ${name}`);
})("akshyaa")