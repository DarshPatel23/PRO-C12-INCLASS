var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimg




var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 cloudimg = loadImage("cloud.png");
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,10);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  //console.log(trex.y)
  
  
  
  //jump when the space button is pressed
if (keyDown("space")&& trex.y>=156.5) {
  trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8
  if (ground.x < 0) {
  ground.x = ground.width / 2;
  }
  trex.collide(invisibleGround); 
  
  console.log(trex.y);


  //console.log(frameCount);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if(frameCount %60==0){
  cloud = createSprite(600,100,40,10);
  cloud.velocityX = -3;
  cloud.addImage(cloudimg);
  cloud.scale = 0.5;
  cloud.y = Math.round(random(10,60));
  cloud.depth = trex.depth;
  trex.depth = trex.depth+1;
 }
}



