
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,110,30);
	mango2=new mango(1200,180,30);
	mango3=new mango(904,181,30);
	mango4=new mango(1000,190,30);
	mango5=new mango(923,240,30);
	mango6=new mango(989,111,30);
	mango7=new mango(1098,201,30);
	mango8=new mango(1064,47,30);
mango9=new mango(1171,130,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1=new stone(242,407,25);
	SlingShot1 = new Slingshot(stone1.body,{x:235,y:436});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone1.display();
  mango9.display();
  SlingShot1.display();
  
  text("X" + mouseX + "Y" + mouseY, mouseX, mouseY);

  


  groundObject.display();
}
function keyPressed(){
if (keyCode===UP_ARROW){
	console.log("hi");
//Matter.Body.applyForce(stone1.body,stone1.body.position,{x:100,y:-100})
}}
function mouseDragged(){
    //Matter.Body.setPosition(Stone.body, {x:mouseX,y:mouseY});

}
function mouseReleased(){
  //SlingShot1.fly();

}
