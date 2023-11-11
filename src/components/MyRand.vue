<script setup>
import {onMounted, ref, watchEffect} from 'vue';
import {range,random} from 'lodash';

const myRand = ref(0);
const currentTime = ref(Date.now()); //new Date('11/08/2023');



function runWork(){
 // console.log("Before : "+currentTime.value);
  currentTime.value = Date.now();
  myRand.value = random(1000,2000);
  //console.log( );

};

watchEffect(()=>{
  currentTime.value;

  setTimeout(()=>{

    runWork();

  },3000);

});

</script>

<template>
<div>
  <h1>Random: {{myRand}} </h1>
</div>
</template>

<style scoped>

</style>