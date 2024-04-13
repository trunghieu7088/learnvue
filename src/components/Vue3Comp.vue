<script setup>

import { ref } from 'vue'
defineProps({
  title: String,
  likes: Number
})
const count = ref(0)
</script>

<template>
    <h3>Vue 3 component</h3>
    <button @click="count++">{{ count }}</button>
    <h3>{{ title }}</h3>
    <p>{{ likes }}</p>
</template>