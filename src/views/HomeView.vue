<script setup>
import axios from "axios";
import {computed,ref} from "vue";
const newdata = ref();
const test = computed(()=>{
  const data  = axios.get("http://127.0.0.1:8000/api/test").then(response=>newdata.value = response.data)
  //console.log("Test Working");
  return newdata;
});


</script>

<template>
  <main class="bg-green-400">
    <h1>Hello from Home Page</h1>
    <p>Input : </p> <input type="text" name="ff" id="ff">
<!--    <button class="btn-blue" @click="test">Click Me</button>-->
<h1>{{test}}</h1>

  </main>
</template>
