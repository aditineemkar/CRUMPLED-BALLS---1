const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;
var dustbin1, dustbin2;
function setup() {
  createCanvas(1200, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(650, 398, 100, 10);
  dustbin1 = new DustBin(600, 390, 10, 50);
  dustbin2 = new DustBin(710, 390, 10, 50);
  paper = new Ball(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("Yellow");
    text("This small game will teach a young one to throw garbage in the dustbin. \n                 Press Up Arrow to Start, and Up to throw away the trash.", 50, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    fill("Yellow");
    text("Put the ball in the dustbin");
    rectMode(CENTER);
    background(0);
    dustbin.display();
    dustbin1.display();
    dustbin2.display();
    paper.display();

  }}



function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position,{x:2,y:-2});
  }
}