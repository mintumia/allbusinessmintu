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
  <swiper-slide ><div class="w-fit h-fit text-center" >01<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >02<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >03<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >04<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >05<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >06<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >07<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >08<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >09<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >10<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >11<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >12<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >13<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>
  <swiper-slide ><div class="w-fit h-fit text-center" >14<img  src="../assets/images/Test.webp" alt="cloth"></div></swiper-slide>


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