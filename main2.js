
let d = 64

let vy = 10
let y = 300
let x = 300
let vx = 5

let d1 = 64

let vy1 = 5
let y1 = 300
let x1 = 300
let vx1 = 10

function  setup() {
    createCanvas(600, 600)
    frameRate(60)
}

function  draw() {
   // background(0)
     
   fill(255, 0, 255)
    circle(x, y, d)
 
  
      x = x + vx

    if (x > 600-d/2) {
        vx = -vx
    }
  
    if (x < d/2) {
        vx = -vx
    }
      y = y + vy

    if (y > 600-d/2) {
        vy = -vy
    }
  
    if (y < d/2) {
        vy = -vy
    }

    fill(255, 255, 0)
 circle(x1, y1, d1)
 
  
      x1 = x1 + vx1

    if (x1 > 600-d1/2) {
        vx1 = -vx1
    }
  
    if (x1 < d1/2) {
        vx1 = -vx1
    }
      y1 = y1 + vy1

    if (y1 > 600-d1/2) {
        vy1 = -vy1
    }
  
    if (y1< d1/2) {
        vy1 = -vy1
    }
}

