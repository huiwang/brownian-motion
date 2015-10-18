export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  product(that) {
    return this.x * that.x + this.y * that.y;
  }

  scale(factor) {
    return new Vector(factor * this.x, factor * this.y);
  }

  add(that) {
    return new Vector(this.x + that.x, this.y + that.y)
  }

  negate() {
    return new Vector(this.x * -1, this.y * -1);
  }

  substract(that) {
    return this.add(this, that.negate());
  }

}
