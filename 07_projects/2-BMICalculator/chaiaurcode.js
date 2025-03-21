const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results'); // Fix here

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height: ${height}`;
    } 
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight: ${weight}`;
    } 
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = "";

        if (bmi < 18.6) {
            category = "You are Underweight.";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "You are in the Normal range.";
        } else {
            category = "You are Overweight.";
        }

        results.innerHTML = `<span>Your BMI is: ${bmi}</span><br><span>${category}</span>`;
    }
});
