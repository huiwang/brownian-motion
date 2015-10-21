import Vector from 'vigur';
import Particle from './particle.js';

export default class Generator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  generate() {
    return [
      new Particle(1, 10, new Vector(10, 20), new Vector(-4, 10)),
      new Particle(1, 10, new Vector(40, 70), new Vector(5, 20)),
      new Particle(1, 10, new Vector(90, 90), new Vector(5, 20)),
      new Particle(1, 10, new Vector(120, 110), new Vector(5, 20)),
      new Particle(1, 10, new Vector(140, 70), new Vector(5, 20)),
      new Particle(1, 10, new Vector(140, 170), new Vector(6, 20)),
      new Particle(1, 10, new Vector(240, 100), new Vector(5, 20)),
      new Particle(1, 10, new Vector(340, 200), new Vector(5, -10)),
      new Particle(1, 10, new Vector(440, 200), new Vector(5, 20)),
      new Particle(1, 10, new Vector(540, 170), new Vector(5, -20)),
      new Particle(1, 10, new Vector(540, 30), new Vector(5, 20)),
      new Particle(1, 10, new Vector(500, 30), new Vector(7, 20)),
      new Particle(1, 10, new Vector(400, 30), new Vector(5, 30)),
      new Particle(1, 10, new Vector(540, 170), new Vector(5, 20)),
      new Particle(1, 10, new Vector(40, 70), new Vector(5, 20)),
      new Particle(1, 10, new Vector(40, 70), new Vector(5, 20)),
      new Particle(1, 10, new Vector(40, 70), new Vector(5, 20)),
    ];
  }
}
