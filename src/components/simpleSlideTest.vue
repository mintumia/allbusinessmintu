<template>
  <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :breakpoints="{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
       // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
         1024: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1368: {
          slidesPerView: 4,
          spaceBetween: 40
        },
         1668: {
          slidesPerView: 5,
          spaceBetween: 40
        },
         1980: {
          slidesPerView: 5,
          spaceBetween: 40
        },
      }"

 @swiper="onSwiper"
  @slideChange="onSlideChange"
  >
<!--    <swiper-slide ><div class="w-20 h-40 text-center" >01<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >02<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >03<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >04<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >05<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>
    <swiper-slide ><div class="w-20 h-40 text-center" >06<img  src="../assets/images/cloth.png" alt="cloth"></div></swiper-slide>-->
<!--    <swiper-slide ><post-card link="./about" postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs." /></swiper-slide>-->


<!--<swiper-slide><post-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs." /> </swiper-slide>-->

<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>
<swiper-slide><catagory-card postTitle="Testing Post" imagePath="/src/assets/images/cloth.png" description="The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs.The quick brown fox jump over the lazy dogs."/> </swiper-slide>

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
import PostCard from "@/components/PostCard.vue";
import NewPostCard from "@/components/PostCard.vue";
import CatagoryCard from "@/components/catagoryCard.vue";

// Import Swiper styles
export default {
  components: {
    CatagoryCard,
    NewPostCard,
    PostCard,
    Swiper,
    SwiperSlide,
  },
  data(){
    return{

    }
  },
  setup() {

    //const path = router.hasRoute("/");
    /*const swiper = new Swiper('.swiper', {
      // Default parameters
      slidesPerView: 1,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    })*/

    const onSwiper = (swiper) => {
      //console.log(swiper);




    };
    const onSlideChange = () => {
     // console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>