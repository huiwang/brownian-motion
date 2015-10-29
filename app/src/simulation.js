import Event from './event.js';
import Particle from './particle.js';
import Wall from './wall.js';
import PriorityQueue from 'es-collections/PriorityQueue';

export default class Simulation {
  constructor(particles, walls, log) {
    this.particles = particles;
    this.walls = walls;
    this.bouncable = particles.concat(walls);
    this.log = log;
    this.clock = 0;
    this.pq = new PriorityQueue((e1, e2) => e1.time - e2.time);
    this.eventId = 0;
  }

  start(timestamp) {
    this.log("start " + timestamp);
    this.clock = timestamp;
    this.particles.forEach(p => this.predict(p));
  }

  step(timestamp) {
    this.log("step " + timestamp);
    while (this.pq.size > 0) {
      const peek = this.pq.peek();
      this.log("get " + peek);
      if (peek.time <= timestamp) {
        const event = this.pq.remove();
        if (event.isValid()) {
          this.log("resolve " + event);
          this.play(event);
        } else {
          this.log("invalid " + event);
        }
      } else {
        break;
      }
    }
    this.move(timestamp - this.clock);
    this.clock = timestamp;
  }

  play(event) {
    this.move(event.time - this.clock);
    this.clock = event.time;
    event.second.bounceOffParticle(event.first);
    this.predict(event.first);
    if (event.second instanceof Particle) {
      this.predict(event.second);
    }
  }

  predict(particle) {
    for (let b of this.bouncable) {
      const time = b.timeToHitParticle(particle);
      if(isNaN(time)) throw `${b} + ${particle} time NaN`;
      if (time != Number.MAX_SAFE_INTEGER) {
        const e = new Event(this.eventId, this.clock + time, particle, b);
        this.pq.add(e);
        this.log("add " + e);
        this.eventId++;
      }
    }
  }

  move(time) {
    this.log("move " + time);
    this.particles.forEach(p => p.move(time))
  }
}
