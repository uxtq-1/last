// Form Validation and Submission Handling
const joinForm = document.querySelector('#join-modal form');
const contactForm = document.querySelector('#contact-modal form');
// Helper function to validate form inputs
function validateForm(form) {
  let isValid = true;
  form.querySelectorAll('input, textarea').forEach((input) => {
    if (input.required && !input.value.trim()) {
      isValid = false;
      input.style.borderColor = 'red'; // Highlight missing fields
    } else {
      input.style.borderColor = ''; // Reset if valid
    }
  });
  return isValid;
}
// Join Us Form Submission
joinForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  if (validateForm(joinForm)) {
    // Form is valid, handle submission (e.g., send to server or show success)
    alert('Join Us form submitted successfully!');
    joinForm.reset(); // Reset form fields
  } else {
    alert('Please fill in all required fields.');
  }
});
// Contact Us Form Submission
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  if (validateForm(contactForm)) {
    // Form is valid, handle submission (e.g., send to server or show success)
    alert('Contact form submitted successfully!');
    contactForm.reset(); // Reset form fields
  } else {
    alert('Please fill in all required fields.');
  }
});
