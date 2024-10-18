import Question from "./Question.js";  // mdule này Quản lý câu hỏi, đáp án, và kiểm tra đáp án đúng
const questions = [
    new Question("Câu 1: Thủ đô của Việt Nam là gì?", ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế"], "Hà Nội"),
    new Question("Câu 2: 2 + 2 = ?", ["3", "4", "5", "6"], "4"),
    new Question("Câu 3: Màu sắc của lá cờ Việt Nam là?", ["Xanh và Trắng", "Đỏ và Vàng", "Xanh và Đỏ", "Vàng và Xanh"], "Đỏ và Vàng"),
    new Question("Câu 4: Ngày quốc khánh Việt Nam là?", ["30/4", "1/5", "2/9", "1/6"], "2/9"),
    new Question("Câu 5: Con vật nào được mệnh danh là chúa sơn lâm?", ["Hổ", "Sư Tử", "Voi", "Báo"], "Hổ"),
    new Question("Câu 6: Ai là người sáng lập ra Microsoft?", ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], "Bill Gates"),
    new Question("Câu 7: Ngôi sao nằm trong dải ngân hà gọi là gì?", ["Mặt Trăng", "Mặt Trời", "Sao Hỏa", "Sao Kim"], "Mặt Trời"),
    new Question("Câu 8: Việt Nam thuộc châu lục nào?", ["Châu Á", "Châu Âu", "Châu Phi", "Châu Mỹ"], "Châu Á"),
    new Question("Câu 9: Số nào chia hết cho 5?", ["3", "6", "10", "14"], "10"),
    new Question("Câu 10: Đơn vị tiền tệ của Việt Nam là?", ["Đô la", "Yên", "Euro", "Đồng"], "Đồng"),
    new Question("Câu 11: Tỉnh nào nổi tiếng với món phở?", ["Hà Nội", "Nghệ An", "Hải Phòng", "Đà Lạt"], "Hà Nội"),
    new Question("Câu 12: Đâu là tên một bãi biển ở Quảng Bình?",["Đá lăn", "Đá nhảy", "Đá chạy","Đá bò"], "Đá nhảy"),
    new Question("Câu 13: Màu chủ đạo của tờ tiền polymer mệnh giá 500.000 đồng là màu nào?",["Đỏ", "Xanh", "Tím", "Vàng"], "Xanh")
];

export default questions;