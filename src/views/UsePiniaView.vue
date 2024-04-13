<script setup>

import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()

</script>
<template>
    <h3>Use Pinia</h3>
    <p>Counter: {{ counter.count }}</p>
    <button class="btn btn-danger" @click="counter.increment">Increase count</button>
</template>