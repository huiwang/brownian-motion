import Particle from './particle.js'

export default class Wall {
  static rectangleWalls(width, height) {
    const xSelector = vector => vector.x;
    const ySelector = vector => vector.y;
    const xSpeedTransformer = particle => {
      particle.speed.x = particle.speed.x * -1
    };
    const ySeepdTransformer = particle => {
      particle.speed.y = particle.speed.y * -1
    };
    const topWall = new Wall(0, ySelector, ySeepdTransformer);
    const botWall = new Wall(height, ySelector, ySeepdTransformer);
    const leftWall = new Wall(0, xSelector, xSpeedTransformer);
    const rightWall = new Wall(width, xSelector, xSpeedTransformer);
    return [topWall, botWall, leftWall, rightWall];
  }

  constructor(bound, dimensionSelector, speedTransformer) {
    this.bound = bound;
    this.dimensionSelector = dimensionSelector;
    this.speedTransformer = speedTransformer;
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
    particle.hits++;
  }

  toString() {
    return "Wall " + this.bound
  }
}
