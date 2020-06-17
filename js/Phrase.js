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
      const splitPhrase = this.phrase.split('');
      if (splitPhrase.includes(letter)){
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
     const phraseDivUl = document.getElementById('phrase').firstElementChild.children;
     const phraseDiv = document.getElementById('phrase').firstElementChild;

     console.log(letter.innerHTML);
     for (let i = 0; i < phraseDivUl.length; i++){
       if(letter.innerHTML == phraseDivUl[i].textContent){
       phraseDivUl[i].className = 'show';
       }
     }
   }


 }
