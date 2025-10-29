const jsQuestions = [
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What will `typeof null` return in JavaScript?",
        answers: [
            { text: "null", correct: false },
            { text: "object", correct: true },
            { text: "undefined", correct: false },
            { text: "number", correct: false }
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Netscape", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Sun Microsystems", correct: false },
            { text: "Oracle", correct: false }
        ]
    },
    {
        question: "What keyword is used to define a constant in JavaScript?",
        answers: [
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "var", correct: false },
            { text: "constant", correct: false }
        ]
    },
    {
        question: "Which method converts a JSON string to a JavaScript object?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.object()", correct: false },
            { text: "JSON.convert()", correct: false }
        ]
    },
    {
        question: "What is the output of `console.log(2 + '2')`?",
        answers: [
            { text: "4", correct: false },
            { text: "22", correct: true },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: false },
            { text: "/* */", correct: false },
            { text: "#", correct: false },
            { text: "Both // and /* */", correct: true }
        ]
    },
    {
        question: "What will `Boolean('false')` return?",
        answers: [
            { text: "false", correct: false },
            { text: "true", correct: true },
            { text: "undefined", correct: false },
            { text: "null", correct: false }
        ]
    },
    {
        question: "Which array method is used to add an element to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "How do you write an arrow function in JavaScript?",
        answers: [
            { text: "function => {}", correct: false },
            { text: "() => {}", correct: true },
            { text: "() -> {}", correct: false },
            { text: "() => []", correct: false }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "-", correct: false },
            { text: "x", correct: false },
            { text: "=", correct: true },
            { text: "*", correct: false }
        ]
    },
    {
        question: "Which function is used to print content to the console in JavaScript?",
        answers: [
            { text: "print()", correct: false },
            { text: "console.log()", correct: true },
            { text: "log.console()", correct: false },
            { text: "document.write()", correct: false }
        ]
    },
    {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        answers: [
            { text: "null", correct: false },
            { text: "0", correct: false },
            { text: "undefined", correct: true },
            { text: "NaN", correct: false }
        ]
    },
    {
        question: "Which built-in method removes the last element from an array and returns it?",
        answers: [
            { text: "last()", correct: false },
            { text: "get()", correct: false },
            { text: "pop()", correct: true },
            { text: "push()", correct: false }
        ]
    },
    {
        question: "How do you find the length of an array `arr`?",
        answers: [
            { text: "arr.size", correct: false },
            { text: "arr.len", correct: false },
            { text: "arr.length", correct: true },
            { text: "arr.count", correct: false }
        ]
    },
    {
        question: "What will `console.log(0 == '0')` output?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "Which operator checks both value and type?",
        answers: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "=", correct: false },
            { text: "!=", correct: false }
        ]
    },
    {
        question: "What will `typeof NaN` return?",
        answers: [
            { text: "NaN", correct: false },
            { text: "undefined", correct: false },
            { text: "number", correct: true },
            { text: "object", correct: false }
        ]
    },
    {
        question: "Which method is used to convert an array to a string?",
        answers: [
            { text: "toString()", correct: false },
            { text: "join()", correct: false },
            { text: "concat()", correct: false },
            { text: "Both toString() and join()", correct: true }
        ]
    },
    {
        question: "What is the correct way to write an if statement in JavaScript?",
        answers: [
            { text: "if i == 5 then", correct: false },
            { text: "if (i == 5)", correct: true },
            { text: "if i = 5", correct: false },
            { text: "if (i = 5)", correct: false }
        ]
    }
];

const questionText = document.querySelector(".question-tag");
const optionBoxes = document.querySelectorAll(".option");
const nextBtn = document.querySelector(".next-btn");
const countQuestion = document.querySelector(".qustion-count");
const timeHtml = document.querySelector(".time");
const Startbtn = document.querySelector(".start-btn");
const questionContainer = document.querySelector(".questions-container");
const main = document.querySelector(".main");
const footer = document.querySelector("footer");
const navbar = document.querySelector(".navigation");
const startpage = document.querySelector(".start-page");
const rightSong = document.querySelector(".right-song");
const wrongSong = document.querySelector(".wrong-sound")


let currentQuestionIndex = 0;
let score = 0;
let timerId = null;
let time = 30;
let isOptionSelected = false;

