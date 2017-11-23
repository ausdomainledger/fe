import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      props: (route) => ({
        q: route.query.q
      })
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
