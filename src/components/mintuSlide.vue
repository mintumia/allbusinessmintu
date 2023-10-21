<template>
  <div >
    <swiper :modules="[EffectFade]" :slides-per-view="3" effect="creative">
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
      <swiper-slide><catagory-card/></swiper-slide>
      <swiper-slide><catagory-card/></swiper-slide>
<!--      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>-->

    </swiper>
  </div>
</template>
<script>
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      EffectFade,
    };
  },
}
</script>