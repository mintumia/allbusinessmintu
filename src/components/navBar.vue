<script lang="ts">
import MintuIcon from "./mintuIcon.vue";
//import CatagoryCard from "./catagoryCard.vue";
import {Icon} from "@iconify/vue";


export default {
  name: "navBar",
  components: {Icon, MintuIcon},


}


</script>

<template>
  <div>

    <h1>Navbar</h1>
    <nav class="navbar">


      <div class="logo">
        <img alt="image" src="../assets/images/logo.webp" width="90" height="30">
      </div>


      <ul>


        <li>
          <router-link to="/"><span class="flex items-center"><icon icon="material-symbols:other-houses-rounded" class="mx-1"/>
                                                                    HOME</span></router-link>
        </li>
        <li class="hover:underline mx-2">
          <router-link to="/about"><span class="flex items-center"><icon icon="material-symbols:info" class="mx-1"/>ABOUT</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contact"><span class="flex items-center"><icon icon="fa-address-book" class="mx-1"/>CONTACT</span>
          </router-link>

          <ul>
            <li>
              <router-link to="/"><span class="flex items-center"><icon icon="material-symbols:other-houses-rounded"
                                                                        class="mx-1"/>HOME</span></router-link>
            </li>
            <li class="hover:underline mx-2">
              <router-link to="/about"><span class="flex items-center"><icon icon="material-symbols:info" class="mx-1"/>ABOUT</span>
              </router-link>
            </li>
            <li class="hover:underline mx-2">
              <router-link to="/contact"><span class="flex items-center"><icon icon="fa-address-book" class="mx-1"/>CONTACT</span>
              </router-link>
<!--              /*****************/-->
              <ul>
                <li>
                  <router-link to="/"><span class="flex items-center"><icon icon="material-symbols:other-houses-rounded"
                                                                            class="mx-1"/>HOME</span></router-link>
                </li>
                <li class="hover:underline mx-2">
                  <router-link to="/about"><span class="flex items-center"><icon icon="material-symbols:info" class="mx-1"/>ABOUT</span>
                  </router-link>
                </li>
                <li class="hover:underline mx-2">
                  <router-link to="/contact"><span class="flex items-center"><icon icon="fa-address-book" class="mx-1"/>CONTACT</span>
                  </router-link>
                </li>

              </ul>
<!--              /*******************end************/-->
            </li>

          </ul>

        </li>


      </ul>
    </nav>

  </div>
</template>

<style scoped>

</style>