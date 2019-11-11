import { Game } from '../bowling/game';

describe('game', () => {
  test('it should score a gutter game', () => {
    let game: Game = new Game();
    for (let i = 0; i < 10; ++i) {
      game.scoreFrame(0, 0);
    }
    expect(game.getScore()).toBe(0);
  })
})
