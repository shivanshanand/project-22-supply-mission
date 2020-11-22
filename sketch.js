var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bgImage,bg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgImage=loadImage("bg90.png");
}

function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);
	
	bg=createSprite(600,190,20,20);
	bg.addImage( "bg",bgImage);
	bg.scale=1.4;

	
	packageSprite=createSprite(0, 130, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX=4

	helicopterSprite=createSprite(0, 90, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=4;

	groundSprite=createSprite(600,490,1200,10);
	groundSprite.shapeColor=color(150)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(0 , 170 , 10 , {restitution:1,isnonStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle((600,480,1200,20 , {isStatic:true} );
 	World.add(world, ground);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  Engine.update(engine);

  if(helicopterSprite.x>1200&&packageSprite.x>1200){
	packageSprite=createSprite(0, 130, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX=4;

	helicopterSprite=createSprite(0, 90, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=4;
  }

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.velocityY = 4;
 }
}
