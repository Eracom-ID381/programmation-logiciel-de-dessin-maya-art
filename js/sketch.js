let hue = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 255, 0);
    colorMode(HSB, 255);
}

function draw() {
    hue = map(mouseX, 0, width, 0, 255);
    fill(255);
    stroke(hue, 255, 255);
    strokeWeight(10);
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}