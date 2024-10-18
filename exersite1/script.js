const display = document.getElementById('display');

function append(value) {
    const lastChar = display.value.charAt(display.value.length - 1);
    if ('+-*/.'.includes(lastChar) && '+-*/.'.includes(value)) {
        display.value = display.value.substring(0, display.value.length - 1) + value;
    } else {
        display.value += value;
    }
    console.log("lastChar "+lastChar);
    console.log("value "+value);
}

function calculate() {
    display.value = display.value ? eval(display.value) : '';
}

function clearDisplay() {
    display.value = '';
}
