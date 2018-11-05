let balls = []
const Coulumb_Constant = 4

function setup() {
    createCanvas(windowWidth, windowHeight)
    strokeWeight(2)
    for (let i = 0; i < 100; i++) {
        balls.push(new Ball(random(1, 5), random(1, 10), color(random(255), random(255), random(255))))
    }
}

function draw() {
    background(138)
    collideBalls()
    mouseGrav()
    balls.forEach(node => {
        node.update()
        node.view()
    })

}

function collideBalls() {
    for (let i = 0; i < balls.length - 1; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            let d = p5.Vector.sub(balls[i].pos, balls[j].pos)
            let rSq = d.magSq()
            if (rSq <= sq(balls[i].r + balls[j].r)) {
                let mag = Coulumb_Constant * (sq(balls[i].r) + sq(balls[j].r)) / rSq
                d.mult(mag)
                balls[i].applyForce(d)
                balls[j].applyForce(p5.Vector.mult(d, -1))
                // console.log('collide')
            }
        }
        
    }
}

function mouseGrav() {
    let g = createVector(mouseX, mouseY).sub(width / 2, height / 2).mult(.01)
    stroke(0, 0, 255)
    strokeWeight(map(g.mag(), 0, 20, 0, 5))
    line(width / 2, height / 2, mouseX, mouseY)

    balls.forEach(node => {
        node.applyForce(g)
    })
}