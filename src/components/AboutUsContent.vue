<script setup>
//import {ref}from 'vue';

const myProps = defineProps({
  companyName:String,
});

</script>

<template>
<div class="p-3">
  <h1 class="text-3xl font-semibold m-4 ">About Us Page</h1>

  <div class="text-left mx-auto p-3 bg-indigo-200 border-2 border-gray-500 shadow-sm rounded-2xl child-m-3">
    <p>
      Welcome to {{ myProps.companyName }}, where shopping meets convenience and style! Our online marketplace is dedicated to bringing you a curated selection of top-quality products that cater to your every need.
    </p>
    <p>
      At {{ myProps.companyName }}, we believe that shopping should be an enjoyable experience, and that's why we've created a platform that seamlessly blends innovation, user-friendly design, and a passion for customer satisfaction. Whether you're looking for the latest fashion trends, cutting-edge electronics, or home essentials, we've got you covered.
    </p>
    <p>
      What sets us apart is our commitment to quality. Every product in our inventory undergoes rigorous testing to ensure it meets our high standards. We collaborate with trusted brands and vendors to bring you items that not only meet but exceed your expectations. Your satisfaction is our priority, and we strive to make your online shopping experience with us seamless and secure.
    </p>
    <p>
      As a team of dedicated professionals, we are constantly exploring new trends and technologies to enhance your shopping journey. Our customer support team is always ready to assist you, ensuring that any questions or concerns are addressed promptly. We value your trust, and we work tirelessly to maintain the highest standards of integrity and transparency in every transaction.
    </p>
    <p>
      Join the {{ myProps.companyName }} community and experience the future of online shopping. Thank you for choosing us – where your satisfaction is our success. Happy shopping!


    </p>
  </div>

</div>
</template>

<style scoped>

</style>