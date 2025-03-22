new Swiper(".twm-slider", {
    slidesPerView: 1,
    speed: 3000,
    grabCursor: true,
    parallax: true,
    loop: true,
    autoplay: true,
    autoplay: { delay: 5000, },
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
});
