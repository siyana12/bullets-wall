var wall, thickness;
var bullet,speed, weight;
function setup() {
  createCanvas(1400,400);
  speed=random(223,321)
  weight=random(30,52)
 thickness=random(22,83)
 bullet=createSprite(50, 200, 50, 50);
 wall=createSprite(1200,200,thickness, height/2)
 bullet.velocityX=speed;
 bullet.shapeColor="pink"
 wall.shapeColor="orange"
}

function draw() {
  background("grey"); 

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(deformation>10){
      bullet.shapeColor=color(255,0,0);
    }
    
    if(deformation<10){
      bullet.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}
function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}