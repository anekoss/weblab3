function validateValues() {
    clearError();
    let x = validateX();
    let y = validateY();
    let r = validateR();
    return x && y && r;
}

function clearError() {
    $('#messageArea').empty();
}

function showMessage(message) {
    let errorMessage = document.createElement("div");
    errorMessage.textContent = message;
    $('#messageArea').append(errorMessage);
}

function validateY() {
    const Y_MIN = -5.0;
    const Y_MAX = 5.0;
    let yVal = document.getElementById("input_form:y_input").value;
    let numY = yVal.replace(',', '.');
    if (numY === "") {
        showMessage("Значение Y не введено");
        return false;
    } else if (yVal.match(/^[+-]0$/) || yVal.match(/^[+-]0\.0+$/) ||
        yVal.match(/^[+-]?00+$/) || yVal.match(/^[+-]?00+\.[0-9]+$/) ||
        !yVal.match(/^-?[0-9]+\.[0-9]+$/) && !yVal.match(/^-?[0-9]+$/)) {
        showMessage("Значение Y должно быть числом");
        return false;
    } else if (numY < Y_MIN || numY > Y_MAX) {
        showMessage("Значение Y не входит в интервал [-5,5]");
        return false;
    }
    return true;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function validateX() {
    let ch = false;
    if (document.getElementById("input_form:radio:0").checked === true) {
        ch = true;
    }
    if (document.getElementById("input_form:radio:1").checked === true) {
        ch = true;
    }
    if (document.getElementById("input_form:radio:2").checked === true) {
        ch = true;
    }
    if (document.getElementById("input_form:radio:3").checked === true) {
        ch = true;
    }
    if (document.getElementById("input_form:radio:4").checked === true) {
        ch = true;
    }
    if (document.getElementById("input_form:radio:5").checked === true) {
        ch = true;
    }
    if (document.getElementById("input_form:radio:6").checked === true) {
        ch = true;
    }
    if (document.getElementById("input_form:radio:7").checked === true) {
        ch = true;
    }
    if (document.getElementById("input_form:radio:8").checked === true) {
        ch = true;
    }
    if (!ch) showMessage("Значение X не выбрано");
    return ch;
}


function validateR() {
    const R_MIN = 1.0;
    const R_MAX = 4.0;
    let rVal = document.getElementById("input_form:r_input").value.replace(',', '.');
    if (rVal === "") {
        showMessage("Значение R не введено")
        return false;
    } else if (rVal.match(/^[+-]0$/) || rVal.match(/^[+-]0\.0+$/) ||
        rVal.match(/^[+-]?00+$/) || rVal.match(/^[+-]?00+\.[0-9]+$/) ||
        !rVal.match(/^-?[0-9]+\.[0-9]+$/) && !rVal.match(/^-?[0-9]+$/)) {
        showMessage("Значение R должно быть числом");
        return false;
    } else if (rVal < R_MIN || rVal > R_MAX) {
        showMessage("Значение R не входит в интервал [1,4]");
        return false;
    }
    return true;
}