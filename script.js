function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() == "50") {
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Incorrect.";
  }
}

function checkAnswer1() {
  const answer = document.getElementById("answer-input1").value;
  if (answer.toLowerCase() == "burj khalifa") {
    document.getElementById("result1").innerHTML = "Correct!";
  } else {
    document.getElementById("result1").innerHTML = "Incorrect.";
  }
}