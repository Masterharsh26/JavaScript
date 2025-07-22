// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');


// const body = document.body;
// document.querySelector('body');

// red.addEventListener('click',()=>{
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';
// })


// const buttons = document.querySelectorAll('button');    //saare buttons ka ek sath access
// const body = document.body;
// buttons.forEach( (button)=>{   //ek ek kr k iterate kr rhe basically loop chl rha hai
   
// button.addEventListener('click', ()=>{
//         body.style.backgroundColor = button.id;    //button.id = color of that button
//     })

// })
//But ye code upar wala jyada optimized nhi hai kyuki agar number of buttons bahut honge then this might will cause problem , js slow ho jaega kyuiki memory will consume more 



 /*------------------*-------------------------------------*----------------
*/
const root = document.getElementById('root');


root.addEventListener('click',(event)=>{
    // console.log(event.target)
    // console.log(event.target.tagName)      isse BUTTON aayega
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
})


//.stopPropagation  isse ye hoga ki jo area chaiye whi milega 
//.stopPropagation jha lgayenge wha k baad ye propagate nhi hoga fhir