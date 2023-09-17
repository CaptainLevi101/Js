//array
const myArr=[0,1,2,3,5]
//array methods
// myArr.push() //adds the valur in array
// myArr.pop()    //pop the element
// myArr.unshift(0) //adds the particular element at the start of array
// console.log(myArr.includes(9)); //give whether the particular element is present in the array or not

//conslole.log(myArr.indexof(3))
// const newArr=myArr.join() // add all the elements of array in string sepearated by comma
console.log("A",myArr);
const myN1=myArr.slice(1,3) //returns the section of array
console.log("B",myN1);
const myn2=myArr.splice(1,3)  //splice just cut off hte portion from the array and divide it into two portions
console.log(myn2);