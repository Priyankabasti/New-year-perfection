//var(gobal scope) let const(block scope)
let fullName = "priyanka";
let age = 24;
const a = null;
let b = undefined;
const isFollow =true;

// console.log(age , fullName, a, isFollow, b);

//data types
//1. Primitive -- number, string, boolean, null, undefined,BigInt, symbol
let num = 10;
let price =290;
let isLogin = true;
let name = "priyanka";
let address = "bangalore";
let isFollow1 = null;
let isFollow2 = undefined;
let isFollow3 = BigInt(100);
let isFollow4 = Symbol("priyanka");
// console.log(num, price, isLogin, name, address, isFollow, isFollow1);


//= operator
// console.log (4 == '4') //true
// console.log (4 === '4') //false

// console.log(isNaN('hello'))
// console.log(isNaN(NaN))
// console.log(isNaN(undefined))
// console.log(isNaN('123'))
// console.log(isNaN(null))

//array
let fruits = ["apple" , "banana", "orange","jackfruit"];

for (let i =0;i< fruits.length;i++){
  // console.log(fruits[i])
}

//Map
const numbers = [1,2,3,4,5];

const double =numbers.map(num => num*3)
// console.log(double);
// console.log(numbers);

//types of output
//1. console.log
//2. return
//3. print
//4. alert
//5. prompt

// console.log("this console.log output")
// window.print(5+4);
// window.alert("this is from alert")
// window.prompt("this is from prompt")
// document.write("hello from document write")

//6. confirm
//7. console.error
//8. console.warn
//9. console.info
//10. console.table
//11. console.assert
//12. console.count
//13. console.countReset
//14. console.clear
//15. console.time

//String Methods
let str = "hello world";

//For in

//For of

//While

//Do While

//function to add numbers
// function add(x,y){
//   return x+y;
// }
// console.log(add(2,4));

//function to take two numbers and give thier sum
// function kudu(){
//   let first = parseFloat(prompt("Enter your first numcber"));
//   let second = parseFloat(prompt("Enter your second number"));

//   let add = first + second;
//   let diff = first - second;
//   let mul = first * second;
//   let div = first / second;

//   alert("the result of "+first+" and "+second+"\n the sum is "+add+  "\n the difference is "+diff+"\n the product is "+mul+"\n the quotient is "+div);
// }
// kudu()

//check the number is even or odd
// function check(){
//   let num = parseFloat(prompt("Enter your first numcber"));

//   if(num %2 ===0){
//     alert("the number is even");
//   } else{
//     alert("the number is odd");
//   }
// }
// check();


// greeting
// function say(){
//   let name = prompt("Enter your name");
//   let age = prompt("Enter your age");
//   let gender = prompt("Enter your gender");
//   let country = prompt("Enter your country");
//   let city = prompt("Enter your city");
//   let phone = prompt("Enter your phone");
//   let email = prompt("Enter your email");
//   let address = prompt("Enter your address");
//   let hobby = prompt("Enter your hobby");
//   let education = prompt("Enter your education");
//   let work = prompt("Enter your work");
//   let salary = prompt("Enter your salary");
//   let car = prompt("Enter your car");
//   let house = prompt("Enter your house");
//   let family = prompt("Enter your family");
//   let friends = prompt("Enter your friends");
//   let about = prompt("Enter about yourself");
//   alert("Hello "+name+"\n your age is "+age+"\n your gender is "+gender+"\n your country is "+country+"\n your city is "+city+"\n your phone is "+phone+"\n your email is "+email+"\n your address is "+address+"\n your hobby is "+hobby+"\n your education is "+education+"\n your work is "+
//     work+"\n your salary is "+salary+"\n your car is "+car+"\n your house is "+house+"\n your family is "+family+"\n your friends is "+friends+"\n about yourself is "+about);
// }
// say();

//Convert Celsius to Fahrenheit
// function convert(){
//   let C = parseFloat(prompt("Enter your number"));
//   F = C*(9/5)+32;
//   alert(F);
// }
// convert();

// Find Maximum
// function max(){
//   let num1 = parseFloat(prompt("Enter your first number"));
//   let num2 = parseFloat(prompt("Enter your second number"));
//   let num3 = parseFloat(prompt("Enter your third number"));
//   if(num1>num2 && num1>num3){
//     alert("num1 is greatest")
//   }else if(num2>num3){
//     alert("num2 is greatest")
//   }else{
//     alert("num3 is greatest")
//   }
// }
// max();

//Get Last Character --- let lastchar=str[str.length-1]
function last(){
let str=prompt("Enter the string");
 let last=str.length-1;
 let lastchar=str[last-1];
 alert(lastchar);
}
last();

//function for intermediate level
