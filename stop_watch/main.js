const count = document.getElementById("count")

function startWatch(){
console.log("hey")
document.getElementById("count").innerHTML="Started timer"
}
function stopWatch(){
    document.getElementById("count").innerHTML="Stopped"

}
function restartWatch(){
    document.getElementById("count").innerHTML="<h2>00:00</h2>"

}