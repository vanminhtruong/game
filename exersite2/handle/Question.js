export default class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    isCorrect(answer) {
        return answer === this.correctAnswer;
    }
}
