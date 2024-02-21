// for

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is a element");
    }
    console.log(element);
}

for (let i = 0; i < 10; i++) {
console.log(`outer loop values: ${i}`);
for (let j = 0; j < 10; j++) {
   // console.log(`inner loop values ${j} and outer loop values ${i}`);
    console.log(i + '*' + j + '=' + i*j);
}
}

let myarray = [10,20,30,40];
console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    //console.log(element);
}

// break & continue

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        console.log("detected 5");
        //break;
        continue
    }
    console.log(index);
}