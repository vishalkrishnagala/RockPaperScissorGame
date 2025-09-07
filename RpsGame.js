const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("scorePlayer");
const computerDisplay = document.getElementById("scoreComputer");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const repeatTimes = document.getElementById("repeatTimes");
const noTimesSubmit = document.getElementById("noTimesSubmit");
const endSubmit = document.getElementById("endSubmit");
const whoWon = document.getElementById("whoWon");
document.querySelector(".close-up").classList.add("makeDisapper");
let remainingRounds = 0;
noTimesSubmit.addEventListener("click", () => {
    remainingRounds = Number(repeatTimes.value);
    if (remainingRounds > 0) {
        document.querySelector(".pop-up-start").classList.add("makeDisapper");
        playerDisplay.textContent = ``;
        computerDisplay.textContent = ``;
        count=0;
        resultDisplay.textContent="";
        playerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
    }
});
let playerScore = 0;
let computerScore = 0;
const emojiMap = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};
let count = 0;


function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    if (playerChoice===computerChoice) {
        result = "IT'S A TIE!"
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice==="scissors")? "YOU WIN!": "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice==="rock")? "YOU WIN!": "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice==="paper")? "YOU WIN!": "YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent = `${emojiMap[playerChoice]}`;
    computerDisplay.textContent = `${emojiMap[computerChoice]}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            count++;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            count++;
            break;
        default:
            resultDisplay.classList.add("yellowText");
    }
    if (remainingRounds<=count) {
        whoWon.classList.remove("greenText", "redText", "yellowText");
        if (computerScore===playerScore) {
            whoWon.textContent = "IT'S A TIE!";
            whoWon.classList.add("yellowText");
        } else if (playerScore>computerScore) {
            whoWon.textContent = "YOU WON!";
            whoWon.classList.add("greenText");
        } else {
            whoWon.textContent = "YOU LOSE";
            whoWon.classList.add("redText");
        }
        document.querySelector(".close-up").classList.remove("makeDisapper");
        document.querySelector(".pop-up-start").classList.remove("makeDisapper");
        endSubmit.addEventListener("click", () => {
            document.querySelector(".close-up").classList.add("makeDisapper");
            noTimesSubmit.addEventListener("click", () => {
                remainingRounds = Number(repeatTimes.value);
                if (remainingRounds > 0) {
                    document.querySelector(".pop-up-start").classList.add("makeDisapper");
                    playerDisplay.textContent = ``;
                    computerDisplay.textContent = ``;
                    count=0;
                    resultDisplay.textContent="";
                    playerScore = 0;
                    playerScoreDisplay.textContent = playerScore;
                    computerScore = 0;
                    computerScoreDisplay.textContent = computerScore;
                }
            });
        });
    }
}