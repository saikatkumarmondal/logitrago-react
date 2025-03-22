new Swiper(".twm-slider3", {
    slidesPerView: 1,
    speed: 1000,
    grabCursor: true,
    parallax: true,
    effect: 'fade',
    loop: true,
    autoplay: true,
    autoplay: { delay: 10000, },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