/*************** START QUIZ ******************/
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    isOptionSelected = false;
    nextBtn.disabled = true;
    nextBtn.style.opacity = "0.6";
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuestion = jsQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    questionText.innerHTML = currentQuestion.question;
    countQuestion.innerHTML = `${questionNumber} / ${jsQuestions.length}`;

    optionBoxes.forEach((opt, i) => {
        opt.innerHTML = currentQuestion.answers[i].text;
        opt.classList.remove("correct", "wrong", "selected");
        opt.disabled = false;
    });

    isOptionSelected = false;
    nextBtn.disabled = true;
    nextBtn.style.opacity = "0.6";

    resetTimer();
    colorclassremover();
}

function checkAnswer(selectedOption) {
    const currentQuestion = jsQuestions[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.answers.findIndex(a => a.correct);
    const correctAnswerElement = optionBoxes[correctAnswerIndex];

    optionBoxes.forEach(opt => (opt.disabled = true));

    selectedOption.classList.add("selected");

    if (selectedOption.innerHTML === currentQuestion.answers[correctAnswerIndex].text) {
        selectedOption.classList.add("correct");
        rightSong.play();
        score++;
    } else {
        wrongSong.play();
        selectedOption.classList.add("wrong");
        correctAnswerElement.classList.add("correct");
    }

    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
}

optionBoxes.forEach(opt => {
    opt.addEventListener("click", () => {
        if (isOptionSelected) return; 
        checkAnswer(opt);
        isOptionSelected = true;
    });
});

nextBtn.addEventListener("click", () => {
    if (!isOptionSelected) {
        alert("Please select an option before proceeding to the next question!");
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < jsQuestions.length) {
        showQuestion();
    } else {
        clearInterval(timerId);
        timeHtml.innerHTML = "🎉 Quiz Ended!";
        scorerender();
    }
});

function startTimer() {
    clearInterval(timerId);
    time = 30;
    const warningsong = document.querySelector("#myAudio");
    timeHtml.innerHTML = `00:${time}`;
    timerId = setInterval(() => {
        time--;
        timeHtml.innerHTML = `00:${time < 10 ? "0" + time : time}`;
        if (time <= 7) {
            alert7();
            if (warningsong) warningsong.play();
        } else if (time <= 15) {
            aleart15();
        }
        if (time <= 0) {
            clearInterval(timerId);
            timeHtml.innerHTML = "Time's up!";
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerId);
    startTimer();
}

function alert7() {
    navbar.classList.add("alertsoundcolor2");
    questionContainer.classList.add("alertsoundcolor2");
    main.classList.add("alertsoundcolor2");
    footer.classList.add("alertsoundcolor2");
}

function aleart15() {
    navbar.classList.add("alertsoundcolor");
    questionContainer.classList.add("alertsoundcolor");
    main.classList.add("alertsoundcolor");
    footer.classList.add("alertsoundcolor");
}

function colorclassremover() {
    navbar.classList.remove("alertsoundcolor", "alertsoundcolor2");
    questionContainer.classList.remove("alertsoundcolor", "alertsoundcolor2");
    main.classList.remove("alertsoundcolor", "alertsoundcolor2");
    footer.classList.remove("alertsoundcolor", "alertsoundcolor2");
}

Startbtn.addEventListener("click", () => {
    startpage.style.display = "none";
    navbar.classList.add("block");
    questionContainer.style.display = "block";
    startQuiz();
});

const sountMic = document.querySelector(".muted-sound");
sountMic.addEventListener("click", () => {
    const currentSrc = sountMic.getAttribute("src");
    const fulltimesong = document.querySelector(".fullsong");
    if (currentSrc === "./assets/valume.svg") {
        sountMic.setAttribute("src", "./assets/Valumemute.svg");
        if (fulltimesong) fulltimesong.pause();
    } else {
        if (fulltimesong) fulltimesong.play();
        sountMic.setAttribute("src", "./assets/valume.svg");
    }
});

function scorerender() {
    const scorehtml = document.querySelector(".score");
    const totalscore = document.querySelector(".total-score");
    const rightScore = document.querySelector(".right-score");
    const wrongScore = document.querySelector(".wrong-score");
    const leftscore = document.querySelector(".left");

    questionContainer.style.display = "none";
    navbar.style.display = "none";
    scorehtml.style.display = "flex";

    totalscore.innerHTML = `${score} / ${jsQuestions.length}`;

    const correctPercent = Math.round((score / jsQuestions.length) * 100);
    const incorrectPercent = 100 - correctPercent;

    rightScore.innerHTML = `${correctPercent}%`;
    wrongScore.innerHTML = `${incorrectPercent}%`;
    leftscore.style.width = `${correctPercent}%`;
}
