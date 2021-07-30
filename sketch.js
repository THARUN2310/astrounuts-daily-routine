var astronut;

function preload() {
  bg = loadImage("iss.png");
  bathing = loadAnimation("bath1.png","bath2.png");
  brushing = loadAnimation("brush.png");
  drinking = loadAnimation("drink1","drink2");
  eating = loadAnimation("eat1","eat2");
  gyming = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  moving = loadAnimation("move.png","move1.png");
  sleeping = loadAnimation("sleep.png");


}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronut = createSprite(300,230);
  astronut.addanimation
  
}

function draw() {

  textSize(20);
  fill("white");
  text("instructions",20,35);
  textSize(15);
  text("up arrow = brushing",20,55);
  text("down arrow = gymming",20,70);
  text("left arrow = eating",20,85);
  text("right arrow = bathing",20,100);
  text("mkey = moving",20,115);

  edges=createEdgeSprites();
  astronut.bounceoff(Edges);

}
