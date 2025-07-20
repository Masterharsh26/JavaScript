//Scope k baare m Padhte hai
//Global scope,local scope(Functional Scope),Block Scope 


//Global Scope:- Koi bhi access l skta hai 
// let a=10;
// var b=100;
// const c=19;


//Local (Functional Scope)    isko koi bahar se scope nhi kr skta
function greet(){
    let a=10;
    var b=100;
    const c=19;
    console.log("Hello");
    console.log(a,b,c);
}
greet();


 
//var me ek naam k under baar-baar initialisation kr skte hai so it creates problem 
//var me ek problem ye bhi hai ki , we can access it before even intialize it  , undefined dega waise 
var h=90;
var h=100;   //yha pe var h ka do baar initialize ho gya hai thats problem

//Block Scope
if(true){
    let a=10;
    var b=20;
    const c=30;
}
console.log(b);


//Different scope me same variable name ko use kr skte hai 

 

const obj={
    name:"Harsh",
    age:30,
    amount:420,
    city:"Delhi"
}
const k = Object.keys(obj);  //Returns an array of property names (keys) of the object.
console.log(k);              //[ 'name', 'age', 'amount', 'city' ]
    
for(let i=0;i<k.length;i++){
    console.log(k[i]);
}

const k1 = Object.keys(obj);   //Ye values print krwaega