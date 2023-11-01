<script setup>
import {ref, defineProps} from 'vue';
import StarReviews from "@/components/StarReviews.vue";


const showFull = ref(false);
const isOver = ref(false);
const myProps = defineProps({
  postTitle: String,
  description: String,
  imagePath: String,
  price: Number,
  ratings: Number,

});

/*function ratingsImage(_ratings) {
  if (_ratings >= 5) {
    _ratings = 5;
  }

  const stars = [];
  for (let i = 0; i < 5; i++) {


    console.log("Rating: " + _ratings);
    //console.log(_ratings+1-1);
    if (_ratings < 1 && _ratings > 0) {
      stars.push(_ratings);

    } else if (_ratings <= 0) {
      stars.push(0);
    } else {

      stars.push(1);

    }
    _ratings = _ratings - 1;

    console.log("Stars: " + stars);


  }

}*/

function countChar(limit = 20) {
  if (myProps.description.length > limit && showFull.value === false) {
    //console.log("limit : "+limit);
    isOver.value = true;
    return myProps.description.slice(0, limit) + "...";
  } else {
    return myProps.description;
  }

}

</script>


<template>
  <div class="w-[250px] min-h-[400px] m-3 p-2 rounded-lg shadow-lg border-2 bg-white">

    <div>
      <div class="flex content-center justify-center p-2 mx-auto">
        <!--            <img :src="imagePath" :alt="postTitle">-->
        <img :src="imagePath" :alt="postTitle">
      </div>
      <div class="bg-red-600 text-xl text-white text-center">
        <h1>{{ postTitle }}</h1>
      </div>
      <div class="flex items-center justify-between p-1">
        <span class="m-2 text-2xl font-semibold">${{ price }}</span>
        <div class="flex items-center m-1 text-sm">{{"Rating :"}}<span class="ms-2"><star-reviews :ratings=ratings /></span></div>
        <!--          Start Reviews-->


      </div>
      <div class="text-center text-xl font-semibold">
        <button
                class="text-green-500 bg-green-100 border-2 border-gray-500 rounded-full p-3 w-full hover:bg-green-500 hover:text-white active:bg-green-700">
          Add to Cart
        </button>
      </div>
      <div class="relative p-2 text-center">
        <p>
          {{ countChar(50) }}
          <button v-if="isOver" class="bg-blue-300 rounded-md shadow-lg border-2 border-gray-500 p-1"
                  @click="()=>showFull = !showFull"><span v-if="showFull===false">Read More</span><span
              v-if="showFull===true">Read Less</span></button>
        </p>
      </div>
    </div>
  </div>
</template>



