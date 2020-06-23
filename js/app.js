/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//creates and starts New Game
var game = new Game();

const reset = document.getElementById("btn__reset");
reset.addEventListener("click", function(){
  game.refreshPage();
    game = new Game();
     game.startGame();
});

//Event Handler for Click Listener for Letters - sends target to handle interaction
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', (e) => {
  console.log(key.innerHTML);
        game.handleInteraction(e.target);

    }));
