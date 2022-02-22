import App from './components/App.js';

const numCard=4;

App(numCard).forEach(element => {
    document.getElementById('root').appendChild(element);
    element.addEventListener('click', myFunction);
}); 

  function myFunction(){
      console.log("");
  }

