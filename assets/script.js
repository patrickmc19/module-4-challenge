var intro = document.querySelector("#intro");
var quiz = document.querySelector("#quiz");
var yourScore = document.querySelector("#your-score");
var highScore = document.querySelector("#high-score");
var startButton = document.querySelector("#start-button");
var viewScores = document.querySelector("#view-scores");
var submitScore = document.querySelector("#submit-score");
var question = document.querySelector("#question");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var timer = document.querySelector("#timer");
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
var viewScores = document.querySelector("#view-scores");
var goBack = document.querySelector("#go-back");
var ol = document.querySelector("#ol");
var li = document.createElement("li");
var initials = document.querySelector("#initials");
var scoreData = [];
var runTimer = 0;
var finalScore = document.querySelector("#final-score");
var clearScores = document.querySelector("#clear-scores");
var sec = 75;
var index = 0;
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: [
      'strings',
      'booleans',
      'alerts',
      'numbers'
    ],
    answer: '3. alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: [
      'quotes',
      'curly brackets',
      'parentheses',
      'square brackets'
    ],
    answer: '3. parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: '4. all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: [
      'commas',
      'curly brackets',
      'quotes',
      'parentheses'
    ],
    answer: '3. quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: [
      'JavaScript',
      'terminal / bash',
      'for loops',
      'console.log'
    ],
    answer: '4. console.log',
  },
];

// sets an interval for the quiz timer at 75 seconds and decreases by 1 sec, displays text in timer element.
function startTimer() {
  var sec = 75;
  runTimer = setInterval(function () {;
    timer.textContent = sec;
    sec--;
    if (sec < 0) {
      clearInterval(runTimer);
    }
  }, 1000);
}

// starts at 0 (defined by index) and shows choices 0-3 in array for each question.
function showQuestions() {
  question.textContent = questions[index].title;
  button1.textContent = "1. " + questions[index].choices[0];
  button2.textContent = "2. " + questions[index].choices[1];
  button3.textContent = "3. " + questions[index].choices[2];
  button4.textContent = "4. " + questions[index].choices[3];
}

// unhides the quiz section, hides the intro, and runs the showQuestions function
function startQuiz() {
  quiz.classList.remove("hide");
  intro.classList.add("hide");
  startTimer()
  showQuestions()
}

// increase the index by one to display the next question in the questions array, once index = questions.length reveal "your score" section.
function nextQuestion() {
  index++;
  if (index < questions.length) {
    showQuestions()
  } else {
    inputScore()
  }
}

// pushes local storage of initial input value & final score to score data array.
function saveScore() {
  scoreData.push({ initialinput: initials.value, yourscore: finalScore.textContent });
  localStorage.setItem("initials", JSON.stringify(scoreData));
  createHighScore();
}

// reveals the "your score" section, pasues runTimer interval, uses timer selector text content to assign final score.
function inputScore() {
  quiz.classList.add("hide");
  yourScore.classList.remove("hide");
  clearInterval(runTimer);
  finalScore.textContent = " " + timer.textContent;
}

// retrieves score data array and creates & appends a li child to the ol.
function createHighScore() {
  if (localStorage.getItem("initials")) {
    scoreData = JSON.parse(localStorage.getItem("initials"))
  }
  ol.textContent = "";
  for (let i = 0; i < scoreData.length; i++) {
    var li = document.createElement("li");
    li.textContent = scoreData[i].initialinput + " " + scoreData[i].yourscore;
    ol.appendChild(li);
  }
}

// hides all sections that are not the high score section
function showHighScores() {
  intro.classList.add("hide");
  quiz.classList.add("hide");
  yourScore.classList.add("hide");
  highScore.classList.remove("hide");
  clearInterval(runTimer);
}

// navigates back to the intro section and resets clock to 75 seconds.
function redoQuiz() {
  intro.classList.remove("hide");
  highScore.classList.add("hide");
  timer.textContent = questions.length*15;
  clearInterval(runTimer);
}

// clears local storage and the held leaderboard values.
function clearStorage() {
  localStorage.clear();
}

// need to define the user selected button's text for each question compared to answer
function button1Feedback() {
    if (button1.textContent == questions[index].answer) {
      correct.classList.remove("hide");
      wrong.classList.add("hide");
      nextQuestion();
    }
    else {
      sec -= 10;
      wrong.classList.remove("hide");
      correct.classList.add("hide");
      nextQuestion();
    }
}

function button2Feedback() {
    if (button2.textContent == questions[index].answer) {
      correct.classList.remove("hide");
      wrong.classList.add("hide");
      nextQuestion();
    }
    else {
      sec -= 10;
      wrong.classList.remove("hide");
      correct.classList.add("hide");
      nextQuestion();
    }
}

function button3Feedback() {
    if (button3.textContent == questions[index].answer) {
      correct.classList.remove("hide");
      wrong.classList.add("hide");
      nextQuestion();
    }
    else {
      sec -= 10;
      wrong.classList.remove("hide");
      correct.classList.add("hide");
      nextQuestion();
    }
}

function button4Feedback() {
    if (button4.textContent == questions[index].answer) {
      correct.classList.remove("hide");
      wrong.classList.add("hide");
      nextQuestion();
    }
    else {
      sec -= 10;
      wrong.classList.remove("hide");
      correct.classList.add("hide");
      nextQuestion();
    }
}

button1.addEventListener("click", button1Feedback)
button2.addEventListener("click", button2Feedback)
button3.addEventListener("click", button3Feedback)
button4.addEventListener("click", button4Feedback)
submitScore.addEventListener("click", saveScore)
startButton.addEventListener("click", startQuiz)
viewScores.addEventListener("click", showHighScores)
submitScore.addEventListener("click", showHighScores)
goBack.addEventListener("click", redoQuiz)
clearScores.addEventListener("click", clearStorage)