
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground;
var ball;

function setup() {
var canvas=createCanvas(1000,800);
 
myengine = Engine.create();
    myworld = myengine.world;

    var options={
      isStatic:true
    }

ground=Bodies.rectangle(300,600,900,20,options);
World.add(myworld,ground);
var ball_options={
restitution:1.0
}

ball=Bodies.circle(300,300,30,ball_options)
World.add(myworld,ball);
//ball.debug="true"
//console.log(box);
//console.log(box.type);
//console.log(box.position.x);
//console.log(box.position.y);
}

function draw() {
  background(0); 

  Engine.update(myengine);

 rectMode(CENTER);
  //rect(200,200,50,50); 


  rect(ground.position.x,ground.position.y,300,20)
  rectMode(RADIUS)
  circle(ball.position.x,ball.position.y,30)



}