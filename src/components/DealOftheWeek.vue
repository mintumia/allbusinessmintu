<script setup>
import {ref, reactive} from 'vue';



const counter = reactive({

  year:0,
      month:0,
    day:0,
    hour:0,
    minute:0,
    second:0,

});

//const imagePath = ref("");
const myProps = defineProps({
  imagePathR:String,
  imagePathL:String,
  countDown:String,
});

setTimeout(() => {
  timeCounter();

}, 3000);


function timeCounter() {
  const now = new Date();
const current = new Date(myProps.countDown);

/*counter.year = Math.floor(current/(1000*60*60*24*30*12));
  counter.month = Math.floor(((current/(1000*60*60*24*30*12))-counter.year)*12);
  counter.day = Math.floor((((current/(1000*60*60*24*30*12))-counter.year)-counter.month)*30);
  counter.hour = Math.floor(((((current/(1000*60*60*24*30*12))-counter.year)*12)*30)*24);
  counter.minute = Math.floor(((((current/(1000*60*60*24*30*12))-counter.year)*12)*30)*60);
  counter.second = Math.floor((((((current/(1000*60*60*24*30*12))-counter.year)*12)*30)*60)*60);*/



counter.year = current.getFullYear()-now.getFullYear();
counter.month =current.getMonth()-now.getMonth()

  console.log(counter);


}
</script>

<template>
  <div>
    <div class="flex flex-row justify-between items-center bg-pink-200">
      <div class="basis-1/3">
        <img :src="imagePathR" alt="Deal of the week">
      </div>
      <div>
<h1 class="basis-1/3 text-2xl text-center font-semibold rounded rounded-xl">
Hello Offer
</h1>
      </div>
      <div class="basis-1/3"><img :src="imagePathL" alt="Deal of the week"></div>
    </div>
  </div>
</template>

<style scoped>

</style>