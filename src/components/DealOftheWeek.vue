<script setup>
import {ref, reactive} from 'vue';
import {times} from "lodash/util";

//const imagePath = ref("");
const myProps = defineProps({
  props:Object ,
});

setTimeout(() => {
  timeCounter();

}, 3000);


function timeCounter() {

  //myProps.countDown = new Date();

  console.log(myProps.countDown.value);


}
</script>

<template>
  <div>
    <div class="flex justify-between bg-pink-200">
      <div>
        <img :src="imagePathR" alt="Deal of the week">
      </div>
      <div>

      </div>
      <div><img :src="imagePathL" alt="Deal of the week"></div>
    </div>
  </div>
</template>

<style scoped>

</style>