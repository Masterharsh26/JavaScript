   //FOr Timer
// function timing(){
// const timer = document.getElementById('root');
// const now = new Date();
// const IndianTime = now.toLocaleTimeString();
// timer.innerHTML = IndianTime;
// }

// setInterval(timing,1000);

       

// const timer = document.getElementById('root');
// timer.style.fontSize = "200px";
// timer.style.display = "flex";
// timer.style.height = "100vh";
// timer.style.justifyContent = "center";
// timer.style.alignItems = "center";



//-----------------------------------------------------------------------------------------------------------------------------------
// const id = document.querySelector('#first');          //  # for id , . for classS
// id.innerHTML = "Hello Money";

// const id2 = document.querySelector('.header2');      //selecting class
// id2.style.backgroundColor = "pink";


//  How to iterate over Node list

// const obj = document.querySelectorAll('.header1')     //It will select all classes

//1:  obj.forEach((val)=>{
//     console.log(val)
//     })


// 2: for(let val of obj)                                 //for of 
// console.log(val)

// 3: for(i=0;i<obj.length;i++)
//     obj[i].style.color = "red";

//  Convert NodeList into array
//  Array.from(obj)





// ****************************

// const obj = document.getElementsByTagName('h1');

// let team = document.getElementsByTagName('li');

// How to iterate over it
// for(let i=0;i<team.length;i++)
// team[i].style.color = "black";

// 2: for(let val of team)
    // console.log(val)

// 3: Array.from(team).forEach((val)=>{
// console.log(val);
//  })





// ****************************

// const list = document.querySelector('li');
// console.log(list.parentElement);
// console.log(list.parentNode);


const par = document.querySelector('ul');              
// console.log(par);
// console.log(par.childNodes);                          // Child nodes return krwata hai  , Spaces ko bhi dhyan me rkhta hai  mtlb ye Children k sath sath space bhi as a children hi manta haiu
// console.log(par.children);                            //Only it will return children
// console.log(par.firstChild);
// console.log(par.firstElementChild); 



// innerHTML
// textContent
// innerText
