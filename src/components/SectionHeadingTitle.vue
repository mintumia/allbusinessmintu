<script setup>
import {ref,defineProps}from 'vue';

const myProps = defineProps({title:String,});


</script>

<template>
  <div>
    <h1 class="p-2 sm:p-1 sm:m-1 text-white sm:text-xl md:text-3xl font-medium text-center mx-auto rounded-lg bg-gradient-to-b from-20% from-indigo-600 via-sky-500 via-60% to-blue-500 to-20 m-2">{{title}}</h1>
    <hr/>
  </div>
</template>

<style scoped>

</style>