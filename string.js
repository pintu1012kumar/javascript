const nam ="pintu"
const age=20
//console.log(name + age + 'hello');// bad habbite
console.log(`Hello my name is ${nam} and my age is ${age}`);

// check char position 

console.log(nam.charAt(3));// o/p=t  charAt is a syntax part
 
// check index position 
console.log(nam.indexOf('t'));// 3

//find substring
const newstring=nam.substring(0,4)
console.log(newstring);

// reverse string
const anotherstring =nam.slice(1,2)
console.log(anotherstring);

// remove extra space in string 
 const newstringone="   pintu     "
 console.log(newstringone);
 console.log(newstringone.trim());

 // replace any char with our char
 const url ="https://pintu.com/pintu30%kumar"
 console.log(url.replace('30%','-'))
 console.log(url.includes('ramesh'));// if present then give true otherwise false
