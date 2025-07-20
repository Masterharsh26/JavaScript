//for in loop : Isko array ke sath nhi lete hai 

// const arr=[10,20,30,12,300];
// arr.name="Harsh";
// for(let k in arr){
//     console.log(k,arr[k]);
// }

const obj = {
  name: "harsh",
  age: 21,
  place: "Bombay"
};

Object.defineProperties(obj, {
  name: {
    enumerable: true,
    writable: false
  },
  toString:{
    enumerable:true
  }
});

console.log(Object.getOwnPropertyDescriptor(obj,'name',Object.prototype,'toString'));
