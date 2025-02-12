// Language Toggle Functionality
const languageToggleButton = document.getElementById('language-toggle');
let currentLanguage = localStorage.getItem('language') || 'en';  // Default to English (EN)
// Set initial language button text
languageToggleButton.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
// Add event listener for language toggle
languageToggleButton.addEventListener('click', () => {
  // Toggle between EN and ES
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  languageToggleButton.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
  // Change the language of the page content
  document.body.setAttribute('lang', currentLanguage);
  // Update the text content based on selected language
  const translationElements = document.querySelectorAll('[data-en]');
  translationElements.forEach((element) => {
    element.textContent = element.getAttribute(currentLanguage === 'en' ? 'data-en' : 'data-es');
  });
  // Store the selected language in localStorage
  localStorage.setItem('language', currentLanguage);
});
