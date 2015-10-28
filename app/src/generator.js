import Vector from './vector.js';
import Particle from './particle.js';

export default class Generator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  generate() {
    return [
    new Particle(10, new Vector(10, 70), new Vector(-0.4, 0.1)),
    new Particle(10, new Vector(10, 100), new Vector(-0.1, 0.1)),
    new Particle(10, new Vector(10, 150), new Vector(-0.2, 0.1)),
    new Particle(10, new Vector(70, 70), new Vector(0.3, 0.1)),
    new Particle(10, new Vector(100, 70), new Vector(-0.4, 0.1)),
    new Particle(10, new Vector(130, 70), new Vector(-0.4, 0.1)),
    new Particle(5, new Vector(170, 90), new Vector(-0.4, 0.1)),
    new Particle(30, new Vector(200, 170), new Vector(-0.4, 0.1)),
    new Particle(10, new Vector(20, 20), new Vector(0.1,0.15)),
    new Particle(10, new Vector(60, 20), new Vector(0.2,-0.15))
    ];
  }
}
