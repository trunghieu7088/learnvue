<script setup>
import { ref, computed } from 'vue'
import Vue3Comp from '../components/Vue3Comp.vue'

const mycountNum=ref(0);

const newtext=ref('texter');

const showReadable=ref(false);

const mytestnum=ref(14);

function showmycountNum()
{
    mycountNum.value=31;
    alert(mycountNum.value);
}

function updateText(message)
{
    newtext.value='updated successfully';
}

function updateShowReadable()
{
    showReadable.value=true;
}

</script>

<template>
    <Vue3Comp title="hello" :likes="mytestnum"/>
    <button @click="showmycountNum">Test btn</button>
    <input type="input" v-model="newtext">
    <p>{{ newtext }} va day la mycountnum {{ mycountNum }}</p>
    <button @click="updateText" class="btn btn-success">Update Text programmatically</button>

    <div class="superclass">
        <p v-if="showReadable == true">Dung roi ne</p>
        <button @click="updateShowReadable" class="btn btn-info">Show Text</button>
    </div>
</template>

<style>
.superclass
{
    margin-top:50px;
}
</style>