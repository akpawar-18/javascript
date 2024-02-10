// functions with object & array
// passing object in function

function calculatecardprice(val1, val2, ...num) // ... (here it is a rest operator)
{
    return num;
}
console.log(calculatecardprice(200,400,500)); // val1=200 & val2=400, 500 is in rest so it goes in rest

const user =
{
    name: "pawar",
    id: 123
}

function handleobject(anyobject){
return `user name is ${anyobject.name} and id is ${anyobject.id}`
}
//console.log(handleobject(user)); => here, first create a object name as user then it pass in the function
console.log(handleobject({
    name: "akshada",
    id: 12345
})); // directly access a object

//passing arrays in function

const newArray = [10,20,30,40,50];

function returnsecondvalue(getArray){
return getArray[1]
}
//console.log(returnsecondvalue(newArray));
console.log(returnsecondvalue([200,300,400])); // direct passing
