// Language Toggle Functionality
const languageToggleButton = document.getElementById('language-toggle');
let currentLanguage = localStorage.getItem('language') || 'en';  // Default to English (EN)
// Set initial language button text based on the current language
languageToggleButton.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
// Set the language on the body element
document.body.setAttribute('lang', currentLanguage);
// Function to update the page content dynamically based on language
function updateLanguage() {
  const translationElements = document.querySelectorAll('[data-en]');
  translationElements.forEach((element) => {
    element.textContent = element.getAttribute(currentLanguage === 'en' ? 'data-en' : 'data-es');
  });
}
// Initial language update
updateLanguage();
// Add event listener for language toggle
languageToggleButton.addEventListener('click', () => {
  // Toggle between English (EN) and Spanish (ES)
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';  
  // Update the button text based on the new language
  languageToggleButton.textContent = currentLanguage === 'en' ? 'ES' : 'EN'; 
  // Update the language attribute on the body element
  document.body.setAttribute('lang', currentLanguage);
  // Update the page content with the selected language
  updateLanguage();
  // Store the selected language in localStorage
  localStorage.setItem('language', currentLanguage);
});
