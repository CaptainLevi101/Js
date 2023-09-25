const user={
    userName:"Ashish",
    price:"999",
    welcomeMessage:function(){
        console.log(`${this.userName} welcome to my website`)
        //this actually makes the hcurrent context
       
    }
}
  //here current context is empty
  //browser ke andr jo object h vo h window object
  //aur jo yhaan pr jo object h empty object
//arrow function ke andr this nhi hota h
user.welcomeMessage();
// function chai(){
//     console.log(this);
//     //function ke andr this ka use mushkil h if it is not in object
// }
// chai();
// const chai=()=>{
//     console.log(this)      //arrow function
//     //this will give me an enpty object
// }
// chai();
/////+++++++++++++++++++let's discuss about arrow function++++++++++++++++///
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));
const addTwo=(num1,num2)=>num1+num2   //implicit arrow function
//curly braxes rap kra to return key word likhna pdega
//explixit return would be used when we define retrun statement explicitly
