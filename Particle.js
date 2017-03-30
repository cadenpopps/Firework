function Particle() {

   this.parentSize = 0;
   this.size = 0;
   this.lifetime = 0;
   this.x = 0;
   this.y = height + 100;
   this.velx = 0;
   this.vely = 0;
   this.active = false;
   this.col = new Array(3);

   this.reset = function(_parentSize, _x, _y, _col) {
      this.parentSize = _parentSize;
      this.size = this.parentSize / (random(2, 3)) + 1;
      this.lifetime = 0;
      this.x = _x;
      this.y = _y;
      this.velx = (1 / this.size) * random(-10, 10);
      this.vely = (1 / this.size) * random(-10, 10);
      this.active = true;
      this.col[0] = _col[0];
      this.col[1] = _col[1];
      this.col[2] = _col[2];
      if (this.size < 2) {
         this.active = false;
      }
   };

   this.update = function() {

      this.x += this.velx;
      this.y += this.vely;
      this.y += .01;

      if (this.lifetime >30) {
         for (let p of particles) {
            if (p != this && p.active) {
               if (abs(this.x - p.x) + abs(this.y - p.y) < this.size + p.size / 2) {
                  this.active = false;
               }
            }
         }
         for (let f of fireworks) {
            if (f.active) {
               if (abs(this.x - f.x) + abs(this.y - f.y) < this.size + f.size / 2) {
                  this.active = false;
               }
            }
         }
      }

      this.lifetime++;

      if (this.offScreen()) {
         this.active = false;
      }

   };

   this.offScreen = function() {
      return (this.x < 0 || this.x > width || this.y < 0 || this.y > height);
   }

   this.display = function() {
      strokeWeight(this.size);
      stroke(this.col[0], this.col[1], this.col[2]);
      point(this.x, this.y);
   };

}