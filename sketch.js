var fireworks = new Array(50);
var particles = new Array(500);
var alive;
var score;
var millisLost;

function setup() {
    createCanvas(windowWidth, windowHeight);
    setInterval(update, 20);

    resetAll();
}

function draw() {

    background(30);

    for (let f of fireworks) {
        if (f.active) {
            f.display();
            if (abs(f.x - mouseX) + abs(f.y - mouseY) < 20) {
                if (dist(f.x, f.y, mouseX, mouseY) < 5 + f.size) {
                    alive = false;
                    millisLost = millis();

                }
            }
        }
    }

    for (let p of particles) {
        if (p.active) {
            p.display();
            if (abs(p.x - mouseX) + abs(p.y - mouseY) < 50) {
                if (dist(p.x, p.y, mouseX, mouseY) < 5 + p.size) {
                    alive = false;
                    millisLost = millis();

                }
            }
        }
    }


    noStroke();
    ellipse(mouseX, mouseY, 10, 10);
    if (alive) {
        textSize(100);
        textAlign(CENTER);
        fill(255);
        if (frameCount % 30 == 0) {
            score++;
        }
        text("Score: " + score, width / 2, height - 50);
    }

    if (!alive) {
        fill(0, 100);
        rect(0, 0, width, height);
        textSize(100);
        textAlign(CENTER);
        fill(255);
        text("Your score was " + score, width / 2, height / 2);
        if (millis() > millisLost + 1000) {
            textSize(50);
            text("Press r to restart", width / 2, height / 2 + 100);
        }
    }
}

function update() {
    if (alive) {
        if (keyIsPressed && frameCount % 2 == 0) {
            if (key == 'n') {
                requestFirework();
            }
        }

        if (random(1) < .2) {
            requestFirework();
        }

        for (var i = fireworks.length - 1; i >= 0; i--) {
            if (fireworks[i].active) {
                fireworks[i].update();
            }
        }
        for (var i = particles.length - 1; i >= 0; i--) {
            if (particles[i].active) {
                particles[i].update();
            }
        }
    }
}

function requestFirework() {
    for (let f of fireworks) {
        if (!f.active) {
            f.reset();
            return;
        }
    }
}

function resetAll() {

    alive = true;
    score = 0;
    millisLost = 0;

    for (var i = 0; i < fireworks.length; i++) {
        fireworks[i] = new Firework();
    }
    for (var i = 0; i < particles.length; i++) {
        particles[i] = new Particle();
    }

}

function keyTyped() {
    if (!alive && key == 'r') {
        resetAll();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
