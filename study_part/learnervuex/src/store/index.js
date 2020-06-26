import Vue from 'vue'
import Vuex from 'vuex'
import { set } from 'vue/types/umd';

// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
    // 官方推荐使用components->actions->mutations->state的顺序来使用
    // 或者components->mutations->state的顺序来使用
    // mutations与devtools存在交互
    // devtools可以记录状态的改变(可知改变对象)
    state: {
        // 存储的状态
        // 这些属性都会被加入响应式系统中 且监听其每一刻的变化
        // 当数值发生改变时会通知到界面中所有使用到该属性的方法 让界面刷新
        counter: 1000,
        students: [
            {id: '001', name: 'chars', height: 1.72},
            {id: '002', name: 'pual', height: 1.62},
            {id: '003', name: 'jane', height: 1.70},
            {id: '004', name: 'luber', height: 1.72},
        ],
        info: {
            name: 'sukoya',
            girlfriend: 'tome',
            couple: 'tmsk'
        }
    },
    mutations: {
        // mutations不适用异步操作
        // 跟踪每一次的状态改变
        // 为了防止在使用时名称输入错误
        ['INCREAMT'](state) {
            // 可定义方法 方法自动附带state参数即
            state.counter++;
        },
        decreamt(state) {
            state.counter--;
        },
        increamtCount(state, count) {
            state.counter += count
        },
        // 普通提交方式
        addStudent_0(state, stu) {
            state.students.push(stu);
        },
        // 在前面提交matution时使用了特殊方式提交时
        // payload是一个对象
        addStudent(state, payload) {
            state.students.push(payload.stu);
        },
        updateInfo(state) {
            state.info.couple = 'sktm'
            // 若是后面又加入了新的属性
            // 其不属于响应式 其为之后添加的属性不属于监听范围
            // state.info['address'] = japan
            // 让其也加入监听范围
            Vue.set(state.info, 'address', 'japan')
            // 删除已有对象中的属性
            Vue.delete(state.info, 'name')
        },
    },
    actions: {
        // 处理异步操作
        // context(store对象)上下文
        aUpdate(context) {
            setTimeout(() => {
                context.commit('addStudent')
            }, 1000)
        }
    },
    getters: {
        // 类似于计算属性computed 但可以在多个界面中使用
        powerCounter(state) {
            return state.counter * state.counter
        },
        filter(state) {
            return state.students.filter(s =>  s.height > 1.70)
        },
        length(state, getters) {
            return getters.filter.length
        },
        search(state) {
            return function (id) {
                return state.students.filter(result => result.id === id)
            }
        }
    },
    modules: {

    }
})

// 导出对象
export default store