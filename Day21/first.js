/*
---------------Create a NODE-----------------------------------------------
/* <li>TS</li>
/* Created an element      -->> Ek fxn bna diye hai 
function attach(content){

    const element = document.createElement('li');              //Element create kiye hai
    element.innerHTML = content;      //"TS"                  //Kha pe rkhna hai
  
    const parent = document.getElementById("root");  //isko html wale site se add bhi to krwana hai
    parent.appendChild(element);

Other way of adding  "append()" isme multiple statement daal skte hai
    const element2 = document.createElement('li');
    element2.innerHTML = content+"V2.0";
  
    parent.append(element,element2);
 };

 */


// attach("TS");
// attach("React");
// attach("Node");


/* *****************TextNode*******************

Jiske sath koi tag nhi hai that is TextNode
 
 const element = document.createTextNode("Hello Coder Army");
 const parent = document.getElementById("root");
 parent.append(element);



*/

/* ***************** Adding Attributes *******************

const element = document.createAttribute("id");   //Attribute bnaya
element.value = "first";                          //id ka naam first hai 

// access to first list                       //first list me is id ko daal rhe hai
      const curr_list = document.querySelector('li');
      curr_list.setAttributeNode(element);

// access to second list      Basically parent se kisi bhi children pe jaa skte hai 

const parent = document.getElementById("root");
parent.children[1].setAttributeNode(element);     //parent.children[1] its the 2nd children

*/



//---------------------------****** Accessing Attributes****---------*----------------------------*-----------------------------------------------------------






 /*   1.Access attribute of a element

        .setAttribute
        .getAttribute
        .removeAttribute

    const elemnt = document.getElementById("root");
    console.log(elemnt.getAttribute("id"));
     // element.setAttribute("custom", "20");   key value 
     // element.setAttribute("class", "Roahn");
     // element.removeAttribute("custom");




// ***********            Add nodes to the DOM                 ************


       const parent = document.getElementById("root");
       const element = document.createElement("li");
       element.innerHTML = "TS";
 

// Adding the element


    parent.prepend(element);       // At begining of list
    parent.append(element);        // At last

//Insert Before
      const child2 = parent.children[1];
      parent.insertBefore(element,child2);     // kisse phle krwana hai that is child2


// parent.replaceChild(element,child2);    //replace bhi kr skte hai

//Using innerHTML
    const parent = document.getELementById("root");
    parent.innerHTML = "TS"   //sirf TS dhikega pure screen pe
    parent.innerHTML += "<li>TS</li>";  //Ye add krwa dega aur phle wala bhi rhega 

7: Using insertAdjacentHTML() or insertAdjacentElement():

Koi div phle se hai , usse phle agar kisi ko add krna ho to kaise add kr skte hai 
      
      const element = document.createElement("div");
      element.innerHTML = "Hello Coder Army";
  parent.insertAdjacentElement("beforebegin", element);
or,
   parent.insertAdjacentElement("afterend", element);


    2) afterbegin: Inside the element, before its first child.
       beforeend: Inside the element, after its last child.
                  Ye dono use krne se div element inside the existing div chla jaega



                  // Delete node or element
{
         const element = document.querySelector('li');
         element.remove();

}
*/
