
function ClozeCard (text, cloze) { 
    this.fullText = text; 
    this.partialText = ''; 
    this.cloze = cloze; 
}

ClozeCard.prototype.createPartialText = function () { 
    var textReplace = new RegExp ((this.cloze),'g');
    this.partialText = this.fullText.replace(textReplace, '...');
} 

module.exports = ClozeCard;