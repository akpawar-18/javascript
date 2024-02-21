// Array

let array = [1,2,3,4,5];
console.log(array);

let array2 = new Array(20,30,40);
//console.log(array2);

// Array Methods

array2.push(50);// insert or append new element at the end
//console.log(array2);

array.pop(); //removes last element
//console.log(array);
array.shift(); // removes first element of the array
console.log(array);
array.unshift(10); // inserts new element at the start of an array & returns lenght of new array
console.log(array);

console.log(array.includes(5));
console.log(array.indexOf(5));
//console.log(array.findIndex(2));

const new_array = array.join(); // join() converts array into string
console.log(new_array);
console.log(typeof new_array);// => string

//slice or splice

console.log(array.slice(1,3));// can't return value of index 3
console.log(array.splice(1,3));// it returns value of index 3 but it changes the origional array also it removes 
                               // that values from origional array which is return after splice(1,3).=> Interview Q                            
console.log(array);

const heros = ["spiderman","shaktiman","Hanuman",10];
const film_heros = ["salman","vijay","mithoon","ravi"];
//console.log(heros.concat(film_heros));

//heros.push(film_heros);
//console.log(heros);

// spread operator

const another_array = [...heros, ...film_heros];
console.log(another_array);

const mix_array = [1,2,3,[3,4,5,[4,8,9],7]];
console.log(mix_array.flat(Infinity));

console.log(Array.isArray("pawar"));
console.log(Array.from("12345"));
console.log(Array.from({name: "akshada"})); // Interesting for Interview Q

let a1 = 100;
let a2 = 200;
let a3 = 300;
console.log(Array.of(a1, a2, a3));

// Q. convert ignore into ingore...
let str = "ignore";
console.log(str);

let strArray = Array.from(str);
console.log(strArray);

[strArray[1], strArray[2]] = [strArray[2], strArray[1]]
console.log(strArray);

console.log(strArray.join(""));
