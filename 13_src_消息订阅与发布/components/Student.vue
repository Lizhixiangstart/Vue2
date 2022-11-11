<template>
  <div class="student">
    <h2 >学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'Student',
    data(){
        return{
           name:'理塘丁真',
           sex:'男'
        }
    },
    methods:{
      sendStudentName(){
        pubsub.publish('hello',666);
      },
    },
    beforeDestroy(){
      
    }
}
</script>

<style lang="less">
 .student{
  background-color: orange;
  padding: 5px;
  margin-top: 20px;
  .atguigu{
    font-size: 40px;
  }
 }
</style>