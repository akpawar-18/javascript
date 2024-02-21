// According to memory space & access data types are converted into premitive and non premitive data types


// Premitive Data types :

// 7 tytpes : String, number, null, undifined, boolean, bigInt, symbol

  
    const score = 100;
   // console.log(typeof score); => number

    const scorevalue = 10.3;
   // console.log(typeof scorevalue); => number

    const isLoggedIn = false;
   // console.log(typeof isLoggedIn); => boolean

    const outsideTemp = null;
    // console.log(typeof outsideTemp); => object

    let name;
    id = Symbol('123');
     userid = Symbol('123');
   // console.log(id === userid);
   // console.log(typeof id);

    let BigNumber = 12345678899000n;
    // console.log(typeof BigNumber);

    // Reference (Non premitive) : 

// Array, object, functions

let array = ["sai", "bhakti", "shraddha"];
let objs = {
    name : "hruta",
    age : 21,
    std : 5,
}
// console.log(objs.name);

const myfunction = function(){
    console.log("hellow world");
}
myfunction();



// *************************************** Stack & Heap Memory in js ****************************************

// Stack is use for premitive and Heap is used for Non-premitive
// Stack (premitive) And Heap (Non-premitive)

// Heap (Non-premitive data types)
let users = {
    name: "pawar",
    mail: "pawargmail.com",
    add: "shrirampur"
}

let user2 = users;
user2.mail = "akpawargmail.com";
 

// console.log(users.mail);
// console.log(user2.mail); 
// console.log(users);
// console.log(user2); .......uses heap in heap memory space changes perform to the origional values

// Stack (premitive data types)

let username = "raju";
let username2 = username;
username2 = "saki";
//console.log(username);
//console.log(username2);  ....uses stack in stack it creates copy of a value so all ever changes can't perform
                               // original value remains constant.
                                





