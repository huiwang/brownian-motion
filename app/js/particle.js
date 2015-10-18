export default class Particle {
  constructor(mass, radius, position, speed) {
    this.mass = mass;
    this.radius = radius;
    this.position = position;
    this.speed = speed;
  }

  move(time) {
    this.position = this.position.add(this.speed.scale(time));
  }

  timeToHitParticle(that) {
    if (this == that) return Number.MAX_SAFE_NUMBER;
    const dr = that.position.substract(this.position);
    const dv = that.speed.substract(this.speed);
    const dvdr = dr.product(dv);
    if (dvdr > 0) return Number.MAX_SAFE_NUMBER;
    const dvdv = dv.product(dv);
    const drdr = dr.product(dr);
    const sigma = this.radius + that.radius;
    const d = (dvdr * dvdr) - dvdv * (drdr - sigma * sigma);
    // if (drdr < sigma*sigma) StdOut.println("overlapping particles");
    if (d < 0) return Number.MAX_SAFE_NUMBER;
    return -(dvdr + Math.sqrt(d)) / dvdv;
  }

  bounceOffParticle(that) {
    const dr = that.position.substract(this.position);
    const dv = that.speed.substract(this.speed);
    const dvdr = dr.product(dv);
    const dist = this.radius + that.radius; // distance between particle centers at collison

    // normal force F, and in x and y directions
    const F = 2 * this.mass * that.mass * dvdr / ((this.mass + that.mass) * dist);
    const fx = F * (that.position.x - this.position.x) / dist;
    const fy = F * (that.position.y - this.position.y) / dist;

    // update velocities according to normal force
    this.speed.x += fx / this.mass;
    this.speed.y += fy / this.mass;
    that.speed.x -= fx / that.mass;
    that.speed.y -= fy / that.mass;
  }

}
