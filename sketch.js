var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1, car2,cars
var database,gameState,car1img,car2img,trackimg,playerCount,allPlayers

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1img=loadImage("assets/car1.png")
  car2img=loadImage("assets/car2.png")
  trackimg=loadImage("assets/track.jpg") 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database=firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.updateState(1);
  }
  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
