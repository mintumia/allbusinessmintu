<script setup>
import {ref} from 'vue'
import {jsPDF} from 'jspdf';

//import html2canvas from 'html2canvas';

const test = ref(null);


async function generatePdf() {


  const pdf = new jsPDF('p', 'pt', 'A4');
  const oldwidth = document.body.style.width;
  let width = 600;
  document.body.style.width = width + "px";


  await pdf.html(document.getElementById('test10'), {
    callback: function (pdf) {
      pdf.save("example.pdf");
      document.body.style.width = oldwidth;
    }
  });


}

</script>

<template>
  <div>
    <div ref="test" id="test10" class="p-3 max-w-[600px]">
      <h1 class="text-center font-semibold m-2">Test PDF File</h1>
      <div class="text-center m-1"><img src="/src/assets/images/Test.webp" alt="image"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum.</p>
      <a class="btn-blue mx-auto m-2" href="http://www.google.com">Google</a>
      <h1 class="text-center font-semibold m-2">Test PDF File</h1>
      <div class="text-center m-1"><img src="/src/assets/images/Test.webp" alt="image"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum.</p>
      <a class="btn-blue mx-auto m-2" href="http://www.google.com">Google</a>
      <h1 class="text-center font-semibold m-2">Test PDF File</h1>
      <div class="text-center m-1"><img src="/src/assets/images/Test.webp" alt="image"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum.</p>
      <a class="btn-blue mx-auto m-2" href="http://www.google.com">Google</a>
    </div>
    <button id="ignore" @click="generatePdf" class="btn-blue">Click Me</button>
  </div>
</template>

<style scoped>

</style>