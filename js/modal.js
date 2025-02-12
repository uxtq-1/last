// Modal Handling for Floating Icons with Keyboard Support
const modalOverlayElements = document.querySelectorAll('.modal-overlay');
const closeModalButtons = document.querySelectorAll('[data-close]');
const floatingIcons = document.querySelectorAll('.floating-icon');
// Open the modal when a floating icon is clicked or activated via keyboard (Enter/Space)
floatingIcons.forEach((icon) => {
  // Mouse click event
  icon.addEventListener('click', () => {
    const modalId = icon.getAttribute('data-modal');
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.classList.add('active'); // Open the modal
    }
  });
  // Keyboard event (Enter or Space)
  icon.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault(); // Prevent scrolling when Space is pressed
      const modalId = icon.getAttribute('data-modal');
      const modalElement = document.getElementById(modalId);
      if (modalElement) {
        modalElement.classList.add('active'); // Open the modal
      }
    }
  });
});
// Close the modal when the close button is clicked or activated via keyboard (Enter/Space)
closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalElement = button.closest('.modal-overlay');
    modalElement.classList.remove('active'); // Close the modal
  });
  // Keyboard event for closing modal (Enter or Space)
  button.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault(); // Prevent scrolling when Space is pressed
      const modalElement = button.closest('.modal-overlay');
      modalElement.classList.remove('active'); // Close the modal
    }
  });
});
// Close modals if clicking outside the modal content area
modalOverlayElements.forEach((overlay) => {
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.classList.remove('active'); // Close modal if overlay is clicked
    }
  });
  // Close modal with keyboard (Escape key)
  overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      overlay.classList.remove('active'); // Close modal if Escape is pressed
    }
  });
});
