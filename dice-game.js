let p1score = 0;
let p2score =0;
let p1sTurn = true;

let message = document.getElementById('msg');
let p1dice = document.getElementById('p1dice');
let p2dice = document.getElementById('p2dice');
let p1scr = document.getElementById('p1-score');
let p2scr = document.getElementById('p2-score');
let btn = document.getElementById('btn');
let diceCard1 = document.getElementById('diceCard1');
let diceCard2 = document.getElementById('diceCard2');

diceCard1.className = 'active-dice'



btn.addEventListener('click', function() {
    if(p1score < 21 && p2score < 21){
        rollDice();
    }
    else {
        reset();
    }
});


function rollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    
    if(p1sTurn) {
        p1score += diceRoll;
        p1dice.textContent = diceRoll;
        p1scr.textContent = 'Score: ' + p1score;
        p1sTurn = !p1sTurn;
        message.textContent = "Player 2's Turn!";
        diceCard2.className = "active-dice";
        diceCard1.className = "dice";
        renderGame();
    }
    else {
        p2score += diceRoll;
        p2dice.textContent = diceRoll;
        p2scr.textContent = 'Score: ' + p2score;
        p1sTurn = !p1sTurn;
        message.textContent = "Player 1's Turn!"
        diceCard1.className = "active-dice";
        diceCard2.className = "dice";
        renderGame();
    }
}

function renderGame() {


    if(p1score < 21 && p2score < 21) {

    }
    else if(p1score >= 21 && p2score < 21) {
        message.textContent = "Player 1 Won!!"
        diceCard1.className = "win-dice";
        diceCard2.className = "dice";
        btn.textContent = '-Reset Game-'
        
    }
    else if(p1score < 21 && p2score >= 21) {
        message.textContent = "Player 2 Won!!"
        diceCard2.className = "win-dice";
        diceCard1.className = "dice";
        btn.textContent = '-Reset Game-'
    }
}

function reset() {
    p1score = 0;
    p2score = 0;
    p1sTurn = true;
    message.textContent = "Player 1's Turn!"
    p1scr.textContent = 'Score: 0';
    p2scr.textContent = 'Score: 0';
    p1dice.textContent = '-';
    p2dice.textContent = '-';
    btn.textContent = 'Roll Dice!'
}