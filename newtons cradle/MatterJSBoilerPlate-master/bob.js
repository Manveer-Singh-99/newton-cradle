class bob{
    constructor(x,y,radiusX,radiusY){
        var opyions={
            isStatic=false,
            restitution=0.7,
            friction=0.3
        }
      this.body = Bodies.ellipse(x,y,radiusX,radiusY,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        fill(255);
       ellipse(pos.x, pos.y, this.radiusX, this.radiusY);
      }
}