<script setup lang="js">
import {ref} from 'vue';
import { RouterView } from 'vue-router';
import FooterItems from "@/components/footerItems.vue";
import HeaderItems from "@/components/headerItems.vue";
import NavBar from "@/components/navBar.vue";
import NewNavBar from "@/components/NewNavBar.vue";
import NewNavBar02 from "@/components/NewNavBar02.vue";
import Testing from "@/components/testing.vue";
/*import PlaceHolderImage from "@/components/images/placeHolderImage.vue";
import PlaceHolderImage01 from "@/components/images/placeHolderImage01.vue";
import PlaceHolderImage02 from "@/components/images/placeHolderImage02.vue";*/
const testing = ref(null);

</script>

<template>
  <div class="mx-auto">

    <new-nav-bar02/>

    <header-items/>
   <main>

     <router-view v-slot="{ Component }">
       <transition>
         <component :is="Component" />
       </transition>
     </router-view>

<!--     <transition>
       <router-view/>
     </transition>-->

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