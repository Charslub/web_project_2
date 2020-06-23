// 这里则是将各个被分离开的组件的编写
<template>
    <div>
        <h2>User</h2>
        <!-- 这里的$router是对应新生成的路由对象 且为当前对应活跃的router -->
        <h2>{{userid}}</h2>
    </div>
</template>

<script>
export default {
    name: "User",
    computed: {
        userid(){
            return this.$route.params.userid
        }
    },
}
</script>

<style scoped>

</style>