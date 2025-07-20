//Changing Prototype 
let obj1={
    a:1,
    b:2
}
let obj2={
    c:1,
    d:2
}
obj2 = Object.create(obj1);
obj2.__proto__=obj1;      //Yewala bahut costly operation h
console.log(obj2.__proto__);