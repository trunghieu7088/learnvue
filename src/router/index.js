import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import DashboardView from '../views/DashboardView.vue'
import BookView from '../views/BookView.vue'
import GetParamView from '../views/GetParamView.vue'
import FetchApiView from '../views/FetchApiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta:{
          title: "User List",
      },
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta:{
        title: "Dashboard",
    },
    },

    {
      path: '/book',
      name: 'book',
      component: BookView,
      meta:{
          title: "Book View",
      },
    },

    {
      path: '/getparam/:name',
      name: 'getparam',
      component: GetParamView,
      params: true,
      meta:{
          title: "Get param title",
      },
    },

    {
      path: '/fetchapi',
      name: 'fetchapi',
      component: FetchApiView,
      params: true,
      meta:{
          title: "Fetch API",
      },
    },
    
    
  ]
})

router.beforeEach((to, from, next) => {
  // You have access to the route here so you could dynamically get the variable? to.params? (Sorry for editing this post as didn't see the full question!)
 
  document.title = to.meta.title ? to.meta.title : "Some Default Title"
 
  // Edit 2 it seems params contains the thing you need so you could detect if to.meta.title is a thing and dynamically change it `Profile - (${to.params.userId})`
  next() // You must call next!
 })

export default router
