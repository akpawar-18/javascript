// object in js => object is a physical or logical quantity in java, it is a instance of class
// There are two ways to create object in js 1. object by constructor 2. using literal (direct creating)
// singleton => only one object i.e creating like contructor => object.create
// constructor ne bnla tr to ahe SINGLETON an jr literal ne bnla tr singleton nhi...

// object literals

const sym = Symbol("jio");

const stud = 
    {
        id : 101,
        name : "shivani",
        class : "Ty",
        email: "abc@gmail.com",
        add: "shrirampur",
        [sym]: "vodaphone",
        marks: ["100","56","90"]
    }
console.log(stud.id);
console.log(stud["name"]);
console.log(stud[sym]);
console.log(stud["marks"]);
stud.email = "pqr@gmail.com";

Object.freeze(stud);
stud.email = "efg@gamil.com";

console.log(stud);

stud.greeting = function(){

    console.log("Hello world");
}

stud.greeting2 = function(){

    console.log(`Hello Js Student ${this.name}`);
}

console.log(stud.greeting());
console.log(stud.greeting2());