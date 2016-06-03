var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


var x = 10;


function loop(){
    ctx.clearRect(0,0,c.width, c.height);
    
ctx.fillStyle = "#FF0000";
ctx.fillRect(x,0,10,75);
x += 5;
    
window.requestAnimationFrame(loop);    
}
loop();