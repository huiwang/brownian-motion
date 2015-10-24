import Simulation from '../src/simulation.js';
import Wall from '../src/wall.js';
import Vector from '../src/vector.js';
import Particle from '../src/particle.js';
import buildWalls from '../src/wall_builder.js';
const assert = require('assert');

describe('Smuliation', () => {
  it('should be able to simulate four walls and one particle', () => {
    const walls = buildWalls(400, 320);
    const p = new Particle(10, new Vector(240, 100), new Vector(5,2));
    const simul = new Simulation([p], walls);
    simul.start(0);
    const timestamp = 236;
    simul.step(timestamp);
    assert.equal(120, p.position.x);
  });
});
