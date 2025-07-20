let obj = {
    name:"Harsh",
    age:21,
    gender:"male",
    city:"Kotdwar"
}

//for in loop, I can iterate over keys in an object 
for(let key in obj){
    console.log(key,obj[key]);       //Ye key output krega 
}

console.log(Object.keys(obj));        //[ 'name', 'age', 'gender', 'city' ]
console.log(Object.values(obj))      //[ 'Harsh', 21, 'male', 'Kotdwar' ]