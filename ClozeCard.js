
function ClozeCard (text, cloze) { 
    this.fullText = cloze + text; 
    this.partialText = text; 
    this.cloze = cloze; 
}

ClozeCard.prototype.answerCheck 

module.exports = ClozeCard;