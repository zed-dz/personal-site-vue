import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Sections/Home.vue'
import Skills from './components/Sections/Skills.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
      },
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
  ]
})