let arr=[2,3,45,67,"harsh",true,2];
console.log(arr);

//length
console.log(arr.length);
console.log(arr[1]);
console.log(arr.at(-1));    //arr.at() is latest , ye negative index p bhi value de dega


// const newarr=arr;
// console.log(newarr);
// console.log(newarr==arr); //Array is non-primitive so as a reference value compare hoga 

//structuredClone   Basically ek new clone bn jaega heap me 
const newarr1=structuredClone(arr);
console.log(newarr1==arr);             //False dega kyuki different copy bn rha hai

//push   arr.push(12);  will add at last
//pop    arr.pop()  will delete the element from last index


//unshift   for adding element at starting point 
arr.unshift(10);
console.log(arr);

//shift  Delete element from start
arr.shift();
console.log(arr);

//delete   deleting from any index  ye jyada use me nhi hai kyuki jha se bhi delete hoga wha pe void/hole create ho jaega
delete arr[2];
console.log(arr);     //[ 2, 3, <1 empty item>, 67, 'harsh', true ]

console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(2));
console.log(arr.includes(10));        //false

//slice   sub-array ko print krega   arr.slice(2,4)  4 will excluded
console.log(arr.slice(1,5));

//splice    arr.splice(2,5)  index 2 se start krke 5 values ko output dega
console.log(arr.splice(2,5)); //Splice directly original array pe act krta hai , original aaray ko change kr deta hai 
console.log(arr); //main array me index 2 se 5 element ko delete kr dega and main array me fhir index 0 and index 1 ka element bachega 

//splice(starting_index,total_element_delete,add value)
let arr21=[1,2,3,4,56,7,678];
arr21.splice(2,3,420,220,340);   //ye jo add ho rha hai , it will add at starting_index only
console.log(arr21);


//Changing to string 
console.log(arr21.toString());   //1,2,420,220,340,7,678
console.log(arr21.join("^"));    //as a string hi kaam krega and it will add any given sign 


//Concatenation 
let arr1=[2,35,6,11];
let arr2=[5,12,19,20];
let arr4=[23,3];
let arr3= arr1.concat(arr2,arr4);
console.log(arr3);

//Pushing 1array into other directly
arr1.push(arr2);
console.log(arr1);  //Ye 2d array bnega and arr1[4][1] ->  12 aayega
console.log(arr1[4][2]);


//2D ARRAY      row*column
let arr2d = [[1,2,3],[5,6,7]];   //2*3
console.log(arr2d[0][0]);


//from   any  array   to   1d array 
let newarrr=arr2d.flat(Infinity);
console.log(newarrr);


//Array.isarray()
let abc=[2,1,4,1];
console.log(Array.isArray(abc));


//new Array
let ac=new Array(10,20);   //[10,20]
let acc=new Array(10);     //isme bss length btayega aur kuch nhi 

//Array in JS won't be in contigious way kyuki iske under kuch bhi aa skta hai like int,string and unka storage type different hoga 