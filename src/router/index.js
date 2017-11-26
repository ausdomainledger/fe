import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Download from '@/components/Download'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

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
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
})
