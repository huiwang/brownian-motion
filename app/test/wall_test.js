import Wall from '../src/wall.js';
import Vector from 'vigur';
import Particle from '../src/particle.js';
const assert = require('assert');

describe('Wall', () => {
  it('it can be hit by particle', () => {
    const wall = new Wall(200, v => v.x, undefined);
    const particle = new Particle(10, 5, new Vector(5, 10), new Vector(10,0));
    assert.equal(19, wall.timeToHitParticle(particle));
  });

  it('it can bounce off a particle', () => {
    const wall = new Wall(200, v => v.x, p => p.speed.x = -p.speed.x);
    const particle = new Particle(10, 5, new Vector(195, 10), new Vector(10,0));
    wall.bounceOffParticle(particle);
    assert.equal(-10, particle.speed.x);
    assert.equal(1, particle.hits);
    assert.equal(1, wall.hits);
  });
})
