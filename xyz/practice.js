//Conditional statement -if statement
// let a = prompt("Hey what is your age???");

// if (a < 18) {
//   alert("You are a minor");
// } else {
//   alert("You are an adult");
// }

// //if else problem
// let age = prompt("How old are you??");
// if (age >= 18 && age <= 60) {
//   alert("You will come under this scheme");
// } else {
//   alert("You will not come under this scheme");
// }

//same thing using ternary operator
// let age = prompt("How old are you??");
// age >=18 && age <=60 ? alert("You will come under this scheme") : alert("You will not come under this")

//another one
// let name =prompt("Hey whats yoyr name?");
// name="Priya" ?"Hey Priya Welcome":"No you cant enter here Go back.."

//switch statement
// let day = prompt("Enter the day of the week");
// switch (day) {
//   case "monday":alert("Today is Weekday");
//         break;
//   case "tuesday":alert("Today is Weekday");
//         break;
//   case "wednesday": alert("Today is Weekday");
//         break;
//   case "thursday":alert("Today is Weekday");
//         break;
//   case "friday":alert("Today is Weekday");
//         break;
//   case "saturday":alert("Today is Weekend");
//         break;
//   case "sunday":alert("Today is Weekend");
//         break;
//   default:alert("Invalid day");
// }

//Another switch case problem
// let word =prompt("Enter your word")

// switch(word){
//  case "a":alert("its a vowel");
//  break;
//  case "e":alert("its a vowel");
//  break;
//  case "i":alert("its a vowel");
//  break;
//  case "o":alert("its a vowel");
//  break;
//  case 'u':alert("its a vowel");
//  break;
//  default:alert("its a consonant");
//  break;
// }


//For loop-1
// let n =  prompt("Enter the number of times you want to print");
// for (i=0;i<n;i++){
//     console.log(i);
// }

//For loop-2
// let m = 10; 
//  let sum; 
// for (i=0;i<=m;i++){
//     sum+=i;
//     console.log(sum);
// }

//first 10 natural numbers
// let p = 10; 
//  let sums=0; 
// for (i=0;i<p;i++){
//     sums=i+1;
//     console.log(sums);
// }

//sum of first 10 natural numbers
// let q = 10;
// let sum = 0;
// for (i=0;i<=q;i++){
//     sum = sum + i;
// }
// console.log(sum);

//Print even numbers
// let r=prompt("Enter the range");
// for(let i=1;i<r;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Print even numbers from 2 to 20.
// let s=20;
// for(let i=2;i<=s;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Print odd numbers from 2 to 20.
// let t=20;
// for(let i=0;i<t;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// Calculate the sum of numbers from 1 to 100.
// let u=100;
// let sum=0;
// for(let i=0;i<=u;i++){
//     sum=sum+i;
// }
// console.log(sum);

// Print the multiplication table of 5.
// let s=50;
// for(let i=2;i<=s;i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }


//Find the factorial of a number (e.g., 5! = 120).
// let u=prompt("enter the number to findout the factorial");
// let sum=1;
// for(let i=1;i<=u;i++){
//     sum=sum*i;
// }
// console.log(sum);

//Print the squares of numbers from 1 to 10.
// let u=10;
// let sum;
// for(let i=0;i<=u;i++){
//     sum=i*i;
//     if(sum%i==0){
//         console.log(sum);
//     }
// }

//Print all odd numbers between 1 and 50.
// let u=50;
// for(let i=0;i<=u;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// Count how many odd numbers are in an array.
// let v=[1,2,3,4,5,6,7,8,9,10];
// let count=0;
// for(let i=0;i<=v[i];i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// Count how many even numbers are in an array.
// let v=[1,2,3,4,5,6,7,8,18,4,10,12];
// let count=0;
// for(let i=0;i<=v.length;i++){
//    if(v[i]%2===0){
//     count++;
//    }
// }
// console.log(count);

// Count how many numbers are in an array.
let v=[1,2,3,4,5,6,7,8,18,4,10,12];
let count=0;
for(let i=0;i<=v.length;i++){
   if(v[i]<v.length-1){
    count++;
   }
}
console.log(count);



 
