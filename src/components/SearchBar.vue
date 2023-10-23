<script setup>

import {Icon} from "@iconify/vue";
</script>

<template>
<div>
  <div class="flex items-center content-center justify-center w-full bg-gray-50">
    <div class="flex items-center content-center justify-center bg-gray-100 rounded-lg p-2 mx-2 shadow shadow-sm">
      <span class="mx-1"><icon icon="bi-search"/></span>
      <span class="mx-1"><input type="text" name="search" id="search"></span>
      <span><button class="bg-indigo-300 p-2 rounded-lg font-semibold">Search</button></span>
    </div>

  </div>
</div>
</template>

<style scoped>

</style>