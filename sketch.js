 var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
	var packageBody,ground,bgImage,bg;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	var engine,world;
 function preload()
  {
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	bgImage=loadImage("bg90.png");
   }

 function setup() 
 {
	createCanvas(1200, 500);
	rectMode(CENTER);
	
	bg=createSprite(600,190,20,20);
	bg.addImage( "bg",bgImage);
	bg.scale=1.4;
	
	packageSprite=createSprite(600, 70, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(600, 90, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(600,490,1200,10);
	groundSprite.shapeColor=color(100)

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(600,90,10, {restitution:0.4,isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(600,480,1200,20 , {isStatic:true} );
 	World.add(world, ground);
 }

 function draw() 
 {
	rectMode(CENTER);
	background(0);
	drawSprites();

	Engine.update(engine);

	packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ; 
   }

	function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		packageSprite.velocityY = 4;
		Matter.Body.setStatic( packageBody , false);
	}
   } 
