var iss, spacecraft;
var bg, issImage, scImage1, scImage2, scImage3, scImage4;
var hasDocked = false;

function preload(){
  bg=loadImage("Docking-undocking/spacebg.jpg");
  issImage=loadImage("Docking-undocking/iss.png");
  scImage1=loadImage("Docking-undocking/spacecraft1.png");
  scImage2=loadImage("Docking-undocking/spacecraft2.png");
  scImage3=loadImage("Docking-undocking/spacecraft3.png");
  scImage4=loadImage("Docking-undocking/spacecraft4.png");
  
}


function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(285, 240);
  spacecraft.addImage(scImage1);
  spacecraft.scale=0.15

  iss = createSprite(330, 130);
  iss.addImage(issImage)
  iss.scale=0.50
  
}

function draw() {
  background(bg); 
  spacecraft.addImage(scImage1)
  if(!hasDocked){
  spacecraft.x = spacecraft.x+random(-1,1);

  }

  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y-2;
    spacecraft.addImage(scImage2)
    }


  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scImage4)
    spacecraft.x = spacecraft.x-1;
    }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scImage3)
    spacecraft.x = spacecraft.x+1;
    }

  if(keyDown("DOWN_ARROW")){
    
    spacecraft.y = spacecraft.y+2
            
    }
    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
     }

  drawSprites();
}