const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreBox = document.getElementById("scoreBox");
const scoreEl = document.getElementById("score");

const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const submitBtn = document.getElementById("submit");
const restartBtn = document.getElementById("restart");

const quiz = [
    { q: "Red Planet?", a: ["Venus", "Mars", "Jupiter"], c: "Mars" },
    { q: "Largest ocean?", a: ["Atlantic", "Pacific", "Indian"], c: "Pacific" },
    { q: "Plants absorb?", a: ["CO2", "Oxygen", "Nitrogen"], c: "CO2" }
];

let index = 0;
let score = 0;
let selected = null;

function load() {
    let q = quiz[index];
    questionEl.textContent = q.q;

    answersEl.innerHTML = "";
    selected = null;

    q.a.forEach(ans => {
        let div = document.createElement("div");
        div.textContent = ans;
        div.className = "answer";
        div.onclick = () => {
            document.querySelectorAll(".answer").forEach(a => a.classList.remove("selected"));
            div.classList.add("selected");
            selected = ans;
        };
        answersEl.appendChild(div);
    });

    backBtn.disabled = index === 0;
    nextBtn.style.display = index === quiz.length - 1 ? "none" : "inline-block";
    submitBtn.style.display = index === quiz.length - 1 ? "inline-block" : "none";
}

nextBtn.onclick = () => {
    if (!selected) return alert("Pick one");
    if (selected === quiz[index].c) score++;
    index++;
    load();
};

backBtn.onclick = () => {
    if (index > 0) index--;
    load();
};

submitBtn.onclick = () => {
    if (!selected) return alert("Pick one");
    if (selected === quiz[index].c) score++;

    scoreEl.textContent = score;
    scoreBox.style.display = "block";

    nextBtn.style.display = "none";
    backBtn.style.display = "none";
    submitBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
};

restartBtn.onclick = () => {
    index = 0;
    score = 0;
    scoreBox.style.display = "none";
    restartBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    backBtn.style.display = "inline-block";
    load();
};

load();
