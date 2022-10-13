const launch = new Date(Date.UTC(2022, 10, 14, 17, 07))
// November 14th, 2022 17:07 GMT

countdown();

function countdown() {
    let today = new Date()
    const timeLeft = launch.getTime() - today.getTime();

    if (timeLeft > 0) {
        const seconds = timeLeft / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;

        updateTimer(days, hours, minutes, seconds)
        setTimeout(function() {countdown()}, 1000)
    } else {
        updateTimer(0, 0, 0, 0)
    }
}

function updateTimer(days, hours, minutes, seconds) {
    const d = document.querySelector('.days');
    const h = document.querySelector('.hours');
    const m = document.querySelector('.minutes');
    const s = document.querySelector('.seconds');

    d.innerText = checkTime(days);
    h.innerText = checkTime(hours % 24);
    m.innerText = checkTime(minutes % 60);
    s.innerText = checkTime(seconds % 60);
}

function checkTime(number) {
    if (number < 10) {
        return '0' + parseInt(number) // returns a string
    }
    return parseInt(number).toString()
}