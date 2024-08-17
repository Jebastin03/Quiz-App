
const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Sharkk", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest couuntry in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: true},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: true},
            { text: "Gobi", correct: true},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }
];

// DOM Manipulate Elements
const question = document.querySelector('.question');
const answerButtons = document.querySelector('.answer-buttons');
const nextButton = document.querySelector('.next-btn');

console.log(nextButton);

let currentQuestionIndex = 0;
let score = 0;





