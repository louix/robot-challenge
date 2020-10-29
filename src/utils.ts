import { IPosition } from './models';

export const formatPosition = (position: IPosition) => `(${position.x}, ${position.y}, ${position.direction})`;
