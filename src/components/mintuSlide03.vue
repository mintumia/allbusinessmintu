<template>
  <div>
    <swiper :modules="[Virtual]" :slides-per-view="5" :space-between="50" virtual>
      <swiper-slide
          v-for="(slideContent, index) in slides"
          :key="index"
          :virtualIndex="index"
      >{{slideContent}}</swiper-slide
      >
    </swiper>
  </div>
</template>
<script>
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    // Create array with 1000 slides
    const slides = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`
    );
    return {
      slides,
      Virtual,
    };
  },
};
</script>