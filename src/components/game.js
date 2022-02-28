let selectCard1="";
let selectCard2="";
let active=true;

const game = {
    clickCard: function(element){
        if(active===true){
            element.classList.remove("flipBack");
            document.getElementById("root").disabled = true;
            if(selectCard1===""){
                selectCard1=element;;
            }
            else if(selectCard2===""){ 
                active=false;   
                selectCard2=element;
                if(this.constrastCard()===false){
                    setTimeout(() => {
                    selectCard1.classList.add("flipBack");
                    selectCard2.classList.add("flipBack");
                    active=true;
                    }, 1000);  
                }
                else{
                    active=true; 
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
    }
}
export default game;