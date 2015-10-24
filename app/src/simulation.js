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
    this.eventId = 0;
  }

  start(timestamp) {
    this.clock = timestamp;
    this.particles.forEach(p => this.predict(p));
  }

  step(timestamp) {
    let remaining = timestamp - this.clock;
    while (this.pq.size > 0) {
      const event = this.pq.remove();
      if (event.time <= timestamp) {
        if(event.isValid()) {
          this.play(event);
          remaining = timestamp - event.time;
        }
      } else {
        this.pq.add(event);
        break;
      }
    }
    this.move(remaining);
    this.clock = timestamp;
  }

  play(event) {
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
        if(time != Number.MAX_SAFE_INTEGER) {
          this.pq.add(new Event(this.eventId, this.clock + time, p, b));
          this.eventId++;
        }
      }
    }
  }

  move(time) {
    this.particles.forEach(p => p.move(time))
  }
}
