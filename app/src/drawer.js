export default class Drawer {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  drawParticle(particle) {
    const r = particle.position;
    if(r.x > this.width || r.y > this.height) {
      throw "out of board (" + r.x + "," + r.y + ")";
    }
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
