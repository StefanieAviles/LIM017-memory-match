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
  
  let arrayData=pokemon.items.sort(function() {return Math.random() - 0.5 });

  let arrayCard=[];
  for (let index = 0; index < numCard; index++) {

    const el = document.createElement('div');
    el.className = 'Card';
    el.textContent = arrayData[index].id;
    el.style.backgroundColor = arrayData[index].bgColor;
    el.style.backgroundImage = 'url("'+arrayData[index].image+'")';
    const el2 = document.createElement('div');
    el2.className = 'Card';
    el2.textContent = arrayData[index].id;
    el2.style.backgroundColor = arrayData[index].bgColor;
    el2.style.backgroundImage = 'url("'+arrayData[index].image+'")';
    arrayCard.push(el);
    arrayCard.push(el2);

  }
  return arrayCard.sort(function() {return Math.random() - 0.5 });
};

export default App;
