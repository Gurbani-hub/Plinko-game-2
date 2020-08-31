class Divisions {
    constructor(x, y,w,h){
      this.body=Matter.Bodies.rectangle(x,y,w,h)
      Matter.World.add(world,this.body)
      this.width=w
      this.height=h
      this.body.isStatic=true
    }
  display() {
      push()
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    pop()
  }
  
  };