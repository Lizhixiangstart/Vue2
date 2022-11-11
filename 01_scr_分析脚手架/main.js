/* 
  该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue'
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
//创建Vue实例对象--vm
new Vue({
  el:'#app',
  //下面这行代码一会儿解释，完成了这个动作；将Vue组件放入到容器中
  render: h => h(App),
})

