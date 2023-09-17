const myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// 
//date is an object in javascript
// console.log(myDate.toLocaleDateString().toString())
 let myCreatedDate=new Date("2023-01-14")
// console.log(myCreatedDate);


let myTimeStamp=Date.now()
let newDate=new Date();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))
console.log(newDate.getDay())
console.log(newDate);
console.log(newDate.toLocaleString("default",{
    weekday:"long"
}))