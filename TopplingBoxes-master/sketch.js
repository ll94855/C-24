const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,100,100);
    box2 = new Box(800,300,100,100);
    pig1 = new Pig(700,325);
    log1 = new Log(700,250,300,PI/2)

    box4 = new Box(600,200,100,100);
    box3 = new Box(800,200,100,100);
    pig2 = new Pig(700,225);
    log2 = new Log(700,150,300,PI/2)

    log3 = new Log(645,50,150,PI/4);
    log4 = new Log(765,50,150,PI/-4);

    ground = new Ground(600,height,1200,20)

    bird1 = new AngryBird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    
    
    bird1.display();


    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    ground.display();
}