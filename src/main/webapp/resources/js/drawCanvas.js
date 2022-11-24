let radius = 2.0;
const canvasGraph = document.getElementById('canvas');

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


canvasGraph.addEventListener('click', function (event) {
    clearError();
    let rVal = document.getElementById("input_form:r_input").value;
    let xFromCanvas = (event.offsetX - 200) / 165 * 5;
    if (xFromCanvas <= -3) xFromCanvas = -3;
    else if (xFromCanvas >= 5) xFromCanvas = 5;

    let yFromCanvas = (-event.offsetY + 200) / 165 * 5;
    if (yFromCanvas < -5) yFromCanvas = -5;
    else if (yFromCanvas > 5) yFromCanvas = 5;

    if (rVal === "") {
        showMessage("Значение R не введено");
        return;
    }
    if ((rVal < 1 || rVal > 4)) {
        showMessage("Значение R не входит в интервал [1,4]");
        return;
    }
    $(".pointX").val(Math.floor(xFromCanvas * 100) / 100);
    $(".pointY").val(Math.floor(yFromCanvas * 100) / 100);
    $(".pointR").val(rVal);
    $(".submitCanvas").click();
})

function drawPoint(xPosition, yPosition, color) {
    yPosition = 200 - 165 * yPosition / 5;
    xPosition = 200 + 165 * xPosition / 5;
    const ctx = canvasGraph.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(xPosition, yPosition);
    ctx.fillStyle = color;
    ctx.globalAlpha = 1;
    ctx.arc(xPosition, yPosition, 2.2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function redrawPoints() {
    // clearError();
    const ctx = canvasGraph.getContext('2d');
    const canvasGraphWidth = canvasGraph.clientWidth;
    const canvasGraphHeight = canvasGraph.clientHeight;
    ctx.clearRect(0, 0, canvasGraphWidth, canvasGraphHeight);
    ctx.globalAlpha = 1;
    let hits = document.getElementsByClassName("hitres");
    let xs = document.getElementsByClassName("xVal");
    let ys = document.getElementsByClassName("yVal");
    let rs = document.getElementsByClassName("rVal");
    drawCanvas();
    for (let i = 0; i < hits.length; i++) {
        if (rs[i].innerHTML != radius * 1.0) continue;
        if (hits[i].innerHTML === "true") {
            drawPoint(xs[i].innerHTML, ys[i].innerHTML, "#22be00");
        } else {
            drawPoint(xs[i].innerHTML, ys[i].innerHTML, "#ff0000");
        }
    }
}

function clearPointsFromCanvas() {
    const ctx = canvasGraph.getContext('2d');
    const canvasGraphWidth = canvasGraph.clientWidth;
    const canvasGraphHeight = canvasGraph.clientHeight;
    ctx.clearRect(0, 0, canvasGraphWidth, canvasGraphHeight);
    ctx.globalAlpha = 1;
    drawCanvas();
    clearError();

}

function drawCanvas() {
    if (radius < 1 || radius > 4) radius = 0;

    const ctx = canvasGraph.getContext('2d');
    const canvasGraphWidth = canvasGraph.clientWidth;
    const canvasGraphHeight = canvasGraph.clientHeight;
    ctx.clearRect(0, 0, canvasGraphWidth, canvasGraphHeight);
    ctx.globalAlpha = 1;
    const xAxis = canvasGraphWidth / 2;
    const yAxis = canvasGraphHeight / 2;
    const xNameAxis = canvasGraphWidth / 12;
    const yNameAxis = canvasGraphHeight / 12;
    const offsetAxis = 5;

    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.strokeStyle = '#000000';
    ctx.moveTo(xAxis, 0);
    ctx.lineTo(xAxis, canvasGraphHeight);
    ctx.moveTo(0, yAxis);
    ctx.lineTo(canvasGraphWidth, yAxis);
    ctx.stroke();
    ctx.closePath();

    let labels = ["5", "4", "3", "2", "1", " ", "-1", "-2", "-3", "-4", "-5"];
    ctx.font = '15px Arial';
    ctx.fillText("y", xAxis + offsetAxis, offsetAxis * 2);
    ctx.moveTo(xAxis - offsetAxis / 2, offsetAxis);
    ctx.lineTo(xAxis, 0);
    ctx.moveTo(xAxis + offsetAxis / 2, offsetAxis);
    ctx.lineTo(xAxis, 0);
    ctx.stroke();
    for (let i = 0; i < labels.length; i++) {
        ctx.moveTo(xAxis - offsetAxis / 2, yNameAxis + yNameAxis * i);
        ctx.lineTo(xAxis + offsetAxis / 2, yNameAxis + yNameAxis * i);
        ctx.stroke();
        ctx.fillText(labels[i], xAxis + offsetAxis, yNameAxis + yNameAxis * i + offsetAxis);
    }

    ctx.fillText("x", canvasGraphWidth - offsetAxis * 2, yAxis + 20);
    ctx.moveTo(canvasGraphWidth - offsetAxis, yAxis - offsetAxis / 2);
    ctx.lineTo(canvasGraphWidth, yAxis);
    ctx.moveTo(canvasGraphWidth - offsetAxis, yAxis + offsetAxis / 2);
    ctx.lineTo(canvasGraphWidth, yAxis);
    ctx.stroke();
    for (let i = 0; i < labels.length; i++) {
        ctx.moveTo(xNameAxis + xNameAxis * i, yAxis - offsetAxis / 2);
        ctx.lineTo(xNameAxis + xNameAxis * i, yAxis + offsetAxis / 2);
        ctx.stroke();
        ctx.fillText(labels[labels.length - i - 1], xNameAxis + xNameAxis * i - offsetAxis, yAxis + 20);
    }

    ctx.fillStyle = "#9933ff";
    ctx.globalAlpha = 0.4;
    ctx.fillRect(xAxis, yAxis, radius * xNameAxis, radius * yNameAxis);
    ctx.fillStyle = "#9933ff";
    ctx.beginPath();
    ctx.moveTo(xAxis, yAxis);
    ctx.lineTo(yAxis - radius * 0.5 * yNameAxis, xAxis);
    ctx.lineTo(yAxis, xAxis - radius * xNameAxis);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(xAxis, yAxis);
    ctx.fillStyle = "#9933ff";
    ctx.arc(xAxis, yAxis, xAxis - (6 - radius) * xNameAxis, Math.PI * 0.5, Math.PI * 1);
    ctx.fill();
    ctx.closePath();
}

drawCanvas();
redrawPoints();

function check() {
    radius = document.getElementById("input_form:r_input").value;
    drawCanvas();
    redrawPoints();
}

