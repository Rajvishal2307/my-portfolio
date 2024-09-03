// portfolio.js

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.level-link');
    const progress = document.getElementById('progress');

    // Smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update progress bar
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const totalHeight = docHeight - windowHeight;
        const scrolled = (scrollPos / totalHeight) * 100;
        progress.style.width = `${scrolled}%`;
    });
});
