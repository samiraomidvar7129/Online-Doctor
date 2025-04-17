var swiper = new Swiper("#doctorsList", {
    slidesPerView: 3,
    spaceBetween: 10,
    loopAdditionalSlides: 24,
    loop:true,
    autoplay: { delay: 2000, disableOnInteraction: true },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 20 },
      425: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
    },
  }),
  swiper = new Swiper("#comments", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop:true,
    loopAdditionalSlides: 12,
    autoplay: { delay: 4000, disableOnInteraction: true },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 20 },
      425: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 2, spaceBetween: 10 },
    },
  }),
  swiper = new Swiper("#blogs", {
    slidesPerView: 3,
    spaceBetween: 10,
    loopAdditionalSlides: 14,
    loop: true,
    autoplay: { delay: 6000, disableOnInteraction: true },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 20 },
      425: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
    },
  });
