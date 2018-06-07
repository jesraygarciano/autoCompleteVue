import Vue from 'vue'
import Router from 'vue-router'
import Autocomplete from '@/components/Autocomplete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Autocomplete',
      component: Autocomplete
    }
  ]
})
