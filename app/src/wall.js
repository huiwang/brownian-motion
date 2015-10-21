import Particle from './particle.js'

export default class Wall {
  constructor(bound, dimensionSelector, speedTransformer) {
    this.bound = bound;
    this.dimensionSelector = dimensionSelector;
    this.speedTransformer = speedTransformer;
  }

  timeToHitParticle(particle) {
    const relativeDistance = this.dimensionSelector(particle.position) - this.bound;
    const relativeSpeed = this.dimensionSelector(particle.speed);
    if (relativeDistance * relativeSpeed < 0) {
      const distance = Math.abs(particle.position - this.bound) - particle.radius;
      const speed = Math.abs(relativeSpeed);
      return distance / speed;
    } else {
      return Number.MAX_SAFE_INTEGER;
    }
  }

  bounceOffParticle(particle) {
    speedTransformer(particle);
  }
}
