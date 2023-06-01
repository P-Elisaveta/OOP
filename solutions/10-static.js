export default class Time {
  // BEGIN
  static fromString(str) {
    const [h, min] = str.split(':');
    return new Time(Number(h), Number(min));
  }
  // END

  constructor(h, min) {
    this.min = min;
    this.h = h;
  }

  toString() {
    return `${this.h}:${this.min}`;
  }
}
