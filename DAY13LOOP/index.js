//If-Else Statement 
let age=7;
if(age>=18){
    console.log("Eligilbe for vote");
}
else{
    console.log("Not Eligible for vote");

}


// If ELse  else-if 
let age1=19;
if(age1<18){
    console.log("Kid");
}
else if(age>45){
    console.log("OLD");
}
else {
    console.log("Young");
}



//Multiple Condition : SWITCH
//Switch me comparison strict hota hai (===) 
let day=0;
switch(day){    //new Date().getDay() it will print the day (Jaise Monday ka 1 , Sunday ka 0)
    case 0:
        console.log("SUNDAY");
        break;
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    default:
       console.log("Not a valid Day");
}


//LOOP 
for(let i=0;i<20;i++){
    console.log(i);
}

//Sum of first n natural no
let sum=0;
for(let i=1;i<=10;i++){
      sum+=i;            //c++ fast hai in compariosn to JS bcoz yha pe i ke liye humesha ek new space allocate hoga 
}
console.log(sum);


//Nested for LOOP 
/*        *
          **
          ***
          ****
          *****
 */         
for(let i=1;i<=5;i++){
    let line="";
    for(let j=1;j<=i;j++){
        line+="*";
    }
    console.log(line);
}