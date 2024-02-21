// Javascript Execution Context 

// {} (code file) => Global Execution Context (refers to this keyword)
                  // Function/Functional EC
                  // Eval EC
                  
 // {} => javascript code    
       // it is executed in two phases
       // 1. Memory Creation phase => only memory allocation is done
       // 2. Execution phase => operations happens .i.e +,-,*...

// Example:

let val1 = 10;
let val2 = 5;
function addnum(num1, num2) {
    let total = num1 + num2;
    return total;
    //console.log(total);
}
let result1 = addnum(val1,val2);
let result2 = addnum(10, 2);
console.log(result1);
//console.log(total); => error occurs(Error = total is not defines, because scope of tatal only is on function)
console.log(result2);

// 1. Global Execution phase (this)
// 2. Memory phase (sglya variables la ektra anun thevaych)
      /* val1 => undefined
         val2 => undefined
         addnum => defination
         result1 => undefined
         result2 => undefined

// 3. Execution phase 
    /* val1 <- 10
       val2 <- 5
       addnum -> new variable environment + execution thread -> result -> 15....after this again goes to
                                                                result2-> 12.... after this again goes to
                  memory phase:
                  val1 => undefined
                  val2 => undefined
                  total => undefined
                  execution phase:
                  num1 => 10
                  num2 => 5
                  total => 15 ......when all this complete then this will be deleted

// Call Stack => LIFO(Last in First out)
                  
       