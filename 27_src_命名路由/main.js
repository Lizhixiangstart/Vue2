//引入Vue
import Vue from 'vue'
//引入App
import App from './App'
//引入VueRouter
import VurRouter from 'vue-router'
//引入路由器
import router from './router/index'
//关闭Vue生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VurRouter)


//创建vm
new Vue({
    el:'#app',
    render:h=>h(App),
    router:router
})