'use strict';
const button_roll = document.querySelector(".btn--roll");
const button_hold = document.querySelector(".btn--hold");
const button_new = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const player1ScoreUI = document.getElementById("score--0");
let player1Score = 0;
player1ScoreUI.textContent = player1Score;

const player2ScoreUI = document.getElementById("score--1");
let player2Score = 0;
player2ScoreUI.textContent = player2Score;

let diceRoll = 0;
let currentPlayer = 0;
let player1CurrentScore = 0;
const player1Current = document.getElementById("current--0");
player1Current.textContent = "" +player1CurrentScore;

let player2CurrentScore = 0;
const player2Current = document.getElementById("current--1");
player2Current.textContent = "" +player2CurrentScore;





//all dice
const dice1 = "dice-1.png";
const dice2 = "dice-2.png";
const dice3 = "dice-3.png";
const dice4 = "dice-4.png";
const dice5 = "dice-5.png";
const dice6 = "dice-6.png";

//better approach
//dice.src = `dice-${number}.png`;


function newGame() {
    currentPlayer = 0;
    if(!player1.classList.contains("player--active")) {
        player1.classList.add("player--active");
        player2.classList.remove("player--active");
    }
    player1Score = 0;
    player1ScoreUI.textContent = player1Score;
    player2Score = 0;
    player2ScoreUI.textContent = player2Score;
    diceRoll = 0;
    currentPlayer = 0;
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    player1Current.textContent = "" +player1CurrentScore;
    player2Current.textContent = "" +player2CurrentScore;
}
function rollDice() {
    diceRoll = randomDiceRolle();
    switchDice(diceRoll);
    addCurentScore(diceRoll);
    
}
function switchPlayer() {
    //if current player is player 1
    if(player1.classList.contains("player--active")) {
        player1.classList.remove("player--active");
        player2.classList.add("player--active");
        player1Score += player1CurrentScore;
        player1CurrentScore = 0;
        player1Current.textContent = player1CurrentScore;
        player1ScoreUI.textContent = player1Score;
        currentPlayer = 1;
    }


    //if current player is player 2
    else {
        player1.classList.add("player--active");
        player2.classList.remove("player--active");
        player2Score += player2CurrentScore;
        player2CurrentScore = 0;
        player2Current.textContent = player2CurrentScore;
        player2ScoreUI.textContent = player2Score;
        currentPlayer = 0;
    }
    console.log("player 1: " + player1Score);
    console.log("player 2: " + player2Score);
    if(player1Score >= 10 || player2Score >= 10) {
        console.log("game over");
        GameOver();
    }
    console.log("current player : " +currentPlayer);
}

function switchDice(number) {
    dice.src = `dice-${number}.png`;
    // switch(number) {
    //     case 1: 
    //         setDiceAttribute(dice1);
    //         break;
    //     case 2: 
    //         setDiceAttribute(dice2);
    //         break;
    //     case 3: 
    //         setDiceAttribute(dice3);
    //         break;
    //     case 4: 
    //         setDiceAttribute(dice4);
    //         break;
    //     case 5: 
    //         setDiceAttribute(dice5);
    //         break;
    //     case 6: 
    //         setDiceAttribute(dice6);
    //         break;
    // }
}

function addCurentScore(diceRoll) {
    
    if(currentPlayer === 0) {
        if(diceRoll === 1) {
            player1CurrentScore = 0;
            switchPlayer();
        }
        else player1CurrentScore += diceRoll;
        console.log(""+ player1CurrentScore);
        player1Current.textContent = "" +player1CurrentScore;

    }

    else {
        if(diceRoll === 1) {
            player2CurrentScore = 0;
            switchPlayer();
        }
        else player2CurrentScore += diceRoll;
        console.log(""+ player1CurrentScore);
        player2Current.textContent = "" +player2CurrentScore;
    }
}
function setDiceAttribute(source){
    dice.setAttribute("src", source);
}

function randomDiceRolle() {
    let number = Math.floor(Math.random() * 6 + 1);
    console.log(number);
    return number;
}
function GameOver() {

    openModal();

}

button_roll.addEventListener("click", rollDice);
button_hold.addEventListener("click", switchPlayer);
button_new.addEventListener("click", newGame);




//open + close modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close-modal");
const congratText = document.querySelector(".congrat");

close_modal.addEventListener("click", closeModal);
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log("modal clicked");
    
    if(player1Score >= 10) {
        congratText.textContent = "Player 1 Win";
    }
    else {
        congratText.textContent = "Player 2 Win";
    }
    
}

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    newGame();
}