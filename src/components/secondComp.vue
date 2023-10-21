<script setup lang="ts">
import {useTestStore} from "~/store/test";
const testStore = useTestStore();


</script>

<template>
<h1>test : {{testStore.test.count}}</h1>
<h1>Name : {{testStore.test.name}}</h1>
</template>

<style scoped>

</style>