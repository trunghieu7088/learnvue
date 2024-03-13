<script>
import Book from '../components/Book.vue'

const books = [
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
];
const mycount=0;
const testclass='';
export default {
    data()
    {
        return {
            books: books,
            mycountvar: mycount,
            bgclass: testclass,
            customStyle: '',
        }
    },
    methods:
    {   
        increaseCount()
        {
            this.mycountvar++
            console.log(this.mycountvar)
            this.$refs.input.value=this.mycountvar
        },
        changeBg()
        {
            this.bgclass=this.$refs.input.value
            console.log(this.bgclass)
        },
        changeStylediv()
        {
            this.customStyle=this.$refs.input.value
            console.log(typeof(this.customStyle))
        },
    },
    mounted() 
    {
        console.log('mount oi nhe');
        this.$refs.input.focus()
    },
    created()
    {
        console.log('create oi nhe');
    },
    components: {
        Book
    }
}
</script>

<template>
    <div class="book-item-wrapper">
        <Book  v-for="book in books" :title="book.title" :order="book.id"/>
        <Book title="static value" :order="4"/>
        <button @click="increaseCount" class="btn btn-info">{{ mycountvar }}</button>        
        <input ref="input" @change="changeStylediv" placeholder="edit">

        <button @click="changeBg" class="btn btn-primary">Change BG</button> 
    </div>

    <div class="testdiv" :class="bgclass" :style="customStyle">

    </div>
   
</template>

<style>
.book-item-wrapper
{
    display:flex;
    flex-direction: column;
}
.testdiv
{
    height:50px;
    width:100%;     
}
.bg1
{
    background-color: yellow;
}
.bg2
{
    background-color: brown;
}
</style>
