const quizData = [
  {
    question: "Where is Canada?",
    a: "North America",
    b: "South America",
    c: "Africa",
    d: "Asia",
    correct: "a",
  },
  {
    question: "What is capital city of Spain?",
    a: "Barcelona",
    b: "Lisbona",
    c: "Madrid",
    d: "Ibiza",
    correct: "c",
  },
  {
    question: "What is RGB of white color?",
    a: "AAAAAA",
    b: "FFFFFF",
    c: "WWWWWW",
    d: "OOOOOO",
    correct: "b",
  },
  {
    question: "When Poland joined to EU?",
    a: "2001",
    b: "2002",
    c: "2003",
    d: "2004",
    correct: "d",
  },
  {
    question: "What year was JS launched?",
    a: "1996",
    b: "1995",
    c: "1944",
    d: "None of the above",
    correct: "b",
  },
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", function () {
  const answer = getSelected();
  console.log(score);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions! 😎</h2> 
      
      <button onClick="location.reload()">One more time!</button>`;
    }
  }
});
