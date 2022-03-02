import App from './App.js';
import game from './game.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof Array).toBe(true);
  });

});

describe('game', () => {
  it('should be an object', () => {
    expect(typeof game).toBe('object');
  });

  //clickCard: function(element,card_selection)
  describe('game.clickCard', ()=>{
    it('should be a function', ()=>{
      expect(typeof game.clickCard).toBe('function');
    });
    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => game.clickCard()).toThrow(TypeError);
      expect(() => game.clickCard(0)).toThrow(TypeError);
      expect(() => game.clickCard(null, [])).toThrow(TypeError);
      expect(() => game.clickCard(0, 0)).toThrow(TypeError);
    });   
  });
  //constrastCard: function()
  describe('game.constrastCard', ()=>{
    it('should be a function', ()=>{
      expect(typeof game.constrastCard).toBe('function');
    });
  /* it('should return "true" for , () => {
      expect(game.constrastCard().toBe("true");
    }); */ 
  });
  //correctCard: function(bool)
  describe('game.correctCard', ()=>{
    it('should be a function', ()=>{
      expect(typeof game.correctCard).toBe('function');
    });
    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => game.correctCard()).toThrow(TypeError);
      expect(() => game.correctCard(0)).toThrow(TypeError);
      expect(() => game.correctCard(null)).toThrow(TypeError);
      expect(() => game.correctCard([])).toThrow(TypeError);
    });
    /*it('should return 0 for "false"', () => {
      expect(game.correctCard("false")).toBe(0);
    }); */
  });
  describe('game.cleanGame', () => {
    it('should be a function', () => {
      expect(typeof game.cleanGame).toBe('function');
    });
    it('should return True if clean game', () => {
      expect(game.cleanGame()).toBe(true);
    });
  });

  describe('game.endGame', () => {
    it('should be a function', () => {
      expect(typeof game.endGame).toBe('function');
    });
    it('should return Array Objects', () => {
      expect(typeof game.endGame()).toBe('object');
    });
  });

  describe('game.topRanking', () => {
    it('should be a function', () => {
      expect(typeof game.topRanking).toBe('function');
    });
    it('should return Array Html', () => {
      expect(typeof game.topRanking()).toBe('object');
    });
  });
});
