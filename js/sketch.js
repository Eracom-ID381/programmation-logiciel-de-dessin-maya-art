function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 255, 0);
    frameRate(560);
    noStroke();
    var draw = function() {
        if (mouseIsPressed) {
            ellipse(mouseX, mouseY, 5, 5);
        }
    };
}

//variable
let painting = false;

function startPosition() {
    painting = true;
}

function finishedPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lienCap = “round ";
    ctx.stroke.Style = "red";



    ctx..moveTo(e.clientX, e.clientY);


}

if (mouseIsPressed) {
    rect(mouseX, mouseY, 25, 25);
}

function draw() {
    fill(255);
    rect(mouseX, mouseY, 25, 25);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

//variable