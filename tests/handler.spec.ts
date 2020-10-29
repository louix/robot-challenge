import { Grid, Instructions, IPosition } from '../src/models';
import { run } from '../src/handler';

describe('handler', () => {
  describe('run', () => {
    test('it runs the normal case', () => {
      // given
      const grid: Grid = { x: 4, y: 8 };
      const currentPosition: IPosition = { x: 2, y: 3, direction: 'N' };
      const instructions: Instructions = ['F', 'L', 'L', 'F', 'R'];

      // when
      const result = run(currentPosition, instructions, grid);

      // then
      expect(result).toBe('(2, 3, W)');
    });
    test('it handles out of bounds', () => {
      // given
      const grid: Grid = { x: 4, y: 8 };
      const currentPosition: IPosition = { x: 1, y: 0, direction: 'S' };
      const instructions: Instructions = ['F', 'F', 'R', 'L', 'F'];

      // when
      const result = run(currentPosition, instructions, grid);

      // then
      expect(result).toBe('(1, 0, S) LOST');
    });
  });
});
