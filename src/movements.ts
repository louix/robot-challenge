import { DIRECTIONS, Grid, IPosition } from './models';
import OutOfBoundsError from './errors/out.of.bounds.error';

export const turnLeft = (position: IPosition) => {
  const nextDirectionIndex = DIRECTIONS.indexOf(position.direction) - 1;
  // Above operation is a subtraction, so the index can't be positively out of bounds.
  position.direction = (nextDirectionIndex >= 0) ? DIRECTIONS[nextDirectionIndex] : DIRECTIONS[DIRECTIONS.length - 1];
};

export const turnRight = (position: IPosition) => {
  const nextDirectionIndex = DIRECTIONS.indexOf(position.direction) + 1;
  // Above operation is an addition, so the index can't be negatively out of bounds.
  position.direction = DIRECTIONS[nextDirectionIndex % DIRECTIONS.length];
};

export const goForward = (position: IPosition, grid: Grid) => {
  const lastKnownPosition: IPosition = { ...position };
  switch (position.direction) {
    case 'N':
      position.y += 1;
      break;
    case 'S':
      position.y -= 1;
      break;
    case 'E':
      position.x += 1;
      break;
    case 'W':
      position.x -= 1;
      break;
  }
  if (!positionIsValid(position, grid)) {
    revertMovement(position, lastKnownPosition);
    throw new OutOfBoundsError();
  }
};

const revertMovement = (position: IPosition, previousPosition: IPosition) => {
  position.x = previousPosition.x;
  position.y = previousPosition.y;
};

const positionIsValid = (position: IPosition, grid: Grid) => {
  const xIsValid = (position.x >= 0 && position.x < grid.x);
  const yIsValid = (position.y >= 0 && position.y < grid.y);
  return xIsValid && yIsValid;
};
