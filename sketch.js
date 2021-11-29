const Engine = Matter.Engine;
const World = Matter.World;

var engine, world;
var bgImg, bottleImg;


var bottles = [
  { x: 200, y: 230, isAttached: true },
  { x: 300, y: 230, isAttached: false },
  { x: 400, y: 230, isAttached: false },
  { x: 500, y: 230, isAttached: false },
  { x: 600, y: 230, isAttached: false },
  { x: 700, y: 230, isAttached: false },

];

function preload() {
  bgImg = loadImage("./assets/bg.jpg");
  bottleImg = loadImage("./assets/bottle.png");
}

function setup() {
  createCanvas(950, 470);
  engine = Engine.create();
  world = engine.world;

  

  }

function draw() {
  background(bgImg);

  //Engine.update(engine);
  
  handleBottles();
   
}


function handleBottles() {
  addBottles();
  for (let i = 0; i < bottles.length; i++) {
      drawBottles(i);
      // Move the bottles
      bottles[i].x -= 1;
      if (bottles[i].x < 300) {
        bottles.shift();
      }
  }
}


function drawBottles(i) {
  push();
  imageMode(CENTER);
  image(bottleImg, bottles[i].x, bottles[i].y, 100, 100);
  pop();
}

function addBottles() {
  if (bottles.length < 7) {
    bottles.push({
      x: 800,
      y: 230,
    });
  }
}


