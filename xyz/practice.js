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
let q = 10;
let sum = 0;
for (i=0;i<=q;i++){
    sum = sum + i;
}
console.log(sum);
