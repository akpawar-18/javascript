/*let score = true;
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);*/


// "33" => 33
//"33abc" =>NaN (Not a Number)
// true => 1; false => 0


let isLoggedIn = "akshada"
let booleanIsLoggedIn = Boolean(isLoggedIn);
        console.log(booleanIsLoggedIn);

// 1 => true; 0 => false(empty asl tr false)
//"" => false
//"akshada" => true (khitri asl ki true yet ksli hi value asli tri)

let someNumber = 33;
let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);



// ***************************** Operations **********************************************

let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/2);
//console.log(2%2);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
//console.log(str3);

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2);
//console.log(1 + 2 + "2");

//console.log(3 + 4 * 5 % 3); //not write this type of code

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
//console.log(gameCounter);


//********************************************* Comparision of data types **************************************

/*console.log(2>1);
console.log(2>=1);
console.log(4<=4);
console.log(4===4);
console.log(2==1);
console.log(2!=1);*/

//console.log("2" > 1);
console.log(null > 1);
console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
console.log(null < 0);

//console.log(undefined == 0);
//console.log(undifined > 0);
//console.log(undefined < 0);  (this type of comparisions are compusing so avoid it in your code)

// === this is a strict check it checks data types also

console.log("2" === 2);