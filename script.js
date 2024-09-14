document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contact-button');
    const contactSection = document.getElementById('contact');
    
    contactButton.addEventListener('click', function() {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });
});
