// function in js
const square = function (number) {
    return number * number;
  };
  
  //console.log(square(4));

  
  function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  //console.log(fac(3));

  function myname(){
   // console.log("akshada");
  }
  myname()

  function sum(num1, num2){
    return num1+num2;
    console.log("pawar");//after return statement can't print anything
  }
  //console.log(sum(2,"3"))

  function addtwonum(n1, n2){
    //let result = n1+n2;
    return n1+n2
  }
  let result = addtwonum(2,4)
  //console.log("Result=",result);

  function userLoginmsg(name){
    return `user ${name} logged in succfully..`
}
  //userLoginmsg("pawar") => only return i.e. execute code bt can't print anything
  //console.log(userLoginmsg("pawar")); //print the output

  function userLoginmsg(username = "ram") //default value
  {
    if(username === undefined) {
      console.log("please enter a username");
      return
    }
    return `user ${username} logged in successfully..`
}
  //console.log(userLoginmsg("pawar")); 
  console.log(userLoginmsg());