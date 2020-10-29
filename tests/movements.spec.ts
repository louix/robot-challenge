import { goForward, turnLeft, turnRight } from '../src/movements';
import { Grid, IPosition } from '../src/models';
import OutOfBoundsError from '../src/errors/out.of.bounds.error';

describe('movements', () => {
  describe('turnLeft', () => {
    test('it runs the normal case', () => {
      // given
      const position: IPosition = { x: 0, y: 0, direction: 'E' };

      // when
      turnLeft(position);

      // then
      expect(position.direction).toBe('N');
    });
    test('it wraps the direction properly', () => {
      // given
      const position: IPosition = { x: 0, y: 0, direction: 'N' };

      // when
      turnLeft(position);

      // then
      expect(position.direction).toBe('W');
    });
  });
  describe('turnRight', () => {
    test('it runs the normal case', () => {
      // given
      const position: IPosition = { x: 0, y: 0, direction: 'E' };

      // when
      turnRight(position);

      // then
      expect(position.direction).toBe('S');
    });
    test('it wraps the direction properly', () => {
      // given
      const position: IPosition = { x: 0, y: 0, direction: 'N' };

      // when
      turnRight(position);

      // then
      expect(position.direction).toBe('E');
    });
  });
  describe('goForward', () => {
    test('it runs the normal case', () => {
      // given
      const position: IPosition = { x: 0, y: 0, direction: 'N' };
      const grid: Grid = { x: 5, y: 5 };

      // when
      goForward(position, grid);

      // then
      expect(position).toStrictEqual({ x: 0, y: 1, direction: 'N' });
    });
    test('it catches out of bounds', () => {
      // given
      const position: IPosition = { x: 0, y: 0, direction: 'N' };
      const grid: Grid = { x: 1, y: 1 };

      // when
      const result = () => {
        goForward(position, grid);
      };

      // then
      expect(result).toThrow(OutOfBoundsError);
    });
  });
});
