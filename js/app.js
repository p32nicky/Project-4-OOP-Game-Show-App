/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Start New Game
var game = new Game();

const reset = document.getElementById("btn__reset");
reset.addEventListener("click", function(){
  game.refreshPage();
    game = new Game();
     game.startGame();
});

//Event Delegration for CLick Listener for Letters
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', (e) => {
  console.log(key.innerHTML);
        game.handleInteraction(e.target);
    }));

//I couldn't get this to work as it wouldn't correctly return the key value
/*
document.getElementById("qwerty").addEventListener('click', (e) => {
    if (e.target.className === 'key') {
    console.log(e.target.innerText);
    game.handleInteraction(e.target.innerText);
  }
});

*/
