//Creating an Object          Key : Value 
const obj ={          
    name:"Harsh",           //Key will store as a String 
    account_balance:420,
    gender:"Male",         // Key ko as a string likho ya fhir unke b/w space nhi hona chaiye
    age:21,
    4:23,           // Number bhi as a key use ho skta hai ,but string k tarah hi use hoga
    0:50           // console.log(obj[0]) or (obj['0'])
}
console.log(obj); 

//Abb koi sa bhi element agar extract krna pade to 
console.log(obj.gender);
console.log(obj["gender"])
console.log(obj["age"])


let obj1={
    undefined:10, //Yha pe ek doub t ye aa skta hai ki undefined/null are variable and inko kaise use krskte hai but as i had discussed earlier key humesha as a string hi store hoga to wha pe kuch bhi likh skte hai
    null:100
}
console.log(obj1)



//Second Method  for Creating an Object

const person=new Object();
//Property Add
person.name="Harsh";
person.age=21;
person.height='70 cm';
console.log(person)
//Delete Property 
delete person.age;
console.log(person);

//Modify or Update 
person.name="Mohit";
console.log(person);


//Third Method for Creating an Object   Constructor bnane se baar baar code nhi likhna padega 

class People{
constructor(nam,ag,gend){
    this.name=nam;
    this.age=ag;
    this.gender=gend;
   }
}
let per1= new People("Harsh",21,"Male");
let per2= new People("Rohit",26,"Male");
let Per3= new People("Diplai",23,"Female");
console.log(per1,per2,Per3);


//Some Operations 
let obj2={
name:"Harsh",
account_balance:420,
gender:"Male"
}
//Keys,Values ka extraction
const arrr = Object.keys(obj2);   //Object.keys se saare keys aa jaega
console.log(arrr);

const arr1=Object.values(obj2);
console.log(arr1);


//assign UseCase      Object.assign(target,source1,source2,.......)
const obj11 = {a:1,b:2};
const obj22={c:3,d:4};

const obj3 = Object.assign({},obj11,obj22); // {} iske k under dono assign honge , {} ye nhi denge then jo 1st ovje hoga usme changes hoga permanently
console.log(obj3);
obj3.a=10;            //Ye obj1 k under koi changes nhi krega 
console.log(obj3); //isme changes reflect krega

//Spread operator     same as assign 
const obj4={...obj11,...obj22};
console.log(obj4)

//Shallow  Copy vs Deep Copy 
//A shallow copy creates a new object and copies all top-level properties, but if a property is an object itself, only the reference is copied (not deeply cloned).

/* Example of Shallow Copy:
js

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 };  // This is a shallow copy

obj2.a = 10;

console.log(obj1); // { a: 1, b: 2 }
console.log(obj2); // { a: 10, b: 2 }

  /* Deep Copy :- It creates a completely independent copy of the original obj including all the nested objects.
  So isme agar koi changes krenge to 1st wala unaffected rhega*/
 let objjj= structuredClone(objj1);
 objjj.a=23;
 console.log(objj1,objjj);  //yha pe changes sirf objjj me hoga 
 