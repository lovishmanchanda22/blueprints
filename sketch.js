
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var box;
var box2;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    box = new Box(200,300,50,50);
    box2 = new Box(240,100,50,50);
// var options={
//   isStatic:true
// }
// var ball_options={
//   restitution:1.0
// }
 // ball = Bodies.circle(200,200,50,ball_options);
 // ground = Bodies.rectangle(width/2,height,width,50,options);
 //World.add(world,ground);
 //World.add(world,ball);
 //console.log(ground);
ground = new Ground(200, height, 400, 20);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  // ellipseMode(RADIUS);
  // ellipse(ball.position.x,ball.position.y,50,50);
  // rectMode(CENTER);
  // rect(ground.position.x,ground.position.y,width,50);

 box.display();
 box2.display();
 ground.display();


}