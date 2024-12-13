// Toggle visibility of the options container
function toggleOptions() {
    const container = document.getElementById('options-container');
    // Check if the container is currently hidden or not set
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

// Show the sub-options in settings
function showSubOptions(select) {
    const languageOptions = document.getElementById('language-options');
    const themeOptions = document.getElementById('theme-options');

    // Hide all sub-options by default
    languageOptions.style.display = 'none';
    themeOptions.style.display = 'none';

    // Show the relevant sub-option based on the selected value
    if (select.value === 'language') {
        languageOptions.style.display = 'block';
    } else if (select.value === 'theme') {
        themeOptions.style.display = 'block';
    }
}

// Object to store the loaded language data
let langData = {};

// Function to load the language file based on the selected language
function loadLanguageFile(lang) {
    fetch(`/data/${lang}.json`)  // Fetch the corresponding language JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error('Language file not found'); // If the file is not found, throw an error
            }
            return response.json();
        })
        .then(data => {
            langData[lang] = data;  // Store the language data in the langData object
            changeLanguage(lang);  // Update the page content with the selected language
        })
        .catch(error => {
            console.error('Error loading language file:', error); // Log any errors during the file loading process
        });
}

// Default language is Chinese, load the corresponding language file
loadLanguageFile('zh');

// Function to change the page language
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[id]');  // Get all elements with an id attribute
    elements.forEach(element => {
        const id = element.id;  // Get the id of each element
        if (langData[lang] && langData[lang][id]) {
            element.innerText = langData[lang][id];  // If a translation exists, update the text content
        }
    });
}

// Listen for changes in the language selection dropdown
document.getElementById("language-select").addEventListener("change", function () {
    const selectedLang = this.value;  // Get the selected language from the dropdown
    loadLanguageFile(selectedLang);  // Load the corresponding language file
});
