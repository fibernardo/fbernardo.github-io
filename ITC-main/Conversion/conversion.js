function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    switch (conversionType) {
        case 'ftoc':
            result = (inputValue - 32) * 5/9;
            result = result.toFixed(2) + '°C';
            break;
        case 'ctof':
            result = (inputValue * 9/5) + 32;
            result = result.toFixed(2) + '°F';  
            break;
        case 'mtof':
            result = inputValue * 3.28084;
            result = result.toFixed(2) + ' feet';
            break;
        case 'ftom':
            result = inputValue / 3.28084;
            result = result.toFixed(2) + ' meters';
            break;
    }

    document.getElementById('result').innerHTML = `Result: ${result}`;
}
