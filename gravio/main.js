let balls = [];

function setup() {
    createCanvas(800, 800);
    strokeWeight(2);
    ellipseMode(CORNER);
    for (let i = 0; i < 100; i++) {
        balls.push(new Ball(random(0, 5), random(5, 50), color(random(255), random(255), random(255))));
    }
}

function draw() {
    background(138);
    for (let i = 0; i < balls.length - 1; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            let d = p5.Vector.sub(balls[j].pos, balls[i].pos);
            let r = d.magSq();
            if (r < sq((balls[i].size + balls[j].size) / 2)) {
                d.mult(-5);
            } else {
                d.mult(.01);
            }
            balls[i].applyForce(d.div(r));
            balls[j].applyForce(d.mult(-1));
        }
    }
    // let g = createVector(mouseX, mouseY).sub(width / 2, height / 2).mult(.0001);
    stroke(0, 0, 255);
    // line(width / 2, height / 2, mouseX, mouseY);
    balls.forEach(node => {
        node.update();
        node.view();
        // node.applyForce(g);
    });

}