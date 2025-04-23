const palindromeInput = document.getElementById('palindromeInput');

function reversed(str){
    return str.split("").reverse().join("");
}

 function palindrome(str){
 const value=palindromeInput.value;
 const reverse =reversed(value);

 if(value === reverse){
    alert("P A L I N D R O M E");
 } else {
    alert("Not a palindrome");
 }
 palindromeInput.value = ""
}
