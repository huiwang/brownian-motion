import Vector from 'vigur';
import Particle from './particle.js';

export default class Generator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  generate() {
    return [
    //new Particle(1, 10, new Vector(10, 20), new Vector(-4, 10)),
    //  new Particle(1, 10, new Vector(40, 70), new Vector(5, 20)),
    //  new Particle(1, 10, new Vector(90, 90), new Vector(5, 20)),
    //  new Particle(1, 10, new Vector(120, 110), new Vector(5, 20)),
    //  new Particle(1, 10, new Vector(140, 70), new Vector(5, 20)),
    //  new Particle(1, 10, new Vector(140, 170), new Vector(0.3, 0.2)),
      new Particle(1, 10, new Vector(240, 100), new Vector(0.1, 0.3)),

    ];
  }
}
