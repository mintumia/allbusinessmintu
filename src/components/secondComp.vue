<script setup>
//import {useTestStore} from '';
import {useCounterStore} from '@/stores/counter';

const testStore = useCounterStore();


</script>

<template>
<h1>test : {{testStore.test.count}}</h1>
<h1>Name : {{testStore.test.name}}</h1>
</template>

<style scoped>

</style>