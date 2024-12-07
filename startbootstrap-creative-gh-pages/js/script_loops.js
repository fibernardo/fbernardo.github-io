document.querySelector("#calculate").addEventListener("click", () => {
            if (isNaN(n) || n < 0) {
                resultsDiv.innerHTML = 'Please enter a valid positive integer.';
                return;
            }

            // 1. Factorial (While Loop)
            let factorial = 1;
            let factorialCounter = 1;
            while (factorialCounter <= n) {
                factorial *= factorialCounter;
                factorialCounter++;
            }

            // 2. Sum of First n Numbers (Do-While Loop)
            let sum = 0;
            let sumCounter = 1;
            do {
                sum += sumCounter;
                sumCounter++;
            } while (sumCounter <= n);

            // 3. Average of First n Numbers (For Loop)
            let total = 0;
            for (let i = 1; i <= n; i++) {
                total += i;
            }
            const average = total / n;

            // Display Results
            resultsDiv.innerHTML = `
                <h3>Results for n = ${n}:</h3>
                <p>1. Factorial (While Loop): ${factorial}</p>
                <p>2. Sum of First ${n} Numbers (Do-While Loop): ${sum}</p>
                <p>3. Average of First ${n} Numbers (For Loop): ${average.toFixed(2)}</p>
            `;
    

        }
