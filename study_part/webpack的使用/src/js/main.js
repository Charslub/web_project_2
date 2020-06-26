// 依赖css文件
// 依赖css文件
require('../css/style.css')
// 依赖less文件
require('../css/special.less')
document.writeln('<h2>hello!</h2>')
// 使用Vue进行开发
import Vue from 'vue'
import app from '../vue/app.vue'

new Vue({
    el: '#app',
    template: '<app></app>',
    components:{
        app
    }
})
// 这里会有报错是因为runtime-only不能使用任何的template
// 而runtime-compiler这个则可以使用template 其有compiler可以编译template
document.writeln('<button>typing</button>')