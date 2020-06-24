<template>
    <div>
        <h2>Home</h2>
        <router-link to="/home/news">NEWS</router-link>
        <router-link to="/home/message">MESSAGES</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            path: '/home/news'
        }
    },
    // 生命周期函数

    // 创建组件时回调
    created() {
        console.log("created");
    },

    // 挂载在dom后回调
    // mounted() {
    //     console.log("mounted");
    // },

    // 数据发送更新时回调
    // updated() {
    //     console.log("updated");
    // },

    // 页面活跃时执行此函数 在使用keep-alive时才可以使用
    activated() {
        this.$router.push(this.path)
    },

    // 页面处于不活跃状态 在使用keep-alive时才可以使用
    deactivated() {
        // this.path = this.$route.path
        console.log("deactivated");
    },

    beforeRouteLeave (to, from, next) {
        this.path = this.$route.path;
        next();
    },

    // 组件销毁时调用
    destroyed() {
        console.log("destroyed");
    },
}
</script>

<style scoped>

</style>