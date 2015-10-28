import Vector from '../src/vector.js';
import Particle from '../src/particle.js';
import Event from '../src/event.js';
import Wall from '../src/wall.js';
const assert = require('assert');

const p = new Particle(5, new Vector(10, 15), new Vector(1,1));
const w = new Wall(0, null, null);
const e = new Event(1, 1, p, w);

describe('Event', () => {
  it('should be valid when the hits on particle not changed', () => {
    assert.equal(true, e.isValid());
    p.hits++;
    assert.equal(false, e.isValid());
  });

  it('should not be valid when the hits on particle changes', () => {
    p.hits++;
    assert.equal(false, e.isValid());
  });
});
