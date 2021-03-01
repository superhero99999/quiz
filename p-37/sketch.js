var canvas, backgroundImage;
var allPlayers
var gameState = 0;
var playerCount;

var database;
var answer
var question, player,quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if (playerCount==4){
    quiz.update(1)
  }
  if (gameState==1){
    clear()
    quiz.play()
  }
  
}
