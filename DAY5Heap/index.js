let a=10;
let b=a;
b=30;
console.log(b);
console.log(a);
//Primitive Data Type    vs   Non-Primitive Data Type
//Primitive Data Type :- Its Immutable (Can't be  changed)   number,string,bigint,boolean,null,undefined
//Non-Primitive Data Type :- Its Mutable    array,object,function

//Object :-
let obj1 ={
    id:20,
    name:"Harsh"
}
console.log(obj1);
let obj2 = obj1;
console.log(obj2);
obj2.id=30;

console.log(obj1);
console.log(obj2);

//  STACK vs HEAP
/* Basically RAM do parts me divided rehta hai , first one is for 
Stack:- iske under primitive datatype stored rehta hai (isme call by value hota hai  )
Heap:-  iske under Non-Primitive data type(call by reference) rehta hai , Randomly khi bhi 
         store ho jata hai , jha pe jagah mil jae 
         



Primitive DataType me overwrite nhi krte hai , humesha new memory pe value store hoti hai
          eg:- let a=10;
                   b=a;
                   b=30;
                   Yha pe b k liye new memory allocate hoga 
         */




//Primitive Data Type

// const num=10;
// console.log(num);
// num=90;
// console.log(num);      //Yha pe ye error de dega , because const ko dubara se assign nhi kr skte h



//For Non-Primitive Data Type


const obj={
    num1:10
}
console.log(obj);
obj.num1=11;
console.log(obj);   /* yha pe ye change ho jaega kyuki obj is stored in heap
                         and us obj ka address will get stored in stack , 
                         so dekha jae to address m koi changes nhi hoga 
                         jo bhi hona hai , that changes will implement only in heap

                            */
          
let obj2={
    id:20,
    money:30
};     
obj=obj2;              //Ye error dega because dono ka address ka different hai and address can't be changed in stack