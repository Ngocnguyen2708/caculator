// program
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    try {
        expression = expression.replace(/(\d+)%/g, '($1 / 100)');
        const result = eval(expression);
        display.value = result;
    } catch (e) {
        display.value = 'Lỗi';
    }
}
