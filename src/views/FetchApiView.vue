<script>
import FetchApi from '../components/FetchApi.vue'


export default {
    data()
    {
        return {
            students: null,
            error: null,
        }
    },
    methods:
    {   
        fetchStudents()
        {
            //fetch('http://127.0.0.1:8000/api/students/')
            fetch('http://mylar.et/api/students')
                .then(response => response.json())
                .then(data => {
            this.students = data.student_list.data;
            console.log(data.student_list.data);                       
            })
            .catch(error => {
            this.error = 'An error occurred while fetching the data.';
            console.error(error);
            });
        }
    },
    mounted() 
    {
       this.fetchStudents();
    },   
    components: {
        FetchApi
    }
}
</script>

<template>
    
    
  <div v-if="students">
    <FetchApi v-for="student in students" :name="student.name" :class="student.class"/>
       
    </div>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
</template>

