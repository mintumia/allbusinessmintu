<template>
<swiper
    :spaceBetween="30"
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
  <swiper-slide ><div class="w-20 h-40 text-center" >01<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-20 h-40 text-center" >02<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-20 h-40 text-center" >03<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-20 h-40 text-center" >04<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-20 h-40 text-center" >05<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-20 h-40 text-center" >06<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-20 h-40 text-center" >07<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
</swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
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