new Swiper(".twm-slider2", {
    slidesPerView: 1,
    speed: 3000,
    grabCursor: true,
    parallax: true,
    effect: 'fade',
    speed: 2000,
    loop: true,
    autoplay: false,
    autoplay: { delay: 4000, },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
