// Set the date we're counting down to
let countDownDate = new Date('June 27, 2025 00:00:00').getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML =
      'Chúc các bạn làm bài thật tốt';
  }
}, 1000);

function showInfo(event, classId, className) {
  event.preventDefault();
  var infos = document.getElementsByClassName('info');
  for (var i = 0; i < infos.length; i++) {
    infos[i].style.display = 'none';
  }
  document.getElementById(classId).style.display = 'block';
  document.getElementById('dropbtn').innerText = className;
  event.returnValue = false;
  return false;
}

const nextButton = document.querySelector('.buttonnextmuc3');
const prevButton = document.querySelector('.buttonprevmuc3');

nextButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc3');
  document.querySelector('.slidemuc3').appendChild(items[0]);
});

prevButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc3');
  document.querySelector('.slidemuc3').prepend(items[items.length - 1]);
});

const nextButton1 = document.querySelector('.buttonnextmuc31');
const prevButton1 = document.querySelector('.buttonprevmuc31');

nextButton1.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc31');
  document.querySelector('.slidemuc31').appendChild(items[0]);
});

prevButton1.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc31');
  document.querySelector('.slidemuc31').prepend(items[items.length - 1]);
});

const nextButton2 = document.querySelector('.buttonnextmuc32');
const prevButton2 = document.querySelector('.buttonprevmuc32');

nextButton2.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc32');
  document.querySelector('.slidemuc32').appendChild(items[0]);
});

prevButton1.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc32');
  document.querySelector('.slidemuc32').prepend(items[items.length - 1]);
});
