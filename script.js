let bigDay;
let today;



let dayMS = 1000 * 60 * 60 * 24;
let hourMS = 1000 * 60 * 60;



let p = document.getElementById('time');
p.style.fontSize = 30;

let input = document.getElementById('big');

function update() {

    bigDay = new Date(Date.parse(input.value));

    today = new Date();

    let diff = bigDay.getTime() - today.getTime();

    let days = diff / dayMS;
    let hours = (days - Math.floor(days)) * 24;
    let mins = (hours - Math.floor(hours)) * 60;
    let secs = (mins - Math.floor(mins)) * 60;

    p.innerText = '';

    if (days >= 1) {
        p.innerText += Math.floor(days) + ':';
        p.innerText += ' ' + Math.floor(hours) + ':';
        p.innerText += ' ' + Math.floor(mins) + ':';
        p.innerText += ' ' + Math.floor(secs);
    }

}

setInterval(update, 1);