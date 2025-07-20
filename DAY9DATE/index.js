//Current Time and Current Date
const d = new Date();
console.log(d);  //2025-06-25T16:34:48.626Z
console.log(d.toString()); //Wed Jun 25 2025 22:07:26 GMT+0530 (India Standard Time)


console.log(typeof d);    //Ye jo time laa rha hai , ye system se la rha hai

const d1 = new Date(1000);   //1970-01-01T00:00:01.000Z  basically 1000millisec hai and 1jan1970 se ye calculate hot jata hai
console.log(d1);

//only Date
console.log(d.getDate());
console.log(d.getDay());    //Sunday ka 0 , Mon ka 1, Tue ka 2 ans so on
console.log(d.getMonth());  //Jan ka 0 , Feb ka 1 , Mar ka 2 ....

/* Why Milliseconds approach 
Jaise ticket booking ye sb hota hai na to time frame jitna chota rkh skte hai , ye utna helpful hota hai 
*/
console.log(d.getTime());    //1750870271556 itna millisec from 1970

const now = Date.now();
console.log(now);



//number h to 0 based start honge 
//String hai to normal 1 base start honge


//String k tarike se hum apne hisab se date daal skte hai
const date=new Date("2022-10-20");   //10 ka matlab oct
console.log(date.toDateString());

//Year/ Month / Date / Hour / Minute / Second / millisecond 
const dat = new Date(2025,6,31);   //Tue Jul 01 2025 00:00:00 GMT+0530 (India Standard Time)
console.log(dat.toDateString());


//Koi date bhi set kr skte hai 
const datee = new Date();
datee.setDate(20);
datee.setFullYear(2025);
datee.setMonth(6);              //ye number daale hai isliye month July ka hoga
console.log(datee);




//Date Calculations 
const datee1=new Date();
const datee2= new Date("2025-06-26");
console.log(datee2-datee1);   // ye milliseconds m aayega 

//CountDown Timer for LA28 olympic
//Days , hour , min , sec 
const dat1=new Date();
const dat2=new Date("2028-07-21T00:00:00");
const dateee=dat2-dat1;                     //in millisec
const days=Math.floor(dateee/(1000*60*60*24));
const hour = Math.floor((dateee/(1000*60*60))%24);
const min = Math.floor((dateee/(1000*60))%60);
const sec = Math.floor((dateee/(1000))%60);
console.log(`LA28 Olympic Countdown Timer:-> Days:${days} Hours:${hour} Minutes:${min} Seconds:${sec}`);