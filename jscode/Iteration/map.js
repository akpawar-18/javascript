// map = map performs the operation on the existing array

const num = [10, 20, 30 ,40 ,50]

const nums = num.map( (n) => n + 1)
//console.log(nums);

// chaining
 const newnum = num.map( (n) => n * 2)
                   .map( (n) => n + 1)
                   .filter( (n) => n>100)
                   .map( (n) => n > 101) // output: [false]
 console.log(newnum);               