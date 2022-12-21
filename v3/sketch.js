var angle = 100;
var r = 1000;

function setup() {
    // canvas = createCanvas(fxrand() * 560 + 720, fxrand() * 560 + 720);
    canvas = createCanvas(1600,1600);
    background(0);
    rnd2 = (fxrand() * width) / 3 - ((fxrand() * width) / 3) * 2;
    rnd3 = fxrand() * 45 + 20;
    offset = fxrand() * 10000 + 10;
    rnd1 = fxrand() * 0.3 + 0.1;
    randr = fxrand() * 0.9 + 0.1;
    randsize = fxrand() * 10 + 15;
    randomSeed(fxrand() * 987654321);
    noiseSeed(fxrand() * 987654321);
}

function draw() {
    fill(fxrand() * 255, fxrand() * 255, fxrand() * 255, rnd3);
    strokeWeight(fxrand() * 0.09 + 0.01);
    translate(width / 2, height / 2);
    for (var i = 0; i < angle; i++) {
        let x = r * cos(angle) * noise(width * 0.0001 + offset);
        var y = r * sin(angle) * noise(height * 0.0001 + offset);
        let xSize = randsize;
        ellipse(x, y, xSize);
        offset = offset + 0.001;
        angle += rnd1;
        r -= randr;
    }

    if (frameCount > fxrand() * 200 + 20) {
        noLoop();
    }
}

function keyPressed() {
    if (key == "s") {
        save("Experiment No.3 - Hypothesis.png");
    }
}
