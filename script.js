// Accessing HTML elements
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

// Get the current question index
let currentQuestion = 0;
let score = 0;

// Function to display question and answer choices
function displayQuestion() {
    questionElement.textContent = quizQuestions[currentQuestion].question;
    choicesElement.innerHTML = "";
    quizQuestions[currentQuestion].choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice));
        choicesElement.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

// Function to display the final result
function displayResult() {
    questionElement.textContent = "";
    choicesElement.innerHTML = "";
    submitButton.style.display = "none";
    resultElement.textContent = `You scored ${score} out of ${quizQuestions.length} questions. Well done!`;
}

// Start the quiz by displaying the first question
displayQuestion();







//Quiz q&a
const quizQuestions = [
    {
        question: "What is the first casino to open on the Las Vegas strip?",
        choices: ["Dunes", "Flamingo", "Stardust", "Riviera"],
        correctAnswer: "Flamingo"
    },

    {
        question: "When was the Welcome to Las Vegas sign created?",
        choices: ["1956", "1957", "1958", "1959"],
        correctAnswer: "1959"
    },
    {
        question: "Which former casino did NOT exist on the strip?",
        choices: ["Imperial Palace", "El Rancho", "Tangiers", "Aladdin"],
        correctAnswer: "Tangiers"
    },

    {
        question: "What was the first racially integrated casino in Las Vegas?",
        choices: ["El Cortez", "Moulin Rouge", "Stardust", "Desert Inn"],
        correctAnswer: "Moulin Rouge"
    },

    {
        question: "Are you drunk?",
        choices: ["Yes", "No", "Maybe?", "sdfsdlgjsd"],
        correctAnswer: "No"
    },
]

