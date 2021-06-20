class Ground{
    constructor(x,y,width,height){                  //function setup
        var options = {isStatic:true}
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width =width;
        this.height = height  
         World.add(world,this.body);
    
    }
    
    groundDisplay(){             //function Draw
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    rectMode(CENTER);
    fill("brown")
    rect(0,0,this.width,this.height)
    //image(imageName,x,y,w,h)
    pop ();
    
    }
    }