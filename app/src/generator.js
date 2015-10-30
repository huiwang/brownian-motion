import Vector from './vector.js';
import Particle from './particle.js';

export default class Generator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  generate(particles = [], i = 0) {
    if(i > 500) {
      return particles;
    } else {
      const randomx = Math.random();
      const randomy = Math.random();
      const speedFactor = 0.01;
      const particle = new Particle(10 * randomx + 1, new Vector(this.x * randomx, this.y * randomy), new Vector(randomx * speedFactor, randomy * speedFactor));
      if(this.inside(particle) && !particles.some(p => particle.overlap(p))) {
        particles.push(particle);
        return this.generate(particles, i+1);
      } else {
        return this.generate(particles, i+1);
      }
    }
  }

  inside(p) {
    return p.position.x + p.radius < this.x &&
           p.position.y + p.radius < this.y &&
           p.position.x - p.radius > 0 &&
           p.position.y - p.radius > 0;
  }
}
