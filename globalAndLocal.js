let a=10
const b=20
var c=30
console.log(a);
console.log(b);
console.log(c);

// agar aap kisi scope ke andar let,var, const declear karte hai toh var bahr bhi acess hota hai 
// isiliye var ka use kam hota hai 

if(true){
    let x=10
    const y=20
    var z=30//exception
}

// a,b,c is global scope hai aur x,y,z ek local scope hai 
//local variable bahar me acess nhi hota hai



                   /*****question**** */

function addon(num){
    return num + 1
}
addon(5)



//this and arrow function



// IIFE (Immediately Invoked function expressions)

function chai(){
    console.log("DB CONNECTED");
}
chai();


// ()() se bhi aap kisi function ko excuted kara sakte hai 
// do para.. means 1st means defination and 2nd means execution


(function chai(){
    console.log("DB CONNECTED");
})();


