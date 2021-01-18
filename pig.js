class pig {
    constructor(x,y){
        var options={
            restitution:0.8
          }
          this.width=50;
          this.height=50;
          //this is physics body with properties
          this.body=Bodies.rectangle(x,y,50,50,options);
          World.add(world,this.body);        
    }

 display(){

    var pos=this.body.position;
    var angle=this.body.angle;
    push(); 
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);   
    strokeWeight(4);
    stroke("green");
    rect(0,0,this.width,this.height)
    pop();

 }



    
}