let date = document.getElementById("dateItem");
let time = document.getElementById("timeItem");

date.innerHTML = new Date().toLocaleDateString();
time.innerHTML = new Date().toLocaleTimeString();

setInterval(() => {
    let day = new Date();
    date.innerHTML = day.toLocaleDateString();
    time.innerHTML = day.toLocaleTimeString();
}, 11000)