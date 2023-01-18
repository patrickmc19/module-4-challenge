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
var sec = 75;
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
var viewScores = document.querySelector("#view-scores");
var goBack = document.querySelector("#go-back");
var ol = document.ol;
var li = document.createElement("li");
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
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: [
      'quotes', 
      'curly brackets', 
      'parentheses', 
      'square brackets'
    ],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
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
    answer: 'quotes',
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
    answer: 'console.log',
  },
];

// sets an interval for the quiz timer at 75 seconds and decreases by 1 sec, displays text in timer element.
function startTimer() {
  var runTimer = setInterval(function(){
    timer.textContent = "Timer: "+sec;
    sec--;
    if (sec < 0) {
      clearInterval(runTimer);
    }
  }, 1000);
}

// starts at 0 (defined by index) and shows choices 0-3 in array for each question.
function showQuestions() {
    question.textContent = questions[index].title;
    button1.textContent = "1. "+questions[index].choices[0];
    button2.textContent = "2. "+questions[index].choices[1];
    button3.textContent = "3. "+questions[index].choices[2];
    button4.textContent = "4. "+questions[index].choices[3];
}

// unhides the quiz section, hides the intro, and runs the showQuestions function
function startQuiz() {
    quiz.classList.remove("hide");
    intro.classList.add("hide");
    showQuestions()
}

// increase the index by one to display the next question in the questions array
function nextQuestion() {
    index++;
    showQuestions()
}

// function inputScore(index) {
//   index === 4;
//   quiz.classList.add("hide");
//   yourScore.classList.remove("hide");
// }

// hides all sections that are not the high score section
function showHighScores() {
  intro.classList.add("hide");
  quiz.classList.add("hide");
  yourScore.classList.add("hide");
  highScore.classList.remove("hide");
}

function redoQuiz() {
  intro.classList.remove("hide");
  highScore.classList.add("hide");
}

// need to define the user selected button's text for each question compared to answer
function button1Feedback() {
  for(var i=0; i<questions.length; i++)
    if (button1.textContent == questions[i].answer) {
      correct.classList.remove("hide");
    } 
    else {
      sec - 10;
      wrong.classList.remove("hide");
    }
}

function button2Feedback() {
  for(var i=0; i<questions.length; i++)
    if (button2.textContent == questions[i].answer) {
      correct.classList.remove("hide");
    } 
    else {
      sec - 10;
      wrong.classList.remove("hide");
    }
}

function button3Feedback() {
  for(var i=0; i<questions.length; i++)
    if (button3.textContent == questions[i].answer) {
      correct.classList.remove("hide");
    } 
    else {
      sec - 10;
      wrong.classList.remove("hide");
    }
}

function button4Feedback() {
  for(var i=0; i<questions.length; i++)
    if (button4.textContent == questions[i].answer) {
      correct.classList.remove("hide");
    } 
    else {
      sec - 10;
      wrong.classList.remove("hide");
    }
}

button1.addEventListener("click", nextQuestion)
button2.addEventListener("click", nextQuestion)
button3.addEventListener("click", nextQuestion)
button4.addEventListener("click", nextQuestion)
button1.addEventListener("click", button1Feedback)
button2.addEventListener("click", button2Feedback)
button3.addEventListener("click", button3Feedback)
button4.addEventListener("click", button4Feedback)
// button1.addEventListener("click", inputScore)
// button2.addEventListener("click", inputScore)
// button3.addEventListener("click", inputScore)
// button4.addEventListener("click", inputScore)
startButton.addEventListener("click", startTimer)
startButton.addEventListener("click", startQuiz)
viewScores.addEventListener("click", showHighScores)
submitScore.addEventListener("click", showHighScores)
goBack.addEventListener("click", redoQuiz);
// goBack.addEventListener("click", function that goes to intro page or refresh?)