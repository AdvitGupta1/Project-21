var bullet,wall,speed,weight,deformation,thickness,damage,bulletWeight,bulletSpeed;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83); 
 bullet= createSprite(500, 200, 100, 5);
 wall=createSprite(1200,200,thickness,height/2);
 bulletSpeed=random(223,321);
 bulletWeight=random(30,52);
 wall.shapecolor=(80,80,80)
 bullet.velocityX=bulletSpeed;
 bullet.shapeColor="white";
 background("black");
}

function draw() {
  background(80,80,80);  
  drawSprites();
  if(bullet.collide(wall)){
    damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness)
  if(damage<10){
    wall.shapeColor="green";
    bullet.velocityX=0;
  }
  if(damage>10){
    wall.shapeColor="red";
     bullet.velocityX=0
  }
  console.log(damage);
}
}