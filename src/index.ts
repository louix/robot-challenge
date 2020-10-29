import { Grid, Instructions, IPosition } from './models';
import { run } from './handler';

// Inputs
// TODO: Get these from readline inputs (https://nodejs.org/api/readline.html)
const gridCoordinates: Grid = { x: 4, y: 8 };
const currentPosition: IPosition = { x: 1, y: 0, direction: 'S' };
const instructions: Instructions = ['F', 'F', 'R', 'L', 'F'];

const result = run(gridCoordinates, currentPosition, instructions);
console.log(result);
