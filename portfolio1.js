// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Dark Mode with Button
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Image Modal Popup
document.querySelectorAll('.thumbnail-content img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';
        modal.appendChild(modalImg);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    });
});

// Form Validation
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', function(e) {
    if (textarea.value.trim() === '') {
        e.preventDefault();
        alert('Please enter your feedback.');
    }
});