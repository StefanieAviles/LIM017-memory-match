import App from './App.js';
import Game from './game.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof Array).toBe(true);
  });
});

describe('Game', () => {
  it('should be an object', () => {
    expect(typeof Game).toBe('object');
  });


  describe('Game.cleanGame', () => {
    it('should be a function', () => {
      expect(typeof Game.cleanGame).toBe('function');
    });
    it('should return True if clean Game', () => {
      expect(Game.cleanGame()).toBe(true);
    });
  });

  describe('Game.endGame', () => {
    it('should be a function', () => {
      expect(typeof Game.endGame).toBe('function');
    });
    it('should return Array Objects', () => {
      expect(typeof Game.endGame()).toBe('object');
    });
  });

  describe('Game.topRanking', () => {
    it('should be a function', () => {
      expect(typeof Game.topRanking).toBe('function');
    });
    it('should return Array Html', () => {
      expect(typeof Game.topRanking()).toBe('object');
    });
  });
});
