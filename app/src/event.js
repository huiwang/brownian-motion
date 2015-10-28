import Particle from "./particle.js";
export default class Event {
  constructor(id, time, first, second) {
    this.id = id;
    this.time = time;
    this.first = first;
    this.second = second;
    if(this.first instanceof Particle) {
      this.hitCountFirst = first.hits;
    }
    if(this.second instanceof Particle) {
      this.hitCountSecond = second.hits;
    }
  }

  isValid() {
    if(this.first instanceof Particle && this.hitCountFirst != this.first.hits) return false;
    if(this.second instanceof Particle && this.hitCountSecond != this.second.hits) return false;
    return true;
  }

  toString() {
    return `Event ${this.id} toward time ${this.time} for ${this.first.toString()}@${this.hitCountFirst} and ${this.second.toString()}@${this.hitCountSecond}`;
  }
}
