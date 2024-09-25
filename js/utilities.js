function getValueFromElement(id){
    const value = document.getElementById(id).innerText;
    const valueNumber = parseFloat(value);
    return valueNumber;
}

function getValueFromInput(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}