var angle = 100;
var r = 1000;


function setup() {
  // canvas = createCanvas(random(720,1280), random(720,1280));
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  rnd2 = (random()*width/3)-(random()*width/3*2);
  rnd3 = random()*50+15;
  offset = random()*10000+10;
  rnd1 = random()*0.4+0.2;
  canvas.addClass("s");
  noiseSeed(random()*9999)
  randomSeed(random()*9999)
}

function draw() {
  fill(random()*255,random()*255,random()*255, rnd3);
  strokeWeight(random()*0.1+0.01);
  translate(width/2, height/2);
  for (var i = 0; i < angle; i++) {
  let x = r*cos(angle)*noise(width*0.0001+offset);
  var y = r*sin(angle)*noise(height*0.0001+offset);
  let xSize = random()*20+10;
  ellipse(x, y, xSize);
  offset = offset + 0.001;
  angle += rnd1;
  r -= random()*1+0.1;
  }

  function rndm(min,max){
  return random()*(max-min) + min;
}
  
if(frameCount>rndm(20,200)){
  noLoop()
}
}

// var angle = 100;
// var r = 1000;


// function setup() {
//   createCanvas(random(720,1280), random(720,1280));
//   background(0);
//   rnd2 = random(-width/3, width/3)
//   rnd3 = random()*50+15;
//   offset = random(10,10000);
//   rnd1 = random(0.2,0.4);
// }

// function draw() {
//   fill(random()*255,random()*255,random()*255, rnd3);
//   strokeWeight(random(0.01, 0.1));
//   translate(width/2, height/2);
//   for (var i = 0; i < angle; i++) {
//   let x = r*cos(angle)*noise(width*0.0001+offset);
//   var y = r*sin(angle)*noise(height*0.0001+offset);
//   let xSize = random(10,20);
//   ellipse(x, y, xSize);
//   offset = offset + 0.001;
//   angle += rnd1;
//   r -= random(0.1,1);
//   }

// //   function rnd(min,max){
// //   return random()*(max-min) + min;
// // }
  
// if(frameCount>random(20,200)){
//   noLoop()
// }
// }