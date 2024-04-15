<script setup>
import { ref, computed, onMounted   } from 'vue'
import Up from '../components/Up.vue'

const student_list=ref([
  { id: 1, first: 'Mark', last:'Otto',fee:1000 },
  { id: 2, first: 'Jacob', last:'Name',fee:5000 },
  { id: 3, first: 'Larry', last:'Kut', fee:6000 },
  { id: 4, first: 'Peter', last:'Bird', fee:7000 },
]);

onMounted(() => {
 console.log('mounted roi ne');
})

function showFullname(fullname)
{
    alert(fullname);
}

</script>
<template>
    <h1>Testing View</h1>    
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Full name</th>
            <th scope="col">Fee</th>
            <th scope="col">Action</th>
            </tr>            
        </thead>
        <tbody>
            <Up v-for="studentItem in student_list" @show-fullname="showFullname"  v-bind="studentItem"></Up>
        </tbody>
    </table>
</template>