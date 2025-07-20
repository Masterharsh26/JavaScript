//Comparison Operator 
// Number to Number 
let a1=1;
let a2=2;
console.log(a1<=a2);

// Number to String
 let num=10;
 let str = "10";             //String number me convert hoga yha p
 console.log(num==str);      // jb bhi comparison hoga dono ka type conversion hoga in same datatype

  // === type check hoga phle then comparision hoga
  let x=10;
  let y="10";
  console.log(x===y);       //since dono ka type same nhi hai so it will return false
  
  console.log(null==undefined); 
  //null == undefined       True       null sirf undefined k equivalent  hoga
  console.log(null===undefined); 
  //null === undefined      False     null ka datatype hai Object and undefined ka hai undefined
 -

  //Null k sath kheloooooo
     console.log(null==0);      //False
     console.log(null>0);       // False   yha pe ye conversion krke compare kr rha hai 
     console.log(null<0);       // False   yha pe ye conversion krke compare kr rha hai 
     console.log(null>=0);      //True    yha pe ye conversion krke compare kr rha hai 
     console.log(null<=0);     //True     yha pe ye conversion krke compare kr rha hai 


 console.log(NaN==NaN);       //False  

 //IMPORTANT 
let abc1=123;
let abc2="123";
let abc3=123;
console.log(abc1==abc2==abc3);       //false bcoz  abc1==abc2 -> true dega   and  true != 123 so overall false dega as a output


//Logical Operators 
 let s1=18;
 let s2=190;
 console.log(s1>10 && s2<900);        // True      &&  Operator 
 
 console.log(11&&14);             /*  14  In JavaScript, the && operator does not always return a boolean. Instead:
                                            It returns the first falsy value it encounters.
                                            If all values are truthy, it returns the last value.
                                   */

   console.log(11||14);       /*11  Behavior of || (Logical OR):
                                          It returns the first truthy value it encounters.
                                          If none are truthy, it returns the last falsy value
                                */
//BitWise Operators
  console.log(4&5);    // bits me breakdown krega and uspe & operator lgega
  console.log(11|12);
  console.log(5^7);     // XOR opeartor  0 0 ka 0 ; 1 1 ka 0  ; 1 0 and 0 1 ka 1 hota hai
  console.log(5<<3);    /* 40  left shift , 5 multuiply by 2 power 3 
                          101.00000   ->   101000.00000
                          */
 console.log(20>>2) ;    // 5     20 divided by 2 power 2       