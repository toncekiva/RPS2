var userScore = 0;
var computerScore = 0;
var rounds = 0;

function playGame(userChoice) {
  if (rounds < 3) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    var result = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);

    rounds++;
    displayScores();
  } else {
    alert("Game over! You've played 3 rounds.");
  }
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    userScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

function displayResult(user, computer, result) {
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Your choice: ${user}<br>Computer's choice: ${computer}<br>`;
}

function displayScores() {
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML += `<br><br>Score - You: ${userScore}, Computer: ${computerScore}`;
}