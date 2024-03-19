function getCurrentDateTime() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();
  const midnight = new Date(currentYear, currentMonth, currentDay, 24, 0, 0); // Medianoche
  return midnight.getTime();
}

function calculateDistanceToMidnight() {
  const now = new Date().getTime();
  const midnight = getCurrentDateTime();
  let distance = midnight - now;
  if (distance < 0) {
    const tomorrowMidnight = new Date(midnight);
    tomorrowMidnight.setDate(tomorrowMidnight.getDate() + 1);
    distance = tomorrowMidnight.getTime() - now;
  }
  return distance;
}

function updateTimer() {
  const distance = calculateDistanceToMidnight();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);
