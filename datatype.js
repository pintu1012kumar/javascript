
// "use strict" ; //treat all js code as newer version
// alert(1+2) // we are using nodejs , not browser.

console.log(typeof null);// object
console.log(typeof undefined);//undefined

let score ="20"
console.log(typeof score);//string
console.log(typeof (score)); // string


let valueNumber=Number(score) // convert string  into integer
console.log(typeof valueNumber ); // number
console.log(valueNumber); // 20 

console.log(2**3);// power 8


           //Primitive data type

// 7--> string,number, boolean, null, undefined, symbol,BigInt  

// Reference(non primitive)--> Array,objects,function

       // ******Stack and heap****
 
//stack (primitive) & HTMLTableCaptionElement(non primitive)       

let userOne={
    name: "pintu",
    upi:"user@ybl"
}

let userTwo=userOne; 

console.log(userOne);
console.log(userTwo);// same as userOne