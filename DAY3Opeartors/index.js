// Non Primitive DataType

// Array , Object , Function
  

      //    ARRAY
let arr=[10,20,30,"Harsh"];        //kisi bhi type ka data ko daal skte hai
console.log(arr);                  //typeof arr  is Object

       //     OBJECT
      //    key:value

let obj = {
     user_name: "Rohit",
     account_number:827941224470,
     balance:8766582
}
console.log(obj)



//Function 

let fun = function(){
    console.log(("Hey Kaise ho"))
    return 10;
}
  console.log(fun());

    //TYPE CONVERSION
  
 let acc_bal = "100";
 let num = Number(acc_bal);   //String -> Number

 console.log(typeof acc_bal);
 console.log(typeof num);


 let s="100dd"
 console.log(Number(s))           //Not a Number dega 

 //Boolean  to number 
 let x =false;
console.log(Number(x))

//Null 
let x1=null;
console.log(Number(x1));      // output will be 0

//Undefined 
let x2;
console.log(Number(x2));       //NaN  Not a number


//Conversion to string 
let a1=300;
console.log(String(a1))





/* ARITHEMATIC OPERATORS
       Left to Right order 
        divide & multiply then Add & Sub  */

        console.log(20%3);


// ++ increment operator   ;   -- decrement operator
     // sum++ or sum--   postincrement
       let sum =100;
       console.log(sum++);   //phle output de rha hai use baad increase hoga

//  ++sum or --sum  Preincrement 

    let sum1 = 100;
     console.log(--sum1);   //phle decrease kr dega ye
     console.log(sum1);