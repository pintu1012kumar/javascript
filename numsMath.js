const score =400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);// length of value
console.log(balance.toFixed(2));// point ke bad kitna zero lena hai

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));//convert any no. to indian no.


                 /******Math**** */
                 
                 
console.log(Math);
console.log(Math.abs(-4)); // give absolute value
console.log(Math.round(4.6)); // round value of any float no.
console.log(Math.ceil(4.2)); // max value of any float no.
console.log(Math.floor(4.9)); //give int means minimum value                 


              /****Date and time **** */

let myDate = new Date()
console.log(myDate.toString());// date and time convert in string in indian form
console.log(myDate.toDateString());// give date in string form
console.log(myDate.toLocaleDateString());// date in another form
console.log(typeof myDate );// object
