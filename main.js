function randomcolor(){
var colors=["#ff0000","#ff7700","#fbff00","#00ff00"];
var randomcolor=colors[Math.floor(Math.random()*colors.length)];
var x=document.getElementById("hastack");
x.style.color=randomcolor;
}