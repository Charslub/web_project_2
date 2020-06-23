// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// index是用于注册路由的 以及一些url的基本配置

// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

// 通过Vue.use(插件)， 安装插件
Vue.use(VueRouter)

// 创建vuerouter对象
const routes = [{
  path: '/home',
  component: Home
},{
  path: '/about',
  component: About
},{
  path: '',
  // 与Django相同重定向操作
  redirect:'/home'
},{
  // url中包含参数时
  path: '/user/:userid',
  component: User
}]

const router = new VueRouter({
  // 配置路由和组件之间的引用关系
  routes,
  // 更改url的格式
  mode: 'history',
  // 更改处于活跃状态的类的类名
  linkActiveClass: 'active',
})

// 将router对象传入到vue实例
export default router
