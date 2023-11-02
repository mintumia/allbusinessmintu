<script setup>
import {ref,computed} from 'vue'
import {Icon} from "@iconify/vue";

const collapse = ref(false);
const dropdown = ref(false);

computed(()=>{
  if(dropdown===true){
    dropdown.value.className ="block";
  }

});




</script>

<template>
    <div>


    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <router-link to="/" href="#" class="flex items-center">
          <img src="../assets/images/logo.webp" class="h-8 mr-3" alt="App Logo"/>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Place Holder</span>
        </router-link>
        <button @click="collapse = !collapse" data-collapse-toggle="navbar-multi-level" type="button"
                class="inline-flex items-center p-2 sm:focus:mt-5 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-gray-300"
                aria-controls="navbar-multi-level" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div :class="collapse ?'block':'hidden'" class="w-full md:block md:w-auto" id="navbar-multi-level">
          <ul class="flex flex-col  md:space-x-8 font-medium p-4 md:p-0 mt-4 border border-gray-100 md:flex-row rounded-lg bg-gray-50 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li  class="block py-2 pl-3 pr-4 sm:border-b-2 sm:border-gray-400 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                 aria-current="page">
              <router-link to="/">
               <div class="flex items-center">
                <span> <icon icon="material-symbols:other-houses-rounded" class="mx-1"/></span>
                 <span class="self-center">Home</span>
               </div>
              </router-link>
            </li>
<!--            <li>
              <button id="dropdownNavbarLink" @mouseover="dropdown =!dropdown" data-dropdown-toggle="dropdownNavbar"
                      class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Dropdown
                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              &lt;!&ndash; Dropdown menu &ndash;&gt;
              <div  id="dropdownNavbar" :class="dropdown ?'block':'hidden'"
                   class="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown"
                            data-dropdown-placement="right-start" type="button"
                            class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dropdown
                      <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                    <div id="doubleDropdown"
                         class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                            downloads</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign
                    out</a>
                </div>
              </div>
            </li>-->

            <li  class="block py-2 pl-3 pr-4 sm:border-b-2 sm:border-gray-400 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                 aria-current="page">
              <router-link to="/about">
                <div class="flex items-center">
                  <span> <icon icon="material-symbols:info" class="mx-1"/></span>
                  <span class="self-center">About</span>
                </div>
              </router-link>
            </li>
            <li  class="block py-2 pl-3 pr-4 sm:border-b-2 sm:border-gray-400 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                 aria-current="page">
              <router-link to="/contact">
                <div class="flex items-center">
                  <span> <icon icon="fa-address-book" class="mx-1"/></span>
                  <span class="self-center">Contact</span>
                </div>
              </router-link>
            </li>
            <li  class="block py-2 pl-3 pr-4 sm:border-b-2 sm:border-gray-400 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                 aria-current="page">
              <router-link to="/login">
                <div class="flex items-center">
                  <span> <icon icon="bi:person-fill-lock" class="mx-1"/></span>
                  <span class="self-center">Login</span>
                </div>
              </router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>


  </div>
</template>

<style scoped>

</style>