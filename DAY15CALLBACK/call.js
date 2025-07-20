//Call Back fxn
function names(fun){
    console.log("Hello ji, kaisan ba");
    fun();
};
function greet(){
    console.log("I am call back fxn");
};
names(greet);

function fetchData(){
    console.log("I am fetching Data");
};
setInterval(fetchData,5000);          //5000 is in milisec 


