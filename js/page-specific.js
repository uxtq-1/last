// Example of a page-specific functionality: Dynamic Content for Business Operations Page
// If this is the Business Operations page, we can add dynamic content updates or interactions
if (window.location.pathname.includes('business-operations.html')) {
  // Dynamic content for the Business Operations page
  const businessContent = document.querySelector('#business-section');
  businessContent.innerHTML = `
    <h3>Optimize Your Business Processes</h3>
    <p>Our business operations solutions include accounts payable, receivables, billing, and comprehensive workflow management designed to streamline your organization.</p>
    <button onclick="contactUsModal()">Contact Us</button>
  `;
}
// Example function to trigger the "Contact Us" modal from a button click
function contactUsModal() {
  const contactModal = document.getElementById('contact-modal');
  if (contactModal) {
    contactModal.classList.add('active'); // Open the modal
  }
}
