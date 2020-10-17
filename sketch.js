const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var world,engine;
var divH = 300;

var particles = [];
var plinko = [];
var division = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(240,790,500,10);
  /*
  divider1 = new Division(480,480,5,250);
  divider2 = new Division(400,480,5,250);
  divider3 = new Division(320,480,5,250);
  divider4 = new Division(240,480,5,250);
  divider5 = new Division(160,480,5,250);
  divider6 = new Division(80,480,5,250);
  divider7 = new Division(0,480,5,250);
  */

   for (var j = 40; j <=innerWidth; j = j + 50){
    plinko.push(new Plinko(j,75));
   }
   for (var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,175));
   }
   for (var j = 40; j <=innerWidth; j = j + 50){
    plinko.push(new Plinko(j,275));
   }
   for (var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,375));
   }
   for (var k = 0; k <= width;k =k+80){
    division.push(new Division(k,height-divH/2,10,divH));
   }
}

function draw() {
  background(0);  
  if (frameCount % 20 === 0){
   particles.push(new Particle(random(width/2-200,width/2+200),10,5));
   console.log("particles,20frame");
  }
  for (var l  = 0;l < particles.length; l++){
    particles[l].display();
    console.log("particles");
  }
for (var k  = 0;k < division.length; k++){
  division[k].display();
}

 /* divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
  divider7.display();
  */
  ground.display();
  for (var j = 0; j <=plinko.length; j++){
    plinko[j].display();
   }
  drawSprites();
}

 


