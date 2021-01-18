const Engine=Matter.Engine; 
const World= Matter.World;
const Bodies= Matter.Bodies;

var myengine, world;
var ground;
var pig1;
var log1;
function setup() {
  //create canvas
  var canvas =createCanvas(1200,600);
  myengine=Engine.create();
  world=myengine.world;
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  box5=new Box(810,160,70,70);
  ground1=new Ground(600,height,1200,20);
  pig1=new pig(810,350);
  pig2=new pig(810,240);
  log1=new Log(810,260,300,PI/2);
  log2=new Log(810,180,300,PI/2);
  log3=new Log(760,120,150,PI/7);
  log4=new Log(870,120,150,-PI/7);
  bird1=new bird(100,100);
  
}

function draw() {
  //background
   background(0); 
   Engine.update(myengine)            
  //rectangle  
  //to make the rectangle's centre at 200,200 
fill("white");  
 box1.display();
 box2.display();
 fill("brown");
 ground1.display();
 pig1.display();
 log1.display();
 box3.display();
 box4.display();
 box5.display();
 pig2.display();
 log2.display();
 log3.display();
 log4.display();
 bird1.display();
}