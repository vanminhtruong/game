export const updateFeedback = (message, isCorrect = false) => {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.classList.toggle('correct', isCorrect);
};

export const showCorrectAnswer = (correctAnswer) => {
    document.querySelectorAll('.letter-box').forEach((box, i) => {
        box.textContent = correctAnswer[i];
    });
};
