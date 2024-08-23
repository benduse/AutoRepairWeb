document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thankYouMessage').classList.remove('d-none');
});
