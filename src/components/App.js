//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import pokemon from '../data/pokemon/pokemon.js';
 
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const App = (numCard) => {
  console.log(pokemon);
  let arrayCard=[];
  for (let index = 0; index < numCard; index++) {
    const el = document.createElement('div');
    el.className = 'Card';
    el.textContent = pokemon.items[index].id;
    el.style.backgroundColor = pokemon.items[index].bgColor;
    el.style.backgroundImage = 'url("'+pokemon.items[index].image+'")';
    arrayCard.push(el);
  }
  return arrayCard;
};

export default App;
