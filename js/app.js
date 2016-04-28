
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 10,
    y = 10;
function drawRect() {
  ctx.fillStyle = "black";
  ctx.clearRect(0, 0, 300, 300);
  ctx.fillRect(x, y, 50, 50);
}

var z = setInterval(function(){
  drawRect();
  x+=52;
},1000)
