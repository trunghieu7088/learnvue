<script setup>

import { useCounterStore } from '../stores/counter'
import { ref, computed, watch } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')


const books = [
  { id: 1, title: 'My journey with Vue', status:'active' },
  { id: 2, title: 'Blogging with Vue', status:'disabled' },
  { id: 3, title: 'Why Vue is so fun', status:'active' }
];

const book_list=ref(books)
const question = ref('')

watch(question, (newQuestion, oldQuestion)=>{
    console.log(`new question ${newQuestion}`);
    console.log(`old question ${oldQuestion}`);
})

const fullName = computed(()=>{
    return firstName.value + ' ' + lastName.value
})

//methods
function checkstatusbook(status_book)
{
    if(status_book=='active')
        return 'published'
    else
        return 'not yet'
}



const counter2 = useCounterStore()
function decreaseCount()
{
    counter2.count--;
}

function resetCount()
{
    counter2.count=33;
}

function updateFullname()
{
    firstName.value='thay doi';
}

function addmoreItem()
{
    book_list.value.push({id:4,title:'full game',status: 'published'});   
}
</script>
<template>
    <h3>Use Pinia 2</h3>
    <p>counter 2: {{ counter2.count }}</p>
    <button class="btn btn-warning" @click="decreaseCount">Decrease count</button>
    <button class="btn btn-info" @click="resetCount">Set count</button>
    <button class="btn btn-danger" @click="updateFullname">Update full name</button>
     <p>{{ fullName }}</p>
     <input type="text" v-model="question">
     <p>Question ne: {{ question }}</p>

    <div class="custom-class">
        <p v-for="book_item in book_list">
            <span class="text-danger">{{ book_item.id }}</span>
            <span class="text-info">{{ book_item.title }}</span>
            <span class="text-primary">{{ checkstatusbook(book_item.status) }}</span>
            <span>{{ book_item.ispublish }}</span>
        </p>
    </div>
    <button class="btn btn-warning" @click="addmoreItem">Update books</button>
</template>

<style>
.custom-class
{
    margin-top:30px;
    display:flex;
    flex-direction: column;
}
</style>