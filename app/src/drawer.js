export default class Drawer {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  drawParticle(particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.position.x, particle.position.y, particle.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = 'green';
    this.ctx.fill();
    this.ctx.stroke();
  }

  drawRect() {
    this.ctx.beginPath();
    this.ctx.rect(0,0,this.width,this.height);
    this.ctx.stroke();
  }

  clearRect() {
    this.ctx.clearRect(0,0,this.width, this.height);
  }
}
