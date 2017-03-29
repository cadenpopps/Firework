function Particle() {

   this.parentSize = 0;
   this.size = 0;
   this.lifetime = 0;
   this.x = 0;
   this.y = height + 100;
   this.velx = 0;
   this.vely = 0;
   this.active = false;

   this.reset = function(_parentSize, _x, _y) {
      this.parentSize = _parentSize;
      this.size = this.parentSize / (random(2, 3));
      this.lifetime = random(25, 50);
      this.x = _x;
      this.y = _y;
      this.velx = this.parentSize * random(-.15, .15);
      this.vely = this.parentSize * random(-.15, .15);
      this.active = true;
   }

   this.update = function() {

      this.x += this.velx;
      this.y += this.vely;
      this.y += .01;

      this.lifetime--;

      if (this.lifetime <= 0) {
         this.active = false;
      }

   };

   this.display = function() {
      strokeWeight(this.size);
      stroke(255);
      point(this.x, this.y);
      // fill(255);
      // rect(this.x, this.y, this.parentSize / 3, this.parentSize / 3)
   };

}