import Vector from './vector.js'
import Particle from './particle.js'

function simulate() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
    let a = new Particle(20, new Vector(100, 100), new Vector(0, 0), ctx);
    a.draw();
}

simulate();
