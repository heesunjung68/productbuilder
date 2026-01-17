import { LottoBall } from './LottoBall.js';

customElements.define('lotto-ball', LottoBall);

const generatorBtn = document.getElementById('generatorBtn');
const lottoBallsContainer = document.getElementById('lotto-balls-container');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const ballColors = ['#ff7f50', '#87ceeb', '#32cd32', '#ff69b4', '#ffd700', '#9370db'];

// Theme toggle
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}


generatorBtn.addEventListener('click', () => {
    lottoBallsContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        lottoBall.setAttribute('color', ballColors[index]);
        lottoBallsContainer.appendChild(lottoBall);
    });
});
