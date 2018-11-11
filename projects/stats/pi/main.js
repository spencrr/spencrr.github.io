let circle

let dot = {
    size: 5,
    per_frame: 100,
    max: 100000
}

let dots

let m

let dot_graphics

let inside

const title = 'PI'
const places = 8

function setup() {
    circle = {
        size: Math.min(windowWidth, windowHeight)
    }
    createCanvas(circle.size, circle.size)
    textAlign(CENTER)
    textSize(50)
    noStroke()
    m = createVector(width / 2, height / 2)
    reset()
}

function reset() {
    inside = 0
    dots = 0
    dot_graphics = createGraphics(width, height)
    dot_graphics.colorMode(HSB)
    dot_graphics.noStroke()
}


function draw() {
    background(120);
    if (dots < dot.max) {
        for (let i = 0; i < dot.per_frame; i++) {
            addDot()
            dots++
        }
    }
    let pi = str(Math.round(appox() * Math.pow(10, places)) / Math.pow(10, places))
    pi += '0'.repeat(places - pi.length + 2)
    image(dot_graphics, 0, 0)
    fill(255, 120)
    ellipse(width / 2, height / 2, circle.size, circle.size)
    fill(255)
    text(title, width / 2, height / 2 - 2 * textSize())
    text(str(pi), width / 2, height / 2)
}

function addDot() {
    dot_graphics.fill(random(255), 255, 255)
    let x = random(width)
    let y = random(height)
    dot_graphics.ellipse(x, y, dot.size, dot.size)
    let d = createVector(x, y);
    if (p5.Vector.sub(d, m).magSq() <= sq(circle.size / 2)) {
        inside++
    }
}


function appox() {
    let pi = 4 * inside / dots
    return pi
}