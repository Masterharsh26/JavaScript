Timer Project: Completed
H/W: Countdown Timer for Olympic 2028


c: Accessing by CSS Selectors:
   i: Single Element:
      Method: document.querySelector(selector)
      Description: Returns the first element matching the specified CSS              //Nodelist ki tarah rehta hai
      selector.
    


    ii: Multiple Elements:
        Method: document.querySelectorAll(selector)
        Description: Returns a static NodeList of all elements matching the 
        specified CSS selector.
    



d: Accessing by Tag Name
   Method: document.getElementsByTagName(tagName)
   Description: Returns a live HTMLCollection of all elements with the 
   specified tag name (e.g., div, p, a).

e: Accessing Using Relationships
   i: Parent Node:
   Method: element.parentNode or element.parentElement
   Description: Access the immediate parent of an element.

   ii: Child Nodes:
   Method: element.childNodes (includes text nodes) or element.children 
   (only element nodes)
   Description: Access all child nodes of an element.

   iii: First and Last Child:
   Methods: element.firstChild, element.lastChild, 
   element.firstElementChild, element.lastElementChild

   iV: Sibling Nodes:
   Methods: element.nextSibling, element.previousSibling
   Element Siblings: element.nextElementSibling, 
   element.previousElementSibling

1.document.getElementById("first").innerHTML
        iske under jo main tag h , uske under k saare elemet ko output me dega , koi aur bhi tags hua unko bhi print krwata hai 

2.document.getElementById("first").textContent
      isme wo element bhi dhik jaega jisko humne hide krke rkha hai 
       
3.document.getElementById("first").innerText
      Jo screen pe hai usi ko show krega



