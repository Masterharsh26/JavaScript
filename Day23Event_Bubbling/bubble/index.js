const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

 
//Event bubbling(ander se bahar) and event capture(bahar se ander)

//By default Bubbling hi chlta hai     addEventListener(first_event,callback,capture)

child.addEventListener('click', (event)=>{
    // console.log("child Clicked");
    //  console.log(event.target);                                      //event ko trigger kisne kiya hai
},true);

parent.addEventListener('click', (event)=>{
    // console.log("parent Clicked");
    // console.log(event.target);
},true);

grandparent.addEventListener('click', (event)=>{
    // console.log("grandparent Clicked");
    // console.log(event.target);
    console.log(event.currentTarget);
},true);

