import pokemon from '../data/pokemon/pokemon.js';
import webdev from '../data/webdev/webdev.js';

const App = (id,bgColor,image,flipBack) => {
    const el = document.createElement('div');
    el.className = 'Card';
    el.id = id;
    el.style.backgroundColor = bgColor;
    el.style.backgroundImage = 'url("'+image+'")';
    el.classList.add(flipBack);  
  return el;
};

const ArrayCard = (numCard,type_card) => {
  let flipBack ="";
  let arrayData=[];  
  if(type_card==="radio_pokemon"){
    arrayData=pokemon.items.sort(function() {return Math.random() - 0.5});
    flipBack="flipBack1";
  }
  else if(type_card==="radio_web"){
    arrayData=webdev.items.sort(function() {return Math.random() - 0.5 });
    flipBack="flipBack2";
  }
  let arrayCard=[];
  for (let index = 0; index < numCard; index++) {
    arrayCard.push(App(arrayData[index].id,arrayData[index].bgColor,arrayData[index].image,flipBack));
    arrayCard.push(App(arrayData[index].id,arrayData[index].bgColor,arrayData[index].image,flipBack));
  }
  return arrayCard.sort(function() {return Math.random() - 0.5 });
};

export {App, ArrayCard};
