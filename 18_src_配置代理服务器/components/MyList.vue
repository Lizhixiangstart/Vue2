<template>
  <ul class="todo-main">
        <transition-group name="todos">
              <MyItem v-for="todoObj in todos" 
              :key="todoObj.id" 
              :todoObj="todoObj" 
              />
        </transition-group>
      </ul>
    
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{
        MyItem
    },
    props:['todos']
    
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todos-enter,.todos-leave-to{
  transform: translateX(-100%);
}
.todos-enter-to,.todos-leave{
  transform: translateX(0px);
}
.todos-enter-active,.todos-leave-active{
  transition: 1s linear;
}
</style>