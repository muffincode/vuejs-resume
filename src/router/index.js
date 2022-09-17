import Vue from 'vue'
import Router from 'vue-router'
import Preview from '../views/Preview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Preview',
        component: Preview
    }
  ]
})
