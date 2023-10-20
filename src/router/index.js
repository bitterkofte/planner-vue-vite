import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NewProjectView from '../views/NewProjectView.vue'
import EditProjectView from '../views/EditProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new-project',
    name: 'newProject',
    component: NewProjectView
  },
  {
    path: '/edit-project/:id',
    name: 'editProject',
    component: EditProjectView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
