# Password Generator Extension

<img src="./images/security-icon.png" alt="Password Generator Icon" width="100">

## Overview

The Password Generator Extension is a simple and user-friendly tool designed to generate secure and random passwords based on user-defined criteria. This extension allows users to customize the length and character types of the passwords, making it ideal for creating strong and unique passwords for various online accounts and services.

## Features

- **Customizable Password Length:** Choose a password length between 4 and 30 characters.
- **Character Types:** Select from uppercase letters, lowercase letters, numbers, and special characters.
- **Validation:** Ensures at least two types of characters are selected for generating a password.
- **Copy to Clipboard:** Easily copy the generated password with a single click.

## Installation

### Mozilla Firefox

1. Visit the [Firefox Add-ons Store](https://addons.mozilla.org) and search for "Password Generator Extension", or .[click here](https://addons.mozilla.org/en-US/firefox/addon/generate-random-password/).
2. Click "Add to Firefox" and follow the prompts to install the extension.

### Manual Installation for Google Chrome

1. Clone this repository:
    ```bash
    git clone https://github.com/Aayush259/Password-Generator-Extension.git
    ```
2. Edit the manifest.json file by removing the **browser_specific_settings** object.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" by clicking the toggle switch in the top right corner.
5. Click the "Load unpacked" button and select the cloned repository folder.

## Usage

1. Click on the Password Generator icon in your browser toolbar to open the extension popup.
2. Adjust the number of characters using the range slider.
3. Select the character types you want to include in your password by checking the respective checkboxes.
4. Click the "Generate" button to create a password.
5. Click the "Copy" button to copy the generated password to your clipboard.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Open a pull request to the main branch of the original repository.

## Acknowledgements

- Font: [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)
