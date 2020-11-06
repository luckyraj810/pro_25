
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxl, boxm, boxr;
var bin1,bin2,bin3;
var paper1,ground1;
var dustbinimg,paperimg;

function preload()
{

//dustbinimg=loadImage("dustbingreen.png");
//paperimg=loadImage("paper.png");




	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,690,1600,70);
	paper = new Paper(200,200,40);
	bin1= new bin(1050,645,150,20);
	bin2=new bin(1120,555,20,200);
	bin3=new bin(980,555,20,200);
	
	bin1.image=loadImage("dustbingreen.png");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  

  drawSprites();
  paper.display();
  image(bin1.image,970,460,170,200)
  ground.display();    
  
 // bin1.display();
 // bin2.display();
 // bin3.display();
 

  //console.log(paper.x);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-100});   
	 }
   }


