import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/shou-shu',
    name: 'ShouShu',
    component: () => import('../components/dataforms/ShouShu.vue')
  },
  {
    path: '/nei-jing',
    name: 'NeiJing',
    component: () => import('../components/dataforms/NeiJing.vue')
  },
  {
    path: '/zong-he',
    name: 'ZongHe',
    component: () => import('../components/dataforms/ZongHe.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router