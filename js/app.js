/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Start New Game
const game = new Game();
document.getElementById("btn__reset").addEventListener("click", function(){
   game.startGame();
 });

//Event Delegration for CLick Listener for Letters
document.getElementById("qwerty").addEventListener('click', (e) => {
  if(e.target.className === 'key'){
    handleInteraction(e.target, e.target.innerText);
  }
});
