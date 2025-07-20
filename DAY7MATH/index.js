let num1=231;               //Ye to stack k under hi rhega

let num2 = new Number(231);     //ye number object type ka hai
let num3 = new Number(231);
console.log(num2);              // isliye heap k under hoga , iska address stack m stored rhega
console.log(typeof num2);
 

console.log(num1==num2);         //True   kbhi bhi kisi number ko direct compare krte hai then samne wala (string,obj) bhi number me transform hoga and then will be compared
console.log(num2==num3);         //False   Yha pe dono object hai , so as it is compare hoga  and dono stack m store hoga with different address

let num = 231.68;
console.log(num.toFixed(1));       //231.7 aayega

console.log(num.toPrecision(4));     //231.7 
console.log(num.toPrecision(3));     //232

console.log(typeof num.toString());    //string



//        MATHS

console.log(Math.E);       //2.718281828459045     
console.log(Math.random);   // 0<=value<1   any random value b/w 0 to 1

let num11=23.1;
console.log(Math.floor(num1));     //23
console.log(Math.ceil(num1));      //24


//Generating numbers from 0 to 9
console.log(Math.floor(Math.random()*10));

//Generating numbers from 0 to 10
 console.log(Math.floor(Math.random()*11)); 
  
 //console.log(Math.floor(Math.random()*(max-min+1)+min)); 


 //30 to 40 
 console.log(Math.floor(Math.random()*(11)+30));

 //LUDO 1-6
 console.log(Math.floor(Math.random()*(6-1+1)+1));