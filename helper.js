//images for cards
var pics = [
  "acropolis.png",
  "bergen.png",
  "easterisland.png",
  "eiffel.png",
  "florence.png",
  "giza.png",
  "grandcanyon.png",
  "macchupicchu.png",
  "niagara.png",
  "redsquare.png",
  "riodejaneiro.png",
  "saltmines.png",
  "tajmahal.png",
  "towerofpisa.png",
  "venice.png",
  "wallofchina.png",
  "finnkirka.png"
];

var deck = [];
var discovered = [];

function redraw(){
  cardwidth = Math.min(window.innerWidth, window.innerHeight)/4 - 10;

  document.getElementById("playfield").style.width =  (cardwidth+3)*4 + "px";
  document.getElementById("playfield").style.height = (cardwidth+3)*4 + "px";
  for(let i=0; i<16; i++){
    cards[i].setAttribute("width", cardwidth);
  }
}

function randomNumber() {
  return Math.floor(Math.random()*(pics.length));
}

function reset(){
  let count = 0;
  var open = [];
  var turned = 0;
  var justMatched = false;

  discovered =  [-1, -1, -1, -1,
                 -1, -1, -1, -1,
                 -1, -1, -1, -1,
                 -1, -1, -1, -1];

  deck =        [-1, -1, -1, -1,
                 -1, -1, -1, -1,
                 -1, -1, -1, -1,
                 -1, -1, -1, -1];

  while(true){
    let cardNumber = randomNumber();
    let img = randomNumber();

    //check if card is already placed
    if(deck.filter(n => n==img).length>0) continue;

    while(deck[cardNumber] != -1){
      cardNumber = randomNumber();
    }
    deck[cardNumber] = img;

    cardNumber = randomNumber();
    while(deck[cardNumber] != -1){
      cardNumber = randomNumber();
    }
    deck[cardNumber] = img;

    count++;

    if(count < 8){
      continue;
    } else {
      break;
    }
  }
}

window.onresize = () => {
  redraw();
}

function turnBackUndiscoveredCards() {
  for(let i=0; i<16; i++){
    if(discovered[i] < 0) {
      cards[i].src = "images/back.png";
      open = [];
    }
    turned = 0;
  }
}
