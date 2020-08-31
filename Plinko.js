class Plinko {
    constructor(x, y){
      this.body=Matter.Bodies.circle(x,y,10)
      Matter.World.add(world,this.body)
      this.radius=10;
     this.body.isStatic=true
      
    }
  display() {
    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
  }
  
  };