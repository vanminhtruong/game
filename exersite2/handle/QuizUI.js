export default class QuizUI {
    constructor(quiz, questionEl, optionsEl, scoreEl, nextBtn) {
        this.quiz = quiz;
        this.questionEl = questionEl;
        this.optionsEl = optionsEl;
        this.scoreEl = scoreEl;
        this.nextBtn = nextBtn;

        this.nextBtn.addEventListener('click', () => this.handleNext());
    }

    displayQuestion() {  // module này sẽ thực thi tất cả giao diện chính
        const currentQuestion = this.quiz.getCurrentQuestion();
        this.questionEl.textContent = currentQuestion.text;
        this.optionsEl.innerHTML = currentQuestion.options
            .map(option => `<button class="option">${option}</button>`)
            .join('');
        
        this.optionsEl.querySelectorAll('.option').forEach(btn => 
            btn.addEventListener('click', () => this.handleAnswer(btn))
        );

        this.updateScore();
        this.nextBtn.style.display = 'none';
    }

    handleAnswer(selectedBtn) {
        const selectedAnswer = selectedBtn.textContent;
        console.log("is: "+JSON.stringify(selectedAnswer));

        const currentQuestion = this.quiz.getCurrentQuestion();
        const correctAnswer = currentQuestion.correctAnswer;
        console.log("current: "+JSON.stringify(currentQuestion));
        console.log("correctAnswer: "+JSON.stringify(correctAnswer));

        // Cập nhật màu nền cho đáp án đã chọn
        if (selectedAnswer === correctAnswer) {
            selectedBtn.style.backgroundColor = 'green';
        } else {
            selectedBtn.style.backgroundColor = 'red';
            this.showCorrectAnswer(correctAnswer);
        }

        // Cập nhật điểm và xử lý trạng thái
        this.quiz.answerCurrentQuestion(selectedAnswer);
        this.updateScore();
        this.disableOptions();
        this.nextBtn.style.display = 'block';
    }

    showCorrectAnswer(correctAnswer) {
        // Tìm và thay đổi màu nền của đáp án đúng thành màu xanh lá
        const correctBtn = Array.from(this.optionsEl.querySelectorAll('.option'))
            .find(btn => btn.textContent === correctAnswer);
        
        if (correctBtn) {
            correctBtn.style.backgroundColor = 'green';
        }
    }

    disableOptions() {
        this.optionsEl.querySelectorAll('.option').forEach(btn => {
            btn.disabled = true;
        });
    }

    handleNext() {
        if (this.quiz.hasMoreQuestions()) {
            this.quiz.nextQuestion();
            this.displayQuestion();
        } else {
            this.displayEndMessage();
        }
    }

    updateScore() {
        this.scoreEl.textContent = `${this.quiz.score}`;
    }

    displayEndMessage() {
        this.questionEl.textContent = "Bạn đã hoàn thành trò chơi!";
        this.optionsEl.innerHTML = "";
        this.nextBtn.style.display = "none";
    }
}
