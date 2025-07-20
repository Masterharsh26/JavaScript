//Function 
function h(){
 console.log("Hello Harsh");
 console.log("Hello ji");
 console.log("Hello Harsh");
 console.log("Hello Harsh");
}
h();
h();

//Add Program          Parameter
function sum(number1 , number2){
    console.log(number1 + number2)
};
sum(90,80);       //90,80 are arguments
sum(80,230);

//Multiply
function multiply(no1,no2){
    //console.log(no1*no2);
    return no1*no2;
}
console.log(multiply(9,80));

//Using return , return k baad koi bhi program output nhi dega
const fun=function() {
    console.log("Hello Coder");
    console.log("Mein to Thik Hun");
    return "Money";
    console.log("hey!!")       //Ye print nhi hoga
};
console.log(fun());



//ARROW FUNCTION
const fun1=()=>{
    console.log("Hlooooo");
}
fun1();

const sum1=(numb1,numb2)=>{
     return numb1+numb2;
}
console.log(sum1(3,4));


// const cube =(number) => {
//     return number * number * number ;
// }

//Single line Code    , ye bhi ek function hi hai
const cube = number => number*number*number;    // number yha pe single parameter h isliye without paranthesis hai 
console.log(cube(8));




/* Spread Operator 
    Purpose: Expands an array or object into individual elements.
🧠 Think: "Spread into pieces"
📌 Used in:
            Function calls
            Array literals
            Object literals

            const arr1 = [1, 2];
            const arr2 = [...arr1, 3, 4];  // [1, 2, 3, 4]       basically yha pe copy nhi ho rha hai,  arr1 se ek-ek krke element ka transfer ho rha hai from arr1 to arr2

*/


/*Rest Operator
    :Collects multiple values into a single array or object
    :Used in:
                Function parameters
                Destructuring assignments

                // Rest in function parameter
                                                function sum(...args) {
                                                return args.reduce((a, b) => a + b, 0);
                                                   }
                                                console.log(sum(1, 2, 3));  // 6


                                      // Rest in array destructuring
                                                              const [first, ...rest] = [1, 2, 3, 4];  
                                                            // first = 1, rest = [2, 3, 4]
 */

    const summ1 =function(...numberr){
          console.log(numberr);         //Ye loop se summation nikal jaega
    }        
    summ1(2,3,4,5);   
    summ1(1,2,3,4,5,6,74)                                     


    let obj={
          name:"Harsh",
          age:30,
          amount:420
    }
    // function funn(objj){         //iske under fxn call krne pe pura object aaya tha
    //      console.log(objj.name,objj.amount)
    // }
    // funn(obj);

    function funn({name,amount}){     //Destructure of Obj
        console.log(name,amount);
    }
    funn(obj);




    // Pass by Reference   Objects (including arrays and functions) → also passed by value — but the value is a reference.
    let ob ={
        name:"Haarsh",
        age:22
    }
    function funn1(obj2){ 
        obj2.name="Harshhh",
        console.log(obj2.name)        
    }
    funn1(ob);
    console.log(ob.name);