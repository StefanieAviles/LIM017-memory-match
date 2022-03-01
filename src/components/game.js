import ranking from '../data/ranking/ranking.js';

let selectCard1="";
let selectCard2="";
let active=true;
let card_audio=new Audio("audio/CardSound.mp3");
let correct_audio=new Audio("audio/CorrectSound.mp3");
let correctCard=0;
let cont;
let total=0;
let min= 0;
let sec=0;

const game = {
    clickCard: function(element,card_selection){
        if(active===true){
            let flipBack="";
            ///////
            if(card_selection==="radio_pokemon"){
                flipBack="flipBack1";
            }else{
                flipBack="flipBack2";
            }
            element.classList.remove(flipBack);
            card_audio.play();
            if(selectCard1===""){
                selectCard1=element;
            }
            else if(selectCard2===""){
                active=false;  
                selectCard2=element;
                
                if(this.constrastCard()===false){   
                    setTimeout(() => {            
                        selectCard1.classList.add(flipBack);
                        selectCard2.classList.add(flipBack);
                        active=true;
                    }, 1000);
                }
                else{
                    active=true;
                    correctCard++;
                    correct_audio.play();
                }
            
            }
            else {
                selectCard1=element;
                selectCard2="";
            }
     }
    },

    constrastCard: function(){
        if (selectCard1.id===selectCard2.id) {
            return true;
        }
        else {            
            card_audio.play();
            return false;
        }  
    },
    timer:function(numCard,level,cardSelection,nickName){
        correctCard=0;
        clearInterval(cont);
        total= 0;
        min= 0;
        sec= 0;
        var l1 = document.getElementById("timer");
        cont=setInterval(function(){
            if(correctCard===numCard){
                clearInterval(cont); 
                alert("Terminó el juego en "+min+":"+sec);
                ranking.items.push({nickname:nickName, time:min+":"+sec,level:level,type:cardSelection});
                let arr=ranking.items.filter(item => { return item.level == level && item.type==cardSelection; }).sort(function(a,b){
                    if (a.time > b.time) { return 1; }
                    if (a.time < b.time) { return -1; }
                    return 0;});
                console.log(arr);
            }
            else{
                total++;
                min = Math.floor(total / 60);
                sec = total % 60;
                if(min<10){ min="0"+min;}
                if(sec<10){ sec="0"+sec;}
                l1.innerHTML = min+":"+sec;
            }
        },1000);
      }
}
export default game;