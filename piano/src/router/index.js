import Vue from 'vue'
import Router from 'vue-router'
import Piano from '@/components/Piano'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Piano',
      component: Piano
    }
  ]
})
