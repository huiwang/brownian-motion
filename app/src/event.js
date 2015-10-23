export default class Event {
  constructor(time, first, second) {
    this.time = time;
    this.first = first;
    this.second = second;
    if (first != null) {
      this.hitCountFirst = first.hits;
    }
    if (second != null) {
      this.hitCountSecond = second.hits;
    }
  }

  isValid() {
    if(this.first != null && this.hitCountFirst != this.first.hits) return false;
    if(this.second != null && this.hitCountSecond != this.second.hits) return false;
    return true;
  }
}
