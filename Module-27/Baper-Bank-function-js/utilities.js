function getInputValueById(inputfieldId){
    const inputField = document.getElementById(inputfieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const elementValueString = textElement.innerText;
    const textElementvalue = parseFloat(elementValueString);
    return textElementvalue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}