const navButton = document.querySelector('.nav-button');
const nav = document.querySelector('#nav');

navButton.addEventListener('click', () => {
    const visibility = navButton.getAttribute('aria-expanded');
    
    if (visibility === 'false') {
        navButton.setAttribute('aria-expanded', true);
        nav.setAttribute('data-visible', true);
    } else {
        navButton.setAttribute('aria-expanded', false);
        nav.setAttribute('data-visible', false);
    }
});
