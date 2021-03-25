
var player;
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,ground13; 
var canvas;

function preload() {
  backgroundImg = loadImage("images/background.jpg");
  playerImg = loadImage("images/player.png");
}

function setup() {
  canvas = createCanvas(6300, displayHeight - 150);

  player = createSprite(100, displayHeight - 560, 50);
  player.addImage(playerImg);
  player.scale = 0.1;
  
  ground1 = createSprite(500, displayHeight - 205, 1000, 110);
  ground2 = createSprite(1200, displayHeight - 200, 150, 50);
  ground3 = createSprite(1450, displayHeight - 250, 150, 50);
  ground4 = createSprite(1800, displayHeight - 200, 150, 50);
  ground5 = createSprite(2300, displayHeight - 250, 500, 50);
  ground6 = createSprite(2900, displayHeight - 205, 500, 110);
  ground7 = createSprite(3280, displayHeight - 300, 250, 50);
  ground8 = createSprite(4500, displayHeight - 205, 500, 110);
  ground9 = createSprite(4950, displayHeight - 260, 150, 50);
  ground10 = createSprite(5200, displayHeight - 205, 150, 50);
  ground11 = createSprite(5500, displayHeight - 260, 150, 50);
  ground12 = createSprite(5750, displayHeight - 310, 150, 50);
  ground13 = createSprite(6200, displayHeight - 205, 250, 110);

}

function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  player.velocityY = player.velocityY + 0.8;
    
  player.bounceOff(ground1);
  player.bounceOff(ground2);
  player.bounceOff(ground3);
  player.bounceOff(ground4);
  player.bounceOff(ground5);
  player.bounceOff(ground6);
  player.bounceOff(ground7);
  player.bounceOff(ground8);
  player.bounceOff(ground9);
  player.bounceOff(ground10);
  player.bounceOff(ground11);
  player.bounceOff(ground12);
  player.bounceOff(ground13);

  if(ground7.x = 3280) {
    ground7.velocityX = 2;
    ground7.velocityY = 0;
  }
  if(ground7.x = 4120) {
    ground7.velocityX = -2;
    ground7.velocityY = 0;
  }

  camera.position.x = player.x;

  drawSprites();

}

function keyPressed() {
  if(keyCode === 87) {
    player.velocityX = 0;
    player.velocityY = -10;
  }
  if(keyCode === 65) {
    player.velocityX = -10;
    player.velocityY = 0;
  }
  if(keyCode === 68) {
    player.velocityX = 10;
    player.velocityY = 0;
  }
}

function keyReleased() {
  player.velocityY = 0;
  player.velocityX = 0;
}

function end() {

}
