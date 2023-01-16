var intro = document.querySelector("#intro");
var quiz = document.querySelector("#quiz");
var yourScore = document.querySelector("#your-score");
var highScore = document.querySelector("#high-score");
var startButton = document.querySelector("#start-button");
var question = document.querySelector("#question");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var timer = document.querySelector("#timer");
var sec = 75;
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
var goBack = document.querySelector("#go-back");
var score = 0;
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

// starts at 0 (defined by index) and shows choices 0-3 in choices array for each question.
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

// need to define the user selected button's text for each question compared to answer
function answerFeedback() {
  var userAnswer = questions[index].choices;
  for(var i=0; i<questions.length; i++)
    if (userAnswer===questions[i].answer) {
      score + 15;
      correct.classList.remove("hide");
      wrong.classList.add("hide");
    } 
    else {
      sec - 10;
      wrong.classList.remove("hide");
      correct.classList.add("hide");
    }
}

button1.addEventListener("click", nextQuestion)
button2.addEventListener("click", nextQuestion)
button3.addEventListener("click", nextQuestion)
button4.addEventListener("click", nextQuestion)
button1.addEventListener("click", answerFeedback)
button2.addEventListener("click", answerFeedback)
button3.addEventListener("click", answerFeedback)
button4.addEventListener("click", answerFeedback)
startButton.addEventListener("click", startTimer)
startButton.addEventListener("click", startQuiz)
goBack.addEventListener("click", )