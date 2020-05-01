var canvas = document.getElementById('myCanvas');

// get drawing context for the canvas
var ctx = canvas.getContext('2d');

if(ctx){
    setInterval(draw, 10);
}

var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

function draw(){
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;

    if(x == canvas.width){
        x -= dx;
    }
    if(y == canvas.height){
        y -= dy;
    }
    
}
