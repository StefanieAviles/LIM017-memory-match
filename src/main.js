import App from "./components/App.js";
import game from "./components/game.js";

const first_window = document.getElementById("first_window");
const second_window = document.getElementById("second_window");
const third_window = document.getElementById("third_window");
const fourth_window = document.getElementById("fourth_window");

const header_windows = document.getElementById("header");

const startButton = document.getElementById("Btn1");
const continueButton = document.getElementById("Btn2");
const playButton = document.getElementById("Btn3");

const numCard=8;

startButton.addEventListener("click", ()=> {
    second_window.classList.add("show");
    header_windows.classList.add("showheader");
    first_window.classList.add("hide");
});

continueButton.addEventListener("click", ()=> {
    second_window.classList.remove("show");
    header_windows.classList.add("showheader");
    third_window.classList.add("show");
});

playButton.addEventListener("click", ()=> {
    third_window.classList.remove("show");
    header_windows.classList.add("showheader");
    fourth_window.classList.add("show");

App(numCard).forEach(element => {
    element.classList.add("flipBack");
    document.getElementById("root").appendChild(element);
    element.addEventListener("click", function(){
    game.clickCard(element);
    });
});     
    
});



