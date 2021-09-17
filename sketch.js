
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,530,800,20)
	left = new Ground(550,480,20,100)
	right = new Ground(700,480,20,100)
	ball = Bodies.circle(200,200,20)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  	left.display()
	  right.display()
	  ellipseMode(RADIUS)
	ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.045,y:-0.045})
	}
}

