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
   */
   startGame(){
     document.getElementById('overlay').style.display = 'none';
     //hide start screen overlay -
     this.activePhrase = this.getRandomPhrase();
    // activePhrase.addPhraseToDisplay();
    const randomPhrase = game.getRandomPhrase();
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

   handleInteraction(){
     console.log()
   }


   removeLife(){
       var imgReplace = document.getElementsByClassName("tries")[this.missed];
       imgReplace.firstElementChild.setAttribute('src', 'images/lostHeart.png');
    this.missed +=1;
     if (this.missed === 5){
       this.gameOver(false);
     }

   }

   checkForWin(){

     let missingLetter = 0;
      for (var ml = 0; ml <phraseDivUl.length; ml ++){
        if (phraseDivUl[i].className == "hide letter") {
						missingLetters += 1;
					}
          if (missLetters ===true){
            return true;
          }
      }
   }

   gameOver(checkForWin){

     const overlay = document.querySelector('#overlay');
     const message = document.querySelector('#game-over-message');

     if(this.checkForWin === true){
       overlay.style.display = '';
       message.textContent = 'YOU WIN';
       overlay.style.backgroundColor = 'green';

     }else {
       overlay.style.display = '';
       message.textContent = 'YOU LOST';
       overlay.style.backgroundColor = 'red';


   }
 }
}
