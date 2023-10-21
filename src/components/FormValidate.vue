<script setup>
import { Field, Form } from 'vee-validate';

// Validation, or use `yup` or `zod`
function required(value) {
  return value ? true : 'This field is required';
}

// Submit handler
function onSubmit(values) {
  // Submit to API
  console.log(values);
}
</script>

<template>
  <Form v-slot="{ errors }" @submit="onSubmit">
    <Field type="text" name="field" :rules="required" />

    <span class="text-red-500">{{ errors.field }}</span>

    <button class="btn-blue">Submit</button>
  </Form>
</template>