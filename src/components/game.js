let selectCard1="";
let selectCard2="";
let active=true;
let card_audio=new Audio("audio/CardSound.mp3");
let correct_audio=new Audio("audio/CorrectSound.mp3");

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
    }
}
export default game;