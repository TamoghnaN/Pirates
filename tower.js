//create a class--> class ClassName{}
class Tower{
constructor(x,y,width,height){                  //function setup
    var options = {isStatic:true}
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.towerImage=loadImage("assets/tower.png")   //folderName/filename
    this.width =width;
    this.height = height  
     World.add(world,this.body);

}

towerDisplay(){             //function Draw
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle)
imageMode(CENTER);
image(this.towerImage,0,0,this.width,this.height)
//image(imageName,x,y,w,h)
pop ();

}
}