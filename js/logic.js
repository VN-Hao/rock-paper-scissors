let NUMBER_OF_ROUNDS = 5;
let MESSAGE_VICTORY = "You wins! Congratulations!";
let MESSAGE_DEFEAT = "Try harder next time!";

function getRandomInt(num) {
    return Math.floor(Math.random() * num) + 1;
}

function standardize(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > "Z".charCodeAt(0)) {
            ans += str.charAt(i);
        } else {
            ans += String.fromCharCode(str.charCodeAt(i) + 32);
        }
    }
    return ans;
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice == 1) {
        return "Rock";
    }
    if (choice == 2) {
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let p = standardize(playerSelection);
    let c = standardize(computerSelection);
    if (p == c) {
        return 0;
    }
    if (p == "rock") {
        if (c == "paper") {
            return -1;
        }
        return 1;
    }
    if (p == "paper") {
        if (c == "rock") {
            return 1;
        }
        return -1;
    }
    if (c == "rock") {
        return -1;
    }
    return 1;
}

function game() {
    let counter = 0;
    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
        let choice = prompt(`This is round ${i + 1} and your choice is:`);
        let result = playRound(choice, getComputerChoice());
        while (result == 0) {
            choice = prompt(`This is a tie already! Try again:`);
            result = playRound(choice, getComputerChoice());
        }
        if (result > 0) {
            counter++;
        }
        if (counter == 3) {
            break;
        }
    }
    if (counter == 3) {
        alert(MESSAGE_VICTORY);
    } else {
        alert(MESSAGE_DEFEAT);
    }
}

game();