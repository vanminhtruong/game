import questions from "./question.js";
document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    let hintUsedCount = 0;

    const questionContainer = document.getElementById('question-container');
    const questionContent = document.getElementById('question-content');
    const answerInput = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit-answer');
    const feedback = document.getElementById('feedback');
    const answerDisplay = document.getElementById('answer-display');

    const displayQuestion = () => {
        const { content, image, correctAnswer, maxShowingCharacter } = questions[currentQuestionIndex];
        questionContent.textContent = content;
        questionContainer.innerHTML = image ? `<img src="${image}" alt="Question Image">` : '';

        answerDisplay.innerHTML = correctAnswer
            .split('')
            .map((_, i) => `<div class="letter-box" data-index="${i}"></div>`)
            .join('');

        document.querySelectorAll('.letter-box').forEach(box => {
            box.addEventListener('click', () => {
                if (hintUsedCount < maxShowingCharacter) {
                    box.textContent = correctAnswer[box.dataset.index];
                    box.classList.add('revealed');
                    hintUsedCount++;
                }
            });
        });

        answerInput.value = '';
        feedback.textContent = '';
        hintUsedCount = 0;
    };

    const checkAnswer = () => {
        const { correctAnswer } = questions[currentQuestionIndex];
        console.log("correctAnswer",correctAnswer);
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (userAnswer === correctAnswer.toLowerCase()) {
            alert("Bạn đã trả lời đúng")
            document.querySelectorAll('.letter-box').forEach((box, i) => {
                console.log("i: "+i)
                box.textContent = correctAnswer[i];
            });
            feedback.textContent = 'Correct! Moving to the next question...';
            feedback.classList.add('correct');

            setTimeout(() => {
                currentQuestionIndex++;
                currentQuestionIndex < questions.length ? displayQuestion() : feedback.textContent = 'Congratulations! You have completed the game!';
            }, 2000);
        } 
        else {
            feedback.textContent = `Incorrect! The correct answer was "${correctAnswer}".`;
            feedback.classList.remove('correct');
        }
    };

    submitButton.addEventListener('click', checkAnswer);
    displayQuestion();
});
