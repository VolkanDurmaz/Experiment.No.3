var angle = 100;
var r = 2000;
var angle2 = 100;
var r2 = 5;
var offset = 10;

function setup() {
  createCanvas(random(720,1080), random(720,1080));
  background(0);
  // background(random(255),random(255), random(255));
  stroke(random()*255,random()*255,random()*255)
  strokeWeight(10)
  fill(0,0,0,0)
  rect(0,0,width,height)
  rnd2 = random(-width/3, width/3)
  rnd3 = random(-height/3, height/3)
  rnd4 = random(-width/3, width/3)
  rnd5 = random(-height/3, height/3)
  rnd6 = random(-width/3, width/3)
  rnd7 = random(-height/3, height/3)
}

function draw() {
  fill(random()*255,random()*255,random()*255, (random()*100));
  // stroke(rnd(0,250),rnd(0,250),rnd(0,250))
  strokeWeight(rnd(0.01,0.1))
  // noStroke();
  translate(width/2, height/2);
  for (var i = 0; i < angle; i++) {
  let x = r*cos(angle)*noise(width*0.0001+offset);
  // let y = r * sin(angle);
  var y = r*sin(angle)*noise(height*0.0001+offset);
  // let x = r * cos(angle) * random(1);
  // let y = r * sin(angle) * random(2);
  // let x = r * cos(angle) * (frameCount * 0.09);
  // let y = r * sin(angle) * (frameCount * 0.09);
  let xSize = random(10,30);
  ellipse(x, y, xSize);
  offset = offset + 0.001;


  
  // beginShape(x);
  // vertex(x+30-rnd2 , y+7-rnd3);
  // vertex(x+26-rnd2 , y+15-rnd3);
  // vertex(x+28-rnd2 , y+15-rnd3);
  // vertex(x+22-rnd2 , y+23-rnd3);
  // vertex(x+26-rnd2 , y+23-rnd3);
  // vertex(x+19-rnd2 , y+31-rnd3);
  // vertex(x+28-rnd2 , y+31-rnd3);
  // vertex(x+28-rnd2 , y+35-rnd3);
  // vertex(x+32-rnd2 , y+35-rnd3);
  // vertex(x+32-rnd2 , y+31-rnd3);
  // vertex(x+41-rnd2 , y+31-rnd3);
  // vertex(x+34-rnd2 , y+23-rnd3);
  // vertex(x+38-rnd2 , y+23-rnd3);
  // vertex(x+32-rnd2 , y+15-rnd3);
  // vertex(x+34-rnd2 , y+15-rnd3);
  // endShape(CLOSE);

  // beginShape(y);
  // scale(1);
  // vertex(x+30-rnd6, y+7-rnd7);
  // vertex(x+26-rnd6 , y+15-rnd7);
  // vertex(x+28-rnd6 , y+15-rnd7);
  // vertex(x+22-rnd6 , y+23-rnd7);
  // vertex(x+26-rnd6 , y+23-rnd7);
  // vertex(x+19-rnd6 , y+31-rnd7);
  // vertex(x+28-rnd6 , y+31-rnd7);
  // vertex(x+28-rnd6 , y+35-rnd7);
  // vertex(x+32-rnd6 , y+35-rnd7);
  // vertex(x+32-rnd6 , y+31-rnd7);
  // vertex(x+41-rnd6 , y+31-rnd7);
  // vertex(x+34-rnd6 , y+23-rnd7);
  // vertex(x+38-rnd6 , y+23-rnd7);
  // vertex(x+32-rnd6 , y+15-rnd7);
  // vertex(x+34-rnd6, y+15-rnd7);
  // endShape(CLOSE);

  // beginShape();
  // scale(1);
  // vertex(x+30-rnd4 , y+7-rnd5);
  // vertex(x+26-rnd4 , y+15-rnd5);
  // vertex(x+28-rnd4 , y+15-rnd5);
  // vertex(x+22-rnd4 , y+23-rnd5);
  // vertex(x+26-rnd4 , y+23-rnd5);
  // vertex(x+19-rnd4 , y+31-rnd5);
  // vertex(x+28-rnd4 , y+31-rnd5);
  // vertex(x+28-rnd4 , y+35-rnd5);
  // vertex(x+32-rnd4 , y+35-rnd5);
  // vertex(x+32-rnd4 , y+31-rnd5);
  // vertex(x+41-rnd4 , y+31-rnd5);
  // vertex(x+34-rnd4 , y+23-rnd5);
  // vertex(x+38-rnd4 , y+23-rnd5);
  // vertex(x+32-rnd4 , y+15-rnd5);
  // vertex(x+34-rnd4 , y+15-rnd5);
  // endShape(CLOSE);

  angle += 0.2;
  r -= 1;
  }

  fxpreview();

  // for (var i = 0; i < angle; i++) {
  //   // let x = r * cos(angle) * random(1);
  //   // let y = r * sin(angle) * random(2);
  //   let x = r * cos(angle);
  //   let y = r * sin(angle);
  //   let xSize = i;
  //   ellipse(x, y, xSize)
  //   angle += 0.2;
  //   r -= 3;
  //   }

  // for (var i = 0; i < angle2; i++) {
  //   let x2 = r2 * cos(angle2) *i;
  //   let y2 = r2 * sin(angle2);
  //   // let x = r * cos(angle);
  //   // let y = r * sin(angle);
  //   let xSize = random()*10;
  //   ellipse(x2, y2, xSize)
  //   angle2 += 0.2;
  //   r2 -= 10;
  //   }

  
 
  
  function rnd(min,max){
  return random()*(max-min) + min;
}
  
if(frameCount>rnd(100,200)){
  noLoop()
}

}

  