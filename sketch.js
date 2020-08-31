var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var score=0
var particle;
var turn=0
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var engine, world
var count;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


function setup() {
  createCanvas(480,800);
  engine = Engine.create()
    world = engine.world;

  ground=new Divisions(240,780,480,38)
  
for(var j=40; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for(var j=15; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

for(var j=40; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,275));
}

for(var j=15; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,375));
}




var divisionHeight=300;

for(var k=0; k <=width; k=k+80) {
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}



}

function draw() {
  background("black");
  Engine.update(engine)
  ground.display();

  textSize(18);
  textFont("Georgia");
  textStyle(BOLD);

 // text("500",)
    text("Score: "+ score, 250, 100);

  for(var i=0; i<plinkos.length;i++) {
       plinkos[i].display()
  }

 // text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY)
  
if(frameCount%60===0) {
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

for(var i=0; i<particles.length;i++) {
  
  
  if(particles[i]) {
    particles[i].display();

    if(particles[i].body.position.y>500&&!particles[i].check)
    {   
      particles[i].check=true;

        if(particles[i].body.position.x<300) {
            score=score+500;
          // particles[i]=null;
            if(count>=5) gameState="end"
            break
        }

        if(particles[i].body.position.x>301&&particles[i].body.position.x<600) {
          score=score+100;
         // particles[i]=null;
          if(count>=5) gameState="end"
        break
        }
    

    if(particles[i].body.position.x>601&&particles[i].body.position.x<900) {
      score=score+200;
     // particles[i]=null;
      if(count>=5) gameState="end"
    break
    }
}
  }
}
for(var i=0; i<divisions.length;i++) {
  divisions[i].display()
}

  
}


function mousePressed() {

  if (gameState!=="end")
{
  count++;
  particle=new Particle(mouseX,10,10,10);
}

}


