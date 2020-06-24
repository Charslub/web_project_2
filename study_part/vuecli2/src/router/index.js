// index是用于注册路由的 以及一些url的基本配置

// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 懒加载
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

// 通过Vue.use(插件)， 安装插件(这里直接执行了VueRouter的install方法)
// 其安装时install中也传入vue类型 并且进行了新的赋值
Vue.use(VueRouter)
// 创建vuerouter对象
const routes = [{
  path: '/home',
  component: Home,
  // 元数据(描述数据的数据)
  meta: {
    title: 'HOME'
  },
  children: [
    // {
    //   path: '',
    //   redirect: 'news'
    // },
    {
      path: 'news',
      component: HomeNews
    },{
      path: 'message',
      component: HomeMessage
    }
  ]
},{
  path: '/about',
  component: About,
  meta: {
    title: 'ABOUT'
  },
  beforeEnter: (to, from, next) => {
    // 路由独享前置守卫
    // 还有三个独享守卫beforeRouteEnter,beforeRouteLeave,beforeRouteUpdate
   console.log("sad"); 
   next();
  },
  beforeRouteEnter (to, from, next) {
    // ...
  },
  beforeRouteLeave (to, from, next) {
    // ...
  },
},{
  path: '',
  // 与Django相同重定向操作
  redirect:'/home'
},{
  // url中包含参数时
  path: '/user/:userid',
  component: User,
  meta: {
    title: 'USER'
  },
},{
  path: '/profile',
  meta: {
    title: 'PROFILE'
  },
  component: Profile
}]

const router = new VueRouter({
  // 配置路由和组件之间的引用关系
  routes,
  // 更改url的格式
  mode: 'history',
  // 更改处于活跃状态的类的类名
  linkActiveClass: 'active',
})

// 导航钩子的三个参数解析:
// to: 即将要进入的目标的路由对象.
// from: 当前导航即将要离开的路由对象(跳转前的路由对象).
// next: 调用该方法后,才能进入下一个钩子.
router.beforeEach((to, form, next) => {
  // 称作前置钩子(回调)路由跳转时的监听(全局守卫)
  // 必须调用 否则不会进行下一步
  // form跳转到to
  document.title = to.matched[0].meta.title;
  console.log(form);
  // next中传入false时指中断当前导航
  // 传入指定地址时会跳转到指定位置
  // 传入error对象是会在捕捉到此错误时则会中止当前导航并传递给router.onError()
  next();
})

// 后置钩子(全局守卫)路由跳转后调用
router.afterEach((to, from) => {
  console.log("asdwqe");
})

// 将router对象传入到vue实例
export default router
