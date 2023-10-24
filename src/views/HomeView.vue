<script setup>
//import axios from "axios";
import {computed, ref} from "vue";
import {useCounterStore} from "@/stores/counter";
import {useCommonStore} from "@/stores/common";
//import SimpleChart from "@/components/simpleChart.vue";

import FormValidate from "@/components/FormValidate.vue";
import SimpleSlideTest from "@/components/simpleSlideTest.vue";
import AutoPlaySlide from "@/components/AutoPlaySlide.vue";
import OfferCard from "@/components/OfferCard.vue";




const nameStore = useCommonStore();
const store = useCounterStore();
const data = ref(store.count);
//const increment =()=>{store.increment() };
const newdata = ref(0);

const run = () => {
  setTimeout(() => {
    newdata.value = store.count + 3;
    nameStore.firstName = "Hello";
    nameStore.lastName = "bye";

  }, 4000);
};

</script>

<template>
  <main>
    <auto-play-slide/>
    <offer-card/>


    <h1>Hello from Home Page</h1>
    <p>Input : </p> <input type="text" name="ff" id="ff">
    <!--    <button class="btn-blue" @click="test">Click Me</button>-->
    <h1>Data : {{ store.count }}</h1>
    <h1>New Data : {{ newdata }}</h1>
    <h1>first Name : {{ nameStore.firstName }}</h1>
    <h1>last Name : {{ nameStore.lastName }}</h1>
    <!--<h1>from Net : {{nameStore.setFromNet()}}</h1>-->


    <button class="btn-blue" @click="store.increment">Increment</button>
    <button class="btn-blue" @click="store.multipyDouble()">Double</button>
    <button class="btn-blue" @click="run">Run Function</button>
    <button class="btn-blue" @click="nameStore.setFromNet()">Get Name</button>

<form-validate/>


  </main>
</template>
