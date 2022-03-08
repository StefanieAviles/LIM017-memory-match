import {App, ArrayCard} from './App.js';
import game from './game.js';
import pokemon from '../data/pokemon/pokemon.js';
import webdev from '../data/webdev/webdev.js';

describe('App', () => {
  it('should be a function', ()=>{
    expect(typeof App).toBe('function');
  });
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('ArrayCard', () => {
  
  it('should render without crashing', () => {
    const array = ArrayCard();
    expect(array instanceof Object).toBe(true);
  });
  it('should return length', () => {
    const array = ArrayCard(6,'radio_pokemon');
    expect(array.length).toBe(12);
  });
  it('should return length', () => {
    const array = ArrayCard(6,'radio_web');
    expect(array.length).toBe(12);
  });
  //return Math.random() - 0.5 
  it('should return a number', () => {
    expect(typeof(Math.random() - 0.5)).toBe("number");
  });
  //arrayData=pokemon.items.sort(function() {return Math.random() - 0.5 });
  it('should return an array', () => {
    expect(typeof(pokemon.items.sort(function() {return Math.random() - 0.5 }))).toBe("object");
  });
  it('should return an object', ()=>{
    expect(typeof(document.createElement('div'))).toBe("object");
  });
  //arrayData=webdev.items.sort(function() {return Math.random() - 0.5 });
  it('should return an array', () => {
    expect(typeof(webdev.items.sort(function() {return Math.random() - 0.5 }))).toBe("object");
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
    it('should return 0 with "radio_pokemon"', ()=>{
      let element = document.createElement('div');
      expect(game.clickCard(element, "radio_pokemon")).toBe(0);
    });
  });
  //constrastCard: function(selectCard1,selectCard2)
  describe('game.constrastCard', ()=>{
    it('should be a function', ()=>{
      expect(typeof game.constrastCard).toBe('function');
    });
    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => game.constrastCard()).toThrow(TypeError);
      expect(() => game.constrastCard(0)).toThrow(TypeError);
      expect(() => game.constrastCard(null, [])).toThrow(TypeError);
      expect(() => game.constrastCard(0, 0)).toThrow(TypeError);
    });   
    it('should return true for card1="bulbasaur" with card2="bulbasaur"', () => {
      expect(game.constrastCard("bulbasaur","bulbasaur")).toBe(true);
    });
    it('should return false for card1="ivysaur" with card2="bulbasaur"', () => {
      expect(game.constrastCard("ivysaur","bulbasaur")).toBe(false);
    });
    it('should return false for card1="charmander" with card2="charizard"', () => {
      expect(game.constrastCard("charmander","charizard")).toBe(false);
    });
  });
  // correctCard: function(numCard)
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
    it('should return true for 1', () => {
      expect(game.correctCard(1,1)).toBe(true);
    });
    it('should return false for card1= 2 with card2=1 ', () => {
      expect(game.correctCard(2,1)).toBe(false);
    });
  });
  describe('game.cleanGame', () => {
    it('should be a function', () => {
      expect(typeof game.cleanGame).toBe('function');
    });
    
    it('should return True if clean game', () => {
      expect(game.cleanGame()).toBe(true);
    });
  });

//endGame: function(level,cardSelection,nickName,min,sec);
  describe('game.endGame', () => {
    it('should be a function', () => {
      expect(typeof game.endGame).toBe('function');
    });
    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => game.endGame()).toThrow(TypeError);
      expect(() => game.endGame(null)).toThrow(TypeError);
      expect(() => game.endGame([])).toThrow(TypeError);
    });
    it('should return Array Objects', () => {
      expect(typeof game.endGame("1","radio_pokemon","Maria","0",17)).toBe('object');
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
  //createRanking: function(length) 
  describe('game.createRanking', () => {
    it('should be a function', () => {
      expect(typeof game.createRanking).toBe('function');
    });
    it('should return Array Html', () => {
      expect(game.createRanking(1)).toBe('object');
    });
  });
});

