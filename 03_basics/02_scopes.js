let a=10;
const b=20;   //cannot be changed
 // c is not a blocked scope
// {
//     let c=20;
// }
// console.log(c);  //you will get an error as c is defined in block
//if c was defined as var you will not get an error
// {
//     const d=10;
// }
// console.log(d); 
//here also we will get an error as d being const is also a blocked scope and we cant get our answer
function one(){
      const userName="Ashish";
      function two(){
        const website="Youtube";
        console.log(userName);
      }
      //function two can access the variables of function one
      //but function one outside part of function two cant use function two variables
      //this is how the things will be sorted out at the end
      two();

}
one();
//++++++++++++++++++interesting++++++++++++++++++//
console.log(addOne(5));
function addOne(num){
  return num+1;
}
console.log(addTwo(5));
const addTwo=function (num){
    return num+2;
} //these are expression like declaration of functions

//differnce is that bothh functions are declared differently
//this is hoisting context
//so let just go in deep
