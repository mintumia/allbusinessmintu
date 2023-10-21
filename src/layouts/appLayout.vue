<script setup lang="js">
import { RouterView } from 'vue-router';
import FooterItems from "@/components/footerItems.vue";
import HeaderItems from "@/components/headerItems.vue";
import NavBar from "@/components/navBar.vue";
import NewNavBar from "@/components/NewNavBar.vue";
import NewNavBar02 from "@/components/NewNavBar02.vue";
/*import PlaceHolderImage from "@/components/images/placeHolderImage.vue";
import PlaceHolderImage01 from "@/components/images/placeHolderImage01.vue";
import PlaceHolderImage02 from "@/components/images/placeHolderImage02.vue";*/
</script>

<template>
  <div class="mx-auto">

    <new-nav-bar02/>

    <header-items/>
   <main>
     <transition>
       <router-view/>
     </transition>

   </main>

    <footer-items/>

  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  //transition: opacity 0.5s ease-in-out;
  transition: all 0.4s ease-in-out;

}

.v-enter-from,
.v-leave-to {
  filter: blur(1rem);
}


</style>