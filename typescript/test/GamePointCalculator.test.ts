import { RollPoint, SPARE, STRIKE } from '../src/RollPoint';
import { evaluateGame } from '../src/GamePointCalculator';

import {describe, expect, test} from '@jest/globals';

// there are 20 rolls
test('The most regular player: 2 pins for roll', () => {
  var game = Array<RollPoint>(20).fill(RollPoint.of(2));
  const ans = evaluateGame(game);
  expect(ans).toBe(2 * 20);
});
