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
     const lives = 5;
     const heartImage = 'images\lostHeart.png';
     if (checkLetter === false){
       lives -= 1;
     var imgReplace = document.getElementsByClassName("tries")[0];
     heartImage.src = "hackanm.gif";
     heartImage.style.visibility = "visible";
     }
     if (lives === 0){
       gameOver(lose);
     }

   }

   checkForWin(){
     if(this.phrase.show === this.phrase.length){
       return true;
     } else {
       return false;
     }
   }

   gameOver(checkForWin){
     if(checkForWin === 'true'){
       document.getElementById('overlay').style.display = 'block';
       document.getElementById('title').h2.innerHTML = 'You win, congrats!';
     }else if(checkForWin === 'false'){
       document.getElementById('overlay').style.display = 'block';
       document.getElementById('title').h2.innerHTML = 'You lost, try again!';
     }

   }
 }
