<script setup lang="js">
import { RouterView } from 'vue-router';
import FooterItems from "@/components/footerItems.vue";
import HeaderItems from "@/components/headerItems.vue";
import NavBar from "@/components/navBar.vue";
/*import PlaceHolderImage from "@/components/images/placeHolderImage.vue";
import PlaceHolderImage01 from "@/components/images/placeHolderImage01.vue";
import PlaceHolderImage02 from "@/components/images/placeHolderImage02.vue";*/
</script>

<template>
  <div class="mx-auto">
    <nav-bar/>

    <header-items/>
   <main>
     <router-view/>
   </main>

    <footer-items/>

  </div>
</template>

<style>
/*.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(2rem);
}*/
</style>