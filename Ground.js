class Ground{
    constructor(x,y,width,height){
        var options={
            'isStatic': true
          }
        
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x,pos.y,this.width,this.height);
    }

// display(){
//     var pos = this.body.position;
//     var angle = this.body.angle;
//     push();
//     translate(pos.x, pos.y);
//     rotate(angle);
//     rectMode(CENTER);
//     fill(255);
//     rect(pos.x,pos.y,this.width,this.height);
//     pop();
//     }
}