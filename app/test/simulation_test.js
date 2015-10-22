import Simulation from '../src/simulation.js';
import Wall from '../src/wall.js';
import Vector from 'vigur';
import Particle from '../src/particle.js';
import buildWalls from '../src/wall_builder.js';
const assert = require('assert');

describe('Smuliation', () => {
  it('should be able to simulate four walls and one particle', () => {
    const walls = buildWalls(600, 280);
    const particle = new Particle(10, 5, new Vector(5, 5), new Vector(10,10));
    const simul = new Simulation([particle], walls, 1000000, particles => {});
    const events = simul.predict(particle);
    assert.equal(27, events[0].time);
    assert.equal(59, events[1].time);
  });

})
