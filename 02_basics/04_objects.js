const tinderUser=new Object();    //this is a singleton object
// console.log(tinderUser);
tinderUser.id="123abc";
tinderUser.name="ashish";
tinderUser.isLoggedIn=false

// console.log(tinderUser);
const regularUser={
    email:"ashishparashardmp@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Ashish",
            lastName:"Parashar"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)
const obj1={
1:"a",
2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3=Object.assign({},obj1,obj2)  //returns a new object
//this is like ->target source
//how do we use initially
const obj3={...obj1,...obj2}
// console.log(obj3);
// console.log(Object.keys(tinderUser));    //print the keys field of object
// console.log(Object.values(tinderUser));   //print the values field of object

//entries(object)   will convert each field into object and return arrays of arrays
