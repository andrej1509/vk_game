
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gameEngine;

var x = 10,
    y = 10;
function drawRect() {
  ctx.fillStyle = "black";
  ctx.clearRect(0, 0, 300, 300);
  ctx.fillRect(x, y, 50, 50);
}
var nextGameStep = (function(){
  return requestAnimationFrame ||
  webkitRequestAnimationFrame ||
  mozRequestAnimationFrame ||
  oRequestAnimationFrame ||
  msRequestAnimationFrame ||  
  function (callback) {
    setTimeout(callback, 1000/60);
  };
})();

var gameEngineStart = function (callback) {
  gameEngine = callback;
  gameEngineStep();
}

var gameEngineStep = function(){
    gameEngine();
    nextGameStep(gameEngineStep);
}

var setGameEngine = function(callback){
  gameEngine = callback;
}

var gameLoopRight = function () {
  drawRect();
  x+=1;
  if(x>=100){
    setGameEngine(gameLoopLeft);
  }
}

var gameLoopLeft = function () {
  drawRect();
  x-=1;
  if(x<=50){
    setGameEngine(gameLoopRight);
  }
}

gameEngineStart(gameLoopRight);