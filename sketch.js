
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function setup() {
	createCanvas(800, 700);

	 var ball_options={
		 isStatic:false,
		 restitution:0.3,
		 friction:0,
		 density:1.2
	 }
	 engine = Engine.create();
	 world = engine.world;

	 ground= new ground(width/2,670,width,20);
	 leftSide= new leftSide(1100,600,20,120);
	 rightSide=new rightSide(1500,600,20,120)

	

	//Create the Bodies Here.
     Matter.Bodies.circle(40,60,10,ball_options)
     World.body=(world.ball)
	Engine.run(engine);
  
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  ground.display();
  leftSide.display();
  rightSide.display();
  ball.display()
    drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		ball.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}

