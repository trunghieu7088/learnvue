<template>
    <h1>User List {{ usermsg }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }} {{ item.id }} {{ item.username }}</li>
    </ul>
</template>
<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
export default {
  props: {
    usermsg: String
  },
  setup() {
    const items = ref([]);

    // Fetch data from API when the component is mounted
    onMounted(async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        items.value = response.data;
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    return {
      items
    };
  }
}
</script>