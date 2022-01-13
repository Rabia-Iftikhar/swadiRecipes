
const typeWriter = function(textElement, words, wait = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = true;
}
/*Type Method */
typeWriter.prototype.type = function() 
 {
const current = this.wordIndex % this.words.length;
const fullTxt = this.words[current];

/*Check if deleting */
if(this.isDeleting) {
    //remove char
    this.txt = full.txt.substring(0, this.txt.length - 1);
} else {
    //add char
    this.txt = full.txt.substring(0, this.txt.length - 1);
}

//insert txt
this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    setTimeout(() => this.type(), 500);
}
/*init DOM load */
document.addEventListener('DOMContentLoaded', init)

/*init app */
function init() {
    const textElement = document.querySelector('.txt-type');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');

    new typeWriter(txtElement, words, wait);
}
