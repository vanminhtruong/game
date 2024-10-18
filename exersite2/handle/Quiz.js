export default class Quiz {
    constructor(questions) {
        this.questions = questions; // hàm chết tiệt này sẽ in ra các câu hỏi
        this.currentIndex = 0;  
        this.score = 0;
    }

    getCurrentQuestion() { // method chết tiệt khốn kiếp này lấy câu hỏi hiện tại
        return this.questions[this.currentIndex];
    }

    answerCurrentQuestion(answer) { // method chết tiệt khốn kiếp này kiểm tra xem câu hỏi có đúng không, nếu đúng bố tăng lên 10 điểm cho mày ok
        const question = this.getCurrentQuestion();
        if (question.isCorrect(answer)){
            alert("Câu trả lời đúng")
            this.score += 10;
        }else{
            alert("Câu trả lời sai");
        }
    }

    nextQuestion() { // method chết tiệt khốn kiếp này chuyển sang câu hỏi tiếp theo
        this.currentIndex++;
    }

    hasMoreQuestions() {  // method chết tiệt khốn kiếp kiểm tra xe đã trả lời đủ tất cả câu hỏi chưa
        return this.currentIndex < this.questions.length;
    }
}
