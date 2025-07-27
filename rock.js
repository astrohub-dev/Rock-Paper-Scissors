let scores = JSON.parse(localStorage.getItem("saveScores"));

if (!scores) {
  scores = [{ win: 0 }, { lose: 0 }, { tie: 0 }];
}

const scoreBoard = document.getElementById("myp");
const compMove = document.getElementById("mydiv");
const outcome = document.getElementById("mydiv2");
scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;

function rock() {
  let compChoice = " ";
  const comp = Math.random();
  if (comp >= 0 && comp < 1 / 3) {
    compChoice = "Rock";
    scores.tie += 1;
    scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
    localStorage.setItem("saveScores", JSON.stringify(scores));
    compMove.innerHTML = "COMP:" + " " + compChoice;
  } else if (comp >= 1 / 3 && comp < 2 / 3) {
    compChoice = "Paper";
    scores.lose += 1;
    scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
    localStorage.setItem("saveScores", JSON.stringify(scores));
    compMove.innerHTML = "COMP:" + " " + compChoice;
    if (scores.lose === 10) {
      alert("COMPUTER CHOSE PAPER, YOU LOST!😞");
      scores.win = 0;
      scores.lose = 0;
      scores.tie = 0;
      scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
      localStorage.setItem("saveScores", JSON.stringify(scores));
      compMove.innerHTML = "";
      outcome.innerHTML = "";
    }
  } else {
    compChoice = "Scissors";
    scores.win += 1;
    scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
    localStorage.setItem("saveScores", JSON.stringify(scores));
    compMove.innerHTML = "COMP:" + " " + compChoice;
    if (scores.win === 10) {
      alert("COMPUTER CHOSE SCISSORS, YOU WON!😃");
      scores.win = 0;
      scores.lose = 0;
      scores.tie = 0;
      scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
      localStorage.setItem("saveScores", JSON.stringify(scores));
      compMove.innerHTML = "";
      outcome.innerHTML = "";
    }
  }

  if (compChoice === "Rock") {
    outcome.innerHTML = "OUTCOME: Tie";
  } else if (compChoice === "Scissors") {
    outcome.innerHTML = "OUTCOME: You won";
  } else {
    outcome.innerHTML = "OUTCOME: You lost";
  }
}

function paper() {
  let compChoice = " ";
  const comp = Math.random();
  if (comp >= 0 && comp < 1 / 3) {
    compChoice = "Rock";
    scores.win += 1;
    scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
    localStorage.setItem("saveScores", JSON.stringify(scores));
    compMove.innerHTML = "COMP:" + " " + compChoice;
    if (scores.win === 10) {
      alert("COMPUTER CHOSE ROCK, YOU WON!😃");
      scores.win = 0;
      scores.lose = 0;
      scores.tie = 0;
      scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
      localStorage.setItem("saveScores", JSON.stringify(scores));
      compMove.innerHTML = "";
      outcome.innerHTML = "";
    }
  } else if (comp >= 1 / 3 && comp < 2 / 3) {
    compChoice = "Paper";
    scores.tie += 1;
    scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
    localStorage.setItem("saveScores", JSON.stringify(scores));
    compMove.innerHTML = "COMP:" + " " + compChoice;
  } else {
    compChoice = "Scissors";
    scores.lose += 1;
    scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
    localStorage.setItem("saveScores", JSON.stringify(scores));
    compMove.innerHTML = "COMP:" + " " + compChoice;
    if (scores.lose === 10) {
      alert("COMPUTER CHOSE SCISSORS, YOU LOST!😞");
      scores.win = 0;
      scores.lose = 0;
      scores.tie = 0;
      scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
      localStorage.setItem("saveScores", JSON.stringify(scores));
      compMove.innerHTML = "";
      outcome.innerHTML = "";
    }
  }

  if (compChoice === "Paper") {
    outcome.innerHTML = "OUTCOME: Tie";
  } else if (compChoice === "Rock") {
    outcome.innerHTML = "OUTCOME: You won";
  } else {
    outcome.innerHTML = "OUTCOME: You lost";
  }
}

function scissors() {
  let compChoice = " ";
  const comp = Math.random();
  if (comp >= 0 && comp < 1 / 3) {
    compChoice = "Rock";
    scores.lose += 1;
    scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
    localStorage.setItem("saveScores", JSON.stringify(scores));
    compMove.innerHTML = "COMP:" + " " + compChoice;
    if (scores.lose === 10) {
      alert("COMPUTER CHOSE ROCK, YOU LOST!😞");
      scores.win = 0;
      scores.lose = 0;
      scores.tie = 0;
      scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
      localStorage.setItem("saveScores", JSON.stringify(scores));
      compMove.innerHTML = "";
      outcome.innerHTML = "";
    }
  } else if (comp >= 1 / 3 && comp < 2 / 3) {
    compChoice = "Paper";
    scores.win += 1;
    scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
    localStorage.setItem("saveScores", JSON.stringify(scores));
    compMove.innerHTML = "COMP:" + " " + compChoice;
    if (scores.win === 10) {
      alert("COMPUTER CHOSE PAPER, YOU WON!😃");
      scores.win = 0;
      scores.lose = 0;
      scores.tie = 0;
      scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
      localStorage.setItem("saveScores", JSON.stringify(scores));
      compMove.innerHTML = "";
      outcome.innerHTML = "";
    }
  } else {
    compChoice = "Scissors";
    scores.tie += 1;
    scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
    localStorage.setItem("saveScores", JSON.stringify(scores));
    compMove.innerHTML = "COMP:" + " " + compChoice;
  }

  if (compChoice === "Scissors") {
    outcome.innerHTML = "OUTCOME: Tie";
  } else if (compChoice === "Paper") {
    outcome.innerHTML = "OUTCOME: You won";
  } else {
    outcome.innerHTML = "OUTCOME: You lost";
  }
}

function reset() {
  document.getElementById("myp2").innerHTML =
    'Are you sure you want to reset score? <button onclick="confirmReset()">Yes</button> <button onclick="noReset()">No</button>';
}

function confirmReset() {
  scores.win = 0;
  scores.lose = 0;
  scores.tie = 0;
  scoreBoard.innerHTML = `WIN:${scores.win} LOSSES:${scores.lose} TIES:${scores.tie}`;
  localStorage.setItem("saveScores", JSON.stringify(scores));
  compMove.innerHTML = "";
  outcome.innerHTML = "";
  document.getElementById("myp2").innerHTML = "";
}

function noReset() {
  document.getElementById("myp2").innerHTML = "";
}

document.body.onkeydown = function () {
  if (event.key === "r") {
    rock();
  } else if (event.key === "p") {
    paper();
  } else if (event.key === "s") {
    scissors();
  } else if (event.key === "Backspace") {
    reset();
  } else if (event.key === "y") {
    confirmReset();
  } else if (event.key === "n") {
    noReset();
  } else {
    alert("Wrong input");
  }
};
