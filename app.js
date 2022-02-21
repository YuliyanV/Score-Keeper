const p1Button = document.querySelector('#p1Button'); //Select Player One Button
const p2Button = document.querySelector('#p2Button'); //Select Player Two Button

const resetButton = document.querySelector('#reset'); //Select Reset Button

const p1Display = document.querySelector('#p1Display'); //Select Span Player One
const p2Display = document.querySelector('#p2Display'); //Select Span Player Two

const winningScoreSelect = document.querySelector('#playto'); //Select Score


let p1Score = 0; //Player One Score Start at 0
let p2Score = 0; //Player Two Score Start at 0
let winningScore = 3;
let isGameOver = false;


// Player One Score
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');

            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p1Display.textContent = p1Score;
    }
});


// Player Two Score
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');

            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});


// Winning Score Update
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});



// Score Reset Button
resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = 0;
    p2Display.textContent = 0;

    p1Display.classList.remove('has-text-success', 'has-text-danger'); // Remove Color After Reset for Player One
    p2Display.classList.remove('has-text-success', 'has-text-danger'); // Remove Color After Reset for Player Two


    p1Button.disabled = false;
    p2Button.disabled = false;
}