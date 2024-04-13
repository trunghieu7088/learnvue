<script>
import FetchApi from '../components/FetchApi.vue'
import axios from "axios"

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'bomeo@gmail.com',password:'Gcnet123456' })
};

export default {
    data()
    {

        return {
            students: null,
            error: null,
            token: null,
            requestedInfo: requestOptions,
            loginReturn: null,
            testAxios: null,
            testlogin: null,
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
        },
        getAccessToken()
        {
            fetch('http://mylar.et/api/generatetoken')
                .then(response => response.json())
                .then(data => {
                    this.token=data;
                console.log(data);                       
            })
            .catch(error => {
            this.error = 'cannot get access token';
            console.error(error);
            });
        },
        authLogin()
        {
            fetch('http://mylar.et/api/authlogin', this.requestedInfo)
            .then(response => response.json())
            .then(data => {this.loginReturn = data; console.log(data);})
            .catch(error => {
            this.error = 'something wrong';
            console.error(error);
            });
        },
        customcallAxios()
        {
            axios.get('http://mylar.et/api/students')
            .then((response) =>{
                    console.log(response);
            });
        },
        customcallLogin()
        {
            //axios.get('http://mylar.et/sanctum/csrf-cookie')
            axios.get('http://localhost:8000/sanctum/csrf-cookie')
            .then((response) =>{
                    console.log(response);
           
            });

          //  axios.post('http://mylar.et/api/authlogin', {
            axios.post('http://localhost:8000/api/authlogin', {
                email: 'bomeo@gmail.com',
                password: 'Gcnet123456',
                  }).then((response) =>{
                    console.log(response);
                    });

            
           
           
        },
        testAPI()
        {
          /*  axios.get('http://mylar.et/api/testauth',{
                headers: {
                            'Authorization': 'Bearer 48|0m0zwuACSL37eSzrG1RWErOcLNzS1DB7rqsIqbUN3d6f64f3'
                        }
            })
            .then((response) =>{
                    console.log(response);
            }); */

            axios.get('http://localhost:8000/api/testauth')
            .then((response) =>{
                    console.log(response);
            });
           
        },
    },
    mounted() 
    {
       //this.fetchStudents();
       //this.getAccessToken();
       //this.authLogin();
       //this.customcallAxios();
       this.customcallLogin();
       //this.testAPI();

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
    <div>
        <button @click="testAPI">Test API</button>
    </div>
</template>

