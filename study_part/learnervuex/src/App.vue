<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <!-- 一般不使用此种方式进行对状态的改变 -->
    <button @click="addtion">+</button>
    <button @click="subscrabtion">-</button>
    <h2>-------------App内容： info对象的内容是否为响应式-------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="update">update</button>
    <h2>-------------App内容： getters相关信息-------------</h2>
    <!-- getters属性的调用方式 -->
    <h2>{{$store.getters.filter}}</h2>
    <h2>{{$store.getters.length}}</h2>
    <h2>{{$store.state.students}}</h2>
    <h2>{{$store.getters.search('001')}}</h2>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">push</button>
    <hello-vuex :counter="$store.state.counter"></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREAMT} from './store/mutations-type'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: 'chars',
      counter: 0
    }
  },
  methods: {
    addtion() {
      this.$store.commit('increamt')
    },
    subscrabtion() {
      this.$store.commit('decreamt')
    },
    addCount(count) {
      // 在调用mutation时也可以传递参数 直接加在调用的mutation名称后面
      this.$store.commit('increamtCount', count)
    },
    addStudent() {
      const stu = {id: '005', name: 'sukoya', height: 1.63};
      // 普通提交封装方式 只能使用一种
      this.$store.commit('addStudent', stu)
      // 特殊的提交封装方式
      this.$store.commit({
        type: 'addStudent',
        // 若是以此类方式提交 则之后接收到的是一个对象而不是确切的值
        stu
      })
    },
    update() {
      this.$store.commit('updateInfo')
    }
  },
  computed: {
    
  },
}
</script>

<style>

</style>
