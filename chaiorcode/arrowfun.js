const code = function stud(){
   //console.log("hellow!!!");
}
code()

function stud(){
    //console.log("hellow!!!");
}
stud()

// this keyword in js

const user = {
    id : "123243",
    name : "akshada",
    add : "shrirampur",
    welcomessage : function msg(){
        //console.log(`hii ${this.name} welcome`); // here, this refers to the current context
        //console.log(this);
        /*hii akshada welcome
{
    id: '123243',
    name: 'akshada',
    add: 'shrirampur',
    welcomessage: [Function: msg]
  }
  hii pawar welcome
  {
    id: '123243',
    name: 'pawar',
    add: 'shrirampur',
    welcomessage: [Function: msg]
  }*/
    }
    
}
user.welcomessage()
user.name = "pawar" // here, we are change the context i.e simply values
user.welcomessage()
//console.log(user.id);
//console.log(this); // {} => In node environment current context of this is empty i.e {} And in browser it prints window object. 
                   // window object is a global object in browser...
                   
//Arrow Function (fatarrowfunction)

const fun = (a) => {
    //console.log("hii i am pawar ak");
}
fun()

//function chai(){
//   console.log(this);
//}
//chai()

//function chai(){
//    console.log(this.name);
//}
//chai()

const chai = () => {
    let name = "sakuu";
    console.log(this); //{}
}
chai()

// Basic syntax of arrow function = () => {} i.e variable name = (parameter) => { expression }

//example:

//const codetwo = (num1, num2) => {
//return num1 + num2
//}

//const codetwo = (num1, num2) => num1 + num2
//const codetwo = (num1, num2) => (num1 + num2)

const codetwo = (num1, num2) => ({username: "sakhii"})
console.log(codetwo(3, 5))
 






