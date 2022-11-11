//引入Vue
import Vue from 'vue'
//引入App
import App from './App'
//引入插件
import vueResource from 'vue-resource'//引入vueResource可以使用vc.$http发送ajax请求
//引入store
import store from './store/index'
//关闭Vue生产提示
Vue.config.productionTip = false

Vue.use(vueResource)



//创建vm
new Vue({
    el:'#app',
    render:h=>h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this;
    },
    mounted(){
        console.log(this)
    }
})