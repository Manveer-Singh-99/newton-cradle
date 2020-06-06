var  bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var Chain1,Chain2,Chain3,Chain4,Chain5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;
  Roof = new roof(180,150,300,10)
	Chain1 = new chain(bobObject1,Roof,80,0)
	Chain2 = new chain(bobObject1.body,Roof.body,40,0)
	//Chain3 = new chain(bobObject1.body,Roof.body)
	//Chain4 = new chain(bobObject1.body,Roof.body)
  //Chain5 = new chain(bobObject1.body,Roof.body)
  bobObject1 = new bob(60,220,20);
  bobObject2 = new bob(80,220,20);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(225);
  //bobObject1=ellipse(70,340,0,50);
  //bobObject2=ellipse(120,340,0,50);
  //bobObject3=ellipse(170,340,0,50);
  //bobObject4=ellipse(220,340,0,50);
  //bobObject5=ellipse(270,340,0,50);
  Roof.display();
  drawSprites();
}