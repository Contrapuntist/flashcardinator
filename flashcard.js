var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js'); 
var inquirer = require('inquirer');
var colors = require('colors'); 

var flashcardObj = { 
    flashDeck: [],
    cardType: '',
    flashInit: function () { 
        inquirer.prompt([
            {
            type: 'rawlist',
            name: 'verify',
            message: 'Do you want to create a flashcard?', 
            choices: ['Yes', 'No']
            }
        ]).then(function (answers) { 
            if (answers.verify === 'Yes') { 
                return askFlashCard();
            } else { 
                return console.log ("Oh well, maybe next time")    
            }  
        });
    } 
}

function askFlashCard() {
    console.log('Time to make a flashcard deck');

    inquirer.prompt([{
        type: 'rawlist',
        name: 'flashcard',
        message: 'What kind of flash card do you wish to create?', 
        choices: ['Basic', 'Cloze']
    }]).then(function (answers) { 
        console.log(answers.flashcard);
        flashcardObj.cardType = answers.flashcard; 
        return makeFlashCard(flashcardObj.cardType); 
    // Use user feedback for... whatever!! 
    });
}

function makeFlashCard (type) { 

    if (type === 'Basic' ) {
        inquirer.prompt([
        
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
            return makeBasicCard(answers.front, answers.back); 
        }); 
    } else { 
        inquirer.prompt([
            {
                type: 'input',
                name: 'fullString',
                message: "Write the full fact?" 
            },
            {
                type: 'input',
                name: 'cloze',
                message: 'What phrase should be excluded from front of card?',
            } 
        ]).then(function (answers) {
            // Use user feedback for... whatever!!
            console.log(answers.fullString.blue); 
            return makeClozeCard(answers.fullString, answers.cloze); 
        }); 
    }
}

function makeBasicCard (front, back) { 
    
    console.log('flashcard maker reached'.green); 

        var quizCard = new BasicCard(front, back);
        // console.log(quizCard);
        console.log('Front: ' + quizCard.frontText.green);
        console.log('Back: ' + quizCard.backText.red);
   
        console.log(quizCard);
        flashcardObj.flashDeck.push(quizCard);
        console.log(flashcardObj.flashDeck); 
        return flashcardObj.flashInit();
}  

function makeClozeCard (string, cloze) { 
    
    // console.log('let\'s make a cloze card'.cyan); 
    // console.log(string);
    // console.log(cloze); 
    if (string.includes(cloze)) { 
        var quizClozeCard = new ClozeCard(string, cloze);
        quizClozeCard.createPartialText();
        console.log('Front: ' + quizClozeCard.partialText.green);
        console.log('Back: ' + quizClozeCard.fullText.red); 
        flashcardObj.flashDeck.push(quizClozeCard);
        return flashcardObj.flashInit();
    } else { 
        console.log ('Valid cloze card entry not entered'); 
        return flashcardObj.flashInit(); 
    }
}

flashcardObj.flashInit(); 