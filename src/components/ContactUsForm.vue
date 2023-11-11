<script setup>
import {ref} from "vue";
import {Field,validate} from "vee-validate";


const contactForm = ref({
  fName:"",
  email:"",
  message:"",
});

function onSubmit() {
  
}


function formHandler(){

  console.log("Name : "+contactForm.value.fName);
  console.log("Email : "+contactForm.value.email);
  console.log("Name : "+contactForm.value.message);

}

</script>

<template>
<div>
  <div class="flex flex-col md:flex-row items-center content-center p-3">

    <div class="md:basis-1/2 mx-3 my-6 p-3">
      <img src="../assets/images/Test.webp" alt="Contact Us Image">
    </div>

    <div class="md:basis-1/2 mx-3 my-6 p-3">
      <h1 class="text-center text-2xl font-semibold">Send Us a Message</h1>
      <Form @submit="onSubmit" >

        <div>
          <label for="full_name">Full Name :</label>
          <input  v-model.lazy="contactForm.fName" type="text" name="full_name" id="full_name" />
        </div>
        <div>
          <label for="email">Email :</label>
          <input type="email" v-model.lazy="contactForm.email" name="email" id="email">
        </div>
        <div>
          <label for="message">Message :</label>
          <textarea v-model.lazy="contactForm.message" name="message" id="message" cols="50" rows="3"></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>


      </Form>

    </div>



  </div>
  <div>
  <h1>name : {{contactForm.fName}}</h1>
  <h1>Email : {{contactForm.email}}</h1>
  <h1>Message : {{contactForm.message}}</h1>
</div>
</div>
</template>

<style scoped>

</style>