// ****high order array loop***



// on the array

const arr =[1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

// loop on the string 

const greetings ="helloworld!"
for (const greet of greetings ){
    console.log(`Each char is ${greet}`);
}



// Maps--> it is known as for the unique value

const map= new Map()
map.set('IN', "India")
map.set('USA', "Uniited States of America")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);// India print only one times.

// loop on the map

for (const [key ,value] of map){
    console.log(key , '-', value);
}





//for each loop on string array 



const coding =["js","ruby","java","python","cpp"]

coding.forEach(function (val){
    console.log(val);
} )




// for each loop on object


const mycoding= [
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

mycoding.forEach((item)=>{
 console.log(item.languageName);
} )


// note - do not any return value by foreach 

