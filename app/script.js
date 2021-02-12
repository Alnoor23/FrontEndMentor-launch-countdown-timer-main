const countdown = document.querySelector('.timer');

const day = document.querySelector('#day');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

// Set Launch Date (ms)
const launchDate = new Date('Mar 5, 2021 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = mins;
  second.innerHTML = seconds;

  if (distance < 0) {

    clearInterval(intvl);

    countdown.style.color = '#fb6087';
    countdown.style.fontSize = '2rem';
    countdown.innerHTML = 'Launched!';
    countdown.style.margin = '2rem';
  }
}, 1000);
