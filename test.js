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