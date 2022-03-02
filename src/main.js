import App from "./components/App.js";
import game from "./components/game.js";

//Declaracion de variables
const first_window = document.getElementById("first_window");
const second_window = document.getElementById("second_window");
const third_window = document.getElementById("third_window");
const fourth_window = document.getElementById("fourth_window");
const fifth_window = document.getElementById("fifth_window");
const sixth_window = document.getElementById("sixth_window");

const header_windows = document.getElementById("header");
const label_error = document.getElementById("error_message");
const show_nickname = document.getElementById("span_nickname");
const input = document.getElementById("Nickname");
const level = document.getElementById("level");
const timer = document.getElementById("timer");
const results_nickname = document.getElementById("nickname_result");
const result_time = document.getElementById("time_result");
const result_position = document.getElementById("position");

const startButton = document.getElementById("Btn1");
const continueButton = document.getElementById("Btn2");
const playButton = document.getElementById("Btn3");
const updateButton = document.getElementById("Update");
const exitButton = document.getElementById("Exit");
const top5Button = document.getElementById("top_5");
const play_againButton = document.getElementById("start_again");
const start_againButton = document.getElementById("finish");
const radio_pokemon = document.getElementById("radio_pokemon");
const radio_web = document.getElementById("radio_web");


const pattern = new RegExp("^[A-Za-z0-9]+$");
const start_sound = new Audio("audio/StartSound.mp3");
let array_cards = [];
let array_top = [];
let numCard=0;
let result=[];
let string_time = "vacio";

//timer
let cont;
let total=0;
let min= 0;
let sec=0;
let correctCard;

//Damos funcionalidad al boton de la 1era ventana, para que la oculte y muestre la siguiente
startButton.addEventListener("click", ()=> {
   navigation(2);
});
//Damos funcionalidad al boton del header para salir y regresar al inicio
exitButton.addEventListener("click", ()=> {
    input.value = "";
    level.value = 0;
    document.querySelector('input[name="card_selection"]:checked').id='';
    array_cards.forEach(element =>{
        element.remove();
    });
    array_cards=[];
    navigation(1);
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
        navigation(3);
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
        navigation(4);
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
        startGame(numCard,level.value,document.querySelector('input[name="card_selection"]:checked').id);
         

        //Funcionalidad para volver a jugar
        updateButton.addEventListener("click", ()=> {
            navigation(4);
            array_cards.forEach(element =>{
                element.remove();
            });
            array_cards=[];
            startGame(numCard,level.value,document.querySelector('input[name="card_selection"]:checked').id);
        });
    }else{
        alert ("Debes elegir al menos un tipo de baraja y un nivel");
    }    
      
});

const startGame = (numCard,level,cardSelection) => {
    array_cards=App(numCard,cardSelection);
    start_sound.play();
    correctCard=game.cleanGame();
    startTimer(numCard,level,cardSelection,input.value);
    array_cards.forEach(element => {
        document.getElementById("root").appendChild(element);
        element.addEventListener("click", function(){
            game.clickCard(element,document.querySelector('input[name="card_selection"]:checked').id);
        });
    }); 
    
}

const startTimer = (numCard,level,cardSelection,nickName) => {
    clearInterval(cont);
    total= 0;
    min= 0;
    sec= 0;
    cont=setInterval(function(){
        correctCard=game.correctCard();
        if(correctCard===numCard){
            clearInterval(cont); 
            result=game.endGame(level,cardSelection,nickName,min,sec);
            results_nickname.innerText=result.nickname;
            result_time.innerText=result.time;
            result_position.innerText=result.position;
            navigation(5);
        }
        else{
            total++;
            min = Math.floor(total / 60);
            sec = total % 60;
            if(min<10){ min="0"+min;}
            if(sec<10){ sec="0"+sec;}
            timer.innerHTML = min+":"+sec;
        }
        return "1";
    },1000);
}
top5Button.addEventListener("click",()=> {
    array_top.forEach(element =>{
        element.remove();
    });
    array_top=[];
    array_top=game.topRanking();
    array_top.forEach(element => {
        document.getElementById("top").appendChild(element);
    }); 
    navigation(6);

});
play_againButton.addEventListener("click",()=>{
    input.value = "";
    level.value = 0;
    array_cards.forEach(element =>{
        element.remove();
    });
    array_cards=[];
    navigation(2);
    
});
start_againButton.addEventListener("click",()=> {
    input.value = "";
    level.value = 0;
    array_cards.forEach(element =>{
        element.remove();
    });
    array_cards=[];
    navigation(2);
});

const navigation = position =>{
    switch (position) {
        case 1:
            first_window.classList.remove("hide");
            second_window.classList.remove("show");
            header_windows.classList.remove("showheader");
            third_window.classList.remove("show");
            fourth_window.classList.remove("show");  
            fifth_window.classList.remove("show");
            sixth_window.classList.remove("show");
            timer.classList.add("hide");
            
            break;

        case 2:
            second_window.classList.add("show");
            header_windows.classList.add("showheader");
            timer.classList.add("hide");
            first_window.classList.add("hide");
            fifth_window.classList.remove("show");
            sixth_window.classList.remove("show");
            break;

        case 3:
            second_window.classList.remove("show");
            header_windows.classList.add("showheader");
            show_nickname.innerText=input.value + "!!!";
            third_window.classList.add("show");
            break;

        case 4:
            third_window.classList.remove("show");
            header_windows.classList.add("showheader");
            fourth_window.classList.add("show");   
            timer.classList.remove("hide"); 
            break; 

        case 5:
            fourth_window.classList.remove("show");
            fifth_window.classList.add("show");
            timer.classList.add("hide");                     
            break;

        case 6:
            sixth_window.classList.add("show");
            fifth_window.classList.remove("show");
            
            break;

        default:
            break;
    }
}







