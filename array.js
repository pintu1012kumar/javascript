const myArr=[1,3,4,5,6,,7] //initialise
const myArr2=new Array(1,2,3,4) // another type of initialisation
console.log(myArr[1]);//acess

myArr.push(6)
console.log(myArr);

myArr.pop() // no any arument ye last element ko delete karta hai

console.log(myArr.includes(6));// arg. hai ya nhi
console.log(myArr.indexOf(3));//give index no.



                  //*******SLICE AND SPLICE********



console.log("SLICE AND SPLICE");
const myArr3=[0,1,2,3,4,5,6]
console.log("A" ,myArr3);

const myn1= myArr3 .slice(1,3);// isme given range ka last index element print nhi hota hai 


console.log(myn1);
console.log("B",myArr3);


const myn2=myArr3.splice(1,3)// isme given arg. ke acc. array slice ho jata hai  pura range tak aur print ho jata hai 
console.log("C",myArr3);
console.log(myn2);

             // ******2D array******
// merge 2 array

const age=[10,20,30,40,50]
const weight=[40,50,60,70]

age.push(weight);// isse array ke ander array chala jata hai 
console.log(age);
console.log(age[3][1]);// usse yese acess karna padta hai 

// const all_new_heros= [...age,...weight]
// console.log(all_new_heros);


console.log(Array.isArray("Pintu"));// given arg array hai ya nhi
console.log(Array.from("Pintu"));// ye kisi bhi arg ko array bana deta hai 
console.log(Array.from({name:"Pintu"}));// interesting




let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));// create array from given input 