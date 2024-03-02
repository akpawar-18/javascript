// Array methods Filter, Map, reduce

// Filter = it simply returns a true or false(if condition is true then it will be execute or return)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newnums = nums.filter( (num) => {
//    return num > 4;
//})
//console.log(newnums);

const newnums = []
nums.forEach( (num) => {
    if (num > 4) {
        newnums.push(num)
    }
});
console.log(newnums);

const books = [{
    title: "book one", genre: "science", publish: 2002, edition: 2010
},
{
    title: "book two", genre: "history", publish: 2000, edition: 2012
},
{
    title: "book three", genre: "story", publish: 1900, edition: 2019
},
{
    title: "book four", genre: "geography", publish: 1998, edition: 2023
},
{
    title: "book five", genre: "physics", publish: 2002, edition: 2008
}];

let userbook = books.filter( (bk) => bk.publish === 2002 || bk.genre === "story")
//console.log(userbook);

userbook = books.filter( (bk) => { return bk.edition === 2023})
console.log(userbook);
                