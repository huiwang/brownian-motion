import Particle from './particle.js';
import Vector from 'vigur';
import Wall from './wall.js';
import Generator from './generator.js';
import wallBuilder from './wall_builder.js';
import Simulation from './simulation.js';
import Drawer from './drawer.js';

(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const walls = wallBuilder(width, height);
  const generator = new Generator(width, height);
  const particles = generator.generate();
  const drawer = new Drawer(ctx, width, height);
  const redraw = () => {
    drawer.clearRect();
    drawer.drawRect();
    particles.forEach(p => drawer.drawParticle(p));
  }

  const simulation = new Simulation(particles, walls);
  const step = timestamp => {
    simulation.step(timestamp);
    redraw();
    window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(timestamp => {
    simulation.start(timestamp);
    redraw();
    window.requestAnimationFrame(step);
  });
})();
