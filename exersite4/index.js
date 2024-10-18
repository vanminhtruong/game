const questions = [
    { country: "Việt Nam", capital: "Hà Nội" },
    { country: "Nhật Bản", capital: "Tokyo" },
    { country: "Hàn Quốc", capital: "Seoul" },
    { country: "Trung Quốc", capital: "Bắc Kinh" },
    { country: "Indonesia", capital: "Jakarta" },
    { country: "Philippines", capital: "Manila" },
    { country: "Singapore", capital: "Singapore" },
    { country: "Malaysia", capital: "Kuala Lumpur" },
    { country: "Campuchia", capital: "Phnom Penh" },
    { country: "Lào", capital: "Vientiane" },
    { country: "Myanmar", capital: "Naypyidaw" },
    { country: "Thái Lan", capital: "Bangkok" },
    { country: "Ấn Độ", capital: "New Delhi" },
    { country: "Nepal", capital: "Kathmandu" },
    { country: "Bhutan", capital: "Thimphu" },
    { country: "Bangladesh", capital: "Dhaka" },
    { country: "Sri Lanka", capital: "Colombo" },
    { country: "Pakistan", capital: "Islamabad" },
    { country: "Afghanistan", capital: "Kabul" },
    { country: "Iran", capital: "Tehran" },
    { country: "Iraq", capital: "Baghdad" },
    { country: "Ả Rập Xê Út", capital: "Riyadh" },
    { country: "Qatar", capital: "Doha" },
    { country: "Kuwait", capital: "Kuwait City" }
];

// Generate form content in "paper" format
document.getElementById('capitalQuizForm').innerHTML = questions.map((q, i) => `
    <div class="question">
        Thủ đô của ${q.country} là 
        <div id="indicator-${i}" class="indicator">${i+1}</div>
        <input id="input-${i}" type="text" />
        
    </div>
`).join('');

// Function to check answers and update indicators and input borders
function checkAnswers() {
    questions.forEach((q, i) => {
        const input = document.getElementById(`input-${i}`);
        const userInput = input.value.trim().toLowerCase();
        const indicator = document.getElementById(`indicator-${i}`);

        if (userInput === q.capital.toLowerCase()) {
            indicator.className = 'indicator correct';
            input.style.borderColor = 'green'; // Đúng thì viền màu xanh
        } else {
            indicator.className = 'indicator incorrect';
            input.style.borderColor = 'red'; // Sai hoặc không nhập thì viền màu đỏ
        }
    });
}
