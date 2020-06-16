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
       new Phrase("Ill Be Back"),
       new Phrase("Heads Up"),
       new Phrase("Hasta la vista baby"),
       new Phrase("I like this car"),
       new Phrase("Come with me")
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

   }

   checkForWin(){

   }

   gameOver(){

   }
 }
