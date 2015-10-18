class Particle {
  constructor(radius, position, speed, ctx) {
    this.radius = radius;
    this.position = position;
    this.speed = speed;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = 'green';
    this.ctx.fill();
  }
}



export default Particle
