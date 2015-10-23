import Particle from './particle.js'

export default class Wall {
  constructor(bound, dimensionSelector, speedTransformer) {
    this.bound = bound;
    this.dimensionSelector = dimensionSelector;
    this.speedTransformer = speedTransformer;
    this.hits = 0;
  }

  timeToHitParticle(particle) {
    const relativeDistance = this.dimensionSelector(particle.position) - this.bound;
    const relativeSpeed = this.dimensionSelector(particle.speed);
    if (relativeDistance * relativeSpeed < 0) {
      const distance = Math.abs(this.dimensionSelector(particle.position) - this.bound) - particle.radius;
      const speed = Math.abs(relativeSpeed);
      return distance / speed;
    } else {
      return Number.MAX_SAFE_INTEGER;
    }
  }

  bounceOffParticle(particle) {
    this.speedTransformer(particle);
    this.hits++;
    particle.hits++;
  }
}
