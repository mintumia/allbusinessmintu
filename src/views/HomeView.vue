<script setup>
//import axios from "axios";
import {computed, onMounted, ref} from "vue";
import {_} from 'lodash';
import {useCounterStore} from "@/stores/counter";
import {useCommonStore} from "@/stores/common";
//import SimpleChart from "@/components/simpleChart.vue";

import FormValidate from "@/components/FormValidate.vue";
import SimpleSlideTest from "@/components/simpleSlideTest.vue";
import AutoPlaySlide from "@/components/AutoPlaySlide.vue";
import OfferCard from "@/components/OfferCard.vue";
import PostCard from "@/components/PostCard.vue";
import SectionHeadingTitle from "@/components/SectionHeadingTitle.vue";
import ProductCard from "@/components/ProductCard.vue";
import StarReviews from "@/components/StarReviews.vue";
import DealOftheWeek from "@/components/DealOftheWeek.vue";
import PdfTest from "@/components/PdfTest.vue";
import MyRand from "@/components/MyRand.vue";


//const fruits = ref(["apple","Mango","Banana","papaya","Orange","Avokado"]);

const commonStore = useCommonStore();
const store = useCounterStore();
const data = ref(store.count);
//const increment =()=>{store.increment() };
const newdata = ref(0);


const run = () => {
  setTimeout(() => {
    newdata.value = store.count + 3;
    commonStore.firstName = "Hello";
    commonStore.lastName = "bye";

  }, 4000);
};


</script>

<template>
  <main class="container mx-auto">
    <auto-play-slide/>
    <br/>
<section-heading-title title="Product Catagory"/>
    <br/>
    <simple-slide-test/>
<!--    product List items-->
    <section-heading-title title="Product List"/>


  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 w-full">
    <product-card :price=100 :ratings=3.2 postTitle="Apple" description="The quick brown fox jump over the lazy dogs." imagePath="/src/assets/images/test.webp"/>
    <product-card :price=100 :ratings=3.2 postTitle="Apple" description="The quick brown fox jump over the lazy dogs." imagePath="/src/assets/images/test.webp"/>
    <product-card :price=100 :ratings=3.2 postTitle="Apple" description="The quick brown fox jump over the lazy dogs." imagePath="/src/assets/images/test.webp"/>
    <product-card :price=100 :ratings=3.2 postTitle="Apple" description="The quick brown fox jump over the lazy dogs." imagePath="/src/assets/images/test.webp"/>
    <product-card :price=100 :ratings=3.2 postTitle="Apple" description="The quick brown fox jump over the lazy dogs." imagePath="/src/assets/images/test.webp"/>
    <product-card :price=100 :ratings=3.2 postTitle="Apple" description="The quick brown fox jump over the lazy dogs." imagePath="/src/assets/images/test.webp"/>
    <product-card :price=100 :ratings=3.2 postTitle="Apple" description="The quick brown fox jump over the lazy dogs." imagePath="/src/assets/images/test.webp"/>
    <product-card :price=100 :ratings=3.2 postTitle="Apple" description="The quick brown fox jump over the lazy dogs." imagePath="/src/assets/images/test.webp"/>
    <product-card :price=100 :ratings=3.2 postTitle="Apple" description="The quick brown fox jump over the lazy dogs." imagePath="/src/assets/images/test.webp"/>








  </div>

    <section-heading-title title="New Offers"/>
    <offer-card/>

<!--    Deal of the week-->
    <section-heading-title title="Deal Of the Week"/>
<deal-ofthe-week
    image-path-r="/src/assets/images/test.webp"
    image-path-l="/src/assets/images/test.webp"
    countDown="2023-12-09"

/>


    <h1>Hello from Home Page</h1>
    <p>Input : </p> <input type="text" name="ff" id="ff">
    <!--    <button class="btn-blue" @click="test">Click Me</button>-->
    <h1>Data : {{ store.count }}</h1>
    <h1>New Data : {{ newdata }}</h1>
    <h1>first Name : {{ commonStore.firstName }}</h1>
    <h1>last Name : {{ commonStore.lastName }}</h1>
    <!--<h1>from Net : {{commonStore.setFromNet()}}</h1>-->


    <button class="btn-blue" @click="store.increment">Increment</button>
    <button class="btn-blue" @click="store.multipyDouble()">Double</button>
    <button class="btn-blue" @click="run">Run Function</button>
    <button class="btn-blue" @click="commonStore.setFromNet()">Get Name</button>

<!--<form-validate/>

    <pdf-test/>-->




  </main>
</template>
