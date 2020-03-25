let hue = 0;
let osc, freq, amp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(1000, 1000, 1000);
    colorMode(HSB, 255);
    osc = new p5.Oscillator('triangle');

    function setup() {
        smooth();
        createCanvas(100, 100, WEBGL);
        // Make a <p> element and put it behind the canvas
        let p = createP('I am a dom element');
        p.center();
        p.style('font-size', '20px');
        p.style('text-align', 'center');
        p.style('z-index', '-9999');
    }

    function draw() {

        sphere(30);
        erase(0);
        rotateY(frameCount * 0.02);
        translate(0, 0, 40);
        torus(15, 5);
        noErase();
    }
}




function draw() {
    hue = map(mouseX, 0, width, 0, 255);
    fill(255);
    stroke(hue, 255, 255);
    strokeWeight(10);
    if (mouseIsPressed) {
        osc.freq(freq, 0.1);
        osc.amp(amp, 0.1);
        line(mouseX, mouseY, pmouseX, pmouseY);

    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(1000, 1000, 1000);
}

function mousePressed() {
    osc.start();
    stroke(random(0, 255), random(0, 255), random(0, 255));
}

function keyPressed() {
    if (keyCode === BACKSPACE) {
        background(0);
    }
}

function mouseReleased() {
    osc.stop();
}