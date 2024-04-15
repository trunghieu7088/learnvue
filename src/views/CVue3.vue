<script setup>
//when using setup in script tag, don't need to return anything
import { ref, computed, onMounted } from 'vue'
import CompVue3 from '../components/CompVue3.vue'

function showAlert()
{
    alert('wooo !');
}

//lifecycle hook onmounted
onMounted(() => {
  console.log('mounted ok');
  
})
</script>
<template>
    <h3>Standard Code Vue 3</h3>
    <button @click="showAlert" class="btn btn-danger">Show Alert</button>
    <CompVue3></CompVue3>
</template>