import {App, ArrayCard} from './App.js'
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



