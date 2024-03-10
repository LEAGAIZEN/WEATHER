function calculateTrig(func) {
    let display = document.forms[0].display;
    try {
        // Convert degrees to radians and evaluate the trigonometric function
        let result = eval('Math.' + func + '(Math.PI/180 * ' + parseFloat(display.value) + ')');
        
        // Round the result to avoid precision issues
        display.value = Math.round(result * 1e10) / 1e10;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateLog() {
    let display = document.forms[0].display;
    try {
        // Evaluate the logarithmic function
        let result = eval('Math.log(' + parseFloat(display.value) + ')');
        
        // Round the result to avoid precision issues
        display.value = Math.round(result * 1e10) / 1e10;
    } catch (error) {
        display.value = 'Error';
    }
}
