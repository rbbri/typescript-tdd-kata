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

  test('it should score a game with one strike, the rest gutter balls', () => {
    game.scoreFrame(10);
    for (let i = 0; i < 9; ++i) {
      game.scoreFrame(0, 0);
    }
    expect(game.getScore()).toBe(10);
  });

  test('it should score a game 10 (5,5) spares and a strike', () => {
    // 10 frames of spares (9 * 15 + 10 = 145)
    for (let i = 0; i < 10; ++i) {
      game.scoreFrame(5, 5);
    }
    // bonus frame a strike (145 + 10 = 155)
    game.scoreFrame(10);
    expect(game.getScore()).toBe(155);
  });

  test('it should score a game of a turkey, the rest gutter balls', () => {
    for (let i = 0; i < 2; ++i) {
      game.scoreFrame(10);
    }
    for (let i = 0; i < 6; ++i) {
      game.scoreFrame(0, 0);
    }
    expect(game.getScore()).toBe(60);
  })

  test('it should store the frames', () => {
    game.scoreFrame(0, 0);
    expect(game.frames.length).toBe(1);
  });

  test('it starts at frame 0', () => {
    expect([game.frames.length, game.currentFrame]).toEqual([0, 0]);
  });

  test('it increments the currentFrame', () => {
    game.scoreFrame(0, 0);
    expect(game.currentFrame).toBe(1);
  });


  describe('a perfect game', () => {
    beforeEach(() => {
      rollPerfectGame(game);
    });

    test('it should consist of 12 strikes', () => {
      expect(game.strikes).toBe(12);
    });

    test('it should have a score of 300', () => {
      expect(game.getScore()).toBe(300);
    });
  });
});
