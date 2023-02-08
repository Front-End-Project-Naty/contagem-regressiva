const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date().getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById('dias').innerText = Math.floor(diff / day);
  document.getElementById('horas').innerText = Math.floor(diff % day / hour);
  document.getElementById('minutos').innerText = Math.floor(diff % hour / minute);
  document.getElementById('segundos').innerText = Math.floor(diff % minute / second);

if (diff < 0){
    clearInterval(x);
    document.getElementById('dias').innerText = "0";
    document.getElementById('horas').innerText = "0";
    document.getElementById('minutos').innerText = "0";
    document.getElementById('segundos').innerText = "0";
}

}

function resetCountdown() {
  clearInterval(x);
  let date_end = document.form_main.date_end.value;
  count_down = new Date(`${date_end} 00:00:00`).getTime();
  x = setInterval(() => countDown(), second);
}
