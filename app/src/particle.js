import Vector from './vector.js';
export default class Particle {
  constructor(radius, position, speed) {
    this.mass = radius * radius;
    this.radius = radius;
    this.position = position;
    this.speed = speed;
    this.hits = 0;
  }

  move(time) {
    this.position = this.position.add(this.speed.multiply(time));
  }

  timeToHitParticle(that) {
    if (this == that) return Number.MAX_SAFE_INTEGER;
    const dr = that.position.subtract(this.position);
    const dv = that.speed.subtract(this.speed);
    const dvdr = dr.dot(dv);
    if (dvdr > 0) return Number.MAX_SAFE_INTEGER;
    const dvdv = dv.dot(dv);
    const drdr = dr.dot(dr);
    const sigma = this.radius + that.radius;
    const d = (dvdr * dvdr) - dvdv * (drdr - sigma * sigma);
    if (d < 0) return Number.MAX_SAFE_INTEGER;
    return -(dvdr + Math.sqrt(d)) / dvdv;
  }

  bounceOffParticle(that) {
    const dr = that.position.subtract(this.position);
    const dv = that.speed.subtract(this.speed);
    const dvdr = dr.dot(dv);
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
    this.hits++;
    that.hits++;
  }

}
