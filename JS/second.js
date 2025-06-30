//Select and Change Text
let text=document.getElementById("intro").innerHTML;
console.log(text)
document.getElementById("intro").innerHTML="hello world!"

//Change Image Source
//Select an image by its id="main-img" and change its src attribute to another image URL.

function change(){
document.getElementById("main-img").src="./images/about-us2.png";
}

//Change Style with JavaScript
//Change the background color of a <div> with id="box" to blue.
document.getElementById("box").style.background="red"