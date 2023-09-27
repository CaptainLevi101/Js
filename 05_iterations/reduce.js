//+++++++++++++++++++reduce++++++++++++++++++//

//reduce gives two arguments accumulator,currentVallue
const myNum=[1,2,3,4]

const initalValue=0;
const myTotal=myNum.reduce((acc,num)=>{
    return acc+num
},initalValue);
console.log(myTotal);