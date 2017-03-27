function Firework() {

    this.x = random(width);
    this.y = height + 50;
    this.vel = createVector(random(-1, 1), -10);
    this.acc = createVector();
    this.particles = [];
    this.life = 255;

    this.color = [];
    this.color[0] = 255;
    this.color[1] = 255;
    this.color[2] = 255;


    this.update = function() {

        this.vel.mult(.99);
        this.vel.y += .1;


        for (var i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update();
            if (this.particles[i].life < 0) {
                this.particles.splice(i, 1);
            }
        }

        this.x += this.vel.x;
        this.y += this.vel.y;

        // this.vel.add(this.acc);

        // if (this.acc < 0) {
        //     this.acc.y += .01;
        // }

        this.life--;

        console.log(this.x);
        console.log(this.y);
        console.log();
        console.log();

    };

    this.display = function() {
        fill(255);
        // fill(this.color[0], this.color[1], this.color[2]);
        ellipse(this.x, this.y, 10, 10);
    };


}