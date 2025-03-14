//Variables
let a=10;
console.log(a)

let age=20;
console.log(age)
console.log(age++)
console.log(age+2)

var salary=80000;
console.log(salary)

const page=30;
console.log(age)

//Dataa types - Primitive
//String
var Firstname="Priya";
var lastName="Basti";
console.log("My name is " + Firstname + ' ' +lastName);

//Numbers
const total =10;
console.log(total);

//Boolean
const isNumberEven = true;
console.log(isNumberEven);
console.log(!isNumberEven);

//Undefined
let result;
console.log(result);

//Null
let address = null;
console.log(address);

//Dataa types - Non Primitive
// 1. Objects
const person ={
    name : "Priya",
    age : 20,
    address:{
        city : "Bangalore",
        state : "Karnataka",
        country : "India"
        },
    phone:9743567548,
}
console.log(person);
console.log(person.name +' is ' +age+' years old');
console.log(person.age+1);
console.log(person.address.city);

// 2.Array

const arr =[1,2,4,6,8,0];
console.log(arr);
console.log(arr[1]);
console.log(arr[2]+1);

//Operators
// 1. Assignment Operators
let x=10;
let y=20;
console.log(x+y);

//Airthmetic operator
let az=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// 2. Comparison Operators
let c=10;
let d=20;
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);

// 3. Logical Operators
let e=10;
let f=20;
console.log(e>f && e>10);
console.log(e>f || e>10);
console.log(!e>10);

// 4.Conditional (ternary) operator
let g=10;
let h=2;
let answer =(g>h) ? "g is greater" :"h is greater";
console.log(answer);

let preeti = 30;
let parta =3;
let ages = (preeti>parta)?"preeti can go to school":"Partha can go to school";
console.log(ages);

//Functions
 function add(a,b){
    return a+b;
 }
 console.log(add(11,20));

 const add1 = (a,b) =>{
    return a+b;
 }
 console.log(add1(10,25));

 function multifly(a,b){
    return a*b
 }
 console.log(multifly(12,20));
 console.log(a);

 //scope

 let ab=100; //global scope
 {
   let ab=200;
   console.log(ab);
 }
 var ba=300; //block scope
 console.log(ba);
 {
   var ba=400;
   console.log(ba);
 }
 console.log(ab);
 console.log(ba);

 //array method - includes
 let ac=[1,2,3,4,5,6]
let bc=4;
let find=ac.includes(bc);
console.log(find);
//array method - findindex
let abc=[1,2,3,4,5,6]
let bca=4;
let findout=abc.findIndex((a)=>a===bca);
console.log(findout);