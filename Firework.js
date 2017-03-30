function Firework() {

   this.x = 0;
   this.y = height + 100;
   this.vel = createVector();
   this.size = 0;
   this.particleCounter = 0;
   this.exploded = false;
   this.active = false;
   this.moveSpeed = 0;
   this.col = new Array(3);

   this.reset = function() {
      this.moveSpeed = 10;
      var xOff = random(-100, 100);
      var yOff = random(-100, 100);
      var corner = floor(random(4));
      switch (corner) {
         case 0:
            this.x = -50 + xOff;
            this.y = -50 + yOff;
            break;
         case 1:
            this.x = width + 50 + xOff;
            this.y = -50 + xOff;
            break;
         case 2:
            this.x = width + 50 + xOff;
            this.y = height + 50 + yOff;
            break;
         case 3:
            this.x = -50 + xOff;
            this.y = height + 50 + yOff;
            break;
      }
      this.vel = createVector(constrain((mouseX - this.x) / 100, -this.moveSpeed, this.moveSpeed), constrain((mouseY - this.y) / 100, -this.moveSpeed, this.moveSpeed));
      this.size = abs(this.vel.y / 1.5) * random(2, 5)+1;
      this.particleCounter = 0;
      this.exploded = false;
      this.active = true;
      this.lifetime = 200;
      this.col[0] = random(150, 255);
      this.col[1] = random(0, 100);
      this.col[2] = random(0, 20);
   };

   this.requestParticles = function() {
      for (let p of particles) {
         if (this.particleCounter < this.size/3) {
            if (!p.active) {
               this.particleCounter++;
               p.reset(this.size, this.x, this.y, this.col);
            }
         }
      }
   };

   this.update = function() {

      if (!this.exploded) {
         //this.vel.y += this.size / 50;

         this.x += this.vel.x;
         this.y += this.vel.y;

         this.lifetime--;

         for (let f of fireworks) {
            if (f != this) {
               if (abs(this.x - f.x) + abs(this.y - f.y) < this.size / 2 + f.size / 2) {
                  this.requestParticles();
                  this.destroy();

               }
            }
         }
         if (this.lifetime <= 0) {
            this.destroy();
         }
      }
   };

   this.destroy = function() {
      this.x = -100;
      this.y = -100;
      this.vel = createVector();
      this.size = 0;
      this.particleCounter = 0;
      this.exploded = true;
      this.active = false;
      this.lifetime = 0;
   };

   this.display = function() {
      if (!this.exploded) {
         strokeWeight(this.size);
         stroke(this.col[0], this.col[1], this.col[2]);
         point(this.x, this.y);
      }
      else {
         for (let p of this.particles) {
            if (p.active) {
               p.display();
            }
         }
      }
   };
}
