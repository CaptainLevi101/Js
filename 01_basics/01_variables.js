const accountId=5;
let accountEmail="200@gmail.com";
var pass="123";
accountCity="jai";  //hoiw is this printed?  even if it is not defined
// accountId=2    Not Allowed
console.log(accountCity);
console.table([])  //used to output multiple variables
//scope was not defined earlier in js so javascript used variable earlier
//let is scope based
//var is global based
//pefer not to use var because of issue in functional scope and block scoped
//we can reserve a memory even without defining it
let accountState
console.log(accountState);