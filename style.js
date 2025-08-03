let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container p"); // correct selector
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#computer");

// Function to get computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Draw Game
const drawGame = () => {
  msg.innerText = "It's a draw!";
};

// Score Updation
const updateScore = () => {
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
};

// Win or Lose Logic
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
  }
  updateScore();
};

// Game Logic
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (
      (userChoice === "rock" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "rock")
    ) {
      userWin = false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Adding click event listeners to each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
