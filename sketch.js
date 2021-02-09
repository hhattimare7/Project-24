
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftBox, bottomBox, rightBox, ground, ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Box(400,395,800,10);
	leftBox = new Box(500,370,20,70);
	bottomBox = new Box(570,390,150,20);
	rightBox = new Box(650,370,20,70);

	ball = new Rad(100,100,20);

	//ballSprite = createSprite(100, 100, 20,20);

	//ballOps = {
	//	restitution: 0.3,
    //    friction:0.5,
    //    isStatic:false,
    //    density :1.2
	//}
	//ball = Bodies.circle(100,100,20,ballOps);
	//World.add(world, ball);

	Engine.run(engine);
  
} 


function draw() {
  rectMode(CENTER);
  background(0);

	ground.display();
	bottomBox.display();
	leftBox.display();
	rightBox.display();

	
	ball.display();

	//ellipseMode(RADIUS)
	//fill(255);
	//ellipse(ball.x,ball.y,20,20)

	//ballSprite.x= ball.position.x 
	//ballSprite.y= ball.position.y 

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:120});
	}
}


