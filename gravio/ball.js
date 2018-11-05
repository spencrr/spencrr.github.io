class Ball {

    constructor(v, r, c) {
        this.pos = createVector(random(0, width), random(0, height));
        this.acc = createVector(0, 0);
        this.vel = p5.Vector.random2D().mult(v);
        this.r = r;
        this.color = c;
    }

    update() {
        if (this.pos.x < this.r || this.pos.x > width - this.r) {
            this.vel.x *= -1;
            this.pos.x = constrain(this.pos.x, this.r, width - this.r)
        }
        if (this.pos.y < this.r || this.pos.y > height - this.r) {
            this.vel.y *= -1;
            this.pos.y = constrain(this.pos.y, this.r, height - this.r)
        }
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    view() {
        fill(this.color);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
        stroke(255);
        // let accVec = p5.Vector.add(this.pos, p5.Vector.mult(this.acc, 100000))
        // line(this.pos.x, this.pos.y, accVec.x, accVec.y);
    }

    applyForce(f) {
        this.acc.add(p5.Vector.div(f, PI * sq(this.r)));
    }
}