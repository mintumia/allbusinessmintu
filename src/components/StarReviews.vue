<script setup>
import {ref, defineProps,watchEffect} from 'vue';
import {Icon} from '@iconify/vue';


const myProps = defineProps({
  itemId:String,
  ratings: Number,

});

setTimeout(()=>{
  watchEffect(()=>{
    console.log("Hello");
  });
},2000);

function ratingsImage(_ratings){
  if(_ratings>=5){
    _ratings=5;
  }

  const stars = [];
  for(let i=0;i<5;i++){


    console.log("Rating: "+_ratings);
    //console.log(_ratings+1-1);
    if(_ratings<1 && _ratings >0){
      stars.push(_ratings);

    }else if(_ratings <=0){
      stars.push(0);
    }
    else {

      stars.push(1);

    }
    _ratings=_ratings-1;

    console.log("Stars: "+stars);
return stars;

  }

}



</script>

<template>
<div class="flex items-center w-full max-h-3">
  <div class="relative mx-1">
    <Icon class="w-full h-full text-yellow-500" icon="bi:star-fill"/>
    <span class="absolute -top-0 -left-0 w-full h-full bg-indigo-600 opacity-25 overflow-hidden" style="width: 45%"></span>
  </div>
  <div class="relative mx-1">
    <Icon class="w-full h-full text-yellow-500" icon="bi:star-fill"/>
    <span class="absolute -top-0 -left-0 w-full h-full bg-indigo-600 opacity-25 overflow-hidden" style="width: 45%"></span>
  </div>
  <div class="relative mx-1">
    <Icon class="w-full h-full text-yellow-500" icon="bi:star-fill"/>
    <span class="absolute -top-0 -left-0 w-full h-full bg-indigo-600 opacity-25 overflow-hidden" style="width: 45%"></span>
  </div>
  <div class="relative mx-1">
    <Icon class="w-full h-full text-yellow-500" icon="bi:star-fill"/>
    <span class="absolute -top-0 -left-0 w-full h-full bg-indigo-600 opacity-25 overflow-hidden" style="width: 45%"></span>
  </div>
  <div class="relative mx-1">
    <Icon class="w-full h-full text-yellow-500" icon="bi:star-fill"/>
    <span class="absolute -top-0 -left-0 w-full h-full bg-indigo-600 opacity-25 overflow-hidden" style="width: 45%"></span>
  </div>


</div>

</template>

<style scoped>

</style>