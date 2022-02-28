import App from "./components/App.js";
import game from "./components/game.js";

//Declaracion de variables
const first_window = document.getElementById("first_window");
const second_window = document.getElementById("second_window");
const third_window = document.getElementById("third_window");
const fourth_window = document.getElementById("fourth_window");

const header_windows = document.getElementById("header");
const label_error = document.getElementById("error_message");
const show_nickname = document.getElementById("span_nickname");
const input = document.getElementById("Nickname");
const level = document.getElementById("level");

const startButton = document.getElementById("Btn1");
const continueButton = document.getElementById("Btn2");
const playButton = document.getElementById("Btn3");
const updateButton = document.getElementById("Update");
const exitButton = document.getElementById("Exit");

const pattern = new RegExp("^[A-Za-z0-9]+$");
const start_sound = new Audio("audio/StartSound.mp3");
let array_cards = [];
let numCard=0;

//Damos funcionalidad al boton de la 1era ventana, para que la oculte y muestre la siguiente
startButton.addEventListener("click", ()=> {
    second_window.classList.add("show");
    header_windows.classList.add("showheader");
    first_window.classList.add("hide");
});
//Damos funcionalidad al boton del header para salir y regresar al inicio
exitButton.addEventListener("click", ()=> {
    window.location.reload(); 
});
//Funcion que verifica si el nickname ingresado es valido
function isValid(sentence) {
  //Condicion que valida que no este vacio el campo
   if (!sentence) {
    return false;
  } else {
    //Condicion que valida que sean maximo 10 caracteres
    if (sentence.length > 10) {
      return false;
    } else {
      //Condicion que valida que solo ingrese numeros y letras
      if (!pattern.test(sentence)) {
        return false;
      } else {
        return true;
      }
    }
  }
}
//Damos funcionalidad al boton continuar
continueButton.addEventListener("click", ()=> {
    //Si el nickname es valido, me muestra la siguiente ventana
    if (isValid(input.value)) {
        second_window.classList.remove("show");
        header_windows.classList.add("showheader");
        show_nickname.innerText=input.value + "!!!";
        third_window.classList.add("show");
    //Caso contrario pinta la casilla de rojo y muestra mensaje de error  
    } else {
      input.classList.add("error_input");
      label_error.innerText="Por favor solo puedes ingresar letras y numeros (Hasta 10 caracteres)";
    }
});
//Funcion que valida si al menos se ha elegido un tipo de baraja
function validate_radio(){
    if(!document.querySelector('input[name="card_selection"]:checked')){
        return false;
    }else{
        return true;
    }
}
//Funcion que valida si al menos se ha elegido un nivel de juego
function validate_select(){
    if(level.value === "0"){
        return false;
    }else{
        return true;
    }
}
//Damos funcionalidad al boton para mostrar la siguiente ventana    
playButton.addEventListener("click", ()=> {

    //Si al menos eligio una baraja y un nivel muestra la siguiente pantalla   
    if(validate_radio() && validate_select()) {
        third_window.classList.remove("show");
        header_windows.classList.add("showheader");
        fourth_window.classList.add("show");
        //Para el nivel Facil se jugara con 6 cartas, Intermedio 12 cartas, y dificl 18 cartas
        if(level.value ==="1"){
            numCard=3;
        }else if(level.value ==="2"){
            numCard=6;
        }
        else{
            numCard=9;
        }
        //Invocamos a APP
        startGame(numCard,document.querySelector('input[name="card_selection"]:checked').id);
        updateButton.addEventListener("click", ()=> {
            array_cards.forEach(element =>{
                element.remove();
            });
            array_cards=[];
            startGame(numCard,document.querySelector('input[name="card_selection"]:checked').id);
            
        });
    }else{
        alert ("Debes elegir al menos un tipo de baraja y un nivel");
    }       
});
function startGame(numCard,cardSelection){
    array_cards=App(numCard,cardSelection);
    start_sound.play();
    game.timer(numCard);
    array_cards.forEach(element => {
        document.getElementById("root").appendChild(element);
        element.addEventListener("click", function(){
            game.clickCard(element,document.querySelector('input[name="card_selection"]:checked').id);
        });
    }); 
}




