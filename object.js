//object literals 

const mySym=Symbol("key1")// create key using symbol data type

const jsuser={
    name:"pintu",
    "Full name":"Pintu kumar",
    [mySym]:"mykey1",// syntax of key and add in your objects
    age:18,
    location:"Jaipur",
    email:"amankolha7@gmail.com",

}

// using dot notation we are acess any element of object
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["Full name"]);// acess full name using this syntax
console.log(jsuser[mySym]);//acess your key using this syntax


jsuser.email="pintu1012kumar@gmail.com"// override your email of jsuser object

// freeze karne ke baad kuchh change nhi ho payega
Object.freeze(jsuser)// syntax of freeze
jsuser.email="manish1012kumar@gmail.com"
console.log(jsuser);





//***Sington***/


const tinderUser=new Object()//singlton object
const tinderUser1={}// non-singlton object 

tinderUser1.id="123abc"
tinderUser1.name="pintu"
tinderUser1.isLoggedIn=false

console.log(tinderUser1);

// merge two object 

const obj1={1: "a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3=Object.assign(obj1,obj2)// merge two obj using assign 

const obj3={...obj1,...obj2}//spread method most of the cases me use hoga 
console.log(obj3);


// acess all element of object in the array form

console.log(tinderUser1);
console.log(Object.keys(tinderUser1));//print all key of your objects
console.log(Object.values(tinderUser1));//print all value of keys of your objects



//destructuring
console.log("****destructuring*****");

const course = {
      coursename:"js in hindi",
      price :"999",
      courseInstructor:"hitesh"
    
}
const {courseInstructor} =course

console.log(courseInstructor);

//another

const {courseInstructor:instructor} =course

console.log(instructor);


// JSON API

// isme datatype and value dono string ke form me hote hai  aur koi object ka name nhi hota hai 

/*{
    "name": "pintu",
    "coursename":"js in hindi",
    "price":"free"
}      */


  
