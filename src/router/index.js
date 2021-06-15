import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views

const Blogs = () => import('@/views/Blogs.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: 'blogs',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'blogs',
          name: 'Blogs',
          component: Blogs
        },
      ]
    },
  ]
}

