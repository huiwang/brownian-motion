import Vector from 'vigur';
import Particle from './particle.js';
import Wall from './wall.js';
import Generator from './generator.js';
import drawParticle from './drawer.js';
import wallBuilder from './wall_builder.js';
import PriorityQueue from 'es-collections';
import Event from './event.js';
import Simulation from './simulation.js';

(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const walls = wallBuilder(600,280);
  ctx.beginPath();
  ctx.rect(0,0,600,280);
  ctx.stroke();
  const generator = new Generator(600, 280);
  const particles = generator.generate();
  const resolutionHandler = updatedParticles => {
    for (let p of updatedParticles) {
      drawParticle(ctx, p);
    }
  };
  const simulation = new Simulation(particles, walls, 10000, resolutionHandler);
  resolutionHandler(particles);
  simulation.simulate();
})();
