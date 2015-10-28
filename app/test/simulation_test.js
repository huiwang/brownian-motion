import Simulation from '../src/simulation.js';
import Wall from '../src/wall.js';
import Vector from '../src/vector.js';
import Particle from '../src/particle.js';
import PriorityQueue from 'es-collections/PriorityQueue';
const assert = require('assert');


describe('Smuliation', () => {
  it('should be able to simulate four walls and one particle', () => {
    const walls = Wall.rectangleWalls(400, 320);
    const p = new Particle(10, new Vector(240, 100), new Vector(5,2));
    const simul = new Simulation([p], walls, msg => {});
    simul.start(0);
    const timestamp = 236;
    simul.step(timestamp);
    assert.equal(120, p.position.x);
  });

  it('should be able to simulate four walls and two particles', () => {
    const walls = Wall.rectangleWalls(60, 320);
    const p1 = new Particle(10, new Vector(20, 100), new Vector(10,0));
    const p2 = new Particle(10, new Vector(40, 100), new Vector(-10,0));
    const simul = new Simulation([p1,p2], walls, msg => {});
    simul.start(0);

    simul.step(1);
    assert.equal(10, p1.position.x);
    assert.equal(50, p2.position.x);
    assert.equal(10, p1.speed.x);
    assert.equal(-10, p2.speed.x);

    simul.step(2);
    assert.equal(20, p1.position.x);
    assert.equal(40, p2.position.x);
  });

});
