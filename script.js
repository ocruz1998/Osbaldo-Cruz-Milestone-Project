///Code was Troublshooted using ChatGPT and GreatStack's Quiz building walkthrough: https://www.youtube.com/watch?v=PBcqGxrr9g8

let questionIndex = 0; // Index to track the current question
let score = 0; //Tracks user score

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
        // const comment = questions[questionIndex].comments[selectedAnswer] || '';

        //Displays custom message based on the question and answer. Currently unable to get the code running at this time.
        // let feedbackMessage = selectedAnswer === correctAnswer ? 'Correct answer' `Correct answer! ${comment.correct || ''}` : `Incorrect answer. The correct answer is: ${correctAnswer}. ${comment.incorrect || ''}`;
        // alert(feedbackMessage)

        //Default Correct/Incorrect Message
        if (selectedAnswer === correctAnswer) {
            alert('Correct answer!');
        } else {
            alert('Incorrect answer. The correct answer is: ' + correctAnswer);
        }

        alert(feedbackMessage + ' Score: ' + score); //Shows Score Results

        // Move to the next question
        questionIndex++;

        // Check if all questions have been answered
        if (questionIndex < questions.length) {
            displayQuestion();
        } else {
            alert('Your final score is: ' + score + '. Thank you for playing!');
        }
    });
});



// Quiz Questions
const questions = [
    {
        question: "What is the first casino to open on the Las Vegas strip?",
        choices: ["Dunes", "Flamingo", "Stardust", "Riviera"],
        correctAnswer: "Flamingo"
        // comments: {
        //     "Dunes": incorrect :"The first casino to open on the Las Vegas Strip was the Flamingo. The casino opened in December 1946."
        // }
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
