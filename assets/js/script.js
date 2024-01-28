// Wait for the DOM to finish loading before runnig the game
// Get the button lements and add eventlisteners to them

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked submit');
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);

            }
        });
    }

    runGame('addition');
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been pocessed
 */

function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `unkown game type: ${gameType}.Abborting!`;

    }
}

function checkAnswer() {

}

/**
 * Gets the operands (the numbers) and the operators (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
let operand1 = parseInt(document.getElementById('operand1').innerText);
let operand2 = parseInt(document.getElementById('operand2').innerText);
let operator = document.getElementById('operator').innerText;

if (oparator === "+") {
    return [operand1 + operand2, "addition"];
  else {
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}. Abborting!`;
  }
}
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubractQuestion() {

}

function displayMultiplyQuestion() {

}


