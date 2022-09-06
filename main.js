let time_el = document.getElementById('time');
let start_btn = document.getElementById('start');
let stop_btn = document.getElementById('stop');
let reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null

start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)

function timer () {
seconds++;
    let hrs = Math.floor(seconds/3600);
    let min = Math.floor((seconds - (hrs*3600))/ 60);
    let sec = (seconds % 60);

    if( hrs < 10) hrs = '0' + hrs;
    if( min < 10) min = '0' + min;
    if( sec < 10) sec = '0' + sec;

    time_el.innerText = `${hrs}:${min}:${sec}`;    

}

function start (){
        if (interval) {
            return;
        }
        else {
            interval = setInterval(timer, 1000);
        }
    }

function stop () {
    clearInterval(interval);
    interval = null
}
function reset () {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00'
}