const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
let towerObject;
let groundObject;
let cannon;
let backgroundImg;

function preload(){
    backgroundImg=loadImage("./assets/background.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //to mention that the towerObject is created from the tower
    //objectName = new ClassName();


    towerObject = new Tower(150,390,160,310);
    groundObject = new Ground(600,570,1200,60);
    cannon = new Cannon(190,160,110,50);
}
function draw(){
    background(0);
    image(backgroundImg,0,0,width,height);
    Engine.update(engine);

    //call the towerDisplay function--> objectName.functionName()
   
    towerObject.towerDisplay();
groundObject.groundDisplay();
cannon.cannonDisplay();

}
/*
TO CREATE AN OBJECT FROM A CLASS
    1. create a variable for the object
    2. Mention that the object belongs to the specific class
    3. Display the object

*/