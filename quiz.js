var getQuestion = document.getElementById("question");
var getScore = document.getElementById("showScore");
var scoreBox = document.getElementById("scoreCounter");

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");

var nextBtn = document.getElementById("nextQuestion");
var backBtn = document.getElementById("backQuestion");
var submitBtn = document.getElementById("submitQuiz");

var quizQuestions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Jupiter"],
        correct: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "What gas do plants absorb during photosynthesis?",
        answers: ["Carbon Dioxide", "Oxygen", "Nitrogen"],
        correct: "Carbon Dioxide"
    }
];

var questionId = 0;
var score = 0;

function loadQuestion() {
    let q = quizQuestions[questionId];

    getQuestion.innerText = q.question;

    text1.innerText = q.answers[0];
    text2.innerText = q.answers[1];
    text3.innerText = q.answers[2];

    answer1.value = q.answers[0];
    answer2.value = q.answers[1];
    answer3.value = q.answers[2];

    answer1.checked = false;
    answer2.checked = false;
    answer3.checked = false;

    clearHighlight();

    backBtn.disabled = questionId === 0;

    if (questionId === quizQuestions.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
}

function clearHighlight() {
    document.querySelectorAll(".answer-option").forEach(opt => {
        opt.classList.remove("selected");
    });
}

document.querySelectorAll("input[name='answer']").forEach(radio => {
    radio.addEventListener("change", function () {
        clearHighlight();
        this.parentElement.classList.add("selected");
    });
});

function nextQuestion() {
    let selected = document.querySelector("input[name='answer']:checked");
    if (!selected) {
        alert("Please select an answer first.");
        return;
    }

    if (selected.value === quizQuestions[questionId].correct) {
        score++;
    }

    questionId++;
    loadQuestion();
}

function backQuestion() {
    if (questionId > 0) {
        questionId--;
        loadQuestion();
    }
}

function submitQuiz() {
    let selected = document.querySelector("input[name='answer']:checked");

    if (!selected) {
        alert("Please select an answer first.");
        return;
    }

    if (selected.value === quizQuestions[questionId].correct) {
        score++;
    }

    getScore.innerText = score;
    scoreBox.style.display = "block";

    alert("Quiz finished! Your score is: " + score);
}

nextBtn.addEventListener("click", nextQuestion);
backBtn.addEventListener("click", backQuestion);
submitBtn.addEventListener("click", submitQuiz);

loadQuestion();
