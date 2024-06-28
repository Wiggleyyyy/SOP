document.addEventListener('scroll', function() {
    const parallaxContent = document.querySelector('.header-content');
    let scrollPosition = window.pageYOffset;
    let speed = 0.8;
    parallaxContent.style.transform = 'translateY(' + scrollPosition * -speed + 'px)';
});

document.addEventListener('scroll', function() {
    const parallaxContent = document.querySelector('.scroll');
    let scrollPosition = window.pageYOffset;
    let speed = 0.1;
    parallaxContent.style.transform = 'translateY(' + scrollPosition * -speed + 'px)';
});

document.addEventListener('scroll', function() {
    const parallaxContent = document.querySelector('.blurred-image');
    let scrollPosition = window.pageYOffset;
    let speed = 0.5;
    parallaxContent.style.transform = 'translateY(' + scrollPosition * -speed + 'px)';
});