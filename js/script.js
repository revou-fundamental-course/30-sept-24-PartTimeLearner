let isCelsiusToFahrenheit = true; // Mode flag (true: Celsius to Fahrenheit, false: Fahrenheit to Celsius)

function calculate() {
    const input = parseFloat(document.getElementById('input-suhu').value);
    let result;


    if (isCelsiusToFahrenheit) {
        // Celsius to Fahrenheit conversion
        result = (input * 9/5) + 32;
        document.getElementById('hasil-suhu').value = result.toFixed(2) + " °F";
        document.getElementById('how-to-suhu').value = "(" + input + "°C * 9/5) + 32 = " + result.toFixed(2) + "°F";
    } else {
        // Fahrenheit to Celsius conversion
        result = (input - 32) * 5/9;
        document.getElementById('hasil-suhu').value = result.toFixed(2) + " °C";
        document.getElementById('how-to-suhu').value = "(" + input + "°F - 32) * 5/9 = " + result.toFixed(2) + "°C";
    }
}


function reset_value() {
    document.getElementById('input-suhu').value = "";
    document.getElementById('hasil-suhu').value = "";
    document.getElementById('how-to-suhu').value = "";
    console.log("Reset complete");
    console.log("Input:", document.getElementById('input-suhu').value);
    console.log("Hasil:", document.getElementById('hasil-suhu').value);
    console.log("Cara Kalkulasi:", document.getElementById('how-to-suhu').value);
}

function reverse() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit; // Toggle mode

    if (isCelsiusToFahrenheit) {
        document.getElementById('input-label').textContent = "Celcius (°C)";
        document.getElementById('hasil-label').textContent = "Fahrenheit (°F)";
        document.getElementById('mode-text').textContent = "Mode: Celsius ke Fahrenheit";
    } else {
        document.getElementById('input-label').textContent = "Fahrenheit (°F)";
        document.getElementById('hasil-label').textContent = "Celcius (°C)";
        document.getElementById('mode-text').textContent = "Mode: Fahrenheit ke Celsius";
    }
    reset_value(); // Clear the inputs when mode changes
}