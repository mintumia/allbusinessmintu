<template>
<swiper
    :spaceBetween="30"
    :slides-per-view="2"
    :centeredSlides="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
>
  <swiper-slide ><large-slide-card/></swiper-slide>
  <swiper-slide ><large-slide-card/></swiper-slide>
  <swiper-slide ><large-slide-card/></swiper-slide>
  <swiper-slide ><large-slide-card/></swiper-slide>
  <swiper-slide ><large-slide-card/></swiper-slide>
  <swiper-slide ><large-slide-card01/></swiper-slide>
  <swiper-slide ><large-slide-card01/></swiper-slide>
  <swiper-slide ><large-slide-card01/></swiper-slide>
  <swiper-slide ><large-slide-card01/></swiper-slide>
  <swiper-slide ><large-slide-card01/></swiper-slide>





</swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import OfferCard from "@/components/OfferCard.vue";
import LargeSlideCard from "@/components/LargeSlideCard.vue";
import LargeSlideCard01 from "@/components/LargeSlideCard01.vue";

export default {
  components: {
    LargeSlideCard01,
    LargeSlideCard,
    OfferCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
/*#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  !* Center slide text vertically *!
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}*/
</style>