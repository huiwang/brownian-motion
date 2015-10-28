import Vector from '../src/vector.js';
import Particle from '../src/particle.js';
const assert = require('assert');
describe('Particle', () => {
  it('should be able to move', () => {
    const p1 = new Particle(5, new Vector(10, 15), new Vector(1,1));
    p1.move(3);
    assert.equal(13, p1.position.x);
    assert.equal(18, p1.position.y)

  });

  it('should predict when to hit another particle', () => {
    const p1 = new Particle(5, new Vector(10, 10), new Vector(1,0));
    const p2 = new Particle(5, new Vector(30, 10), new Vector(0,0));
    assert.equal(10, p1.timeToHitParticle(p2));
  });

  it('should bounce off another particle', () => {
    const p1 = new Particle(10, new Vector(10, 10), new Vector(1,0));
    const p2 = new Particle(10, new Vector(30, 10), new Vector(-1,0));
    p1.bounceOffParticle(p2);
    assert.equal(-1, p1.speed.x);
    assert.equal(1, p1.hits);
    assert.equal(1, p2.speed.x);
    assert.equal(1, p2.hits);
  });
});
