<script setup>
import axios from "axios";
import {computed, ref} from "vue";
import {useCounterStore} from "@/stores/counter";
import {useCommonStore} from "@/stores/common";
import SimpleChart from "@/components/simpleChart.vue";
import SimpleSlideTest from "@/components/simpleSlideTest.vue";
import FormValidate from "@/components/FormValidate.vue";
import BootstrapTest from "@/components/bootstrapTest.vue";


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
    <h1>Hello from Home Page</h1>
    <p>Input : </p> <input type="text" name="ff" id="ff">
    <!--    <button class="btn-blue" @click="test">Click Me</button>-->
    <h1>Data : {{ store.count }}</h1>
    <h1>New Data : {{ newdata }}</h1>
    <h1>first Name : {{ nameStore.firstName }}</h1>
    <h1>last Name : {{ nameStore.lastName }}</h1>
    <!--<h1>from Net : {{nameStore.setFromNet()}}</h1>-->


    <button class="btn btn-primary" @click="store.increment">Increment</button>
    <button class="btn btn-warning" @click="store.multipyDouble()">Double</button>
    <button class="btn btn-success" @click="run">Run Function</button>
    <button class="btn test" @click="nameStore.setFromNet()">Get Name</button>

<form-validate/>
    <bootstrap-test/>
  </main>
</template>
