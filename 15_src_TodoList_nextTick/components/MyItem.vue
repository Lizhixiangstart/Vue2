<template>
        <li>
            <label>
            <input type="checkbox" :checked="todoObj.done" :id="todoObj.id" @click="handleCheck(todoObj.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-model="todoObj.done"/> -->
            <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
            <input @blur="handleBlur($event)" 
            ref="inputTitle"
            v-show="todoObj.isEdit" 
            type="text" 
            :value="todoObj.title">
          </label>
          
          <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
          <button class="btn btn-edit" 
          @click="handleEdit(todoObj)"
          v-show="!todoObj.isEdit"
          >编辑</button>
        </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem', 
    props:['todoObj'],
    methods:{
        //勾选or取消勾选
        handleCheck(id){
            this.$bus.$emit('checkTodo',id);
        },
        //删除 
        handleDelete(id){
            if(confirm('确定删除吗?')){
              //确认删除
             pubsub.publish('deleteTodo',id);
            }else{
              return
            }
        },
        //编辑
        handleEdit(todoObj){
          if(todoObj.hasOwnProperty('isEdit')){
            todoObj.isEdit=true;
          }else{
             this.$set(todoObj,'isEdit',true);
          }
          this.$nextTick(()=>{
              this.$refs.inputTitle.focus();
          })
        },
        //失去焦点回调
        handleBlur(e){
          this.todoObj.isEdit=false;
          if(!e.target.value.trim()){
              return alert('输入不能为空');
          } 
          this.$bus.$emit('updateTodo',this.todoObj.id,e.target.value);
        }
    },
    
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: gray;
}
li:hover button{
  display: block;
}
</style>