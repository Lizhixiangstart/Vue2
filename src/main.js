//引入Vue
import Vue from 'vue'
//引入App
import App from './App'

//完整引入
//引入Element-ui
// import ElementUI from 'element-ui'
//引入ElementUI组件库
// import 'element-ui/lib/theme-chalk/index.css';


//按需引入
import {Button,Row,DatePicker} from 'element-ui'
Vue.component(Button.name,Button)
Vue.component(Row.name,Row)
Vue.component(DatePicker.name,DatePicker)
//关闭Vue生产提示
Vue.config.productionTip = false

//应用ElementUI全部样式
// Vue.use(ElementUI)

//创建vm
new Vue({
    el:'#app',
    render:h=>h(App),
})