const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You destroyed the computer!";
  } else if (userChoice === computerChoice) {
    return "The game is a tie!";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return "You won!";
  } else {
    return "The computer won!";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    return "You won!";
  } else {
    return "The computer won!";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    return "You won!";
  } else {
    return "The computer won!";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
