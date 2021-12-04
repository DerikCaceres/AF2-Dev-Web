import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/carros',
    name: 'Carros',
    component: () => import( '../views/Carros.vue')
  },
  {
    path: '/conta',
    name: 'Conta',
    
    component: () => import( '../views/Conta.vue')
  },
  {
    path: '/meuscarros',
    name: 'Meuscarros',
    
    component: () => import( '../views/Meuscarros.vue')
  },
  {
    path: '/locais',
    name: 'Locais',
    
    component: () => import( '../views/Locais.vue')
  },
  {
    path: '/apicarros',
    name: 'Api',
    
    component: () => import( '../views/Apicarros.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
