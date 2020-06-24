// 这里则是将各个被分离开的组件的编写
<template>
    <div>
        <h2>User</h2>
        <!-- 这里的$router是对应新生成的路由对象 且为当前对应活跃的router -->
        <h2>{{userid}}</h2>
        <button @click="btn">typing</button>
    </div>
</template>

<script>
export default {
    name: "User",
    computed: {
        userid(){
            // 其中的route是指当前活跃的url对象
            // 而前面的router则是指定义的vuerouter对象
            return this.$route.params.userid
        }
    },
    methods: {
        btn() {
            // 所有的组件都继承了vue的原型
            console.log(this.$route);
            console.log(this.$router);
            // 这里虽然是调用的vue中添加的新的属性 但是全局都可以调用
            this.test();
        }
    },
}
</script>

<style scoped>

</style>