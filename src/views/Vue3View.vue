<script setup>
import { ref } from 'vue'
import Vue3Comp from '../components/Vue3Comp.vue'

const mycountNum=ref(0);

const newtext=ref('texter');

function showmycountNum()
{
    mycountNum.value=31;
    alert(mycountNum.value);
}

function updateText(message)
{
    newtext.value='updated successfully';
}

</script>

<template>
    <Vue3Comp title="hello" likes="14"/>
    <button @click="showmycountNum">Test btn</button>
    <input type="input" v-model="newtext">
    <p>{{ newtext }} va day la mycountnum {{ mycountNum }}</p>
    <button @click="updateText" class="btn btn-success">Update Text programmatically</button>
</template>