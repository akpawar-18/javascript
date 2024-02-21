// global & local scope in js



var c = 200; //global variables
let a = 300;
if(true){
let a = 10; // local variables(block scope variables)
const b = 20;
//console.log("INNER:",a); 
}
//console.log(a);
//console.log(b);
//console.log(c);



// nested scope
function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  
 // console.log(addSquares(2, 3)); 13
  //console.log(addSquares(3, 4)); 25
  //console.log(addSquares(4, 5));  41

 
  //closure => inner function can access the variables or parameters of a outer function i.e closure 
  function one() {
    const username = "pawar";

    function two() {
        const website = "youtube";
        console.log(username); // here fun two acces the username of function one
    }
    //console.log(website); => it takes an error bcoz of block scope
    two()
  }
  one()

  
  if (true) {
    const username = "akshada"
    if(username === "akshada")
    {
      const website = " youtube"
      console.log(username + website);

    }
    //console.log(website);
  }
  //console.log(username);

  // ***************************************** Interesting ****************************************************

  // hoisting

console.log(addone(6));
  function addone(num) // declaration
  {
    return num + 1;

  }









































    
  }


 // console.log(addtwo(5)); => not allowed throws an errror ( Cannot access 'addtwo' before initialization)
  const addtwo = function(num) // called as a expression
  {
    return num + 2;
  }
  console.log(addtwo(5));
  
  