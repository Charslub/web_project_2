import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },{
    path: '/home',
    component: Home
  },{
    path: '/cart',
    component: Cart
  },{
    path: '/categroy',
    component: Category
  },{
    path: '/profile',
    component: Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})