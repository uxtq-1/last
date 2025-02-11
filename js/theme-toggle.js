// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
bodyElement.setAttribute('data-theme', savedTheme);

// Update button text based on current theme
themeToggleButton.textContent = savedTheme === 'light' ? 'Dark' : 'Light';

// Add event listener for theme toggle
themeToggleButton.addEventListener('click', () => {
  const currentTheme = bodyElement.getAttribute('data-theme');
  // Toggle theme
  if (currentTheme === 'light') {
    bodyElement.setAttribute('data-theme', 'dark');
    themeToggleButton.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
  } else {
    bodyElement.setAttribute('data-theme', 'light');
    themeToggleButton.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
  }
});

// Language Toggle Functionality
const languageToggleButton = document.getElementById('language-toggle');
let currentLanguage = localStorage.getItem('language') || 'en';

// Set the initial language button text
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

// Modal Handling
const modalOverlayElements = document.querySelectorAll('.modal-overlay');
const closeModalButtons = document.querySelectorAll('[data-close]');
const serviceCards = document.querySelectorAll('.service-card');

// Open the modal when a service card is clicked
serviceCards.forEach((card) => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.classList.add('active');
    }
  });
});

// Close the modal when the close button is clicked
closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalElement = button.closest('.modal-overlay');
    modalElement.classList.remove('active');
  });
});

// Close modals if clicking outside the modal content area
modalOverlayElements.forEach((overlay) => {
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.classList.remove('active');
    }
  });
});
