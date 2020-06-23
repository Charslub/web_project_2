// 这里是对实际页面进行渲染
<template>
  <div id="app">
    <!-- 其中的to属性用于url跳转, tag属性用于控制对应标签的类型 -->
    <!-- 其中默认的是pushState，若要更改则直接加上replace -->
    <router-link to="/home" tag="button">HOME</router-link>
    <router-view></router-view>
    <router-link to="/about" tag="button">ABOUT</router-link>
    <router-link :to="'/user/'+userid">USER</router-link>
    <button @click="home">HOME_VERSION_2</button>
    <router-view></router-view>
    <button @click="about">ABOUT_VERSION_2</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid: 'charslub'
    }
  },
  methods: {
    home(){
      // 通过代码来改变 vue-router, 其中的$router的属性使当前拥有的
      this.$router.push('/home')
    },
    about(){
      this.$router.push('/about')
      // 这里还有replace的方法
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active{
  color: rebeccapurple;
}
</style>
