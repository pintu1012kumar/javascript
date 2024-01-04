// use filter


const myNums= [1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>num>4)// num >4 this is a conditions
//  const newNums =  myNums.filter(()=>{})//syntax
// if you are use {} then use return .
const newNums1 =  myNums.filter((num)=>{return num>4})
console.log(newNums);
console.log(newNums1);


// same work using foreach loop


const myNums1= [1,2,3,4,5,6,7,8,9,10]
const newNums2=[]
myNums1.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
})

console.log(newNums2);


// accumulator
const x=[1,2,3]
const myTotal =x.reduce(function (acc,currval){
    return acc+currval
},0)

console.log(myTotal);