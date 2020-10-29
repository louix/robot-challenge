export default class OutOfBoundsError extends Error {
  constructor() {
    super('robot is out of bounds');
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
