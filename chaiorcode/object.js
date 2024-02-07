//const user = new Object() => singleton object
const user = { }// => non-singleton object
user.id = "111"
user.name = "akshada"
user.loggedIn = "true"
//console.log(user);

const regularstudent = {
    email: "h@gmail.com",
    fullname: {
        firstname: "akshada",
        lastname: "pawar"
    }
}
//console.log(regularstudent.fullname.lastname);
//console.log(regularstudent.fullname?.lastname); //fullname? => for API response...instead of if-else

const ob1 = {1: "a",2: "b"}
const ob2 = {3: "a",4: "b"}
const ob4 = {5: "a",6: "b"}

//const ob3 = {ob1, ob2}
//const ob3 = Object.assign( {}, ob1, ob2, ob4)

const ob3 = {...ob1, ...ob4}
//console.log(ob3);

const stud = [ {
    id: 1,
    name:"sai"
},
{
    id: 2,
    name: "ram"
},
{
    
},
{

}]
//console.log(stud[0].name);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(regularstudent));
console.log(user.hasOwnProperty('loggedIn'));


// object destructuring

let course = 
{
    id: 101,
    name: "comp sci",
    duration: "1hr"
}

const {duration} = course
console.log(duration);
const {duration: dur} = course
console.log(dur);






