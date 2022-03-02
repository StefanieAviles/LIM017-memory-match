import App from './App.js';
import Game from './game.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof Array).toBe(true);
  });
});

escribe('Game', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof Array).toBe(true);
  });
});
