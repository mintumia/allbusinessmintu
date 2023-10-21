<template>
  <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"

      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide ><div class="w-20 h-40 text-center" >01<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >02<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >03<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >04<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >05<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >06<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >07<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>

  </swiper>
<!--  <div><h1>{{$route.href}}</h1></div>-->
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import router from "@/router";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{

    }
  },
  setup() {
    //const path = router.hasRoute("/");

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>