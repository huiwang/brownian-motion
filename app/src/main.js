import Vector from 'vigur'
import Particle from './particle.js'
import Wall from './wall.js'
import Generator from './generator.js'
import drawParticle from './drawer.js'
import PriorityQueue from 'es-collections';
import Event from './event.js';
import Simulation from './simulation.js';

(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const xSelector = vector => vector.x;
  const ySelector = vector => vector.y;
  const xSpeedTransformer = particle => {
    particle.speed.x = particle.speed.x * -1
  };
  const ySeepdTransformer = particle => {
    particle.speed.y = particle.speed.y * -1
  };
  const topWall = new Wall(0, ySelector, ySeepdTransformer);
  const botWall = new Wall(canvas.height, ySelector, ySeepdTransformer);
  const leftWall = new Wall(0, xSelector, xSpeedTransformer);
  const rightWall = new Wall(canvas.width, xSelector, xSpeedTransformer);
  const walls = [topWall, botWall, leftWall, rightWall];
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
  simulation.simulate();
})();
