<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
      <!-- 文档中读取src的路径需要添加‘~’否则读取时会出现无法读取的情况 -->
        <img slot="item-icon" src="~assets/img/tabbar/home.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_change.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/categroy">
        <img slot="item-icon" src="~assets/img/tabbar/app.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/app_change.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/cart.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_change.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/person2.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/person_change.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
// import时则可以直接使用不用再添加‘~’
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'

export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>

</style>