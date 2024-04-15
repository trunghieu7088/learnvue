<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: String,
  likes: Number
})

const fulltile = computed(()=>{
    return props.title + ' hello'
})

function showAlertTitle()
{
  alert(props.title);
}
</script>

<template>
    <h3>Vue 3 component</h3>
    
    <h3>{{ title }}</h3>
    <p>{{ likes }}</p>
    <p>{{ fulltile }}</p>
    <button @click="showAlertTitle" class="btn btn-success">Show Alert</button>
</template>