import Event from './event.js';
import PriorityQueue from 'es-collections/PriorityQueue';

export default class Simulation {
  constructor(particles, walls, limit, resolutionHandler) {
    this.particles = particles;
    this.walls = walls;
    this.limit = limit;
    this.resolutionHandler = resolutionHandler;
    this.pq = new PriorityQueue((e1, e2) => e1.time - e2.time);
  }

  simulate() {
    for(let p of this.particles) {
      let events = this.predict(p);
      for(let e of events) {
        this.pq.add(e);
      }
    }

    while(this.pq.size > 0) {
      const event = this.pq.remove();
      event.first.bounceOffParticle(event.second);
      this.move(event.time);
      this.resolutionHandler(this.particles);
      if(typeof(event.first) != Wall) {
        predict(event.first).forEach(e => pq.add(e));
      }
      predict(event.second).forEach(e => pq.add(e));
    }
  }

  predict(particle) {
    const events = [];
    for(let that of this.particles) {
      const time = particle.timeToHitParticle(that);
      if(time < this.limit) {
        events.push(new Event(time, particle, that));
      }
    }

    for(let wall of this.walls) {
      const time = wall.timeToHitParticle(particle);
      if(time < this.limit) {
        events.push(new Event(time, p, wall));
      }
    }
    return events;
  }

  move(time) {
    this.particles.forEach(p => p.move(time))
  }
}
