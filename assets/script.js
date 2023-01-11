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
var index = 0;
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
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
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

function showQuestions() {
    question.textContent = questions[index].title
    button1.textContent = questions[index].choices[0]
    button2.textContent = questions[index].choices[1]
    button3.textContent = questions[index].choices[2]
    button4.textContent = questions[index].choices[3]
}

function startQuiz() {
    quiz.classList.remove("hide");
    intro.classList.add("hide");
    showQuestions()
}

function nextQuestion() {
    index++;
    showQuestions()
}

button1.addEventListener("click", nextQuestion)
button2.addEventListener("click", nextQuestion)
button3.addEventListener("click", nextQuestion)
button4.addEventListener("click", nextQuestion)
startButton.addEventListener("click", startQuiz)