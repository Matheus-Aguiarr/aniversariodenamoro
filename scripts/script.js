document.addEventListener("DOMContentLoaded", () => {
  const timerRes = document.querySelector(".timer-res");
  function updateTimer() {
    const startDate = new Date("2024-03-20T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerRes.innerHTML = `
        <p>${days} dias</p>
        <p>${hours}h</p>
        <p>${minutes}min</p>
        <p>${seconds}s</p>
    `;
  }

  setInterval(updateTimer, 1000);
  updateTimer(); // Initial call to display the timer immediately
});
