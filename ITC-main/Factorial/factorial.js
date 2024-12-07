function calculate() {
    const n = parseInt(document.getElementById('inputNumber').value);
    if (isNaN(n) || n < 0) {
        alert('Please enter a valid non-negative number');
        return;
    }

    const factorial = calculateFactorial(n);
    const sum = calculateSum(n);
    const average = calculateAverage(n);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Factorial of ${n}: ${factorial}</p>
        <p>Sum of first ${n} numbers: ${sum}</p>
        <p>Average of first ${n} numbers: ${average.toFixed(2)}</p>
    `;
}

function calculateFactorial(n) {  
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

function calculateSum(n) {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}

function calculateAverage(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum / n;
}
