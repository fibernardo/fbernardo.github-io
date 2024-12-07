function convert() { 'use strict';
            var conversionType = document.getElementById('conversionType').value;
            var inputValue = parseFloat(document.getElementById('inputValue').value);
            var resultDiv = document.getElementById('result');
	
            if (isNaN(inputValue)) {
                resultDiv.textContent = 'Please enter a valid number';
                return;
            }

            let result;
            let unit;

            switch(conversionType) {
                case 'fahrenheitToCelsius':
                    result = ((inputValue - 32) * 5/9).toFixed(2);
                    unit = '°C';
                    break;
                case 'celsiusToFahrenheit':
                    result = ((inputValue * 9/5) + 32).toFixed(2);
                    unit = '°F';
                    break;
                case 'metersToFeet':
                    result = (inputValue * 3.28084).toFixed(2);
                    unit = 'ft';
                    break;
                case 'feetToMeters':
                    result = (inputValue / 3.28084).toFixed(2);
                    unit = 'm';
                    break;
            }

            resultDiv.textContent = `${inputValue} converted to ${result}${unit}`;
        }