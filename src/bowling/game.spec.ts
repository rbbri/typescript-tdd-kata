import { Game } from '../bowling/game';

describe('game', () => {
  let game: Game;

  const rollPerfectGame = (game: Game) => {
    for (let i = 0; i < 12; ++i) {
      game.scoreFrame(10);
    }
  };

  beforeEach(() => {
    game = new Game();
  });

  test('it should score a gutter game', () => {
    for (let i = 0; i < 10; ++i) {
      game.scoreFrame(0, 0);
    }
    expect(game.getScore()).toBe(0);
  });

  test('it should score a game of all ones', () => {
    for (let i = 0; i < 10; ++i) {
      game.scoreFrame(1, 1);
    }
    expect(game.getScore()).toBe(20);
  });

  test('it should score a game with one strike and the rest gutter balls', () => {
    game.scoreFrame(10);
    for (let i = 0; i < 9; ++i) {
      game.scoreFrame(0, 0);
    }
    expect(game.getScore()).toBe(10);
  })


  describe('a perfect game', () => {

    beforeEach(() => {
      rollPerfectGame(game);
    })

    test('it should consist of 12 strikes', () => {
      expect(game.strikes).toBe(12);
    });

    test('it should have a score of 300', () => {
      expect(game.getScore()).toBe(300);
    });
  });
});
