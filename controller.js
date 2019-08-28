var i = 0;
var txt = 'De aficionados, para aficionados...'; 
var speed = 75; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("slogan").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}