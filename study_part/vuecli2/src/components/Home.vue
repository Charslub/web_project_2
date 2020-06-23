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
    name: "Home"
}
</script>

<style scoped>

</style>