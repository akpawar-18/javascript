// if

if(true) 
{
  // if condition or statement is return true only then block statements i.e {...} are prints/execute.
}

const isloggedIn = true;
if(isloggedIn)
{
    console.log("user loggedIn");
}

// >, <, <=, >=, ==, !=, ===, !==

if(2 === "2"){
    console.log("correct statement"); // can't print("correct statement") becoz condition is false
}

//const temperature = 50
//if(temperature > 50){
//  console.log("tem is greater than 50");
//} else
//console.log("tem is less than 50");

//const score = 300
//if(score > 200){
//    const stud = "pass"
//   console.log(`student is ${stud}`);
//}

//console.log(`student is ${stud}`); // bolck scope Error: stud is not defined 

//if(score == 300) console.log("stud is pass"); // there is implicite scope (one line scope without {})

// else if :

//const balance = 1200;
//if (balance < 1000) {
//console.log("greater than 1000");   
//} else if (balance === 1200) {
//   console.log("equal");
//} else if (balace < 500) {
//   console.log("less");
//} else
//{
//  console.log("balance is 1200");
//}

const userLoggedIn = true
const userLoggedInbyemail = false
const pan_card = true
if (userLoggedIn && userLoggedInbyemail) {
    console.log("user Login");
}

if (userLoggedIn || userLoggedInbyemail) {
    console.log("user login");
}

