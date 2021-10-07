class Mover extends Entity {
  constructor(settings) {
    super(settings)
  }
  update() {
    super.update()
    this.keyCheck()
    this.wrap()
    this.location.add(this.speed)
    this.speed.mult(0.8)
  }
  keyCheck() {
    let acc = 1.1
    if (keyIsDown(38)) this.speed.y -= acc
    if (keyIsDown(40)) this.speed.y += acc
    if (keyIsDown(37)) this.speed.x -= acc
    if (keyIsDown(39)) this.speed.x += acc
  }
  wrap() {
    if (this.location.y > height) this.location.y = 0
    if (this.location.y < 0) this.location.y = height
    if (this.location.x > width) this.location.x = 0
    if (this.location.x < 0) this.location.x = width
  }
}