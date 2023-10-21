<script setup>

</script>

<template>
<div>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between">
      <a href="#" class="text-white text-lg font-bold">Your Logo</a>
      <ul class="hidden lg:flex space-x-4">
        <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">About</a></li>
        <li class="group relative">
          <a href="#" class="text-white hover:text-gray-300">Services</a>
          <ul class="absolute hidden mt-2 space-y-2 bg-gray-800 text-white group-hover:block">
            <li><a href="#" class="block p-2">Service 1</a></li>
            <li><a href="#" class="block p-2">Service 2</a></li>
          </ul>
        </li>
        <li><a href="#" class="text-white hover:text-gray-300">Contact</a></li>
      </ul>
      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <button class="text-white">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>

</div>
</template>

<style scoped>

</style>