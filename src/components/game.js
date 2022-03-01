import ranking from '../data/ranking/ranking.js';

let selectCard1="";
let selectCard2="";
let active=true;
let card_audio=new Audio("audio/CardSound.mp3");
let correct_audio=new Audio("audio/CorrectSound.mp3");
let correctCard=0;
let idPlayer='';
let arrayRanking=[];
let arr;
let positionPlayer='';


const game = {
    clickCard: function(element,card_selection){
        
        if(active===true){
            element.classList.add('disable-div');
            let flipBack="";
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
                        card_audio.play();
                        selectCard1.classList.remove("disable-div");
                        selectCard2.classList.remove("disable-div");
                        active=true;
                    }, 1000);
                }
                else{                    
                    active=true;
                    correctCard++;
                    correct_audio.play();
                    selectCard1.classList.add("showAnimation");
                    selectCard2.classList.add("showAnimation");
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
            return false;
        }  
    },

    correctCard: function(bool){
        if (bool===false) {
            correctCard=0;
        }
        return correctCard; 
    },

    resultPlayer: function(bool){
        return correctCard; 
    },

    cleanGame: function(){
        correctCard=0; 
        selectCard1="";
        selectCard2="";
    },

    endGame: function(level,cardSelection,nickName,min,sec){
        idPlayer=ranking.items.length+1;
        ranking.items.push({id:idPlayer,nickname:nickName, time:min+":"+sec,level:level,type:cardSelection});
        arrayRanking=arr=ranking.items.filter(item => { return item.level == level && item.type==cardSelection; }).sort(function(a,b){
            if (a.time > b.time) { return 1; }
            if (a.time < b.time) { return -1; }
            return 0;});
        positionPlayer=arrayRanking.findIndex(item => {return item.id===idPlayer})+1;
        return {'nickname':nickName,'time':min+':'+sec,'position':positionPlayer};
        }
    
}
export default game;