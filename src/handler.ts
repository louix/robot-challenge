import {
  Grid, Instruction, Instructions, IPosition,
} from './models';
import InvalidInstructionError from './errors/invalid.instruction.error';
import { goForward, turnLeft, turnRight } from './movements';
import { formatPosition } from './utils';
import OutOfBoundsError from './errors/out.of.bounds.error';

export const run = (currentPosition: IPosition, instructions: Instructions, grid: Grid) => {
  try {
    instructions.forEach((instruction) => getNextPosition(currentPosition, instruction, grid));
    return formatPosition(currentPosition);
  } catch (error) {
    if (error instanceof InvalidInstructionError) {
      console.error(error.message);
    } else if (error instanceof OutOfBoundsError) {
      return `${formatPosition(currentPosition)} LOST`;
    } else {
      console.error(error);
    }
  }
};

export const getNextPosition = (currentPosition: IPosition, instruction: Instruction, grid: Grid) => {
  switch (instruction) {
    case 'L':
      turnLeft(currentPosition);
      break;
    case 'R':
      turnRight(currentPosition);
      break;
    case 'F':
      goForward(currentPosition, grid);
      break;
    default:
      throw new InvalidInstructionError(instruction);
  }
  console.log(currentPosition);
};
