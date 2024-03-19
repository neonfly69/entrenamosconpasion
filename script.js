// Función para obtener la fecha y hora actual
function getCurrentDateTime() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();
  const midnight = new Date(currentYear, currentMonth, currentDay, 24, 0, 0); // Medianoche
  return midnight.getTime();
}

// Función para calcular la distancia hasta la medianoche
function calculateDistanceToMidnight() {
  const now = new Date().getTime();
  const midnight = getCurrentDateTime();
  let distance = midnight - now;
  if (distance < 0) {
    // Si ya es medianoche, suma un día
    const tomorrowMidnight = new Date(midnight);
    tomorrowMidnight.setDate(tomorrowMidnight.getDate() + 1);
    distance = tomorrowMidnight.getTime() - now;
  }
  return distance;
}

// Actualiza el temporizador cada segundo
function updateTimer() {
  const distance = calculateDistanceToMidnight();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML = `
    ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos restantes`;
}

// Actualiza el temporizador inicial
updateTimer();

// Actualiza el temporizador cada segundo
setInterval(updateTimer, 1000);
