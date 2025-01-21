const textInput = document.getElementById('textInput');
const countButton = document.getElementById('countButton');
const resetButton = document.getElementById('resetButton');
const wordCountDisplay = document.getElementById('wordCount');

// Function to count words
const countWords = () => {
  const text = textInput.value.trim();
  const words = text === '' ? 0 : text.split(/\s+/).length;
  wordCountDisplay.textContent = `Word Count: ${words}`;
};

// Function to reset the input and word count
const resetInput = () => {
  textInput.value = '';
  wordCountDisplay.textContent = 'Word Count: 0';
};

// Event listeners
countButton.addEventListener('click', countWords);
resetButton.addEventListener('click', resetInput);
