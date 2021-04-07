const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1=new Rubber(600,50,10);
    rubber2=new Rubber(650,60,10);
    rubber3=new Rubber(700,70,10);
    rubber4=new Rubber(750,80,10);

    stone=new Stone(800,100,50);

    iron1=new Iron(150,200);
    iron2=new Iron(900,400);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    stone.display();
    iron1.display();
    iron2.display();

    
 
}