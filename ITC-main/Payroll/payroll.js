let employees = [];

document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addEmployee();
});

document.getElementById('deleteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    deleteEmployee();
});

function addEmployee() {
    const name = document.getElementById('name').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deduction = parseFloat(document.getElementById('deduction').value);

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deduction;

    employees.push({
        name,
        daysWorked,
        dailyRate,
        grossPay,
        deduction,
        netPay
    });

    updateTable();
    document.getElementById('employeeForm').reset();
}

function deleteEmployee() {
    const lineNumber = parseInt(document.getElementById('deleteLineNumber').value);
    if (lineNumber > 0 && lineNumber <= employees.length) {
        employees.splice(lineNumber - 1, 1);
        updateTable();
        document.getElementById('deleteForm').reset();
    } else {
        alert('Invalid line number');
    }
}

function updateTable() {
    const tableBody = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    employees.forEach((employee, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate.toFixed(2)}</td>
            <td>${employee.grossPay.toFixed(2)}</td>
            <td>${employee.deduction.toFixed(2)}</td>
            <td>${employee.netPay.toFixed(2)}</td>
        `;
    });
}
