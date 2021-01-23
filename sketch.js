
// namespace

const Engine = Matter.Engine;// Physics engine
const World = Matter.World;// Physical world
const Bodies = Matter.Bodies;// Physical objects

var myEngine, myWorld, ground;
var ball;

function setup() {
  createCanvas(500,500);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  //var options = 

  ground = Bodies.rectangle(250,500,500,50,{isStatic:true });
  World.add(myWorld, ground)// add the body to the world
  console.log(ground);

  var options = {
    restitution : 0.5
  }


  ball = Bodies.circle(100,100,20,options);
  World.add(myWorld, ball);
  
}

function draw() {
  background(0);  
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(250,250, 50,50);

  rect(ground.position.x, ground.position.y, 500,50);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}