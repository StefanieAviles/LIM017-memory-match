import App from './components/App.js';

const numCard=4;
for (let index = 0; index <numCard; index++) {
    document.getElementById('root').appendChild(App(numCard)[index]);
}

