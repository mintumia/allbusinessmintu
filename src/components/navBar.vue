<script lang="ts">
import MintuIcon from "./mintuIcon.vue";
//import CatagoryCard from "./catagoryCard.vue";
import {Icon} from "@iconify/vue";



export default {
  name: "navBar",
  components: {Icon,MintuIcon},


}


</script>

<template>
  <div>

    <h1>Navbar</h1>
    <nav class="sm:flex-wrap lg:flex flex-row z-30 bg-[#D64AD9] items-center justify-between">


       <div class="basis-1/4">
         <img alt="image" src="../assets/images/logo.webp" width="90" height="30">
       </div>


      <ul class="sm:basis-1 lg:basis-1/3 lg:flex items-center content-center justify-self-center p-2 text-white border-none">



        <li class="hover:underline mx-2">
          <router-link to="/"><span class="flex items-center"><icon icon="material-symbols:other-houses-rounded" class="mx-1"/>HOME</span></router-link>
        </li>
        <li class="hover:underline mx-2">
          <router-link to="/about"><span class="flex items-center"><icon icon="material-symbols:info" class="mx-1"/>ABOUT</span></router-link>
        </li>
        <li class="hover:underline mx-2">
          <router-link to="/contact"><span class="flex items-center"><icon icon="fa-address-book" class="mx-1"/>CONTACT</span></router-link>
        </li>




      </ul>
    </nav>

  </div>
</template>

<style scoped>

</style>