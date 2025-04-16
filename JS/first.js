console.log("hello from priya");

//var(gobal scope) let const(block scope)
let fullName = "priyanka";
let age = 24;
const a = null;
let b = undefined;
const isFollow =true;

console.log(age , fullName, a, isFollow, b);

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
console.log(num, price, isLogin, name, address, isFollow, isFollow1);


//= operator
console.log (4 == '4') //true
console.log (4 === '4') //false

console.log(isNaN('hello'))
console.log(isNaN(NaN))
console.log(isNaN(undefined))
console.log(isNaN('123'))
console.log(isNaN(null))

//array
let fruits = ["apple" , "banana", "orange","jackfruit"];

for (let i =0;i< fruits.length;i++){
  console.log(fruits[i])
}

//