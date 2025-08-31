document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        // Default to dark theme if no preference is saved
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        let theme= document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    const jobTitles = ["Full-Stack Java Developer", "Backend Engineer", "Web App Specialist"];
    let titleIndex = 0;
    let charIndex = 0;

    function type() {
        if (typewriterElement && charIndex < jobTitles[titleIndex].length) {
            typewriterElement.textContent += jobTitles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (typewriterElement && charIndex > 0) {
            typewriterElement.textContent = jobTitles[titleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            titleIndex = (titleIndex + 1) % jobTitles.length;
            setTimeout(type, 500);
        }
    }
    
    if(typewriterElement) {
        type();
    }

    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.animationDelay) || 0;
                const direction = entry.target.dataset.animationDirection || 'from-left';
                
                entry.target.classList.add(direction);

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 150);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });


    // --- Form Validation & Submission ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // This is a placeholder for form submission logic.
            // In a real-world scenario, you'd send the data to a server here.
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }

    // --- Copy Email ---
    const copyEmailBtn = document.getElementById('copy-email');
    const copySuccessMsg = document.getElementById('copy-success');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('mohanprasathrathinam@gmail.com');
            if (copySuccessMsg) {
                copySuccessMsg.classList.add('visible');
                setTimeout(() => {
                    copySuccessMsg.classList.remove('visible');
                }, 2000);
            }
        });
    }

    // --- Footer Year ---
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});

