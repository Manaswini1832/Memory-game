
const grid = document.getElementsByClassName("grid")[0];
const resultDisplay = document.getElementById("result");
var cardsChosen = [];
var cardsChosenId = [];
const cardsWon = [];

 const cardArray = [
   {
     name:"burger",
     image:"images/burger.png"
   },
   {
     name:"fries",
     image:"images/fries.png"
   },
   {
     name:"hotdog",
     image:"images/hotdog.png"
   },
   {
     name:"icecream",
     image:"images/icecream.png"
   },
   {
     name:"milkshake",
     image:"images/milkshake.png"
   },
   {
     name:"pizza",
     image:"images/pizza.png"
   },
   {
     name:"burger",
     image:"images/burger.png"
   },
   {
     name:"fries",
     image:"images/fries.png"
   },
   {
     name:"hotdog",
     image:"images/hotdog.png"
   },
   {
     name:"icecream",
     image:"images/icecream.png"
   },
   {
     name:"milkshake",
     image:"images/milkshake.png"
   },
   {
     name:"pizza",
     image:"images/pizza.png"
   },
 ];

 cardArray.sort(() => 0.5-Math.random());   //New concept





function flipCard(){
  var cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].image);

  if(cardsChosen.length === 2){
    setTimeout(checkForMatch, 500);
};
}

function checkForMatch(){
  const cards = document.querySelectorAll("img");

    if(cardsChosen[0] === cardsChosen[1]){
      alert("You found a match !");
      cards[cardsChosenId[0]].setAttribute("src", "images/white.png");
      cards[cardsChosenId[1]].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);}


    else{
      cards[cardsChosenId[0]].setAttribute("src", "images/colour.png");
      cards[cardsChosenId[1]].setAttribute("src", "images/colour.png");
      alert("Sorry try again");}


    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
      resultDisplay.textContent = "Congratulations ! You found them all";}
};




function createBoard(){
for(let i = 0; i < cardArray.length; i++){
  var card = document.createElement("img");
  card.setAttribute("src", "images/colour.png");
  card.setAttribute("data-id", i);
  card.addEventListener("click", flipCard);
  grid.appendChild(card);
}
};

createBoard();
