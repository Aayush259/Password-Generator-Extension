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

/*
    This function generates password and returns it.
*/
const generatePassword = () => {
    // Characters required to generate password.
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '`~!@#$%^&*()-=_+[]{}\\|":;\'/?.>,<';

    // Thiss array will contain all the characters that user want to include in password.
    let allChars = [];

    // Updating allChars array according to user's preference.
    if (allAllowedCharactersCheckboxes[0].checked) {
        allChars.push(uppercase);
    };

    if (allAllowedCharactersCheckboxes[1].checked) {
        allChars.push(lowercase);
    };

    if (allAllowedCharactersCheckboxes[2].checked) {
        allChars.push(numbers);
    };

    if (allAllowedCharactersCheckboxes[3].checked) {
        allChars.push(specialChars);
    };

    // Password length;
    const passwordLength = Number(characterNumbersElement.textContent);

    // Initializing password.
    let password = '';

    // Ensure at least one character from each category.
    allChars.forEach(characters => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    });

    // Generate random characters to fill up the rest of the password.
    const remainingLength = passwordLength - password.length;
    for (let i = 0; i < remainingLength; i++) {
        const categoryIndex = Math.floor(Math.random() * allChars.length);
        const characters = allChars[categoryIndex];
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    };

    // Shuffle the password to mix the characters.
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
};

const generateButtonHandler = () => {
    if (Validate()) {
        // Get password.
        const password = generatePassword();

        // Update password.
        passwordOutput.textContent = password;
    } else {
        passwordOutput.innerHTML = "";
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