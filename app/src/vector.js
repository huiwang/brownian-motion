export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  subtract(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  multiply(c) {
    return new Vector(this.x * c, this.y * c);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
