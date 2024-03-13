<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import SidebarBlock from './components/SidebarBlock.vue'
import CustomHeader from './components/CustomHeader.vue'
import { ref } from 'vue'

</script>

<template>
    <div id="wrapper">
        <SidebarBlock/>

        <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
                <CustomHeader />

                  <!-- Begin Page Content -->
               <div class="container-fluid">
                    <!-- Page Heading -->
                    <RouterView />
               

                </div>
                <!-- /.container-fluid -->

            </div>

        </div>

    </div>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
</style>