let string = "bhai";
let string2 = "behan";
//console.log(string.concat(string2));
//console.log(`our relation is ${string} ${string2}`);
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.toLocaleUpperCase());

const gameName = new String('hit-esh');
console.log(gameName);

console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));
let newString = gameName.substring(0,4);
console.log(newString);

let anotherString = new String("    pawar   ");
console.log(anotherString);
console.log(anotherString.trim());

let url = "http://localhost%10.com";
console.log(url.replace("%10","-"));
console.log(url.includes("http"));
console.log(url.includes("tttp"));

console.log(gameName.split("-"));

let text = "5";
console.log(text.padEnd(3,"1"));