/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
   constructor(phrase){
     this.phrase = phrase;
   }

   addPhraseToDisplay() {
     const phraseDiv = document.querySelector('#phrase ul');
     const phraseSplit = this.phrase.split('');
     console.log(this.phrase);
     for (let i = 0; i < this.phrase.length; i++) {
       const liLetter = document.createElement('li');
       liLetter.innerHTML = phraseSplit[i];
       phraseDiv.appendChild(liLetter);
       liLetter.setAttribute('id', phraseSplit[i]);
       liLetter.setAttribute('class', phraseSplit[i]);
       if (this.phrase[i] == ' ') {
         liLetter.className = 'space';
       } else if (this.phrase[i] == phraseSplit[i]) {
         liLetter.className += ' hide letter';
       }
     }
   }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
   checkLetter(letter){
      const splitPhrase = null;
      splitPhrase = this.phrase.split('');
      if (splitPhrase.include(letter)){
        return true;
      } else {
        return false;
      }
   }

   /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */

   showMatchedLetter(letter){
     if(letter === true){
       liLetter.className(letter).show;
     } else {
       //live - 1
     }
   }


 }
