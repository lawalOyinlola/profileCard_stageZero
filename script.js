function updateUTCTime() {
  const utcTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentTime = new Date().toUTCString();
  utcTimeElement.textContent = `UTC: ${currentTime}`;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("theme-switch");
  themeSwitch.addEventListener("change", toggleDarkMode);

  // Update time immediately and then every second
  updateUTCTime();
  setInterval(updateUTCTime, 1000);
});
