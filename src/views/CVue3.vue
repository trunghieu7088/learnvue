<script setup>
//when using setup in script tag, don't need to return anything
import { ref, computed, onMounted } from 'vue'
import CompVue3 from '../components/CompVue3.vue'

 //const menu_open_status=ref([false, false, false])
const custom_class=ref('custom-class')
 const menu_item_identifier_open=ref(null)
function openMenu(menu_item)
{
 /* if(menu_open_status.value[index]==true)
  {
    menu_open_status.value[index]=false;
  }
  else
  {
    menu_open_status.value[index]=true;
  } */
 
  /* if(menu_item === menu_item_identifier_open.value)
  {
    menu_item_identifier_open.value=false;
  }
  else
  {
    menu_item_identifier_open.value=menu_item
  }
   */
  
  //menu_open_status.value='menu-open'
}

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
    <p :class="custom_class, {'menu-open' : menu_item_identifier_open==='fee-management'}"></p>
</template>