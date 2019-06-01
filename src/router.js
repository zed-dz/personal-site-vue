import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Sections/Home.vue'
import Skills from './components/Sections/Skills.vue'
import Experience from './components/Sections/Experience.vue'
import Portfolio from './components/Sections/Portfolio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
  ]
})