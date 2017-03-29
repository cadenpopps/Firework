function Firework() {

   this.x = 0;
   this.y = height + 100;
   this.vel = createVector();
   this.acc = createVector();
   this.size = 0;
   this.particleCounter = 0;
   this.exploded = false;
   this.active = false;

   this.reset = function() {
      this.x = random(width);
      this.y = height + 50;
      this.vel = createVector(random(-1, 1), random(-10, -25));
      this.acc = createVector();
      this.size = abs(this.vel.y / 1.5) * 1.5;
      this.particleCounter = 0;
      this.exploded = false;
      this.active = true;
   }

   this.requestParticles = function() {
      for (let p of particles) {
         if (this.particleCounter < this.size) {
            if (!p.active) {
               this.particleCounter++;
               p.reset(this.size, this.x, this.y);
            }
         }
      }
   }

   this.update = function() {

      if (!this.exploded) {
         this.vel.y += this.size / 50;

         this.x += this.vel.x;
         this.y += this.vel.y;

         if (this.vel.y > .01) {
            this.exploded = true;
            this.requestParticles();
         }
      }

      var empty = true;

      if (this.exploded && empty) {
         this.particles = null;
         this.active = false;
      }
   };

   this.display = function() {
      if (!this.exploded) {
         strokeWeight(this.size);
         stroke(255);
         point(this.x, this.y);
      }
      else {
         for (let p of this.particles) {
            if (p.active) {
               p.display();
            }
         }
      }
   }
};
