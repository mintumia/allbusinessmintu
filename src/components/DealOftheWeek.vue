<script setup>
import {ref, reactive, watchEffect} from 'vue';
import {useCommonStore} from '@/stores/common';


const mystore = useCommonStore();
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
    <div class="flex flex-row justify-between items-center">
      <div class="basis-1/3">
        <img :src="imagePathR" alt="Deal of the week">
      </div>
      <div class="basis-1/3 rounded-xl p-3">
        <div class="items-center content-center justify-between mx-auto">
          <div class="content-center min-h-[80px]">
            <h1 class="text-2xl text-center font-semibold ">
              Hello Offer
            </h1>
          </div>
          <hr/>


          <table class="text-center mx-auto w-full">
            <tr class="p-2 bg-blue-100"><th>Year</th><th>Month</th><th>Day</th></tr>
            <tr class="sm:text-2xl lg:text-5xl font-semibold ">
              <td>{{ counter.year }}</td>
              <td>{{ counter.month }}</td>
              <td>{{ counter.day }}</td>
            </tr>
            <tr class="p-2 bg-blue-50"><th>Hours</th><th>Minutes</th><th>Seconds</th></tr>
            <tr class="sm:text-2xl lg:text-5xl font-semibold p-2">
              <td>{{ counter.hour }}</td>
              <td>{{ counter.minute }}</td>
              <td>{{ counter.second }}</td>
            </tr>
          </table>
        </div>

      </div>
      <div class="basis-1/3"><img :src="imagePathL" alt="Deal of the week"></div>
    </div>
  </div>
</template>

<style scoped>

</style>