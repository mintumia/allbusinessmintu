<script setup>
import {ref, reactive, watchEffect} from 'vue';

const distance = ref(0);
const counter = reactive({

  year: 0,
  month: 0,
  day: 0,
  hour: 0,
  minute: 0,
  second: 0,
  now: 0,


});

//const imagePath = ref("");
const myProps = defineProps({
  imagePathR: String,
  imagePathL: String,
  countDown: String,
});

function randomCall() {
  distance.value = new Date(myProps.countDown) - new Date();
  timeCounter();
}

watchEffect(() => {

  distance.value;


  setTimeout(() => {

    randomCall();

  }, 200);

});


function timeCounter() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;

  if (distance.value > 0) {
    counter.year = Math.floor(distance.value / year);
    counter.month = Math.floor((distance.value - (year * counter.year)) / month);
    counter.day = Math.floor((distance.value - ((year * counter.year) + (counter.month * month))) / day);
    counter.hour = Math.floor((distance.value - ((year * counter.year) + (counter.month * month) + (counter.day * day))) / hour);
    counter.minute = Math.floor((distance.value - ((year * counter.year) + (counter.month * month) + (counter.day * day) + (counter.hour * hour))) / minute);
    counter.second = Math.floor((distance.value - ((year * counter.year) + (counter.month * month) + (counter.day * day) + (counter.hour * hour) + (counter.minute * minute))) / second);
    counter.now = Math.floor(distance.value / 1000);


  }


}
</script>

<template>
  <div>
    <div class="flex flex-row justify-between items-center bg-pink-200">
      <div class="basis-1/3">
        <img :src="imagePathR" alt="Deal of the week">
      </div>
      <div class="basis-1/3 rounded-xl p-3">
        <h1 class="text-2xl text-center font-semibold ">
          Hello Offer
        </h1>
        <h1 class="text-xl font-semibold text-center">
          Year : {{ counter.year }},
          Month : {{ counter.month }},
          Day : {{ counter.day }},
          Hour : {{ counter.hour }},
          Minute : {{ counter.minute }},
          Second : {{ counter.second }},
        </h1>
      </div>
      <div class="basis-1/3"><img :src="imagePathL" alt="Deal of the week"></div>
    </div>
  </div>
</template>

<style scoped>

</style>