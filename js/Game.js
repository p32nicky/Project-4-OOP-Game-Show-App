/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

   /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
   createPhrases(){
     const phrases = [
       new Phrase("ill be back"),
       new Phrase("heads up"),
       new Phrase("hasta la vista baby"),
       new Phrase("i like this car"),
       new Phrase("come with me")
     ];
     return phrases;
   }

   /**
   * Begins game by selecting a random phrase and displaying it to user
   I reset keys on page load
   */
   startGame(){

     document.getElementById('overlay').style.display = 'none';
     const keyReset = document.getElementsByClassName('key');
     Array.from(keyReset).forEach((key) => {
       key.className = ('key');
       key.disabled = false;
     });


     const newTries = document.querySelectorAll('.tries');
      for (let i = 0; i < newTries.length; i++) {
        newTries[i].firstElementChild.setAttribute('src', 'images/liveHeart.png');
      }

    //Calls random phrase and sets to active phrase and pushes to method add phrase to display
    const randomPhrase = game.getRandomPhrase();
  this.activePhrase = randomPhrase;
    const phrase = new Phrase(randomPhrase.phrase);
    phrase.addPhraseToDisplay();

   }

   /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
   getRandomPhrase(){
     const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
      return randomPhrase;
   }

//Key press - Disable each key and assign visiual class CSS.
   handleInteraction(key){
     key.disabled = true;

     if(this.activePhrase.checkLetter(key.textContent) === true){
       key.classList.add('chosen');
       this.activePhrase.showMatchedLetter(key.textContent);

    }
     if(this.activePhrase.checkLetter(key.textContent) === false){
       key.classList.add('wrong');
       this.removeLife();

      // this.activePhrase.showMatchedLetter(key);
     }

   }

   //Remove life handler using missed
   removeLife(){
       var imgReplace = document.getElementsByClassName("tries")[this.missed];
       imgReplace.firstElementChild.setAttribute('src', 'images/lostHeart.png');

    this.missed +=1;
     if (game.missed === 5){
       game.gameOver(game.checkForWin = false);
     }

   }

//Checking for win using chosen number of letters and spaces as equal.
   checkForWin(){
     const letterShow = document.querySelectorAll('.show');
             const letterSpace = document.querySelectorAll('.space');
             if (this.activePhrase.phrase.length === (letterShow.length + letterSpace.length)) {
                 game.gameOver(game.checkForWin = true);
             } else {

                 return false;
             }
           }
//Game Over Handler
   gameOver(){

     const message = document.querySelector('#game-over-message');
       if(game.checkForWin === true){
       overlay.style.display = '';
       message.innerHTML = 'YOU WIN';
       overlay.style.backgroundColor = 'green';
     }else if(game.checkForWin === false) {
       overlay.style.display = '';
       message.innerHTML = 'YOU LOST';
       overlay.style.backgroundColor = 'red';
     }
   }

//Reresh page handler = resetting each key, hearts and clearing existing phrase
   refreshPage(){
     const keyReset = document.getElementsByClassName('key');
     Array.from(keyReset).forEach((key) => {
       key.className = ('key');
       key.disabled = false;
     });

     const newTries = document.querySelectorAll('.tries');
      for (let i = 0; i < newTries.length; i++) {
        newTries[i].firstElementChild.setAttribute('src', 'images/liveHeart.png');
      }

      const existingPhraseLetterArray = document.getElementById('phrase').firstElementChild.children;
      if (existingPhraseLetterArray.length > 0) {
       Array.from(existingPhraseLetterArray).forEach((letter) => {
         letter.parentNode.removeChild(letter);
       });


      }
   }
}
