
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let a = prompt("Hey what is your age???");

if (a<18){
  alert("You are a minor");
}
else{
  alert("You are an adult");
}