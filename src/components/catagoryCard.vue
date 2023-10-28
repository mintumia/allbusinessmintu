<script setup>
import {ref,defineProps} from 'vue';

const isVisible =ref(false);
const showFull = ref(false);
const isOver = ref(false);
const myProps = defineProps({
  postTitle:String,
  description:String,
  imagePath:String,

});

function  countChar(limit = 20){
  if(myProps.description.length >limit && showFull.value===false){
    //console.log("limit : "+limit);
    isOver.value = true;
    return myProps.description.slice(0,limit)+"...";
  }else {
    return myProps.description;
  }

}

</script>


<template>
  <div class="relative w-[320px] min-h-[230px] m-3 p-2 rounded-lg shadow-lg border-2 bg-white z-10 ">

    <router-link to="/about" @mouseover="isVisible = true" @mouseout="isVisible = false" >

      <div>
        <span :class='isVisible ? "block":"hidden"' class="absolute opacity-25 -left-0 -top-0 min-w-full min-h-full bg-gray-300 z-20"></span>
        <div class="flex content-center justify-center p-2 mx-auto">
          <!--            <img :src="imagePath" :alt="postTitle">-->
          <img :src="imagePath" :alt="postTitle">
        </div>
        <div class="text-2xl font-medium text-black text-center">
          <h1>{{postTitle}}</h1>
        </div>
        <div class="relative p-2 text-center">
          <p>
            {{countChar(100)}} <button v-if="isOver" class="bg-blue-300 rounded-md shadow-lg border-2 border-gray-500 p-1" @click="()=>showFull = !showFull"><span v-if="showFull===false">Read More</span><span v-if="showFull===true">Read Less</span></button>
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>



