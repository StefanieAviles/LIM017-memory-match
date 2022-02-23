let selectCard1="";
let selectCard2="";

const game = {
    clickCard: function(id){
        if(selectCard1===""){
            selectCard1=id;
            console.log("Card1: "+id);
        }
        else if(selectCard2===""){
            selectCard2=id;
            console.log("Card2: "+id);
        }
        else {
            selectCard1=id;
            selectCard2="";
            console.log("Card1: "+id);
        }
    }
}
export default game;