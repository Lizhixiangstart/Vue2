<template>
    <div class="todo-header">
        <input type="text"  placeholder="请输入你的任务名称，按回车键确认" v-model="title"  @keyup.enter="add"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    data() {
        return {
            title:''
        }
    },
    methods:{
        add(e){
            if(!this.title.trim()){
                //当用户输入为空的时候不允许添加，弹出警告框
                alert('数据不能为空');
                return
            }else{
            //用户输入不为空
                //将用户的输入包装成一个todo对象
                const todoObj = {id:nanoid(),title:this.title,done:false};
                //console.log(todoObj);
                this.$emit('addTodo',todoObj);
                this.title = '';
            }
            
        }
    },

}
</script>
    
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
</style>