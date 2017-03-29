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
        this.lifetime = random(250, 500);
        this.x = _x;
        this.y = _y;
        this.velx = this.parentSize * random(-1.5, 1.5);
        this.vely = this.parentSize * random(-1.5, 1.5);
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
    };

}