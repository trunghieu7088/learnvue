<script>
import GetParam from '../components/GetParam.vue'
const route_param='';
export default 
{
    data()
    {
        return{
            testroute: '',
            searchtext:'',
        }
    },
    components: 
    {
        GetParam
    },   
    methods:
    {
        updateProp()
        {
            this.searchtext='hello cuoc doi';
        },
        redirectcustom()
        {
            this.$router.push('/book');
        }
    },
    mounted()
    {
        this.testroute=this.$route.params.name;
        console.log(this.$route.params.name);
        console.log( this.testroute);
    }
}
</script>
<template>
    <GetParam :name="testroute"/>
    <input v-model="searchtext" type="text">
    <button @click="updateProp" class="btn btn-danger">Update Text</button>
    <p>{{ searchtext }}</p>
    <button @click="redirectcustom" class="btn btn-info">Redirect</button>
</template>