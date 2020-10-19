const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
/*
var box1, pig1;
var backgroundImg, platform;
var score = 0
*/

function setup(){
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;

    ball1 = new ball(200, 200, 80, 80);
    block1 = new block(900,100,70,70)
    block2 = new block(900,100,70,70)
    block3 = new block(900,100,70,70)
    block4 = new block(900,100,70,70)
    block5 = new block(900,100,70,70)
    block6 = new block(900,100,70,70)
    block7 = new block(800,100,70,70)
    block8 = new block(800,100,70,70)
    block9 = new block(800,100,70,70)
    block10 = new block(800,100,70,70)
    block11 = new block(800,100,70,70)
    block12 = new block(800,100,70,70)
    block13 = new block(700,100,70,70)
    block14 = new block(700,100,70,70)
    block15 = new block(700,100,70,70)
    block16 = new block(700,100,70,70)
    block17 = new block(700,100,70,70)
    block18 = new block(700,100,70,70)
    block19 = new block(700,100,70,70)
    block20 = new block(700,100,70,70)
    ground = new Ground(700, 600, 1200, 20);
    rope1 = new rope(ball.body,{x:500, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg); 
    noStroke(); 
    textSize(35) 
    fill("white") 
    text("Score " + score, width-300, 50)
    
    Engine.update(engine);

    ball.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    ground.display();
    rope1.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
