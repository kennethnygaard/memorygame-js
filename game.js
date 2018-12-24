
var cardwidth = 0;
var cards = document.getElementsByName("card");

var open = [];
var turned = 0;
var justMatched = false;

window.onload = () => {
  reset();
  redraw();
}


//adding onclick-functions to all cards
for(let i=0; i<16; i++){
  cards[i].onclick = () => {

    if(discovered.filter(n => n==1).length > 15){
      reset();
    }

    if( isNotTurned(i) && turned < 2 ){

      turnCard(i);
      open.push(i);
      turned++;

      // check if matching cards
      if(open.length>1){
        if( matchingCards() ){
          justMatched = true;
          discovered[open[0]] = 1;
          discovered[open[1]] = 1;
          open = [];
          turnBackUndiscoveredCards();
        }
      }

    } else{
      turnBackUndiscoveredCards();
    }
  }
}

function matchingCards(){
  return cards[open[0]].getAttribute('src') == cards[open[1]].getAttribute('src');
}

function isNotTurned(i){
  return cards[i].getAttribute('src') == "images/back.png";
}

function turnCard(i){
  cards[i].src = "images/" + pics[deck[i]];
}
