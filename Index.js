var OperationButtons = document.getElementsByClassName("opperation-button");

var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert('Operation is unknown');
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

var OperationButtons = [plusBtn, minusBtn, multiplyBtn, divideBtn];

for (var i = 0; i < OperationButtons.length; i++) {
    var button = OperationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}

