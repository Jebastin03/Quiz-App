
// Bootstrap default style change
const btn = document.querySelector('.d-grid');

btn.addEventListener('click', (event) => {
    event.target.style.color = "rgb(33 37 41)";
})

// JSON

const questions = [
    {
        question: "Which colour is at the bottom edge of a rainbow?",
        answer: [
            { text: "red", correct: false },
            { text: "Violet", correct: true },
            { text: "blue", correct: false },
            { text: "orange", correct: false }
        ]
    },
    {
        question: "Football player Ronaldo which country?",
        answer: [
            { text: "USA", correct: false },
            { text: "London", correct: false },
            { text: "Portugal", correct: true },
            { text: "Germany", correct: false }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
            { text: "Asia", correct: false }
        ]
    },
    {
        question: "Which is larget animal in the world?",
        answer: [
            { text: "Elephant", correct: false },
            { text: "Shark", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue whale", correct: true }
        ]
    }
]

const Question= document.querySelector('.question');
const answerButtons = document.querySelector('.answer-buttons');
const nextButton = document.querySelector('.next-btn');


// question.innerHTML = questions[0].question;

// const bttn = document.createElement('button');

// bttn.classList.add("bg-light")
// bttn.classList.add("btn")

// bttn.innerHTML = questions[0].answer[0].text

// answerButton.appendChild(bttn);


// let quesInd = 0;
// let score = 0;



// questions.forEach(ques)

// function ques(ans) {
//     console.log(ans.question);
// }

let quesInd = 0;
let score = 0;

let currentQues = questions[quesInd];
let quesNo = quesInd + 1;

Question.innerHTML = quesNo + ". " + currentQues.question;

currentQues.answer.forEach(ans => {
    console.log(ans)
    const button = document.createElement('button');
    button.classList.add("btn");
    button.classList.add("bg-light");
    button.innerHTML = ans.text
    answerButtons.appendChild(button);


})
