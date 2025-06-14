function press(value) {
    document.getElementById("displayValues").value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById("displayValues").value);
        document.getElementById("displayValues").value = result;
    }
    catch{
        document.getElementById("displayValues").value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById("displayValues").value = '';
}