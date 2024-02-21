const score = 10;
const num = new Number(300);
//console.log(num);

//console.log(num.toString().length);
//console.log(typeof num);

//console.log(num.toFixed(2));

const othernum = 124.567;
//console.log(othernum.toPrecision(1));

const hundreds = 10000000;
//console.log(hundreds.toLocaleString('en-IN'));

//************************************************ Maths **************************************************

console.log(Math);
console.log(Math.abs(-4)); // absolute convert -ve values into +ve
console.log(Math.round(4.3));// round up the value
console.log(Math.ceil(4.3));// ceil means choose top value => 5
console.log(Math.floor(4.3));//floor means choose bottom value => 4
console.log(Math.min(2,7,9,1));// min gives minimum value
console.log(Math.max(8,3,5,0));// max gives maximum value
console.log(Math.pow(2,3));// gives power of number

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log((Math.floor(Math.random()*10) + 1));


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);



