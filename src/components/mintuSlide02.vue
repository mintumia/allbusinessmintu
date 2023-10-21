<template>
  <div>
    <swiper
        :modules="modules"
        :slides-per-view="5"
        :space-between="5"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide><catagory-card/></swiper-slide>
      <swiper-slide><catagory-card/></swiper-slide>
      <swiper-slide><catagory-card/></swiper-slide>
      <swiper-slide><catagory-card/></swiper-slide>
      <swiper-slide><catagory-card/></swiper-slide>
      <swiper-slide><catagory-card/></swiper-slide>
      <swiper-slide><catagory-card/></swiper-slide>
      <swiper-slide><catagory-card/></swiper-slide>
    <swiper-slide><catagory-card/></swiper-slide>
      <swiper-slide><catagory-card/></swiper-slide>

    </swiper>
  </div>
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

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
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