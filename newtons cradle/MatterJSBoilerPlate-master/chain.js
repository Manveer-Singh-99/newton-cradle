class chain{
    constructor (body1, body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.3,
            length:10
        }
        
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
        display(){
        strokeWeight(4);
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y);
         
        }  
}