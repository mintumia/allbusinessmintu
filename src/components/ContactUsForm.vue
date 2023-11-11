<script setup>

</script>

<template>
<div>
  <div class="flex flex-col md:flex-row items-center content-center p-3">

    <div class="md:basis-1/2 mx-3 my-6 p-3">
      <img src="../assets/images/Test.webp" alt="Contact Us Image">
    </div>

    <div class="md:basis-1/2 mx-3 my-6 p-3">
      <h1 class="text-center text-2xl font-semibold">Send Us a Message</h1>
      <form action="" method="post">

        <div>
          <label for="full_name">Full Name :</label>
          <input type="text" name="full_name" id="full_name" >
        </div>
        <div>
          <label for="email">Email :</label>
          <input type="email" name="email" id="email">
        </div>
        <div>
          <label for="message">Message :</label>
          <textarea name="message" id="message" cols="50" rows="3"></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>


      </form>

    </div>
  </div>
</div>
</template>

<style scoped>

</style>