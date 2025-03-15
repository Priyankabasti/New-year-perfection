let a=10;
let b=20;
let sum=a+b;
let diff=a-b;
let mul=a*b;
let div=a/b;
let answer = "the answer is " +sum + " " +diff+ " " +mul+ " " +div;
console.log(answer);
// print(answer);
// alert(answer);

//Events
{/* <button onclick="date()">India</button> */}

function add(a,b) {
    return a + b;
}
 async function differ(b,c) {
    return b - c;
 }
 differ(14,2);
 console.log(differ(16,4))


 //Normal function
 
 function myFunction(){
    var name= function myName(){
        alert("enter your name")
    };
    return "Hello "+name+" How are you?"
 }
 myFunction()
  console.log(myFunction())
  document.write(4+4);

  //function to take input from user


    function calculate(){
        var first= prompt("enter your first number");
        var second= prompt("enter your second number")
        var sum=parseInt(first)+parseInt(second);
        alert("sum is " + sum);
    }
    calculate()