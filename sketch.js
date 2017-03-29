var fireworks = new Array(50);
var particles = new Array(500);

function setup() {
   createCanvas(windowWidth, windowHeight);
   setInterval(update, 16);

   for (var i = 0; i < fireworks.length; i++) {
      fireworks[i] = new Firework();
   }
   for (var i = 0; i < particles.length; i++) {
      particles[i] = new Particle();
   }
}

function draw() {

   background(30);

   for (let f of fireworks) {
      if (f.active) {
         f.display();
      }
   }

   for (let p of particles) {
      if (p.active) {
         p.display();
      }
   }
}

function update() {
   if (keyIsPressed && frameCount % 2 == 0) {
      if (key == 'n') {
         requestFirework();
      }
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

function requestFirework() {
   for (let f of fireworks) {
      if (!f.active) {
         f.reset();
         return;
      }
   }
   //fireworks.push(new Firework());
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
