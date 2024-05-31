// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

const quizData = [
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Jupiter"
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Brisane", "Melbourne", "Canberra"],
    answer: "Jupiter"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Olivine"],
    answer: "Oxygen"
  },
  {
    question: "Who write the play 'Romeo and Juliet?",
    options: ["Charles Dickins", "J.K.Rowling", "George Orwell", "William Shakespeare"],
    answer: "William Shakespeare"
  },
  {
  question: "What is the largest organ in the human body?",
  options: ["Heart", "Liver", "Skin", "Lungs"],
  answer: "Skin"
  },
  {
    question: "Which country is the largest by land area?",
    options: ["China", "Canada", "United States", "Russia"],
    answer: "Russia"
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Alan Turing", "Charles Babbage", "John Von Neumann", "Bill Gates"],
    answer: "Alan Turing"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: "Diamond"
  },
  {
    question: "Which is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2"
  },
  {
    question: "What is the main ingredient in traditional Japanese miso soup?",
    options: ["Rice", "Miso paste", "Soy sauce", "Tofu"],
    answer: "Miso Paste"
  }

];



const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
  `;
}

showQuestion();
