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
    <!-- url一般包括：协议://localhost:端口/path?查询#片段(hash值) -->
    <!-- query用于传递参数 to中可以写作对象类型 但是必须加上v-bind进行监听 -->
    <router-link :to="{
            path: '/profile',
            query:{name: 'chars', age:'19', height: '1.72'}
    }">PROFILE</router-link>
    <!-- 若要取出参数则直接使用$router.query -->
    <!-- 取出路径则是$router.params -->
    <router-view></router-view>
    <button @click="user">USER_VERSION_2</button>
    <button @click="profile">PROFILE_VERSION_2</button>
    <!-- 这里的exclude是指排除某一个页面让其活跃时创建不活跃时销毁 -->
    <!-- include则是将其包含在keep-alive中一旦创建则不再销毁 -->
    <!-- 其中添加的是对应组件的name属性且多个组件一起添加时不可加空格 -->
    <!-- 不可加空格是由于正则匹配问题 -->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
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
    home() {
      // 通过代码来改变 vue-router, 其中的$router的属性使当前拥有的
      this.$router.push('/home')
    },
    about() {
      this.$router.push('/about')
      // 这里还有replace的方法
    },
    user() {
      this.$router.push('/user/' + this.userid)
    },
    profile() {
      this.$router.push({
        path: '/profile',
        query:{
          name: 'chars',
          age:'19', 
          height: '1.72'
        }
      })
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
