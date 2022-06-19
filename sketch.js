var path, boy, left_Boundary, right_Boundary;
var path_Img, boy_Running;

function preload(){
 
  path_Img = loadImage ("path.png");
  boy_Running = loadAnimation ("Runner-1.png", "Runner-2.png");
 
}

function setup(){
  createCanvas(400, 400);

path=createSprite (200, -100, 50, 50); 
path.addImage ("path", path_Img);
path.scale=1.2;

boy=createSprite (200, 350, 10, 10);
boy.addAnimation ("running", boy_Running);
boy.scale=0.08;
  
left_Boundary=createSprite(0, 0, 100, 800);
left_Boundary.visible=false;
right_Boundary=createSprite(410, 0, 100, 800);
right_Boundary.visible=false;
}

function draw() {
  background("gray");
  path.velocityY = 10;
  
  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(path.y > 49 ){
    path.y = -100;
  }
  
  drawSprites();
}
