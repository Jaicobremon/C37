var allPlayers;
var database;
var gameState= 0;
var playerCount;
var form,player,game;
var cars, car1, car2, car3, car4;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-20);
  game= new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background(255)
  if(playerCount=== 4){
    game.update(1);
  }
  if(gameState ===1){
    game.play();
  }
  
  
   
}

