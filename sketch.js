   
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,680,800,20);

	ball1 = new PaperBall(100,650);

	box1 = new Box( 650, 660, 200, 20);
	box2 = new Box( 540, 620, 20, 100);
	box3 = new Box( 750, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  ground1.display(); 
  ball1.display();
  box2.display();
  box3.display();
  box1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:1,y:-1});
	  ball1.velocityY = -5;
	}
}

