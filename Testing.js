document.addEventListener('DOMContentLoaded', function () {
  const numSnowflakes = 100; // Adjust the number of snowflakes as needed
  const container = document.querySelector('.background');

  for (let i = 0; i < numSnowflakes; i++) {
      createSnowflake();
  }

  function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.top = `${Math.random() * 100}%`;
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`; // Adjust duration as needed
      container.appendChild(snowflake);
  }
});
