// let a=10;
// let b=20;
// let sum=a+b;
// let diff=a-b;
// let mul=a*b;
// let div=a/b;
// let answer = "the answer is " +sum + " " +diff+ " " +mul+ " " +div;
// console.log(answer);
// // print(answer);
// // alert(answer);

// //Events
// {/* <button onclick="date()">India</button> */}

// function add(a,b) {
//     return a + b;
// }
//  async function differ(b,c) {
//     return b - c;
//  }
//  differ(14,2);
//  console.log(differ(16,4))


//  //Normal function
 
//  function myFunction(){
//     var name= function myName(){
//         alert("enter your name")
//     };
//     return "Hello "+name+" How are you?"
//  }
//  myFunction()
//   console.log(myFunction())
//   document.write(4+4);

//   //function to take input from user


//     function calculate(){
//         var first= prompt("enter your first number");
//         var second= prompt("enter your second number")
//         var sum=parseInt(first)+parseInt(second);
//         alert("sum is " + sum);
//     }
//     calculate();

//     // another function
//     function start(){
//         var name=prompt("enter your name");
//         var age=prompt("enter your age");
//         alert("your name is " + name + " and your age is " + age);

//     }
//     start();

// String Methods
let names = "web developer"
let text = "sgfdsfdhbbajkhdagnabdnhgdgdfg"

let lengthOftext = text.length;
console.log(lengthOftext);
let lengthOfname = names.length;
console.log(lengthOfname);

let char = text.charAt(0);
console.log(char);
let char1 = text.charCodeAt(1);
console.log(char1);

let letter = names.at(2);
console.log(letter);

let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7, 13);
console.log(part);

let repl = names.replace("web", "frontend");
console.log(repl);

//string split method
let str = "hello,world,java,python";
let arr = str.split(",")
console.log(arr);

//string slice method
let str1 = "hello,world,java,python";
let arr1 = str1.slice(7, 13);
console.log(arr1);

//string trim method
let str2 = "   hello,world,java,python   ";
let arr2 = str2.trim();
console.log(arr2);

//string repeat method
let str3 = "hello";
let arr3 = str3.repeat(3);
console.log(arr3);

//string toUpperCase method
let str4 = "hellowwwwwwwwwwwwww";
let arr4 = str4.toUpperCase();
console.log(arr4);

// string toLowerCase method
let str5 = str4;
let arr5 = str5.toLowerCase();
console.log(arr5);

// string concat method
let str6 = "hello ";
let str7 = " world";
let arr6 = str6.concat(str7);
console.log(arr6);