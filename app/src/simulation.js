import Event from './event.js';
import Particle from './particle.js';
import Wall from './wall.js';
import PriorityQueue from 'es-collections/PriorityQueue';

export default class Simulation {
  constructor(particles, walls) {
    this.particles = particles;
    this.walls = walls;
    this.bouncable = particles.concat(walls);
    this.clock = 0;
    this.pq = new PriorityQueue((e1, e2) => e1.time - e2.time);

  }

  start(timestamp) {
    this.clock = timestamp;
    this.particles.forEach(p => this.predict(p));
  }

  step(timestamp) {
    const progress = timestamp - this.clock;
    while (this.pq.size > 0) {
      const event = this.pq.remove();
      if (event.time <= timestamp) {
        this.play(event, timestamp);
      } else {
        this.pq.add(event);
        break;
      }
    }
    this.move(progress);
    this.clock = timestamp;
  }

  play(event, timestamp) {
    this.move(event.time - this.clock);
    this.clock = event.time;
    event.second.bounceOffParticle(event.first);
    this.predict(event.first);
    if (typeof(event.second) instanceof Particle) {
      this.predict(event.second);
    }
  }

  predict(particle) {
    for (let b of this.bouncable) {
      for (let p of this.particles) {
        const time = b.timeToHitParticle(p);
        this.pq.add(new Event(this.clock + time, p, b));
      }
    }
  }

  move(time) {
    this.particles.forEach(p => p.move(time))
  }
}
