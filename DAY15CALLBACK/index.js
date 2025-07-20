let user={
    name:"Harsh",
    age:21
};
console.log(Object.getOwnPropertyDescriptor(user,'name'));
Object.defineProperty(user,'name',{
    writable:false
});
//it is done to stop accidental changes
user.name="harshh";
console.log(Object.getOwnPropertyDescriptor(user,'name'));


//forEach
let arr=[10,12,202,3033,33];
arr.forEach((num,index,a)=>{
    a[index] = num*2;
    console.log(num,index),a;
     
})
console.log(arr);

let arr1=[1,2,3,4,5,6];

 const greet =function(num){
    console.log(num);
}
arr1.forEach(greet);


//filter 
let ar=[10,22,33,41,50];
const res=ar.map((num)=>{
    return num%2==0;
})
console.log(res);