//for of
const arr=[1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }
//maps
const map=new Map()
 //it is an object that holds the key value pair
 map.set('in',"India")
 map.set('fr',"fr");
//  console.log(map);
//  just like unordered_map that holds the key value pair

// for (const [key,value] of map) {
//     console.log(key,'-',value);
// }
const myObject={
    game1:"GTA",
    game2:"NFS",
    game3:"Batman"
}
// for (const [key,value] of myObject) {
//     console.log(key,'-',value);
// }
//this type of iteration is possible in map but not in objects

const myObject2={
    en:"english",
    js:"Javascript",
    py:"Python",
    cpp:"C++"
}
//how can we iterate it if not by for of
//yeah we can do it by for in
// for (const key in myObject2) {
//    console.log(myObject2[key])
// }
//can this for in loop be used in arrays
// const prog=[1,2,3,4,5,6,7]
// for (const key in prog) {
//    console.log(`${key} shortcut is ${prog[key]}`)
// }
//+++++++++++++++++++++++++++most important+++++++++++++++//
//we can use for in loop in  objects  and  array
//we can use for of loop to iterate in maps

//+++++++++++++++++++++++++what is left behind is++++++//

//+++++++++++++++++++for each loop
const code=["js","python","java","cpp"]
// code.forEach( function(item){
// console.log(item);
// })  //callback function doesn't have name
//this function will go for each item
//++++++++callback function +
// code.forEach((element) => {
//      console.log(element);
// });
// function printMe(item){
//  console.log(item);
// }
// code.forEach(printMe);
// code.forEach((item,index,arr)=>{
//     console.log(`${index} is index of the item ${item} `)
// })
//for each hmesha item hi nhi leke aata ye index bhi leke aata h aur array ka refence bhi leke aata h
const myCode=[
    {
        lang:"English",
        FileName:"en"
    },
    {
        lang:"Javascript",
        FileName:"js"
    },
    {
        lang:"C++",
        FileName:"cpp"
    },
    {
        lang:"Python",
        FileName:"py"
    }
]
myCode.forEach((item)=>{
    console.log(item.lang);
})