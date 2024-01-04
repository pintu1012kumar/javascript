// if - else 

if (2=="2"){
    console.log("executed");
}  // true 

// if you are used === (ye value ke sath sath type ko bhi check karta hai )then give false



// nested if - else 


// switch

/*switch (Key) {
    case value:
        break;

        default:
            break;
} */ // syntax




 const month =3;
switch (month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("do not any match");
        break;   
}




               // some truthy and falsey value

const userEmail=[]
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
             

//falsey value= 0,-0,BigInt On ,null,undefined,NaN,
// truthy value= "0","false", [],{},function(){},


if (userEmail.length===0){
    console.log("Array is empty");
}




    // Nullish Coalescing Operator (??) : null undefined


let val1;
//val1= 5 ?? 10 // 5
//val1= null ?? 10  // 10
//val1= undefined ?? 10   //10
val1= null ?? 5 ?? 10  //5

console.log(val1);




               // loop , break , continue


// for

for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element);
    
} 


