import App from './components/App.js';

const first_window = document.getElementById('first_window');
const second_window = document.getElementById('second_window');
const fourth_window = document.getElementById('fourth_window');
const header_windows = document.getElementById('header');

const startButton = document.getElementById('Btn1');
const continueButton = document.getElementById('Btn2');

const numCard=4;
startButton.addEventListener('click', ()=> {
    console.log('entre');
    second_window.classList.add("show");
    header_windows.classList.add("showheader");
    first_window.classList.add("hide");
});

continueButton.addEventListener('click', ()=> {
    second_window.classList.remove("show");
    header_windows.classList.add("showheader");
    fourth_window.classList.add("show");
});

App(numCard).forEach(element => {
    document.getElementById('root').appendChild(element);
    element.addEventListener('click', myFunction);
}); 

function myFunction() {
    console.log("");
}


