<script setup>
import {ref, defineProps, watchEffect, onMounted} from 'vue';
import {Icon} from '@iconify/vue';

const stars = ref([]);
const myProps = defineProps({
  itemId: String,
  ratings: Number,

});

onMounted(()=>{

  ratingsImage(myProps.ratings);

});

/*setTimeout(() => {
  watchEffect(() => {
    //console.log(ratingsImage(myProps.ratings));
    ratingsImage(myProps.ratings);

  });
}, 2000);*/

function ratingsImage(_ratings) {
  stars.value = [];
  if (_ratings >= 5) {
    _ratings = 5;
  }

//  const stars = [];
  for (let i = 0; i < 5; i++) {


    //console.log("Rating: " + _ratings);
    //console.log(_ratings+1-1);
    if (_ratings < 1 && _ratings > 0) {
      stars.value.push(_ratings);

    } else if (_ratings <= 0) {
      stars.value.push(0);
    } else {

      stars.value.push(1);

    }
    _ratings = _ratings - 1;

   // console.log("Stars: " + stars.value);
    //return stars;

  }

}


</script>

<template>
  <div class="flex min-w-min min-h-min items-center justify-center">


    <div class="relative overflow-hidden" v-for="star in stars">
      <Icon class="-top-0 -left-0 w-4 h-4 text-yellow-500 z-20" icon="bi:star"/>
      <span class="absolute -top-0 -left-0 w-4 h-4 z-30 overflow-hidden" :style="'width:'+star*100+'%'">
        <Icon class="absolute -top-0 -left-0  w-4 h-4 text-yellow-500" icon="bi:star-fill"/>

      </span>
    </div>




  </div>

</template>

<style scoped>

</style>