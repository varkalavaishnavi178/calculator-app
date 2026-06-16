let display = document.getElementById("display");

// Add value to screen
function appendValue(value) {
    display.value += value;
}

// Clear screen
function clearDisplay() {
    display.value = "";
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}