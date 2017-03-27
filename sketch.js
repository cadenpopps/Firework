var sky = [];

function preload() {
    //font = loadFont('data/SourceCodePro-Light.otf');
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    addFirework();

}

function draw() {

    background(30);

    for (let f of sky) {
        f.update();
        f.display();
    }

}

function addFirework() {
    sky.push(new Firework());
}

function keyTyped() {

}

function mousePressed() {

}

function mouseDragged() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
