//promise is an object representing eventual completion  or failure of an asynchronus object
const promiseOne=new Promise(function(resolve,reject){
  //do an async task
  //DB calls,cryptography,network Call
  setTimeout(function(){
      console.log("Async Task completed");
      resolve();
  },1000)
});

//two parts of promises either we can create promises or use them
promiseOne.then(function(){
    console.log("Promise Consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("async Task 2");
      resolve();
    },1000)
}).then(function(){
  console.log("Async2 resolved");
});

const Promise3=new Promise(function(resolve,reject){
  setTimeout(function(){
       resolve({userName:"Chai",email:"Chai@gmail.com"}) // i can pass the data in here
  },1000)
})
Promise3.then(function(user){
  console.log(user);
})

const Promise4=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error =false;
    if(!error)resolve({userName:"Ashish",email:"ashishparashardmp@gmail.com"})
    else{
  reject("error:Something went wrong")}
  },1000)
})
Promise4.then((user)=>{
  console.log(user);
  return user.userName;
}).then((userName)=>{
  console.log(userName);
}).catch(function(err){
  console.log(err);
}).finally(()=>{console.log("Promise is either resolved or rejected")}) //it is like a default
//finally is like a default that will run each time either the promise is resolved or rejected

// .then((user)=>{
//   console.log(user);
//   return user.userName
// }).catch()
const promise5=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error =true;
    if(!error)resolve({userName:"C++ and Python",password:"123456789"})
    else{
  reject("error:Python nhi chlaa bhai")}
  },1000)
});

async function consumePromise5(){
  try{
    const response=await promise5;
    console.log(response);
  }
  catch(err){
         console.log(err);
  }

}
consumePromise5();
async function getAllUser(){
  const response=await fetch()
  const data=response.json()
}