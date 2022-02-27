//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//

import pokemon from '../data/pokemon/pokemon.js';
import webdev from '../data/webdev/webdev.js';

// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
const App = (numCard,type_card) => {
  let arrayData=[];  
  let flipBack ="";
  if(type_card==="radio_pokemon"){
    arrayData=pokemon.items.sort(function() {return Math.random() - 0.5 });
    flipBack="flipBack1";
  }
  else if(type_card==="radio_web"){
    arrayData=webdev.items.sort(function() {return Math.random() - 0.5 });
    flipBack="flipBack2";
  }
  let arrayCard=[];
  for (let index = 0; index < numCard; index++) {
    const el = document.createElement('div');
    el.className = 'Card';
    el.id = arrayData[index].id;
    el.style.backgroundColor = arrayData[index].bgColor;
    el.style.backgroundImage = 'url("'+arrayData[index].image+'")';
    el.classList.add(flipBack);
    const el2 = document.createElement('div');
    el2.className = 'Card';
    el2.id = arrayData[index].id;
    el2.style.backgroundColor = arrayData[index].bgColor;
    el2.style.backgroundImage = 'url("'+arrayData[index].image+'")';
    el2.classList.add(flipBack);
    arrayCard.push(el);
    arrayCard.push(el2);
  }
  return arrayCard.sort(function() {return Math.random() - 0.5 });
};

export default App;
