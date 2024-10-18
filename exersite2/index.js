import Quiz from './handle/Quiz.js'; // module này Quản lý logic của trò chơi, điểm số, và câu hỏi hiện tại.
import QuizUI from './handle/QuizUI.js'; // module này Quản lý hiển thị giao diện và tương tác người dùng.
import questions from './handle/ListQuestion.js';  // module này sẽ quản lý các danh sách các đối tượng là câu hỏi

const quiz = new Quiz(questions);
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');

const quizUI = new QuizUI(quiz, questionEl, optionsEl, scoreEl, nextBtn);
quizUI.displayQuestion();
