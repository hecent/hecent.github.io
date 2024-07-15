function calculate(event, calculationFunctionName) {
    event.preventDefault();

    const calculationFunction = window[calculationFunctionName];

    if (typeof calculationFunction !== 'function') {
        alert('Calculation function not found!');
        return false;
    }

    const form = event.target;
    const formData = new FormData(form);
    const inputs = {};

    formData.forEach((value, key) => {
        inputs[key] = parseFloat(value);
    });

    for (const key in inputs) {
        if (isNaN(inputs[key])) {
            alert(`Invalid input for ${key}`);
            return false;
        }
    }

    const result = calculationFunction(inputs);
    document.getElementById('result').innerHTML = `Result: ${result}`;

    return false;
}
