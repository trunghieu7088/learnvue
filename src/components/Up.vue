<script setup>
import { ref, computed  } from 'vue'
const props = defineProps({
    id: Number,
    first: String,
    last: String,
    fee: Number,
  })

const fullname=computed(()=>{
    return props.first+' '+props.last
})

const debt_month=computed(()=>{
    if(props.fee > 5000)
    return 'unpaid-month-hightlight'   
    else
    return ''
})

</script>
<template>
    <tr :class="debt_month">
        <th  scope="row">{{ id }}</th>
        <td>{{ first }}</td>
        <td>{{ last }}</td>
        <td>{{ fullname }}</td>
        <td>{{ fee }}</td>
        <td><button class="btn btn-info" @click="$emit('show-fullname',fullname)">Show Fullname</button></td>
    </tr>
</template>

<style>
.unpaid-month-hightlight
{
    color: #6e707e;
  background-color: #eaecf4;
  border-color: #e3e6f0;
}
</style>