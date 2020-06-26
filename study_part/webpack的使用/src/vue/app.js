export default {
    template:`
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">typing</button>
        <h2>{{name}}</h2>
    </div>`,
    data() {
        return {
            message: 'hello!',
            name: 'yes'
        }
    },
    methods:{
        btnClick(){
            console.log("asda");
        }
    }
}