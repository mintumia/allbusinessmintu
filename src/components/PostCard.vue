<script setup>
import {ref,defineProps} from 'vue';


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
  <div class="w-[320px] min-h-[630px] m-3 p-2 rounded-lg shadow-lg border-2 bg-white">
    <router-link to="/">
      <div>
        <div class="bg-red-600 text-xl text-white text-center">
          <h1>{{postTitle}}</h1>
        </div>
        <div class="flex content-center justify-center p-2 mx-auto">
          <!--            <img :src="imagePath" :alt="postTitle">-->
          <img :src="imagePath" :alt="postTitle">
        </div>
        <div class="relative p-2 text-center">
          <p>
            {{countChar(250)}} <button v-if="isOver" class="bg-blue-300 rounded-md shadow-lg border-2 border-gray-500 p-1" @click="()=>showFull = !showFull"><span v-if="showFull===false">Read More</span><span v-if="showFull===true">Read Less</span></button>
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>



