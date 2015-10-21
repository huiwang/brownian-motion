import Vector from 'vigur';
import Particle from '../src/particle.js';
const assert = require('assert');
describe('Particle', () => {
  it('should be able to hit another particle', () => {
    const p1 = new Particle(10, 5, new Vector(10, 10), new Vector(1,0));
    const p2 = new Particle(10, 5, new Vector(30, 10), new Vector(0,0));
    assert.equal(10, p1.timeToHitParticle(p2));
  });
});
