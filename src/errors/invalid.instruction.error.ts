export default class InvalidInstructionError extends Error {
  constructor(instruction: string) {
    super(`'${instruction}' is not a valid instruction`);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
