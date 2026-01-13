var getQuestion = document.getElementById("question");
var getAnswer1 = document.getElementById("answer1");
var getAnswer2 = document.getElementById("answer2");
var getAnswer3 = document.getElementById("answer3");
var getScore = document.getElementById("showScore");

var quizQuestions = [
  {
    question: "Which planet is known as the Red Planet?",
    answer1: "Venus",
    answer2: "Mars",
    answer3: "Jupiter",
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    answer1: "Atlantic Ocean",
    answer2: "Pasific Ocean",
    answer3: "Indian Ocean",
    correctAnswer: "Pasific Ocean",
  },
  {
    question: "What gas do plants absorb during photosynthesis?",
    answer1: "Carbon Dioxide",
    answer2: "Oxygen",
    answer3: "Nitrogen",
    correctAnswer: "Carbon Dioxide",
  },
];
var questionId = 0;
var score = 1;

let getQuest = () => {
  //for (question in quizQuestions) {
  getQuestion.innerHTML = quizQuestions[questionId].question;
  getAnswer1.innerText = quizQuestions[questionId].answer1;
  getAnswer2.innerText = quizQuestions[questionId].answer2;
  getAnswer3.innerText = quizQuestions[questionId].answer3;
  getScore.innerText = score;
  if (quizQuestions[questionId].correctAnswer) {
  }
  //}
};

setInterval(getQuest, 1000);

//quizQuestions[1].correctAnswer;
// questionId = questionId + 1;

// showing quiz data
let nextQuestion = () => {
  questionId = questionId + 1;
  getQuestion.innerHTML = quizQuestions[questionId].question;
  getAnswer1.innerText = quizQuestions[questionId].answer1;
  getAnswer2.innerText = quizQuestions[questionId].answer2;
  getAnswer3.innerText = quizQuestions[questionId].answer3;
  console.log(quizQuestions[question].correctAnswer);
  questionId = questionId;
};
