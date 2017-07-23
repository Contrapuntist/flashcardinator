var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js'); 
var inquirer = require('inquirer');
var colors = require('colors'); 

// function BasicCard (front, back) { 
//     this.frontText = front; 
//     this.backText = back;
// } 


// function ClozeCard (text, cloze) { 
//     this.fullText = cloze + text; 
//     this.partialText = text; 
//     this.cloze = cloze; 
// }


var flashDeck = [];
function makeFlashDeck() {
    console.log('Time to make a flashcard deck');
}

makeFlashDeck();

inquirer.prompt([
    {
        type: 'rawlist',
        name: 'flashcard',
        message: 'What kind of flash card do you wish to create?', 
        choices: ['Basic flashcard', 'Cloze flashcard']
    }, 
    {
        type: 'input',
        name: 'front',
        message: "What should go on the front?" 
    },
    {
        type: 'input',
        name: 'back',
        message: 'What should go on the back?',
    } 
]).then(function (answers) {
    // Use user feedback for... whatever!!
    console.log(answers.flashcard.blue);
    makeflashcard(answers.flashcard, answers.front, answers.back); 
}); 

function makeflashcard (type, front, back) { 
    
    console.log('flashcard maker reached'.green);
    console.log('type of card: ' + type);
    console.log('Front of card: ' + front + '\nBack of card: ' + back); 

    if (type === 'Basic flashcard') { 
        console.log()
        var quizCard = new BasicCard(front, back);
        // console.log(quizCard);
        console.log('Front: ' + quizCard.frontText.green);
        console.log('Back: ' + quizCard.backText.red);
    } else {
        var quizCard = new ClozeCard(front, back);
        console.log(quizCard);
    }
} 