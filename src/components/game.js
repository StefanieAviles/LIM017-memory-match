let selectCard1="";
let selectCard2="";

const game = {
    clickCard: function(element){
        element.classList.remove("flipBack");
        if(selectCard1===""){
            selectCard1=element;;
            console.log("Card1: "+element.id);
        }
        else if(selectCard2===""){
            setTimeout(() => {
            selectCard2=element;
            console.log("Card2: "+element.id);
            if(this.constrastCard()===false){
                
                selectCard1.classList.add("flipBack");
                selectCard2.classList.add("flipBack");
                
            }
        }, 1000);
        }
        else {
            selectCard1=element;
            selectCard2="";
            console.log("Card1: "+element.id);
        }
    },

    constrastCard: function(){
        if (selectCard1.id===selectCard2.id) {
            return true;
        }
        else {
            return false;
        }  
    }
}
export default game;