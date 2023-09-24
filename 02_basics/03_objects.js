//singleton will be made by constructor type declaractioin of objects and not by 
//literals type declaration
// Object.create   constructotr


//object literals
const JsUser={}
const mySym=Symbol("key1");
const user={
    [mySym]:"myJeu", //need to define the symbol like this
    name:"Ashish",
    val:"-",
    age:21,
    location:"kanpur",
    isLoggedIn:false,
    lastLoggedIN:["man","sat"],
    email:"ashishparashardmp@gmail.com"
}
//how to access
// console.log(user["name"]);  //better to use this as what if key is string type
user.email="ashish@gmail.com";
// Object.freeze(user);  //this allows to not change the user
user.email="ashishparasharMicrosoft.com";
// console.log(user);
//function
user.greeting=function(){
    console.log(`hello Ashish Parashar ${this.name}`);
    return;
    //as it is inside the user object so this willl refer the
    //user object
}
//this access the all the properties inside the object

// console.log(user.greeting); //return a function ->ref
console.log(user.greeting()); //retuns the executefd fun
