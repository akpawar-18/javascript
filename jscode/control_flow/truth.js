// truthy values And falsy values

const userloggedIn = [];
if(userloggedIn){
 console.log("user login succ...");
} else{
    console.log("user cant login");
}

// falsy values

// false, 0, -0, BigInt 0n, null, undefined, NaN 

// truthy values

// true, 1, "0", 'false', " ", [], {}, function(){}

if (userloggedIn.length===0) {
    console.log("Array is empty");
}

const name = {}
if (Object.keys(name).length===0) {
    console.log("object is empty");
}

// interview Q

// false == 0 => true
// false == "" => true
// 0 == '' => true

// Nullish Coalescing Operator (??): null undefined

let val;
val = 5 ?? 10;
val = null ?? 17;
val = undefined ?? 12 ?? 10;


console.log(val);

// Terniary Operator

//condition ? true : false

const coneprice = 35;
coneprice >= 35 ? console.log("price is less") : console.log("price is more");