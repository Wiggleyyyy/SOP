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

document.addEventListener('scroll', function() {
    const parallaxContent = document.querySelector('.card-container');
    let scrollPosition = window.pageYOffset;
    let speed = 0.5;
    parallaxContent.style.transform = 'translateY(' + scrollPosition * -speed + 'px)';
});

document.addEventListener('scroll', function() {
    const parallaxContent = document.querySelector('.birth-date');
    let scrollPosition = window.pageYOffset;
    let speed = 0.2;
    parallaxContent.style.transform = 'translateY(' + scrollPosition * -speed + 'px)';
});

document.addEventListener('scroll', function() {
    const parallaxContent = document.querySelector('.nationality');
    let scrollPosition = window.pageYOffset;
    let speed = 0.3;
    parallaxContent.style.transform = 'translateY(' + scrollPosition * -speed + 'px)';
});

document.addEventListener('scroll', function() {
    const parallaxContent = document.querySelector('.get-in-touch');
    let scrollPosition = window.pageYOffset;
    let speed = 0.2;
    parallaxContent.style.transform = 'translateY(' + scrollPosition * -speed + 'px)';
});

document.addEventListener('scroll', function() {
    const parallaxContent = document.querySelector('.experience');
    let scrollPosition = window.pageYOffset;
    let speed = 0.2;
    parallaxContent.style.transform = 'translateY(' + scrollPosition * -speed + 'px)';
});