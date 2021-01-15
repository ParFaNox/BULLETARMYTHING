var bullet, wall
var speed, thickness, weight;
var bulletImage;

function preload(){

  bulletImage = loadImage('bullet.png')

}

function setup() {
  createCanvas(1600,400);
  
  speed  = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness, height/2)
  
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.scale = 0.1;
  bullet.addImage(bulletImage)
  
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){

      wall.shapeColor = 'red'

    }


    if(damage<10){

      wall.shapeColor = "blue"

    }
  }
  drawSprites();
}
  

function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}





  
  
  
 