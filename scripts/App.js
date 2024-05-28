// Getting DOM elements.
const rangeInput = document.getElementById('range');
const characterNumbersElement = document.getElementById('character-numbers');
const allAllowedCharactersCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const generateButton = document.getElementById('generate-button');
const passwordOutput = document.getElementById('password');

rangeInput.addEventListener('change', (e) => {
    characterNumbersElement.innerHTML = e.target.value.toString().padStart(2, 0);
});

/*
    This function validates whether atleast two checkboxes are checked or not.
    If not, then show error and return false, if yes then return true.
*/
const Validate = () => {
    const errorPara = document.querySelector('.error');

    // Hide errors while validating.
    errorPara.classList.add('hide');

    // Array of checkboxes which are checked.
    const charactersToInclude = Array.from(allAllowedCharactersCheckboxes).filter(checkBox => checkBox.checked);
    
    // If there are less then two checkboxes, then show error and return false, else return true.
    if (charactersToInclude.length < 2) {
        errorPara.classList.remove('hide');
        return false;
    } else {
        return true;
    };
};

const generateButtonHandler = () => {
    if (Validate()) {

        // Update password.
        passwordOutput.textContent = 'Valid';
    } else {
        passwordOutput.innerHTML = 'Not Valid';
    };
}

generateButton.addEventListener('click', generateButtonHandler);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // Check if the active element is an input field, if it is then do nothing.
        if (document.activeElement.tagName === 'INPUT') {
            return;
        };

        generateButtonHandler();
    }
});