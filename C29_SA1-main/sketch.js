const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

//constraint helps you connect objects or points with other objects or points, specifies that those connected work together (between point and object)
//composite is connecting multiple objects together, connected similar object together

var fruit, rope;
var fruit_cun;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245, y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body, fruit);
  fruit_cun = new Link(rope, fruit) //created the objects

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  
  ground.show();
  rope.show();

  ellipse(fruit.position.x, fruit.position.y, 30,30)

  Engine.update(engine);
  

 
   
}