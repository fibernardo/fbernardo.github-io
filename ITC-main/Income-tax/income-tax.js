function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;
    let basicTax = 0;
    let rate = 0;
    let excessAmount = 0;

    if (isNaN(income) || income < 0) {
        alert('Please enter a valid non-negative number');
        return;
    }

    if (income <= 250000) {
        tax = 0;
        rate = 0;
    } else if (income <= 400000) {
        basicTax = 0;
        rate = 0.20;
        excessAmount = income - 250000;
    } else if (income <= 800000) {
        basicTax = 30000;
        rate = 0.25;
        excessAmount = income - 400000;
    } else if (income <= 2000000) {
        basicTax = 130000;
        rate = 0.30;
        excessAmount = income - 800000;
    } else if (income <= 8000000) {
        basicTax =basicTax = 490000;
        rate = 0.32;
        excessAmount = income - 2000000;
    } else {
        basicTax = 2410000;  
        rate = 0.35;
        excessAmount = income - 8000000;
    }

    tax = basicTax + (excessAmount * rate);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Taxable Income: ₱${income.toFixed(2)}</p>
        <p>Basic Tax: ₱${basicTax.toFixed(2)}</p>
        <p>Tax Rate: ${(rate * 100).toFixed(0)}%</p>
        <p>Additional Tax: ₱${(excessAmount * rate).toFixed(2)}</p>
        <p>Total Income Tax: ₱${tax.toFixed(2)}</p>
    `;
}
