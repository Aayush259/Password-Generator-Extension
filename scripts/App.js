// Getting DOM elements.
const rangeInput = document.getElementById('range');
const characterNumbersElement = document.getElementById('character-numbers');
const allAllowedCharactersCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const generateButton = document.getElementById('generate-button');
const passwordOutput = document.getElementById('password');

rangeInput.addEventListener('change', (e) => {
    characterNumbersElement.innerHTML = e.target.value.toString().padStart(2, 0);
});
