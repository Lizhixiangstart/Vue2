//引入Vue
import Vue from 'vue'
//引入App
import App from './App'
//关闭Vue生产提示
Vue.config.productionTip = false

/* const Demo = Vue.extend('demo',{})
const d = new Demo()
Vue.prototype.x=d; */


//创建vm
new Vue({
    el:'#app',
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;//安装全局事件总线
        // this.__proto__.x=this;
        
    },
    mounted() {
        console.log(this===Vue.prototype.$bus)//true
    },
    beforeDestroy(){
        this.__proto__.$off('hello');
    }
})