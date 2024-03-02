// while loop

let val = 10;
while (val <= 15) {
   // console.log(`val is: ${val}`);
    val = val + 2;
}

let myarray = ["hero", "superhero", "shaktiman"];
let arr = 0;
while (arr < myarray.length) {
    // console.log(`value is: ${myarray[arr]}`);
    arr = arr + 1;
}

// do while loop

let score = 11
do {
    //console.log(`score is ${score}`);
    score++;
} while (score <= 10);

// for of loop

// [{}, {}, {}]
// ["", "", ""]

let Array = [1, 2, 3, 4, 5];
for (const val of Array) {
    //console.log(`val is ${val}`);
}

let str = "Hello World!";
for (const char of str) {
    if (char == " ") {
        //break;
        //continue;
    }
   // console.log(`each charecters of string is ${char} `);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('FN', "France")
map.set('USA', "America")
//console.log(map)
for (const [keys, values] of map) {
   // console.log(`key = ${keys} and value = ${values}`);
}

// object

const stud = {
    id: "111",
    name: "sai",
    class: "ty"
}
//console.log(stud);
//for (const [key] of stud) 
{
    //console.log(key); //stud(object) is not iterable 
}

// for in loop
    // for of loop can't usable for objects so, here we use for in loop


const course = {
    js: "javascript",
    py: "python",
    rb: "ruby"
}
//console.log(course);
for (const key in course) {
   // console.log(`${key} is a shortcut for ${course[key]}`);
    }

// for in loop for Array

const programming = ["js","py","rb"]
for (const key in programming) {
//console.log(`${key} of ${programming[key]}`);
}

// for in loop for map

const map1 = new Map()
map1.set('id', "101")
map1.set('name', "sai")
console.log(map1);
for (const [key] in map1) {
   console.log(key); // map is not Iterable
}

// for each

const code = ["js", "rb", "py", "php"]

code.forEach( function (val) {
    //console.log(val);
})

code.forEach( (val) => {
   // console.log(val);
})

function printMe(item) {
   // console.log(item);
}
//code.forEach( printMe)

code.forEach( (item, index, array) => {
    //console.log(item, index, array);
})

// [{}, {}, {}]

const Languages = [{
    languagename : "java",
    Languagefile : ".java"
},
{
    languagename: "php",
    Languagefile: "file"
},
{
    languagename : "javascript",
    Languagefile : "js"
},
{
    languagename : "python",
    Languagefile : "py"
}]

Languages.forEach( (item) => {
//console.log(item.languagename);
})

// foreach cannot return anything...
// eg.

//const coding = ["js", "java", "py"]

//const values = coding.forEach( (item) => {
    //console.log(item);
  //  return item;
//})
//console.log(values);





