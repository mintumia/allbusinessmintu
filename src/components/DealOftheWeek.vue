<script setup>
import {ref, reactive, watchEffect, watchPostEffect, computed} from 'vue';

const distance = ref(0);
const counter = reactive({

  year: 0,
  month: 0,
  day: 0,
  hour: 0,
  minute: 0,
  second: 0,

});

//const imagePath = ref("");
const myProps = defineProps({
  imagePathR: String,
  imagePathL: String,
  countDown: String,
});

/*watchPostEffect(()=>{
  timeCounter();
});*/

/*
computed(()=>{

  setTimeout(() => {
    timeCounter();

  }, 3000);
});
*/
watchEffect( ()=> {
distance.value = new Date(myProps.countDown)-new Date();

    timeCounter();


});

/*setTimeout(()=>{
  watchEffect(async ()=> {

    await timeCounter();
  })

},1000);*/

/*setTimeout(() => {
  timeCounter();

}, 3000);*/

/*computed(()=>{
  //distance.value = new Date(myProps.countDown)-new Date();
});*/


function timeCounter() {
 // const now = new Date();

if( distance.value>0){
  counter.year = Math.floor( distance.value/(1000*60*60*24*30*12));
  counter.month = Math.floor((( distance.value/(1000*60*60*24*30*12))-counter.year)*12);
  counter.day = Math.floor(( distance.value/((1000*60*60*24*30*12)-counter.year)-counter.month)*30);
  counter.hour = Math.floor(((( distance.value/((1000*60*60*24*30*12)-counter.year)-counter.month)*30)-counter.day)*24);
  counter.minute = Math.floor(((((( distance.value/((1000*60*60*24*30*12)-counter.year)-counter.month)*30)-counter.day)*24)-counter.hour)*60);
  counter.second = Math.floor(((((((( distance.value/((1000*60*60*24*30*12)-counter.year)-counter.month)*30)-counter.day)*24)-counter.hour)*60)-counter.minute)*60);

}




 // console.log(counter);


}
</script>

<template>
  <div>
    <div class="flex flex-row justify-between items-center bg-pink-200">
      <div class="basis-1/3">
        <img :src="imagePathR" alt="Deal of the week">
      </div>
      <div class="basis-1/3 rounded rounded-xl p-3">
        <h1 class="text-2xl text-center font-semibold ">
          Hello Offer
        </h1>
        <h1 class="text-xl font-semibold text-center">
          Year : {{counter.year}},
          Month : {{counter.month}},
          Day : {{counter.day}},
          Hour : {{counter.hour}},
          Minute : {{counter.minute}},
          Second : {{counter.second}},
        </h1>
      </div>
      <div class="basis-1/3"><img :src="imagePathL" alt="Deal of the week"></div>
    </div>
  </div>
</template>

<style scoped>

</style>