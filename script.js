///This code was assisted with ChatGPT and GreatStack's Quiz building walkthrough: https://www.youtube.com/watch?v=PBcqGxrr9g8

let questionIndex = 0; // Index to track the current question

function displayQuestion() {
    const currentQuestion = questions[questionIndex];
    
    // Display the question
    document.getElementById('question').textContent = currentQuestion.question;
    
    // Display answer choices
    const choiceButtons = document.querySelectorAll('.choice');
    currentQuestion.choices.forEach((choice, index) => {
        choiceButtons[index].textContent = choice;
    });
}

// Call the displayQuestion function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayQuestion();
});

const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
    choice.addEventListener('click', function() {
        const selectedAnswer = choice.textContent;
        const correctAnswer = questions[questionIndex].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            alert('Correct answer!');
        } else {
            alert('Incorrect answer. The correct answer is: ' + correctAnswer);
        }

        // Move to the next question
        questionIndex++;

        // Check if all questions have been answered
        if (questionIndex < questions.length) {
            displayQuestion();
        } else {
            alert('Game Over. Please deposit $500 to play again.');
        }
    });
});



// Quiz Questions
const questions = [
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
];
