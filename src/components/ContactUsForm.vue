<script setup>
import {onMounted, ref} from "vue";
import {useForm} from "vee-validate";
import * as yup from 'yup';
import {useCommonStore} from '../stores/common';
//import {useMouse} from '@vueuse/core';


const mStore = useCommonStore();

//const {left,top}=ref(0);



const schema = yup.object({
  email:yup.string().required().email().max(50).min(6),
  full_name:yup.string().required().min(3).max(80),
  message:yup.string().required().min(3).max(2000),
});
const {values,errors,defineInputBinds} = useForm({
  validationSchema:schema,

    });
const full_name = defineInputBinds("full_name",{validateOnInput:true,});
const email = defineInputBinds("email",{validateOnInput:true,});
const message = defineInputBinds("message",{validateOnInput:true,});

/*const contactForm = ref({
  fName:"",
  email:"",
  message:"",
});*/

function onSubmit() {





}
onMounted(()=>{
  setTimeout(()=>{
    mStore.serverName = "Hellos";
  },5000);
});

function formHandler(){

  /*console.log("Name : "+contactForm.value.fName);
  console.log("Email : "+contactForm.value.email);
  console.log("Name : "+contactForm.value.message);*/

}

</script>

<template>
<div>
  <div class="flex flex-col md:flex-row items-center content-center p-3">

    <div class="md:basis-1/2 mx-3 my-6 p-3">
      <img src="/src/assets/images/test.webp" alt="Contact Us Image">
    </div>

    <div class="md:basis-1/2 mx-3 my-6 p-3">
      <h1 class="text-center text-2xl font-semibold">Send Us a Message</h1>
      <form @submit="onSubmit" >

        <div>
          <label for="full_name">Full Name :</label>
          <input type="text" v-bind="full_name" name="full_name" id="full_name" />
          <p class="bg-red-600 text-white m-2 p-2" v-if="errors.full_name">{{errors.full_name}}</p>
        </div>
        <div>
          <label for="email">Email :</label>
          <input type="email" v-bind="email" name="email" id="email">
          <p class="bg-red-600 text-white m-2 p-2" v-if="errors.email">{{errors.email}}</p>
        </div>
        <div>
          <label for="message">Message :</label>
          <p class="bg-red-600 text-white m-2 p-2" v-if="errors.message" >{{errors.message}}</p>
          <textarea  name="message" id="message" cols="50" rows="3" v-bind="message"></textarea>

        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>


      </form>

    </div>



  </div>
  <div>






<!--  <h1>Email : {{contactForm.email}}</h1>
  <h1>Message : {{contactForm.message}}</h1>-->
</div>
</div>
</template>

<style scoped>

</style>