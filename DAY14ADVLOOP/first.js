//Suppose humne koi bank_acc bnaya and chathe hai wo kabhi change na ho 
const obj1={
    name:'Harsh',
    age:21,
    account_number:3468574
};
Object.defineProperty(obj1,'account_number',{
    writable:false
})
obj1.account_number=34685;
console.log(obj1.account_number)