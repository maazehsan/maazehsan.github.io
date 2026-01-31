AOS.init({
duration: 800,
once: true,
offset: 80,
easing: 'ease-out-cubic'
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
    }
});

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
    }
});
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinksMenu = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
mobileMenuToggle.classList.toggle('active');
navLinksMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    navLinksMenu.classList.remove('active');
});
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
if (!e.target.closest('nav')) {
    mobileMenuToggle.classList.remove('active');
    navLinksMenu.classList.remove('active');
}
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoading = submitBtn.querySelector('.btn-loading');

contactForm.addEventListener('submit', async (e) => {
e.preventDefault();

// Get form data
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();

// Show loading state
btnText.style.display = 'none';
btnLoading.style.display = 'inline';
submitBtn.disabled = true;
formMessage.className = 'form-message';
formMessage.style.display = 'none';

try {
    const response = await fetch('https://maazehsan.pythonanywhere.com/api/contact/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();

    if (data.success) {
        formMessage.textContent = '✓ Message sent successfully! Check your email for confirmation.';
        formMessage.className = 'form-message success';
        contactForm.reset();
    } else {
        formMessage.textContent = '✕ ' + (data.error || 'Something went wrong. Please try again.');
        formMessage.className = 'form-message error';
    }
} catch (error) {
    formMessage.textContent = '✕ Network error. Please check your connection and try again.';
    formMessage.className = 'form-message error';
} finally {
    // Reset button state
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
    submitBtn.disabled = false;
}
});

// Project Row Scroll Buttons
function updateScrollButtonVisibility(row, leftBtn, rightBtn) {
    if (!row || !leftBtn || !rightBtn) return;
    
    const isAtStart = row.scrollLeft <= 5;
    const isAtEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 5;
    
    leftBtn.style.opacity = isAtStart ? '0' : '1';
    leftBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
    rightBtn.style.opacity = isAtEnd ? '0' : '1';
    rightBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
}

// Setup project row scroll buttons
document.querySelectorAll('.projects-row-wrapper').forEach(wrapper => {
    const row = wrapper.querySelector('.projects-row');
    const leftBtn = wrapper.querySelector('.scroll-left');
    const rightBtn = wrapper.querySelector('.scroll-right');
    
    if (row && leftBtn && rightBtn) {
        // Initial visibility check
        updateScrollButtonVisibility(row, leftBtn, rightBtn);
        
        // Update on scroll
        row.addEventListener('scroll', () => {
            updateScrollButtonVisibility(row, leftBtn, rightBtn);
        });
        
        // Update on window resize
        window.addEventListener('resize', () => {
            updateScrollButtonVisibility(row, leftBtn, rightBtn);
        });
        
        // Click handlers
        leftBtn.addEventListener('click', () => {
            row.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        rightBtn.addEventListener('click', () => {
            row.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});

// Certificate Image Navigation
const certImagesRow = document.getElementById('certImagesRow');
const certImgPrev = document.getElementById('certImgPrev');
const certImgNext = document.getElementById('certImgNext');

if (certImagesRow && certImgPrev && certImgNext) {
    // Initial visibility check
    updateScrollButtonVisibility(certImagesRow, certImgPrev, certImgNext);
    
    // Update on scroll
    certImagesRow.addEventListener('scroll', () => {
        updateScrollButtonVisibility(certImagesRow, certImgPrev, certImgNext);
    });
    
    // Update on window resize
    window.addEventListener('resize', () => {
        updateScrollButtonVisibility(certImagesRow, certImgPrev, certImgNext);
    });
    
    certImgPrev.addEventListener('click', () => {
        const imageWidth = certImagesRow.querySelector('.cert-image').offsetWidth + 16;
        certImagesRow.scrollBy({ left: -imageWidth, behavior: 'smooth' });
    });
    
    certImgNext.addEventListener('click', () => {
        const imageWidth = certImagesRow.querySelector('.cert-image').offsetWidth + 16;
        certImagesRow.scrollBy({ left: imageWidth, behavior: 'smooth' });
    });
}
