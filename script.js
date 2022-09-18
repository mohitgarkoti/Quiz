let questionCounter = 0;
var currentQuestion;
let availableQuestion = [];
let availableOption = [];
let correctAnswer = 0;
let Attempt = 0;
var questionsNumber, questionText, optionContainer, answerIndicaterContainer, resultBox, container;
// Questions will be asked
const Quiz = [
    {
        q: "What is capital of India?",
        option: ["gandhinagar", "Surat", "Delhi", "mumbai"],
        answer: 2,
    },
    {
        q: "What is the capital of Thailand?",
        option: ["Lampang", "phuket", "Ayutthaya", "Bangkok"],
        answer: 3,
    },

    {
        q: "What is the capital of Gujarat",
        option: ["surat", "vadodara", "gandhinagar", "rajkot"],
        answer: 2,
    },
];
// [{
//     id: 0,
//     q: "What is capital of India?",
//     a: [{ text: "gandhinagar", isCorrect: false },
//     { text: "Surat", isCorrect: false },
//     { text: "Delhi", isCorrect: true },
//     { text: "mumbai", isCorrect: false }
//     ]

// },
// {
//     id: 1,
//     q: "What is the capital of Thailand?",
//     a: [{ text: "Lampang", isCorrect: false, isSelected: false },
//     { text: "phuket", isCorrect: false },
//     { text: "Ayutthaya", isCorrect: false },
//     { text: "Bangkok", isCorrect: true }
//     ]

// },
// {
//     id: 2,
//     q: "What is the capital of Gujarat",
//     a: [{ text: "surat", isCorrect: false },
//     { text: "vadodara", isCorrect: false },
//     { text: "gandhinagar", isCorrect: true },
//     { text: "rajkot", isCorrect: false }
//     ]

// }

// ]

console.log("quiz", Quiz);

function setAvailableQuestion() {
    const totalQuestion = Quiz.length;
    console.log(totalQuestion);
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestion.push(Quiz[i]);
    }
    console.log("available question", availableQuestion);
}

function getNewQuestion() {
    questionsNumber.innerHTML =
        "Question " + (questionCounter + 1) + "of" + Quiz.length;
    const questionIndex =
        availableQuestion[Math.floor(Math.random() * availableQuestion.length)];
    console.log("question index", questionIndex);
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    const index1 = availableQuestion.indexOf(questionIndex);
    availableQuestion.splice(index1, 1);
    // console.log(currentQuestion.option);
    const optionLen = currentQuestion.option.length;
    for (let i = 0; i < optionLen; i++) {
        availableOption.push(i);
    }
    optionContainer.innerHTML = "";
    console.log(availableOption);
    for (let i = 0; i < optionLen; i++) {
        const optionIndex =
            availableOption[Math.floor(Math.random() * availableOption.length)];
        // console.log(optionIndex)
        const index2 = availableOption.indexOf(optionIndex);
        availableOption.splice(index2, 1);
        console.log("option", optionIndex);
        console.log(availableOption);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.option[optionIndex];
        option.id = optionIndex;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onClick", "getResult(this)");
    }
    console.log(availableOption);
    //
    // }
    questionCounter++;
}

function next() {
    if (questionCounter === Quiz.length) {
        console.log("quiz over");
        QuizOver();
    } else {
        getNewQuestion();
    }

}

function getResult(element) {
    console.log(element)
    console.log("element", element);
    const id = parseInt(element.id);
    console.log(id)
    if (id === currentQuestion.answer) {
        element.classList.add("correct");
        console.log("correct");
        updateAnswerIndicator("correct");
        correctAnswer++;
    } else {
        element.classList.add("incorrect");
        updateAnswerIndicator("incorrect");
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    Attempt++;
    unclickAble();
}

function unclickAble() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answerd")
    }
}

function answerIndicater() {
    answerIndicaterContainer.innerHTML = ''
    const totalQuestion = Quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicater = document.createElement("div");
        answerIndicaterContainer.appendChild(indicater);
    }


}
function updateAnswerIndicator(markType) {
    answerIndicaterContainer.children[questionCounter - 1].classList.add(markType)
}


function QuizOver() {
    container.classList.add("hide")
    resultBox.classList.remove("hide")
    Quizresult();
}
function Quizresult() {
    resultBox.querySelector(".total-question").innerHTML = Quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = Attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswer;
    resultBox.querySelector(".total-wrong").innerHTML = Attempt - correctAnswer;
    const percentage = (correctAnswer / Quiz.length) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed() + "%";
    resultBox.querySelector(".score").innerHTML = Quiz.length; correctAnswer + " / " + Quiz.length;
}


function resetQuiz() {
    questionCounter = 0;
    correctAnswer = 0;
    Attempt = 0;
    setAvailableQuestion();
    getNewQuestion();
    answerIndicater();
}
function tryAgain() {
    resultBox.classList.add("hide")
    container.classList.remove("hide")
    resetQuiz()
}
window.onload = function () {
    console.log(Quiz);

    questionsNumber = document.querySelector(".question-number");
    questionText = document.querySelector(".question-text");
    optionContainer = document.querySelector(".option-container");
    answerIndicaterContainer = document.querySelector(".answer-indicater");
    resultBox = document.querySelector(".result-box")
    container = document.querySelector(".container")
    console.log(getNewQuestion);
    setAvailableQuestion();
    getNewQuestion();
    answerIndicater();
};
