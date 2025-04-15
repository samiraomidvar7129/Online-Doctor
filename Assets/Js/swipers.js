var swiper = new Swiper("#doctorsList", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: !0,
    autoplay: { delay: 2000, disableOnInteraction: !6 },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 20 },
      425: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 4, spaceBetween: 10 },
      1024: { slidesPerView: 4, spaceBetween: 10 },
    },
  }),
  swiper = new Swiper("#comments", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: !0,
    autoplay: { delay: 4000, disableOnInteraction: !1 },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 20 },
      425: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
    },
  }),
  swiper = new Swiper("#blogs", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: !0,
    autoplay: { delay: 6000, disableOnInteraction: !1 },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 20 },
      425: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
    },
  });
