let selectCard1="";
let selectCard2="";
let card_audio=new Audio("audio/CardSound.mp3");
let correct_audio=new Audio("audio/CorrectSound.mp3");

const game = {
    clickCard: function(element,card_selection){
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
            setTimeout(() => {
            selectCard2=element;
            if(this.constrastCard()===false){               
                selectCard1.classList.add(flipBack);
                selectCard2.classList.add(flipBack);
                 
            }
            else{
                correct_audio.play();
            }
        }, 1000);
        }
        else {
            selectCard1=element;
            selectCard2="";
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
    }
}
export default game;