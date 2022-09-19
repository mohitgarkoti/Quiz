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
        q: "What is capital of Andhra Pradesh?",
        option: ["gandhinagar", "Surat", "Delhi", "Amaravati"],
        answer: 3,
    },
    {
        q: "What is the capital of Arunachal Pradesh?",
        option: ["	Itanagar", "	Raipur", "	Patna", "	Dispur"],
        answer: 0,
    },

    {
        q: "What is the capital of Assam",
        option: ["surat", "	Dispur", "gandhinagar", "rajkot"],
        answer: 1,
    },
    {
        q: "What is the capital of Bihar",
        option: ["surat", "	Panaji", "	Patna", "Panaji"],
        answer: 2,
    },
    {
        q: "What is the capital of Chhattisgarh",
        option: ["Panaji", "	Raipur", "surat", "Patna"],
        answer: 1,
    },
    {
        q: "What is the capital of Goa",
        option: ["Gandhinagar", "	Panaji", "Chandigarh", "rajkot"],
        answer: 1,
    },
    {
        q: "What is the capital of Gujarat",
        option: ["surat", "	Dispur", "gandhinagar", "rajkot"],
        answer: 2,
    },
    {
        q: "What is the capital of Haryana",
        option: ["Shimla", "Bengaluru", "	Ranchi", "	Chandigarh"],
        answer: 3,
    },
    {
        q: "What is the capital of Himachal Pradesh",
        option: ["Shimla", "Bengaluru", "gandhinagar", "rajkot"],
        answer: 0,
    },
    {
        q: "What is the capital of Jharkhand",
        option: ["surat", "		Ranchi", "Shimla", "Chandigarh"],
        answer: 1,
    },
    {
        q: "What is the capital of Karnataka",
        option: ["Chandigarh", "	Thiruvananthapuram", "	Bengaluru", "rajkot"],
        answer: 2,
    },
    {
        q: "What is the capital of Kerala",
        option: ["surat", "	Dispur", "Thiruvananthapuram", "rajkot"],
        answer: 2,
    },
    {
        q: "What is the capital of Madhya Pradesh	",
        option: ["Bhopal", "	Dispur", "Shillong", "rajkot"],
        answer: 0,
    },
    {
        q: "What is the capital of Maharashtra",
        option: ["surat", "	Mumbai", "rajkot", "Shimla"],
        answer: 1,
    },
    {
        q: "What is the capital of Manipur",
        option: ["surat", "	Dispur", "gandhinagar", "Imphal"],
        answer: 3,
    },
    {
        q: "What is the capital of Meghalaya",
        option: ["Shillong", "	Dispur", "gandhinagar", "rajkot"],
        answer: 0,
    },
    {
        q: "What is the capital of Mizoram",
        option: ["surat", "		Aizawl", "gandhinagar", "rajkot"],
        answer: 1,
    },
    {
        q: "What is the capital of Nagaland",
        option: ["surat", "	Dispur", "Kohima", "rajkot"],
        answer: 2,
    },
    {
        q: "What is the capital of Odisha",
        option: ["surat", "	Dispur", "gandhinagar", "Bhubaneswar"],
        answer: 3,
    },
    {
        q: "What is the capital of Punjab",
        option: ["Chandigarh", "	Jaipur", "Gangtok", "rajkot"],
        answer: 0,
    },
    {
        q: "What is the capital of Rajasthan",
        option: ["surat", "	Jaipur", "gandhinagar", "rajkot"],
        answer: 1,
    },
    {
        q: "What is the capital of Sikkim",
        option: ["surat", "	Dispur", "Gangtok", "rajkot"],
        answer: 1,
    },
    {
        q: "What is the capital of Tamil Nadu	",
        option: ["surat", "	Dispur", "gandhinagar", "Chennai"],
        answer: 3,
    },
    {
        q: "What is the capital of Telangana",
        option: ["Hyderabad", "	Dispur", "gandhinagar", "rajkot"],
        answer: 0,
    },
    {
        q: "What is the capital of Tripura",
        option: ["surat", "	Agartala", "gandhinagar", "rajkot"],
        answer: 1,
    },
    {
        q: "What is the capital of Uttar Pradesh	",
        option: ["surat", "	Dispur", "Lucknow", "rajkot"],
        answer: 2,
    },
    {
        q: "What is the capital of Uttarakhand",
        option: ["surat", "	Dispur", "gandhinagar", " Dehradun (Winter)Gairsain(Summer) "],
        answer: 3,
    },
    {
        q: "What is the capital of West Bengal	",
        option: ["Kolkata", "	Dispur", "gandhinagar", "rajkot"],
        answer: 0,
    },
    {
        q: "What is the capital of Andaman and Nicobar Islands",
        option: ["surat", "	Chandigarh", "gandhinagar", "Port Blair"],
        answer: 3,
    },
    {
        q: "What is the capital of Chandigarh",
        option: ["surat", "	Chandigarh", "gandhinagar", "rajkot"],
        answer: 1,
    },
    {
        q: "What is the capital of Dadra & Nagar Haveli and Daman & Diu",
        option: ["surat", "	Dispur", "Daman", "rajkot"],
        answer: 2,
    },
    {
        q: "What is the capital of Delhi",
        option: ["surat", "	Dispur", "gandhinagar", "Delhi"],
        answer: 3,
    },

    {
        q: "What is the capital of Jammu and Kashmir",
        option: ["Srinagar (Summer)Jammu(Winter) ", "	Dispur", "gandhinagar", "rajkot"],
        answer: 0,
    },
    {
        q: "What is the capital of Lakshadweep",
        option: ["surat", "	Dispur", "Kavaratti", "rajkot"],
        answer: 2,
    },

    {
        q: "What is the capital of Puducherry",
        option: ["surat", "	Dispur", "gandhinagar", "Pondicherry"],
        answer: 3,
    },
    {
        q: "What is the capital of Ladakh",
        option: ["Leh", "	Dispur", "gandhinagar", "rajkot"],
        answer: 0,
    },



];


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
