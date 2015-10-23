import Simulation from '../src/simulation.js';
import Wall from '../src/wall.js';
import Vector from 'vigur';
import Particle from '../src/particle.js';
import buildWalls from '../src/wall_builder.js';
const assert = require('assert');

describe('Smuliation', () => {
  it('should be able to simulate four walls and one particle', () => {
    try {
      const walls = buildWalls(600, 280);
      const particle = new Particle(10, 5, new Vector(5, 5), new Vector(10,10));
      let i = 0;
      const simul = new Simulation([particle], walls, 10000, particles => {
        i++;
        console.log("to redraw " + i)});
      const events = simul.simulate();
    } catch(err) {
      console.log(err);
    }

  });

})
