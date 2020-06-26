<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">typing</button>
        <h2>{{name}}</h2>
        <cpn></cpn>
    </div>
</template>
<script>
import cpn from './Cpn'

export default {
    name: "app",
    components:{
        cpn
    },
    data() {
        return {
            message: 'no!',
            name: 'yes'
        }
    },
    methods:{
        btnClick(){
            console.log("asda");
        }
    }
}
</script>
// 写入样式
<style scoped>
    .title{
        color: blueviolet;
    }
</style>