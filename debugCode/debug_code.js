
function performAddition() {
    // fetch users input;
    let inp1 = document.getElementById('input1').value;
    let inp2 = document.getElementById('input2').value;
    let operation = document.getElementById('operations').value;

    let num1 = parseFloat(inp1);
    let num2 = parseFloat(inp2);


    //introduce the debugger to pause execution
    debugger;

    // Check if inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)) {

        //perform Operation
        let result;
        switch(operation) {
            case 'add' :
                result = num1 + num2;
                break;
            case 'multiply' :
                result = num1 * num2;
                break;
            case 'divide' :
                result = num2 !== 0 ? num1 / num2 : 'Can not divide by Zero!'
                break;
            default:
                result= 'Invalid operation'
        }

        //Display Result
        displayResult(result);
    } else {
        // If either input is not a number, we'll pass it to displayResult as is
        displayResult(`Invalid input: ${!isNaN(num1) ? inp1 : inp2 }`);
    }

}


function displayResult(result) {
    let resultElement = document.getElementById('result');
    if(typeof result === 'number') {
        resultElement.value = `The result is: ${result}`;
    } else {
        resultElement.value = result;
    }
    // const operationResult = document.getElementById('result');
    // operationResult.textContent = `The result is: ${result}`;
}
