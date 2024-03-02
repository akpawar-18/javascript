// reduce

const mynum = [1, 2, 3, 4]

//const mytotal = mynum.reduce(function (acc, currentvalue) {
 //   console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
  //  return acc + currentvalue
//}, 3)


const mytotal = mynum.reduce( (acc, curval) => acc+curval, 0)
console.log(mytotal);

const shoppingCart = [
    {
    coursename: "js",
    courseprice: 25000
},
{
    coursename: "java",
    courseprice: 2500
},
{
    coursename: "py",
    courseprice: 2000
},
{
    coursename: "ds",
    courseprice: 2800
}
]

const pricetopay = shoppingCart.reduce( (acc, item) => acc+item.courseprice, 0)
console.log(pricetopay);
