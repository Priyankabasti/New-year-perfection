const body = document.getElementsByTagName("body")[0]
function setColor(value){
    body.style.backgroundColor = value;
}
function randomColor(){
  const red= Math.round(Math.random()*255);
  const green= Math.round(Math.random()*255);
  const blue= Math.round(Math.random()*255);

  const color = `rgb(${red},${green},${blue})`;

  body.style.backgroundColor = color;
}

function clear1(){
body.style.backgroundColor = "white";
}

const arr1 = [1,2,3,4,5,6,7,]

const double = arr1.map(num =>num*num)
console.log(double)

// finding min and max in array

const arr2 = [1,2,3,4,5,6,7]
const max1 =Math.max(...arr);
const min1 = Math.min(...arr);

console.log(max)
console.log(min)

// another menthod to find min n max

const arr3 = [3, 5, 1, 8, 4];
let max = arr3[0];
let min = arr3[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}
console.log("Max:", max, "Min:", min);

const arr4 = [3, 5, 1, 8, 4];
const reversed =[];

for(let i=arr4.length-1; i>=0; i--){
  reversed.push(arr4[i]);
  console.log(reversed)

}

const arr5= [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr5.length; i++) {
  sum=sum +arr5[i];
}
console.log(sum);

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("kanak"));