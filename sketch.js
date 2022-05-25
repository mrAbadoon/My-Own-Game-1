
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ground2,ground3,ground4;
var ball;
var background_img,ball_img;
var goalkeeper,goalkeeper_img;
var rightArrow,leftArrow;

function preload(){
   background_img = loadImage("./assets/soccer-goal-with-shadow-net-field-marking-gate-football-field-football-located-football-field-vector_517145-266.webp");
   ball_img = loadImage("./assets/football-png-26.png");
}

function setup() {
  createCanvas(800,700)
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,680,width+80,50);
  ground2 = new Ground(width/2,20,width+80,50);
  ground3 = new Ground(730,height/2,50,height+80);
  ground4 = new Ground(0,height/2,50,height+80);
  
  
  var options = {
    isStatic:false,
    restitution:0,
    friction:0.5
  }
  ball = Bodies.circle(width/2,600,30,options);
  World.add(world,ball);
  goalkeeper = new Keeper(250,225,300,300);

 rightArrow = createImg("./assets/rightArrow(1).png");
 rightArrow.position(700,600);
 rightArrow.size(100,100);
 rightArrow.mouseClicked(positioning);

 leftArrow = createImg("./assets/leftArrow.png");
 leftArrow.position(10,600);
 leftArrow.size(100,100)
 leftArrow.mouseClicked(positioningV) 



  rectMode(CENTER);

  
}


function draw() 
{
  background(0);
  image(background_img,0,0,width,height);
  ground.display();
  goalkeeper.display();
  Engine.update(engine);
  image(ball_img,ball.position.x,ball.position.y,75,75);

  if(keyDown("space")){
    shoot();
  }

  if(collide(ball,goalkeeper)==true){
    
    textSize(30);
    textColor("#F10000");
    text("GAME OVER",width/2,height/2);
  } 

 drawSprites();
}

function positioning(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:0});
}

function positioningV(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.001,y:0});
}

function shoot(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01});
}

function collide(body,sprite){
  if(body!=null){
    var distance = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
    if(distance<=50){
      World.remove(engine.world,ball);
      ball = null;

      return true;
    }
    else{
      return false;
    }
  }
}

