const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos=[]
var particles=[]
function preload(){

}
function setup() {
  createCanvas(500,700);
  engine = Engine.create();
    world = engine.world;

  ground=new Ground()
  column1=new Column(100)
  column2=new Column(250)
  column3=new Column(400)
  column4=new Column(500)
  column5=new Column(0)
  for (var i=40; i<=500;i=i+50){
    plinkos.push(new Plinko(i,75))
      }
      for (var i=75; i<=500;i=i+50){
        plinkos.push(new Plinko(i,150))
          }
for (var i=40; i<=500;i=i+50){
  plinkos.push(new Plinko(i,220))
  }
for (var i=75; i<=500;i=i+50){
 plinkos.push(new Plinko(i,290))
 }
  for (var i=40; i<=500;i=i+50){
  plinkos.push(new Plinko(i,360))
}

  
}

function draw() {
  background(255,25,255); 
  Engine.update(engine);
  ground.display() 
  column1.display()
  column2.display()
  column3.display()
  for (var i=0; i<plinkos.length;i++){
    plinkos[i].display()
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(100,350)))
  }
  for (var t=0; t<particles.length;t++){
    particles[t].display()
  }
  

 
  


  drawSprites();
}