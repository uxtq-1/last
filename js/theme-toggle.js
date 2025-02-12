// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;
// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light if no preference is set
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
