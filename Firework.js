function Firework() {

    this.x = 0;
    this.y = height + 100;
    this.vel = createVector();
    this.size = 0;
    this.particleCounter = 0;
    this.exploded = false;
    this.active = false;
    this.moveSpeed = 0;

    this.reset = function() {
        this.moveSpeed = 10;
        var xOff = random(-100, 100);
        var yOff = random(-100, 100);
        var corner = floor(random(4));
        switch (corner) {
            case 0:
                this.x = -50 + xOff;
                this.y = -50 + yOff;
                //this.vel = createVector(this.moveSpeedx, this.moveSpeedy);
                break;
            case 1:
                this.x = width + 50 + xOff;
                this.y = -50 + xOff;
                // this.vel = createVector(-this.moveSpeedx, this.moveSpeedy);
                break;
            case 2:
                this.x = width + 50 + xOff;
                this.y = height + 50 + yOff;
                // this.vel = createVector(-this.moveSpeedx, -this.moveSpeedy);
                break;
            case 3:
                this.x = -50 + xOff;
                this.y = height + 50 + yOff;
                // this.vel = createVector(this.moveSpeedx, -this.moveSpeedy);
                break;
        }
        this.vel = createVector(constrain((mouseX - this.x) / 100, -this.moveSpeed, this.moveSpeed), constrain((mouseY - this.y) / 100, -this.moveSpeed, this.moveSpeed));
        this.size = abs(this.vel.y / 1.5) * 1.5;
        this.particleCounter = 0;
        this.exploded = false;
        this.active = true;
        this.lifetime = random(50, 100);
    };

    this.requestParticles = function() {
        for (let p of particles) {
            if (this.particleCounter < this.size / 3) {
                if (!p.active) {
                    this.particleCounter++;
                    p.reset(this.size, this.x, this.y);
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

            if (this.lifetime <= 0) {
                this.requestParticles();
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
    };
}
