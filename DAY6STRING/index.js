//String in JavaScript



let str1='Hello';
let str2="Hellooo";
console.log(str1);
console.log(str2);

let str3= `Aur Bhaiya kaisan ba`;    //ye tarika imp hai
console.log(str3);

let price=90;
console.log(`Price of Sugar is ${price}`);   
console.log(`Price of Freesh Tomato is` ,price);

//String Concatenation 
let s1="Hello";
let s2=" Coder Army";
let s3= s1+s2;
console.log(s3);

console.log(s3.length);      //str.length

// "hello coder army"
console.log(`"hello coder army"`);

let message="Rohit Bhaiya accha padhate hai.\nDev unse dekh skte ho";
console.log(message);


//Escape Character  \  iske baad jo bhi hoga wo as it is print hojaega 
//Rohit Bhaiya accha padhate hai. \nDev unse dekh skte ho
console.log(`Rohit Bhaiya accha padhate hai. \\nDev unse dekh skte ho`);


//Accessing Characters     charAt
let ac="Harsh";                //012324
console.log(ac[4]);
console.log(ac.charAt(4));

//Changing Case      toUpperCase()    toLowerCase()
console.log(ac.toUpperCase());
console.log(ac.toLowerCase());      // Ye new string la k deta hai , original wale string me koi changes nhi hota hai


//SEARCHING in Strings 
//Agar SubString hoga then uska 0th index print krwadega and nhi hua to -1 return krega
let nm="Hello Coder Army Coder";
console.log(nm.indexOf("Coder"));
console.log(nm.lastIndexOf("Coder"));
console.log(nm.indexOf("Coder"));
console.log(nm.includes("Coder"));

//SubStrings ko Nikalna 
let nstring="HeloDon";
                                        //0123456
//Slice can take negative index also      HeloDon
                                    //   -7-6-5-4-3-2-1      
console.log(nstring.slice(0,3));     //isme 3 excluded rhega
console.log(nstring.slice(-7,-3));   //-3 not include

console.log(nstring.substring(0,3)); 



//Replacing Content     str.replace(" " ," ")
 //                     str.replaceAll(" " ," ")

//Splitting Strings      split(delimiter):- Splits a string into an array based on a delimiter
 let str11="Money, honey, Sunny, Funny";
console.log(str11.split(","));

//str.trim  unnecessary space ko hta dega 
//trim :Removes whitespace from both the end
//trimStart()/trimEnd()
let sr = " heelo ji ";
console.log(sr.trim());

//New Way to create string  basically string ko obj m change kr dega
let nwstring = new String("Hello");
console.log(nwstring);
console.log(typeof nwstring)      //object type h
