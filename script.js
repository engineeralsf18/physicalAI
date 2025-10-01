const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const ctaGroup = document.querySelector('.cta-group');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.classList.toggle('open');
        navLinks?.classList.toggle('open', isOpen);
        ctaGroup?.classList.toggle('open', isOpen);
        document.body.classList.toggle('nav-open', isOpen);
    });
}

const form = document.querySelector('.cta-form');
form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    if (!button) return;

    button.textContent = 'Request received';
    button.disabled = true;
    button.classList.add('submitted');
});
