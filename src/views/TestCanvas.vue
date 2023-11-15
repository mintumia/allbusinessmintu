<script setup>
import {onMounted, ref, watchEffect} from 'vue';

const name = ref('');
const runFunc = ref(true);
const count = ref(0);
const canvas = ref(null);



function run(){
  let c = canvas.value.getContext('2d');
count.value = Date.now();
  //name.value = "new Name";
  //console.log(name.value+count.value);

  canvas.value.width = 1000;
  canvas.value.height = 600;

  c.value.fillRect(100,100,200,150);



}

watchEffect(()=>{
count.value;


  setTimeout(()=>{
    name.value = "Mintu Mia";

    run();

  },2000);
});

onMounted(()=>{
 // console.log(run.value);
  //run.value;
 // console.log(name.value);


});

</script>

<template>
<div>
  <h1>Test</h1>
  <button @click="count+1">Click Me</button>
  <canvas ref="canvas" >

  </canvas>

</div>
</template>

<style scoped>

</style>