const marvel=["thor","IronMan","Captain"]
const dc=["Superman","Batman","Flash"]
// marvel.push(dc);
//but it is not merged and provided an array of array
//array in js can take any data either string number or object

// console.log(marvel)
const all_heroes=marvel.concat(dc); //return an new array without modifying an existing one
//instead of doing concat we use spread operator
const all_new_heroes=[...marvel,...dc];
// console.log(all_new_heroes);
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity);
//every value has been spread out so no subPart is there
// console.log(real_another_array);
console.log(Array.isArray("ashish")) //provide wheher it is array or not
console.log(Array.from("Ashish")); //convert it into array
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))  //convert the scores into a new array
