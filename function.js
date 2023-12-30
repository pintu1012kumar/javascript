// initialisation

function hello(){
    console.log("P");
    console.log("i");
    console.log("n");
    console.log("t");
    console.log("u");
}

// function name ke aage jab bhi paranthesis lagate hai tab function ka execution ho jata hai 

hello()// function execution


//uses

function addTwoNumber(num1,num2){
    console.log(num1+num2);
}

addTwoNumber()// NoN becoz no any arg pass
addTwoNumber(3,4)//7
addTwoNumber(3,"a")//3a
addTwoNumber(3,"4")//34

// arg- jab function call karte hai us time jo value pass hota hai usse arg kahte hai
// parameter- jab function definition karte hai us time jo value pass hota hai ussse parameter kahte hai



// rest operator -> ham element dete rahte hai or array ke form me o/p milta hai 

function calcualaterCartPrice(...num1){
    return num1 // Three dot ko hi rest operator kahte hai
}
console.log(calcualaterCartPrice(200,300,400,500,2000));




function calcualaterCartPrice(val1, val2,...num1){
    return num1 
}
console.log(calcualaterCartPrice(200,300,400,500,2000));
// isme 1st and 2nd value val me chal jata hai aur remaining element array me 




// function with object

 const user ={
    username:"hitesh",
    prices:199
 }
 function handleObject(anyobject){
    console.log('username is ${anyobject.username} and price is ${anyobject.price}');
 }
 handleObject(user)




 
 