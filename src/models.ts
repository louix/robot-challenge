export type Grid = I2DCoordinates;

export type Rotation = 'L' | 'R';
export type Movement = 'F';
export type Instruction = Rotation | Movement;
export type Instructions = Instruction[];

export interface I2DCoordinates {
    x: number;
    y: number;
}

export interface IPosition extends I2DCoordinates {
    direction: Direction
}

export const DIRECTIONS = ['N', 'E', 'S', 'W'] as const;
export type Direction = typeof DIRECTIONS[number]; // Fancy syntax that says Direction is one of DIRECTIONS
