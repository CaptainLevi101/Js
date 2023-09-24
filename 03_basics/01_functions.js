function loginUserName(username="sam"){   //this gives us an idea that if nothing is passed then we will get atleast sam
    return `${username} just logged in`
}
console.log(loginUserName("Ashish"))
//when we dont pass anything then we get is undefined


function addPrice(...num1){  //will add them into array
    return num1
}
console.log(addPrice(200,400,500)) 
//what if we want to send more than just one operator
//so here comes in rest operator basically both are same 
//rest or spread but depend on their use
const user={
    userName:"Ashish",
    price:200
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username}`);
}
handleObject(user);
