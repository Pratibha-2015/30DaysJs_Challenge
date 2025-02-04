const coin = document.getElementById('coin');
const flipButton = document.getElementById('flip-button');
const result = document.getElementById('result');

flipButton.addEventListener('click', () => {
  const random = Math.random(); // Generate a random number between 0 and 1
  const isHeads = random < 0.5; // 50% chance for heads or tails

  // Add the flip animation
  coin.classList.add('flip');

  // Wait for the animation to finish
  setTimeout(() => {
    coin.classList.remove('flip');
    if (isHeads) {
      coin.style.transform = 'rotateY(0deg)';
      result.textContent = 'Heads!';
    } else {
      coin.style.transform = 'rotateY(180deg)';
      result.textContent = 'Tails!';
    }
  }, 1000); // Match the duration of the animation
});